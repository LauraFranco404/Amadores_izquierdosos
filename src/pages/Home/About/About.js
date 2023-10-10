import "./About.css"
import Barra from "../../../components/Barra/Barra"


function About() {
  return (
    <div>
      <Barra/>
      <div className="estiloTextoA">
        <h2>
          Nuestra familia
        </h2>
          <p>
            Somos una organización consolidada en el año 2023.
          </p>
            Luchamos en contra del monstruo de los desperdicios y el hambre, y buscamos llegar a los hogares de todas las familias colombianas.
            Además los beneficios que obtenemos de la web nos permiten hacer a todos ustedes partícipes de nuestra fundación "comer es vivir".
      </div>
    </div>
  )
};

export default About;