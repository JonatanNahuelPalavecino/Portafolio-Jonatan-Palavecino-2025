import Title from "../Title/Title";
import FadeContainer from "../FadeContainer/FadeContainer";
import useForm from "../Hooks/useForm";
import "./Auth.scss";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import verifyForm from "../../helpers/validation/verifyForm";
import handleAuth from "../../helpers/peticiones/handleAuth";
import { toast } from "sonner";
import { Context } from "../Context/Context";
import Boton from "../Boton/Boton";
import WindowConfirm from "../windowConfirm/WindowConfirm";
import handleActivarUser from "../../helpers/peticiones/handleActivarUser";

const Auth = ({ type }) => {
  const fileInput = useRef();
  const initialState = {
    userName: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    imagen_usuario: undefined,
  };

  const { state, onInputChange, onResetForm } = useForm(initialState);

  const { userName, nombre, apellido, email, password } = state;

  const [see, setSee] = useState(false);
  const [err, setErr] = useState();
  const [open, setOpen] = useState(false);
  const url = import.meta.env.VITE_SERVER;

  const { user, setUser, setLoading } = useContext(Context);

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const verificar =
      type === "sign-in"
        ? verifyForm(state, "sign-in")
        : verifyForm(state, "sign-up");

    if (verificar.state === "error") {
      setErr(verificar.error);
      return;
    }

    setErr();
    onResetForm();

    const data = await handleAuth(verificar.values, type, setLoading);

    if (data?.activo === false) {
      handleOpen();
      setUser(data);
      console.log("El usuario no esta activo");
      return;
    }
    if (data.estado === "error") {
      toast.warning(data.mensaje);
      return;
    } else if (data.message === "Failed to fetch") {
      toast.warning("Hubo un error con el servidor. Intente más tarde.");
      return;
    }

    if (data.estado === "success") {
      setUser(data);
      toast.success(data.mensaje);
      setTimeout(() => navigate("/"), 500);
    }
  };

  useEffect(() => {
    if (user.auth) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.auth]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.title =
      type === "sign-in"
        ? "Inicia Sesión - Portfolio Jonatan Palavecino - Desarrollador Fullstack"
        : "Registrate - Portfolio Jonatan Palavecino - Desarrollador Fullstack";
  }, [type]);

  return (
    <>
      <section className="auth">
        <FadeContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Title title={type === "sign-up" ? "Registrate" : "Inicia Sesión"} />
        </FadeContainer>
        <form className="auth-form" onSubmit={handleSubmit}>
          {type === "sign-up" && (
            <>
              <div className="auth-box">
                <label className="auth-label" htmlFor="userName">
                  Nombre de Usuario
                </label>
                <input
                  className="auth-input"
                  type="text"
                  value={userName}
                  name="userName"
                  id="userName"
                  onChange={onInputChange}
                />
                <p className="auth-error">{err ? err.userName : ""}</p>
              </div>
              <div className="auth-box">
                <label className="auth-label" htmlFor="imagen_usuario">
                  Selecciona tu foto de perfil
                </label>
                <div className="auth-input file" onClick={handleButtonClick}>
                  {state.imagen_usuario
                    ? state.imagen_usuario.name
                    : "Seleccionar Imagen"}
                  <input
                    ref={fileInput}
                    type="file"
                    name="imagen_usuario"
                    id="imagen_usuario"
                    onChange={onInputChange}
                  />
                </div>
                <p className="auth-error">{err ? err.imagen : ""}</p>
              </div>
              <div className="auth-box">
                <label className="auth-label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="auth-input"
                  type="text"
                  value={nombre}
                  name="nombre"
                  id="nombre"
                  onChange={onInputChange}
                />
                <p className="auth-error">{err ? err.nombre : ""}</p>
              </div>
              <div className="auth-box">
                <label className="auth-label" htmlFor="apellido">
                  Apellido
                </label>
                <input
                  className="auth-input"
                  type="text"
                  value={apellido}
                  name="apellido"
                  id="apellido"
                  onChange={onInputChange}
                />
                <p className="auth-error">{err ? err.apellido : ""}</p>
              </div>
            </>
          )}
          <div className="auth-box">
            <label className="auth-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="auth-input"
              type="text"
              value={email}
              name="email"
              id="email"
              onChange={onInputChange}
              autoComplete="on"
            />
            <p className="auth-error">{err ? err.email : ""}</p>
          </div>
          <div className="auth-box">
            <label className="auth-label" htmlFor="password">
              Contraseña
            </label>
            <div className="auth-pass">
              <input
                className="auth-input"
                type={see ? "text" : "password"}
                value={password}
                name="password"
                id="password"
                onChange={onInputChange}
              />
              <button
                className="auth-visibility"
                onClick={() => setSee(!see)}
                type="button"
              >
                {see ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
            <p className="auth-error">{err ? err.password : ""}</p>
          </div>
          <div className="auth-btns">
            {type === "sign-in" ? (
              <>
                <button className="auth-btn" type="submit">
                  Inicia Sesión
                </button>
                <Link className="auth-btn" to="/sign-up">
                  Registrate
                </Link>
              </>
            ) : (
              <>
                <button className="auth-btn" type="submit">
                  Registrate
                </button>
                <Link className="auth-btn" to="/sign-in">
                  Inicia Sesión
                </Link>
              </>
            )}
          </div>
        </form>
      </section>
      <WindowConfirm
        fn={handleActivarUser}
        open={open}
        setOpen={setOpen}
        user={user}
        url={url}
        navigate={navigate}
        setLoading={setLoading}
        title="Tu cuenta fue desactivada"
        message="¿Estas seguro que querés reactivar tu cuenta?"
        btn="ACEPTAR"
      />
      <Boton path={"/"} />
    </>
  );
};

export default Auth;

Auth.propTypes = {
  type: PropTypes.string.isRequired,
};
