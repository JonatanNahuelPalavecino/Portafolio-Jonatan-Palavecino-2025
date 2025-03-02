import { useState } from "react";
import verifyForm from "../../helpers/validation/verifyForm";
import useForm from "../Hooks/useForm";
import "./Form.scss";
import handleForm from "../../helpers/peticiones/handleForm";
import { toast } from "sonner";
import { CircularProgress } from "@mui/material";

const Form = () => {
  const url = import.meta.env.VITE_SERVER;
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const initialValue = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  };

  const { state, onInputChange, onResetForm } = useForm(initialValue);

  const { nombre, apellido, telefono, email, mensaje } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificar = verifyForm(state, "contacto");

    if (verificar.state === "error") {
      setError(verificar.error);
      return;
    }

    setError();
    onResetForm();

    const data = await handleForm(verificar.values, setIsLoading, url);

    if (data.estado === "error") {
      toast.warning(data.mensaje);
      return;
    } else if (data.message === "Failed to fetch") {
      toast.warning("Hubo un problema con el servidor. Intente más tarde.");
      return;
    }

    toast.success(data.mensaje);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-box">
        <label className="form-label" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="form-input"
          value={nombre}
          type="text"
          name="nombre"
          id="nombre"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.nombre : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="apellido">
          Apellido
        </label>
        <input
          className="form-input"
          value={apellido}
          type="text"
          name="apellido"
          id="apellido"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.apellido : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="telefono">
          Teléfono
        </label>
        <input
          className="form-input"
          value={telefono}
          type="number"
          name="telefono"
          id="telefono"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.telefono : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="email">
          E-mail
        </label>
        <input
          className="form-input"
          value={email}
          type="text"
          name="email"
          id="email"
          onChange={onInputChange}
          autoComplete="on"
        />
        <p className="form-error">{error ? error.email : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="mensaje">
          Ingrese su mensaje
        </label>
        <textarea
          className="form-area"
          value={mensaje}
          type="text"
          name="mensaje"
          id="mensaje"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.mensaje : ""}</p>
      </div>
      <button className="form-button" type="submit" disabled={isLoading}>
        {isLoading ? (
          <CircularProgress
            size={24}
            color="inherit"
          />
        ) :
          "Enviar"
        }
      </button>
    </form>
  );
};

export default Form;
