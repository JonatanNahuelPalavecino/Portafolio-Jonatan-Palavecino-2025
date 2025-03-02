import Title from "../Title/Title";
import FadeContainer from "../FadeContainer/FadeContainer";
import PropTypes from "prop-types";
import "./Comentarios.scss";
import useForm from "../Hooks/useForm";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import handleComment from "../../helpers/peticiones/handleComment";
import { CircularProgress } from "@mui/material";
import { toast } from "sonner";

export const Comentarios = ({ comentarios, id_project, setProject, projectName }) => {
  const url = import.meta.env.VITE_SERVER;
  const { user } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const initialValue = {
    id_proyecto: id_project,
    id_usuario: user.userId,
    user_name: user.user_name,
    imagen_usuario: user.imagen,
    comentario: "",
  };

  const { state, onInputChange, onResetForm } = useForm(initialValue);

  const { comentario } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    if (!user.auth) {
      toast.warning("Por favor, inicia sesión o registrate para guardar tu comentario!")
      return
    }

    if (comentario === "") {
      toast.warning("El mensaje esta vacio")
      return
    }

    const data = await handleComment(url, state, setIsLoading, user, projectName);

    if (data.estado === "error") {
      toast.warning(data.mensaje)
      return;
    }

    setProject((prev) => {
      const updatedProject = { ...prev[0] };
      const commentsArray = updatedProject.comentarios;

      commentsArray.push(state);

      return [updatedProject];
    });

    toast.success(data.mensaje)
    onResetForm();
  };

  return (
    <>
      <FadeContainer
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Title title={"Comentarios"} />
      </FadeContainer>
      {comentarios.length === 0 ? (
        <p className="comentario-description">No hay comentarios hechos.</p>
      ) : (
        comentarios.map((comentario, key) => (
          <div className="comentario" key={key}>
            <div className="comentario-box">
              <img
                className="comentario-image"
                src={`${url}/public/users/${comentario.imagen_usuario}`}
                alt={comentario.user_name}
              />
              <p className="comentario-user">{comentario.user_name}</p>
            </div>
            <p className="comentario-description">{comentario.comentario}</p>
          </div>
        ))
      )}
      <form className="comentario-form" onSubmit={handleSubmit}>
        <textarea
          className="comentario-textarea"
          value={comentario}
          name="comentario"
          placeholder="Ingrese su comentario"
          onChange={onInputChange}
        />
        <button
          className="comentario-btn"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? <CircularProgress size={24} color="inherit"  /> : "Enviar"}
        </button>
      </form>
    </>
  );
};

Comentarios.propTypes = {
  comentarios: PropTypes.array.isRequired,
  id_project: PropTypes.number.isRequired,
  setProject: PropTypes.func.isRequired,
  projectName: PropTypes.string.isRequired
};
