import { useState } from "react";
import verifyForm from "../../helpers/validation/verifyForm";
import useForm from "../Hooks/useForm";
import "./Form.scss"

const Form = () => {

    const [error, setError] = useState()
  const initialValue = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  };

  const { state, onInputChange, onResetForm } = useForm(initialValue);

  const { nombre, apellido, telefono, email, mensaje } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificar = verifyForm(state);

    if (verificar.state === "error") {
        setError(verificar.error)
        return
    }

    console.log(verificar.values)
    setError()
    onResetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-box">
        <label className="form-label">Nombre</label>
        <input
          className="form-input"
          value={nombre}
          type="text"
          name="nombre"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.nombre : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label">Apellido</label>
        <input
          className="form-input"
          value={apellido}
          type="text"
          name="apellido"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.apellido : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label">Teléfono</label>
        <input
          className="form-input"
          value={telefono}
          type="number"
          name="telefono"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.telefono : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label">E-mail</label>
        <input
          className="form-input"
          value={email}
          type="text"
          name="email"
          onChange={onInputChange}
        />
        <p className="form-error">{error ? error.email : ""}</p>
      </div>
      <div className="form-box">
        <label className="form-label">Ingrese su mensaje</label>
        <textarea
          className="form-area"
          value={mensaje}
          type="text"
          name="mensaje"
          onChange={onInputChange}
        />
      </div>
      <button className="form-button" type="submit">Enviar</button>
    </form>
  );
};

export default Form;
