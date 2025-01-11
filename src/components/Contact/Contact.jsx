import { Element } from 'react-scroll'
import FadeContainer from '../FadeContainer/FadeContainer'
import Title from '../Title/Title'
import  Form  from "../Form/Form"
import "./Contact.scss"

const Contact = () => {
  return (
    <Element name="contacto">
        <section className='contacto'>
          <FadeContainer
            initial={{opacity: 0, x: -50}} 
            whileInView={{opacity: 1, x: 0}}
          >
            <Title title="contacto"/>
          </FadeContainer>
          <Form/>
        </section>
    </Element>
  )
}

export default Contact
