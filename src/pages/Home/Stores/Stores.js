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
        <div>
          <div className="celdaT">
           <div className="tiendasD">
            <h1>
              KFC
              <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
            </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaT">
            <div className="tiendasD">
              <h1>
                El rinconcito de doña Edilma
                <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaT">
            <div className="tiendasD">
              <h1>
                Qbano
                <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaT">
            <div className="tiendasD">
              <h1>
                La señora que vende papas en Universidades
                <Link to ={"/"} className= "comidaD">Ver menú disponible</Link>
              </h1>
            </div>
          </div>
        </div>          
    </div>
  </div>
  )
};

export default Stores;