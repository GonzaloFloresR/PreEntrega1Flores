import { useState, useEffect } from "react";
// import ListaProductos from '../json/productos.json'; //trabajando con Firestore
import { useParams } from "react-router-dom";
import ItemList from "./Itemlist";
import Loading from "./Loading";
import {collection, getDocs, getFirestore} from 'firebase/firestore' //agregar addDoc para subir los productos 


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        getDocs(itemsCollection).then((instantanea) => {
            const data = instantanea.docs.map(doc => ({id: doc.id, ...doc.data()}));
            const productos = id ? data.filter(item => item.genero === id) : data;
            setLoading(false);
            setItems(productos);
        })
        // const promesa = new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(id ? ListaProductos.filter(item => item.genero === id) : ListaProductos);
        //     },2000);
        // })
        // promesa.then(data => {
        //     setItems(data);
        // })
        //Para subir el json a Firestore.
    },[id])

 /*    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });
        console.log("Los Productos se subieron correctamente");
    },[]) */

    return (
        <main className="container-fluid" style={{fontFamily: 'all-round-gothic, sans-serif', fontWeight: 400}}>
            <div className="row">
                <div className="col text-center fondo py-5">
                    <h1 className="fw-SemiBold text-light" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>
                        Poleras
                    </h1>
                    
                {loading ? <Loading /> : <ItemList items={items} /> } 
                </div>
            </div>
        </main>
    );
}

export default ItemListContainer;