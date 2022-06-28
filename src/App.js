import './App.css';
import Footer from './Footer';
import Mensaje from './Mensaje.js'
const Descripcion = () => {
  return <p>Esta es la app del curso fullstack</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje message='Estamos trabajando'/>
      <Mensaje message='En un curso'/>
      <Mensaje message='De react'/>
      <Footer />
      <Descripcion />
    </div>
  );
}

export default App;
