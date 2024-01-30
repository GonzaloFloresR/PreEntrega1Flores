import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-lg-3 text-center">
            <div className="card border-0 p-3 my-3 efectoSobre">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img src={item.imagen} className="card-img-top" alt={item.alt}  title={item.alt} />
                    <div className="card-body">
                        <p className="card-text py-2 bg-body-secondary rounded-3 text-truncate">{item.diseno}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;