import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import { Link } from "react-scroll";
import "./Navbar.scss";
import { useContext, useState } from "react";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar/Sidebar";
import Social from "../Social/Social";
import icons from "../../helpers/icons/icons";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { Logout } from "@mui/icons-material";
import handleLogOut from "../../helpers/peticiones/handleLogOut";
import { toast } from "sonner";

const HideOnScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

const navegacion = [
  { name: "Inicio", path: "hero" },
  { name: "Sobre Mi", path: "sobre-mi" },
  { name: "Proyectos", path: "proyectos" },
  { name: "Contacto", path: "contacto" },
];

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const { user, setLoading } = useContext(Context);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const url = import.meta.env.VITE_SERVER

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{ backgroundColor: "rgb(255, 255, 255)", boxShadow: "none" }}
        >
          <Toolbar
            sx={{
              justifyContent: "center",
            }}
          >
            <img src={`${url}/public/logo/logo-portafolio.png`} alt="img-logo" className="nav-img" />
            <nav className="nav-container">
              {navegacion.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  smooth={true}
                  duration={500}
                  className="nav-items"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {user.auth ? (
              <>
                <a onClick={handleClick} className="nav-user">
                  <img
                    className="nav-userName"
                    src={`${import.meta.env.VITE_SERVER}/public/users/${
                      user.imagen
                    }`}
                    alt={user.user_name}
                  />
                </a>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={() => navigate("/profile")}>
                    <ListItemIcon>
                      <Avatar sx={{ width: 20, height: 20}}/>
                    </ListItemIcon>
                    Mi Perfil
                  </MenuItem>
                  <MenuItem onClick={() => handleLogOut(toast, setLoading)}>
                    <ListItemIcon>
                      <Logout fontSize="small"/>
                    </ListItemIcon>
                    Cerrar Sesión
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <a onClick={() => navigate("sign-in")} className="nav-login">
                {icons.signIn}
              </a>
            )}
            <Social style={"right"} />

            <IconButton
              className="nav-toggle"
              aria-label="Abrir Menú"
              edge="end"
              onClick={() => setActive(!active)}
              sx={[active && { display: "none" }]}
            >
              <MenuIcon />
            </IconButton>

            <Sidebar
              active={active}
              setActive={setActive}
              navegacion={navegacion}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
