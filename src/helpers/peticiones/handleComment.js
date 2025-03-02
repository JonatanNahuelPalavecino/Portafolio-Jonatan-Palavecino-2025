
const handleComment = async (url, state, setIsLoading, user, projectName) => {
    setIsLoading(true)

    const {id_proyecto, id_usuario, comentario} = state

    try {
        const response = await fetch(`${url}/comentarios/cargar-comentario`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({comentario: comentario, id_proyecto: id_proyecto, id_usuario: id_usuario, nombre_proyecto: projectName, user})
        })

        const data = await response.json()

        return data
    } catch (error) {
        return error
    } finally {
        setIsLoading(false)
    }

}

export default handleComment
