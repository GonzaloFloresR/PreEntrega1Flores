import { useState, useEffect } from "react";
import ListaProductos from '../json/productos.json';
import { useParams } from "react-router-dom";
import ItemList from "./Itemlist";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams(); 
    
    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? ListaProductos.filter(item => item.genero === id) : ListaProductos);
            },2000);
        })
        promesa.then(data => {
            setItems(data);
        })
                
    },[id])

    return (
        <main className="container-fluid" style={{fontFamily: 'all-round-gothic, sans-serif', fontWeight: 400}}>
            <div className="row">
                <div className="col text-center fondo py-5">
                    <h1 className="fw-SemiBold text-light" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>
                        Poleras
                    </h1>
                    
                <ItemList items={items} />
                </div>
            </div>
        </main>
    );
}

export default ItemListContainer;