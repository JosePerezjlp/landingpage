import './App.css';
import Header from './components/header/header';
import Servicios from './components/servicios/servicios';
import Nosotros from './components/nosotros/nosotros';
import Contacto from './components/contacto/contacto';
function App() {
  return (
    <div className="App">
      <Header/>
      <Servicios/>
      <Nosotros/>
      <Contacto/>
    </div>
  );
}

export default App;
