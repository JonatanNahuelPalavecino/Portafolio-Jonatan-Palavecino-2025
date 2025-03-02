const verifyToken = async (setUser) => {
  const url = import.meta.env.VITE_SERVER;

  try {
    const response = await fetch(`${url}/auth/protected`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json();

    if (data.estado === "success") {
      setUser(data);
    } else {
      setUser({ auth: false });
    }
  } catch (error) {
    console.error("Error verificando el token:", error);
    setUser({ auth: false });
  }
};

export default verifyToken;
