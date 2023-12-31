import "./Login.css"
//import Container from "../../../components/Container/Container";
import Barra from "../../../components/Barra/Barra"
import { Link } from "react-router-dom";
import React, {useState} from "react";
// Define el componente IconLink fuera de la función Home

const Galletafeli = () => {
  return(
    <img src="/galletafeli.png" alt="Icono" className="galletaCarga"/>
    )
}

function Login() {
  const[mostrarErrorUser, setMostrarErrorUserUser] = useState(false);
  const[mostrarErrorPass, setMostrarErrorPass] = useState(false);
  const[mostrarCarga, setMostrarCarga] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true)
  const[nombreUser, setNombreUser] = useState("");
  const[pass, setPass]  =useState("")

  const ContinuarClick = () =>{
    if(nombreUser.trim() === ""){
      setMostrarErrorUserUser(true)
      setTimeout(() => {
        setMostrarErrorUserUser(false);
      },3000);
    }
    if(pass.trim() === ""){
      setMostrarErrorPass(true)
      setTimeout(() => {
        setMostrarErrorPass(false);
      }, 3000);
    }
    else if (nombreUser.trim() !== "" && pass.trim() !== ""){
      setMostrarCarga(true)
      setMostrarBoton(false)
    }
};

  return (
    <div>
      <Barra/>
      <div className="estiloTitulo">
        <h1>Left[L]overs</h1>
      </div>
      <div className="tabla">
        <div>
          <div className="celda">
            <input type="text" 
            placeholder="Nombre de usuario"
            value = {nombreUser}
            onChange={(e) => setNombreUser(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="celda">
            <input type="password"
            placeholder="Contraseña" 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="textico">
        ¿Aún no tienes una cuenta?
        <Link to ={"/"} className="noRegistro">Registrate</Link>
      </div>
      {mostrarBoton &&(
      <button className="botonContinuar" onClick={ContinuarClick}>
        <p className = "textoBoton">Continuar</p>
      </button>
      )}
      {mostrarErrorUser && (
        <p className="errorNoUser">
          Ingresa un nombre de usuario
        </p>
      )}
      {mostrarErrorPass &&(
        <p className="errorNoUser">
          Ingresa una contraseña
        </p>
      )}
      {mostrarCarga &&(
        <Galletafeli className = "galletaCarga"/>
      )
      
      }
    </div>
)};

export default Login;