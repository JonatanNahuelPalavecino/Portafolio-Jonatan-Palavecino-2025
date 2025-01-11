import { Element } from "react-scroll"
import Title from "../Title/Title"
import FadeContainer from "../FadeContainer/FadeContainer"
import Slider from "../Slider/Slider"
import "./Projects.scss"

const Projects = () => {
  return (
    <Element name="proyectos">
        <section className="projects">
          <FadeContainer
            initial={{opacity: 0, x: 50}} 
            whileInView={{opacity: 1, x: 0}}
          >
            <Title title="Proyectos"/>
          </FadeContainer>
          <Slider/>
        </section>
    </Element>
  )
}

export default Projects
