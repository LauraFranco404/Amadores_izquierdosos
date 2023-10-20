import "./Stores.css"
import { Link } from "react-router-dom";
import Barra from "../../../components/Barra/Barra"

// Define el componente IconLink fuera de la función Home

function Stores() {

  return (
    <div>
      <Barra/>
      <div className="estiloTiendasD">
        <h1>
          Tiendas disponibles
        </h1>
      </div>
      <div className="tablaTiendas">
          <div className="celdaT">
            <p className="tiendasD">
              KFC
            </p>
            <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
          </div>
        <div>
          <div className="celdaT">
            <p className="tiendasD">
                El rinconcito de doña Edilma
            </p>
            <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
          </div>
        </div>
        <div>
          <div className="celdaT">
            <p className="tiendasD">
              Qbano
            </p>
            <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
          </div>
        </div>
        <div>
          <div className="celdaT">
            <p className="tiendasD">
                La señora que vende papas en Universidades
            </p>
            <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
          </div>
        </div>          
    </div>
  </div>
  )
};

export default Stores;