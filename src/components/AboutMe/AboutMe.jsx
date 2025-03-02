import { Element } from "react-scroll"
import "./AboutMe.scss"
import Items from "../Items/Items"
import Title from "../Title/Title"
import FadeContainer from "../FadeContainer/FadeContainer"
import dayjs from "dayjs"

const AboutMe = () => {
  
  const edad = dayjs().diff(dayjs("06/07/1992").format("DD/MM/YYYY"), "year")
  
  return (
    <Element name="sobre-mi">
      <section className="aboutme">
        <FadeContainer 
          initial={{opacity: 0, x: -50}} 
          whileInView={{opacity: 1, x: 0}}
        >
          <Title title="Sobre Mi"/>
        </FadeContainer>
        <p className="aboutme-text">Mi nombre es Jonatan Palavecino, tengo {edad} años, y vivo en el Barrio de Mataderos de la Ciudad Autónoma de Buenos Aires. </p>
        <p className="aboutme-text">Desde principios del 2021 comencé a incursionar en el mundo de la programación con JAVA a través de videos de Youtube, hasta que en Octubre de este mismo año me inscribí en la carrea de Desarrollador Frontend en Coderhouse.</p>
        <p className="aboutme-text">Actualmente estoy cursando el 3° cuatrimestre de la Tecnicatura Superior en desarrollo de Software en el instituto de Formación Superior N° 4 del Gobierno de la Ciudad.<br/> Desde entonces aprendí:</p>
        <div className="aboutme-items">
          <Items/>
        </div>
      </section>
    </Element>
  )
}

export default AboutMe
