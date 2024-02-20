import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, removeItem, clear, cartTotalProductos, sumatotalProductos} = useContext(CartContext);

    if(cartTotalProductos() == 0 ){
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
    }

    return (
        <div className="container-flow text-center fondo">
            <div className="row d-flex justify-content-center">
                <div className="col-6 ">
                    <h1 className="fw-SemiBold text-light my-4" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>Productos Seleccionados</h1>
                    <table className="table table-light rounded">
                        <tbody>
                            <tr>
                                <td className="text-end align-middle" colSpan={6}>
                                    <a href="#" onClick={clear} className="btn btn-primary">Vaciar Carrito 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill m-2" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                            
                            {cart.map(producto => 
                                <tr key={producto.id}>
                                    <td className="text-start align-middle"><img src={producto.imagen} alt={producto.descripcion} width={80}/> </td>
                                    <td className="text-start align-middle">{producto.descripcion}</td>
                                    <td className="text-start align-middle">${producto.precio}</td>
                                    <td className="text-start align-middle">{producto.quantity}</td>
                                    <td className="text-start align-middle">${producto.quantity * producto.precio}</td>
                                    <td className="text-center align-middle">
                                        <a href="#" onClick={() =>{removeItem(producto.id)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                )}
                            <tr>
                                <td colSpan={4} className="text-center align-middle" >Suma Total:</td>
                                <td className="text-start align-middle">${sumatotalProductos()}</td>
                                <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-danger">CheckOut</Link> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default Cart;
