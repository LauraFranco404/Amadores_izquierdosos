import "./Help.css"
import Barra from "../../../components/Barra/Barra"

// Define el componente IconLink fuera de la función Home

function Help() {
  return (
    <div>
      <Barra/>
      <div className="textoNormal">
        <h1>
          Tutorial para realizar un pedido.
        </h1>
      </div>
      <div className="tablaH">
        <div>
          <div className="celdaH">
           <div className="textoTabla">
            <h1>
              Paso 1: Tener hambre
            </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaH">
            <div className="textoTabla">
              <h1>
                Paso 2: Dar clic en el negocio de preferencia
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaH">
            <div className="textoTabla">
              <h1>
                Paso 3: Pedir
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaH">
           <div className="textoTabla">
            <h1>
              Paso 4: Pagar
            </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaH">
            <div className="textoTabla">
              <h1>
                Paso 5: Esperar el pedido 
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="celdaCafe">
            <div className="textoTablaAmarillo">
              <h1>
                Y listo, siguiendo estos pasos tu pedido estará en tus manos dentro de poco tiempo.
              </h1>
            </div>
          </div>
        </div>
    
    </div>
  </div>
  )
};

export default Help;