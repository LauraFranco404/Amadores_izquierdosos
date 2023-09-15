import {useEffect, useState} from "react";
import styles from './Barra.module.css';
import {Link, useLocation} from "react-router-dom";

const IconLink = () => {
    return (
      <Link to="/">
          <img src="/favicon.ico" alt="Icono" className="estiloLogo"/> {/* Cambia la ruta según la ubicación de tu favicon.ico */}
      </Link>
    );
  }

function Barra({page, getData}){
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(page); // Inicializa con la página actual
    useEffect(() => {
        setSelectedLink(location.pathname);
    }, [location.pathname])
   return(
    //nav
    <div>
      <div className={styles.estiloPage}>
        <div className={styles.barraB}>
          <IconLink /> {/* Usa el componente IconLink aquí */}
            <Link to={"/"} className= {`${styles.estiloElemento} ${selectedLink === "/" ? styles.estiloSeleccion: ""}`}>
                <h1>
                    Inicio
                </h1>
            </Link>

            <Link to={"/About"} className={`${styles.estiloElemento} ${selectedLink === "/About" ? styles.estiloSeleccion: ""}`}>
                <h1>
                    Acerca de
                </h1>
            </Link>

            <Link to={"/Stores"} className={`${styles.estiloElemento} ${selectedLink === "/Stores" ? styles.estiloSeleccion: ""}`}>
                <h1>
                    Tiendas
                </h1>
            </Link>

            <Link to={"/Discover"} className={`${styles.estiloElemento} ${selectedLink === "/Discover" ? styles.estiloSeleccion: ""}`}>
                <h1>
                    Conócenos
                </h1>
            </Link>

            <Link to={"/Help"} className={`${styles.estiloElemento} ${selectedLink === "/Help" ? styles.estiloSeleccion: ""}`}>
                <h1>
                    Ayuda
                </h1>
            </Link>

            <Link to={"/Login"}>
                <button className={`${styles.estiloLogIn} ${selectedLink === "/Login" ? styles.estiloLogInSeleccion: ""}`}>
                    <h1>
                        Ingrese aquí
                    </h1>
                </button>
            </Link>
        </div>
      </div>
    </div>
    );
   
}

export default Barra;