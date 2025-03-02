import PropTypes from "prop-types";
import "./Card.scss";
import { Link } from "react-router-dom";
import icons from "../../helpers/icons/icons";

const Card = ({ image, altText, description, id, comentarios, like }) => {
  return (
    <div className="card">
      <img src={image} alt={altText} className="card-image" />
      <div className="card-overlay">
        <p className="card-description">{description}</p>
        <Link to={`/project/${id}`} className="card-button">Ver mas</Link>
        <div className="card-comment">
          <div className="card-comment-box">
            {icons.like({type: "card"})}
            <p>{like.length}</p>
          </div>
          <div className="card-comment-box">
            {icons.comment}
            <p>{comentarios.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  comentarios: PropTypes.array.isRequired,
  like: PropTypes.array.isRequired,
};

