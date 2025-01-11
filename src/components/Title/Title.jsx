import PropTypes from "prop-types";
import "./title.scss"

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <em className="title">{title}</em>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
