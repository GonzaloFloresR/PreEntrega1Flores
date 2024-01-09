import LogoIWasIn from '../assets/IwasIn.png';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <>
            <nav className="container-fluid p-0" style={{fontFamily: 'all-round-gothic, sans-serif', fontWeight: 400}}>
                <div className="text-light bg-dark" style={{height:30}}></div>
                <div className="row justify-content-between px-5">
                    <div className="col-md-2 my-2 ">
                        <div><img src={LogoIWasIn} alt="Logo de I-was-In" width={166} /></div>
                    </div>
                    <div className="col-md-10 d-flex justify-content-end text-uppercase fs-6">
                        <ul className="nav my-2">
                            <li className="nav-item">
                                <a className="nav-link text-body" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Quienes Somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Contactenos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget />
        </>
    )
}

export default NavBar;