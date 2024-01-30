import React from "react";
import BotonVolver from "./BotonVolver";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const numeroFormateado = item?.precio?.toLocaleString('es-ES', {
        style: 'decimal',
    });
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-lg-4 bg-white py-3 rounded-start">
                    <img src={item.imagen} alt={item.alt} className="img-fluid rounded-4" />
                </div>
                <div className="col-lg-4 bg-white py-3 rounded-end position-relative" >
                    <BotonVolver />
                    <div className="text-start border border-1 p-3 rounded-3" style={{height:'100%'}}>
                        <h1>{item.diseno}</h1>
                        <h5 className="bg-info-subtle p-1">{item.producto}</h5>
                        <p>{item.alt}</p>
                        <p className="fw-light" style={{ fontSize: '13px' }} >VER DISPONIBILIDAD EN TIENDA <br />ENVÍOS, CAMBIOS Y DEVOLUCIONES</p>
                        <p className="fw-semibold fs-5">CLP {numeroFormateado} </p>
                        <ItemCount stock={item.cantidad}/>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}
export default ItemDetail;