import PropTypes from "prop-types";
import "./Social.scss"
import icons from "../../helpers/icons/icons";

const Social = ({style}) => {
  return (
    <div className={`social ${style === "right" ? "social-right social-hidde" : "social-bottom"}`}>
      <a className="social-icon" href="https://github.com/JonatanNahuelPalavecino" target="_blank" rel="noopener noreferrer">
        {icons.github}
      </a>
      <a className="social-icon" href="https://www.linkedin.com/in/jonatanpalavecinodev/" target="_blank" rel="noopener noreferrer">
        {icons.linkedin}
      </a>
      <a className="social-icon" href="https://wa.me/5491158836236?text=Hola,%20Jona,%20¿Como%20estas?" target="_blank" rel="noopener noreferrer">
        {icons.whatsapp}
      </a>
    </div>
  );
};

export default Social;

Social.propTypes = {
  style: PropTypes.string.isRequired,
};