import { Box, Fade, Modal } from "@mui/material";
import { toast } from "sonner";
import PropTypes from "prop-types"
import "./WindowConfirm.scss"

const WindowConfirm = ({open, setOpen, user, url, navigate, setLoading, title, message, btn, fn}) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
    <Fade in={open}>
      <Box
      className="window"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 24,
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <p className="profile-title">{title}</p>
        <p className="profile-desc">{message}</p>
        <button
          className="profile-btn"
          onClick={() =>
            fn(user.userId, url, navigate, toast, setLoading)
          }
        >
          <span className="profile-btn-desc" onClick={() => setOpen(false)}>{btn}</span>
        </button>
      </Box>
    </Fade>
  </Modal>
  )
}

export default WindowConfirm

WindowConfirm.propTypes = {
    fn: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired, 
    setOpen: PropTypes.func.isRequired, 
    user: PropTypes.object.isRequired, 
    url: PropTypes.string.isRequired, 
    navigate: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired, 
    message: PropTypes.string.isRequired, 
    btn: PropTypes.string.isRequired
}