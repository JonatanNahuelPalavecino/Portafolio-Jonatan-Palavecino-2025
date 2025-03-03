import handleObtenerIp from "./handleObtenerIp"

const handleVisit = async (url, location, user) => {

    
    try {
        const ip = await handleObtenerIp()
        const result = await fetch(`${url}/api/datos/registrar-visita`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                ruta: location,
                user_agent: navigator.userAgent,
                referer: document.referrer,
                id_usuario: user?.userId || null,
                ip: ip
            })
        })
        const data = await result.json()
        localStorage.setItem("visita", data)
    } catch (error) {
        console.log(error)
    }

}

export default handleVisit
