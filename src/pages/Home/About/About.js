import "./About.css"
import Barra from "../../../components/Barra/Barra"


function About() {
  return (
    <div>
      <Barra/>
      <div className="estiloTextoA">
        <h1>
          Nuestra familia
        </h1>
        <h4>
          Somos una organización consolidada en el año 2023.
        </h4>
        <h4>
          Luchamos en contra del monstruo de los desperdicios y el hambre, y buscamos llegar a los hogares de todas las familias colombianas.
        </h4>
        <h4>
          Además los beneficios que obtenemos de la web nos permiten hacer a todos ustedes partícipes de nuestra fundación "comer es vivir".
        </h4>
      </div>
    </div>
  )
};

export default About;