import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  
 return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;