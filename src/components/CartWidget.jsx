import { useContext } from 'react';
import iconShoppingCart from '../assets/icons/shopping_cart_48.png';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cartTotalProductos} = useContext(CartContext);
    
    return (
    
        cartTotalProductos() > 0 ?
            <div className="container-fluid d-flex text-light bg-dark px-5 mx-0 justify-content-between align-items-center" style={{fontFamily: 'all-round-gothic, sans-serif', fontWeight: 400, height:30}}>
                <div id="bread_crumbs" className="fs-6">Inicio</div>
                <div id="shopping-cart-icon">
                <Link to={"/cart"} className="btn text-bg-dark position-relative" style={{height:30}}>
                    <img src={iconShoppingCart} alt="Icono Carrito de Compras" style={{height:20, width:20, marginBottom:10}} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotalProductos()}</span>
                </Link>
                </div>
            </div> : "" 
    
    );
}
export default CartWidget;