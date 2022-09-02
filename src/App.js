<<<<<<< Updated upstream
<<<<<<< Updated upstream
import './App.css'
import NavBar from './components/NavBar';
=======
=======
>>>>>>> Stashed changes
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

function App() {
  
  const categorias = ["Componentes de PC", "Periféricos", "Almacenamiento", "Notebooks"]

  return (
    <>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <NavBar/>
      <div className="App">
        <p>Bienvenidos a la clase 3</p>
        <hr/>
        <input placeholder='Ingrese algún contenido'/>
      </div>
=======
=======
>>>>>>> Stashed changes
      <NavBar
        categories={categorias}
      />
      <ItemListContainer greeting={"Bienvenidos a la app!"}/>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </>
  );
}

export default App;