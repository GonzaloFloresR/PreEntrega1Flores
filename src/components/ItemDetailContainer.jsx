import { useEffect, useState } from "react";
import ListaProductos from '../json/productos.json';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    

    useEffect(() => {
        const promesa = new Promise( resolve =>{
            setTimeout(() => {
                let producto = ListaProductos.find(item => item.id === parseInt(id));
                resolve(producto);
            }, 2000);
        })
        promesa.then(data => {
            setItem(data);
        })
    }, [])

    return (
        <main className="container-fluid" style={{fontFamily: 'all-round-gothic, sans-serif', fontWeight: 400}}>
            <div className="row">
                <div className="col text-center fondo py-5">
                    <ItemDetail item={ item }/>
                </div>
            </div>
        </main>
    )
}

export default ItemDetailContainer;