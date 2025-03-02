
const handleForm = async (form, setIsLoading, url) => {

    setIsLoading(true)

    try {
        const response = await fetch(`${url}/contacto/cargar-contacto`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        })

        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
        return error
    } finally {
        setIsLoading(false)
    }

}

export default handleForm
