import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Checkout = () => {
        const [nombre, setNombre] = useState();
        const [email, setEmail] = useState();
        const [telefono, setTelefono] = useState();
        const [orderId, setOrderId] = useState();

        const {cart, clear, cartTotalProductos, sumatotalProductos} = useContext(CartContext);


        if(orderId){""} else {  if(cartTotalProductos() == 0 ){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p className="display-1 my-6">😱</p>
                            <h1 className="alert alert-danger" role="alert">No se encontraron productos en el carrito!</h1>
                            <Link to={"/"} className="btn btn-primary my-5">Volver a la Página Principal</Link>
                        </div>
                    </div>
                </div>
            );
        }}

        const generarOrden = () => {
            if (nombre.lenght === 0 ) {
                return false;
            }
            if (email.lenght === 0 ) {
                return false;
            }
            if (telefono.lenght === 0 ) {
                return false;
            }

            const buyer = {name:nombre, email:email, phone:telefono};
            const items = cart.map(item =>({ id:item.id, title:item.descripcion, prince:item.precio}));
            const fecha = new Date();
            const date =  `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
            const total = sumatotalProductos();
            const order = {buyer:buyer, items:items, date:date, total:total};
            

            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then(resultado => {
                clear();
                setOrderId(resultado.id);
            });
        }

        return (
            <div className="container-flow text-center fondo py-4">
                <h1 className="fw-SemiBold text-light py-2" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>Checkout</h1>
                {orderId ? "" : <div className="row d-flex justify-content-center mx-3 bg-light rounded p-4 my-4">
                    <div className="col-md-6 ">
                        <form className="mx-5 text-start">
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" onInput={(e)=>{setNombre(e.target.value)}} />   
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" onInput={(e)=>{setEmail(e.target.value)}} />   
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control" onInput={(e)=>{setTelefono(e.target.value)}} />   
                            </div>
                            <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        
                        <table className="table table-light rounded">
                            <tbody>                               
                                {cart.map(producto => 
                                    <tr key={producto.id}>
                                        <td className="text-start align-middle"><img src={producto.imagen} alt={producto.descripcion} width={80}/> </td>
                                        <td className="text-start align-middle">{producto.descripcion}</td>
                                        <td className="text-start align-middle">${producto.precio}</td>
                                        <td className="text-start align-middle">{producto.quantity}</td>
                                        <td className="text-start align-middle">${producto.quantity * producto.precio}</td>
                                    </tr>
                                    )}
                                <tr>
                                    <td colSpan={4} className="text-center align-middle" >Suma Total:</td>
                                    <td className="text-start align-middle">${sumatotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                }
                <div className="row my-5">
                    <div className="col">
                        {orderId ? 
                        <div className="alert alert-warning text-center py-5" role="alert">
                            <p className="display-1">👕</p>
                            <h1>¡Gracias por tu compra!</h1>
                            <p>Tu ID de compra es: <b>{orderId}</b> ✅</p>
                        </div>
                        : ""}
                    </div>
                </div>
            </div>
        );
    
    }

export default Checkout;