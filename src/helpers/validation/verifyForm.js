const validadorForm = {
    nombre: 3,
    apellido: 3,
    telefono: 10,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}


const verifyForm = (form) => {
    
    const error = {}

    const format = {
        nombre: form.nombre.trim(),
        apellido: form.apellido.trim(),
        telefono: form.telefono,
        email: form.email.trim(),
        mensaje: form.mensaje.trim()
    }

    if (format.nombre.length < validadorForm.nombre) {
        
        error["nombre"] = "El nombre debe tener al menos 3 caracteres"
    }

    if (format.apellido.length < validadorForm.apellido) {
        error["apellido"] = "El apellido debe tener al menos 3 caracteres"
    }

    if (format.telefono.length < validadorForm.telefono) {
        error["telefono"] = "El telefono debe tener al menos 10 digitos"
    }

    if (!validadorForm.email.test(format.email)) {
        error["email"] = "Ingresa un e-mail valido"
    }        

    if (Object.keys(error).length !== 0) {
        return {
            state: "error",
            error: error
        }
    }

    return {
        state: "success",
        values: format
    }
}

export default verifyForm
