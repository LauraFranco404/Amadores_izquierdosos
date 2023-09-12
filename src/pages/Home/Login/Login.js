import "./Login.css"
import { useState } from 'react';
import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";

// Define el componente IconLink fuera de la función Login
const IconLink = () => {
  return (
    <Link to="/">
        <img src="/favicon.ico" alt="Icono" className="estiloLogo"/> {/* Cambia la ruta según la ubicación de tu favicon.ico */}
    </Link>
  );
}

function Login() {
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

  return (
    <div>
      <div className="estiloLogin">
        <div className="barraB">
          <IconLink /> {/* Usa el componente IconLink aquí */}
          <Link to={"/"} className="estiloElemento">
            <h1>
              Inicio
            </h1>
          </Link>

          <Link to={"/About"} className="estiloElemento">
            <h1>
              Acerca de
            </h1>
          </Link>

          <Link to={"/Stores"} className="estiloElemento">
            <h1>
              Tiendas
            </h1>
          </Link>

          <Link to={"/Discover"} className="estiloElemento">
            <h1>
              Conócenos
            </h1>
          </Link>

          <Link to={"/Help"} className="estiloElemento">
            <h1>
              Ayuda
            </h1>
          </Link>

          <Link to={"/Login"}>
              <button className="estiloLogInSeleccion">
              <h1>
                Ingrese aquí
              </h1>
              </button>
            </Link>

        </div>
      </div>

      <div className="estiloTitulo">
        <h1>Left[L]overs</h1>
      </div>
      {posts.map(p => (
        <Container
          key={p.id}
          name=" mi Jojito lindo"
          getData={getDataFromChild}
        />
      ))}
    </div>
  );
}

export default Login;