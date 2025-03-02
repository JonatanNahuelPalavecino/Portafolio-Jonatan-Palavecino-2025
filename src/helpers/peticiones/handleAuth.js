

const handleAuth = async (form, type, setLoading) => {
  setLoading(true)
  const url = import.meta.env.VITE_SERVER
  const endpoint = type === "sign-in" ? "sign-in" : "sign-up"

  const formData = new FormData();

  if (type === "sign-up") {
    formData.append("user_name", form.userName);
    formData.append("nombre", form.nombre);
    formData.append("apellido", form.apellido);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("ubicacion", "users");
    formData.append("imagen", form.imagen);
  }

  const options = {
    method: "POST",
    headers: type === "sign-in" ? { "Content-Type": "application/json" } : {},
    credentials: "include",
    body: type === "sign-in" ? JSON.stringify({ ...form }) : formData,
  };

  try {
    
    const response = await fetch(`${url}/auth/${endpoint}`, options)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
    return error
  } finally {
    setLoading(false)
  }


}

export default handleAuth
