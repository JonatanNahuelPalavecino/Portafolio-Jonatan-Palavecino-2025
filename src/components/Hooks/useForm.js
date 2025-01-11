import { useReducer } from "react";
import formReducer from "../../helpers/reducer/formReducer";
// import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [state, dispatch] = useReducer(formReducer ,initialForm);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "update",
      payload: {key: name, value: value},
    });
  };

  const onResetForm = () => {
    dispatch({
        type: "reset",
        payload: initialForm
    })
  }

  return {
    state,
    onInputChange,
    onResetForm
  };
};

export default useForm;
