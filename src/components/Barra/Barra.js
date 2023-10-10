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
                Inicio
            </Link>

            <Link to={"/About"} className={`${styles.estiloElemento} ${selectedLink === "/About" ? styles.estiloSeleccion: ""}`}>
                    Acerca de
            </Link>

            <Link to={"/Stores"} className={`${styles.estiloElemento} ${selectedLink === "/Stores" ? styles.estiloSeleccion: ""}`}>
                    Tiendas
            </Link>

            <Link to={"/Discover"} className={`${styles.estiloElemento} ${selectedLink === "/Discover" ? styles.estiloSeleccion: ""}`}>
                    Conócenos
            </Link>

            <Link to={"/Help"} className={`${styles.estiloElemento} ${selectedLink === "/Help" ? styles.estiloSeleccion: ""}`}>
                    Ayuda
            </Link>

            <Link to={"/Login"}>
                <button className={`${styles.estiloLogIn} ${selectedLink === "/Login" ? styles.estiloLogInSeleccion: ""}`}>
                        Ingrese aquí
                </button>
            </Link>
        </div>
      </div>
    </div>
    );
   
}

export default Barra;