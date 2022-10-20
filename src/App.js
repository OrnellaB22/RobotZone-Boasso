import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './containers/Cart';
import NotFound from './components/NotFound';
import ShopProvider from './context/ShopProvider';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;