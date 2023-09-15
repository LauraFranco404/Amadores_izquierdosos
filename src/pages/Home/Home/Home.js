import "./Home.css"
//import { useState } from 'react';
//import Container from "../../../components/Container/Container";
import Barra from "../../../components/Barra/Barra"
import { Link } from "react-router-dom";

const Imagen = () => {
  return (
    <img src="/imagen1.jpeg" alt="Icono" className="imagenes"/>
  );
}
// Define el componente IconLink fuera de la función Home


function Home() {
  /*
  const [posts] = useState([{
    id: 1,
    name: 'Nombre 1'
  }, {
    id: 2,
    name: 'Nombre 2'
  }, {
    id: 3,
    name: 'Nombre 3'
  }]);
  const getDataFromChild = (data) => {
    console.log(`Viendo data desde App: ${data}`);
  }
*/
  return (
    <div>
      <Barra/>
      <div className="estiloTitulo">
        <h1>Left[L]overs</h1>
        <Link to = {"/Stores"}>
          <button className="estiloBoton">
            ¡Come ahora!
          </button>
        </Link>
        <div className="contenedor-imagenes">
          <Imagen className = "imagenes"/>
          <Imagen className = "imagenes"/>
          <Imagen className = "imagenes"/>
        </div>
      </div>
    </div>
  )
};

export default Home;
