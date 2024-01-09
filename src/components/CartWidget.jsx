import iconShoppingCart from '../assets/icons/shopping_cart_48.png';
const CartWidget = () => {
    return (
        <div className="container-fluid d-flex text-light bg-dark px-5 mx-0 justify-content-between align-items-center" style={{fontFamily: 'all-round-gothic, sans-serif', fontWeight: 400, height:30}}>
            <div id="bread_crumbs" className="fs-6">Inicio</div>
            <div id="shopping-cart-icon">
            <button type="button" className="btn text-bg-dark position-relative" style={{height:30}}>
                <img src={iconShoppingCart} alt="Icono Carrito de Compras" style={{height:18, width:18, marginBottom:13}} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
            </div>
        </div>
    )
}
export default CartWidget;