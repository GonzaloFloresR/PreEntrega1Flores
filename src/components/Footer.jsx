import LogoIWasIn from '../assets/IwasIn.png';

const Footer = () => {
    return (
        <footer className="container-fluid fs-5 py-4" style={{fontFamily: 'all-round-gothic, sans-serif', fontWeight: 400, borderTop: "30px solid black", height:122 }}>
            <div className="row d-flex justify-content-center">
                <img src={LogoIWasIn} alt="Logo I Was In" style={{width:'150px'}} ></img>
                <p className="text-center py-2">Marca Registra USA - Chile 2019 - 2027</p>
            </div>
        </footer>
    )
}

export default Footer;