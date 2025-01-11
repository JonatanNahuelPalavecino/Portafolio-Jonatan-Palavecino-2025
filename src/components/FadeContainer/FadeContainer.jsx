import { motion } from "motion/react"
import PropTypes from 'prop-types';

const FadeContainer = ({children, initial, whileInView}) => {

  return (
    <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        style={{width: "100%", height: "min-height"}}
    >
      {children}
    </motion.div>
  )
}

export default FadeContainer

FadeContainer.propTypes = {
  children: PropTypes.element,
  initial: PropTypes.object,
  whileInView: PropTypes.object
};