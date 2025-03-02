

const handleVisit = async (url, location, user) => {

    try {
        const result = await fetch(`${url}/datos/registrar-visita`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                ruta: location,
                user_agent: navigator.userAgent,
                referer: document.referrer,
                id_usuario: user?.userId || null
            })
        })
        const data = await result.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

export default handleVisit
