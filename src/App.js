import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';


function App() {
  
  const categorias = ["Componentes de PC", "Periféricos", "Almacenamiento", "Notebooks"]

  return (
    <>
      <NavBar
        categories={categorias}
      />
      <ItemListContainer greeting={"Bienvenidos a la app!"}/>
    </>
  );
}

export default App;