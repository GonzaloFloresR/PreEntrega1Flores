import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Error404 from './components/Error404.jsx';
import Cart from './components/Cart.jsx';
import CartContextProvider from './components/context/CartContext.jsx';
import Checkout from './components/Checkout.jsx';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/genero/:id"} element={<ItemListContainer />} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"/cart"} element={<Cart />} />
          <Route exact path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
