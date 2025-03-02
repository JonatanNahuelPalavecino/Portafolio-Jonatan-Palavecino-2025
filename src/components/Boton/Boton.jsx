import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import icons from '../../helpers/icons/icons';
import "./Boton.scss"

const Boton = ({path}) => {

  return (
    <>
      <Link className='boton' to={path}> 
        {icons.arrow} 
        <p className='boton-text'>Volver</p>
    </Link>
    </>
  )
}

export default Boton

Boton.propTypes = {
    path: PropTypes.string.isRequired
}