<<<<<<< Updated upstream
import './App.css'
import NavBar from './components/NavBar';
=======
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

>>>>>>> Stashed changes

function App() {
  
  const categorias = ["Componentes de PC", "Periféricos", "Almacenamiento", "Notebooks"]

  return (
    <>
<<<<<<< Updated upstream
      <NavBar/>
      <div className="App">
        <p>Bienvenidos a la clase 3</p>
        <hr/>
        <input placeholder='Ingrese algún contenido'/>
      </div>
=======
      <NavBar
        categories={categorias}
      />
      <ItemListContainer greeting={"Bienvenidos a la app!"}/>
>>>>>>> Stashed changes
    </>
  );
}

export default App;