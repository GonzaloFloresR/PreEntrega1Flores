const Loading = () => {
    return  (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="spinner-grow text-dark text-center" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;