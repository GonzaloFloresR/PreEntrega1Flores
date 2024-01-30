import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Error404 from './components/Error404.jsx';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<ItemListContainer />} />
        <Route exact path={"/genero/:id"} element={<ItemListContainer />} />
        <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
