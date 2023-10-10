import "./Discover.css"
import Barra from "../../../components/Barra/Barra"

// Define el componente IconLink fuera de la función Home

function Discover() {
  return (
    <div>
      <Barra/>
      <div className="texto">
        <p>
          Comunícate con nosotros.
        </p>
        <p>
          ¡Tu opinión es muy valiosa!
        </p>

      </div>
      <div className="tablaContacto">
        <div>
          <div className="celdaC">
           <div className="textoC">
            <h1>
              +60 (2) 3412370 Ext. 0509
            </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaC">
            <div className="textoC">
              <h1>
                @Left_L_overs_
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaC">
            <div className="textoC">
              <h1>
                leftLovers@gmail.com
              </h1>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
};

export default Discover;