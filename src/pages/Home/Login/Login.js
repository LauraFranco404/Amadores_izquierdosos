import "./Login.css"
//import { useState } from 'react';
//import Container from "../../../components/Container/Container";
import Barra from "../../../components/Barra/Barra"
import { Link } from "react-router-dom";
// Define el componente IconLink fuera de la función Home

function Login() {

  return (
    <div>
      <Barra/>
      <div className="estiloTitulo">
        <h1>Left[L]overs</h1>
      </div>
      <div className="tabla">
        <div>
          <div className="celda">
            <input type="text" placeholder="Nombre de usuario" />
          </div>
        </div>
        <div>
          <div className="celda">
            <input type="password" placeholder="Contraseña" />
          </div>
        </div>
      </div>
      <div className="textico">
        ¿Aún no tienes una cuenta?
        <Link to ={"/"} className="noRegistro">Registrate</Link>
      </div>
    </div>
)};

export default Login;