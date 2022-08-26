import './App.css'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div className="App">
        <p>Bienvenidos a la clase 3</p>
        <hr/>
        <input placeholder='Ingrese algún contenido'/>
      </div>
    </>
  );
}

export default App;