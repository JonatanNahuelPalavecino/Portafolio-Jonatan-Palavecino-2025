import { Element } from "react-scroll"
import "./AboutMe.scss"
import Items from "../Items/Items"

const AboutMe = () => {
  return (
    <Element name="sobre-mi">
      <section>
        <em>Sobre Mí</em>
        <div>

          <p>Mi nombre es Jonatan Palavecino, tengo 32 años, y vivo en el Barrio de Mataderos de la Ciudad Autónoma de Buenos Aires. Desde principios del 2021 comencé a incursionar en el mundo de la programación con JAVA a través de videos de Youtube, hasta que en Octubre de este mismo año me inscribí en la carrea de Desarrollador Frontend en Coderhouse. Actualmente estoy cursando el 3° cuatrimestre de la Tecnicatura Superior en desarrollo de Software en el instituto de Formación Superior N° 4 del Gobierno de la Ciudad.<br/> Desde entonces aprendí:</p>
        </div>
        <div>
          <Items/>
        </div>
      </section>
    </Element>
  )
}

export default AboutMe
