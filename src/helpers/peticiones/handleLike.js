

const handleLike = async (url, like, userId, projectId, setIsLoading) => {
    const  endpoint = like ? "desuscribir-like" : "suscribir-like"
    const method = like ? "DELETE" : "POST"

    try {
        const response = await fetch(`${url}/like/${endpoint}`, {
            method,
            headers: { "content-Type": "application/json"},
            body: JSON.stringify({id_proyecto: projectId, id_usuario: userId})
        })

        const data = await response.json()

        return data
    } catch (error) {
        return error

    } finally {
        setTimeout(() => setIsLoading(false), 1000)
    }
}
555
export default handleLike
