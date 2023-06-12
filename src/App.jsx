import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos/Productos';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
          <Route path='/cart' element={ <Cart/>} />
          
        </Routes>
      </BrowserRouter>
      <Productos/>
      <Form />

    </>
  );
}

export default App;
