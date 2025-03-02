
const handleActivarUser = async (id_usuario, url, navigate, toast, setLoading) => {
  
    setLoading(true)

    try {
        const response = await fetch(`${url}/auth/activar-usuario`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({id_usuario: id_usuario})
        })

        const data = await response.json()

        if (data.estado === "error") {
            toast.warning(data.mensaje)
            return
        }

        toast.success(data.mensaje)
        setTimeout(() => navigate("/sign-in", 500))
    } catch (error) {
        toast.error(error)
        return error
    } finally {
        setLoading(false)
    }
}

export default handleActivarUser
