import { Element } from "react-scroll"
import foto from "../../assets/foto-jonatan.png"
import fondo from "../../assets/graph.png"
import "./Hero.scss"
import Bubbles from "../Bubbles/Bubbles"

const Hero = () => {
  return (
    <Element name="hero">
      <section className="hero">
        <div className="hero-container">
          <em className="hero-title">Jonatan Palavecino</em>
          <p className="hero-subtitle">Desarrollador Fullstack</p>  
        </div>
        <div className="hero-box">
          <img className="hero-fondo" src={fondo} alt="fondo"/>
          <img className="hero-img" src={foto} alt="Jonatan-Palavecino"/>
        </div>
        <Bubbles/>
      </section>
    </Element>
  )
}

export default Hero
