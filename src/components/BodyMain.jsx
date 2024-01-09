import ItemListContainer from "./ItemListContainer";

const BodyMain = () => {
    return (
        <main className="container-fluid my-2 py-3 bg-success text-white">
            <div className="row">
                <div className="col text-center">
                    <ItemListContainer gretting="Proximamente la mejor APP del planeta " />
                </div>
            </div>
            
        </main>
    )
}

export default BodyMain;
