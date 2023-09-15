import "./Home.css"
//import { useState } from 'react';
//import Container from "../../../components/Container/Container";
import Barra from "../../../components/Barra/Barra"
import { Link } from "react-router-dom";

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
      </div>
      <div>
        <Link to = {"/Stores"}>
          <button className="estiloBoton">
            ¡Come ahora!
          </button>
        </Link>

      </div>
    </div>    
  )
};

export default Home;
