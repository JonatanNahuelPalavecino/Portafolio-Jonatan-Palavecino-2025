const validadorForm = {
    nombre: 3,
    apellido: 3,
    telefono: 10,
    mensaje: 0,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    imagen: /jpeg|jpg|png|gif/,
    userName: 3,
    password: /^(?=(.*[a-zA-Z]){4,})(?=(.*\d){4,})[a-zA-Z0-9]+$/
}


const verifyForm = (form, type) => {
    
    const error = {}

    const format = {
        nombre: form.nombre.trim(),
        apellido: form.apellido.trim(),
        telefono: form.telefono,
        email: form.email.trim(),
        mensaje: form.mensaje?.trim(),
        userName: form.userName?.trim(),
        password: form.password?.trim(),
        imagen: form.imagen_usuario
    }

    if (format.nombre.length < validadorForm.nombre && type !== "sign-in") {
        
        error["nombre"] = "El nombre debe tener al menos 3 caracteres"
    }

    if (format.userName?.length < validadorForm.userName && type === "sign-up") {
        
        error["user-name"] = "El nombre de Usuario debe tener al menos 3 caracteres"
    }

    if (format.apellido.length < validadorForm.apellido && type !== "sign-in") {
        error["apellido"] = "El apellido debe tener al menos 3 caracteres"
    }

    if (format.telefono?.length < validadorForm.telefono && type === "contacto") {
        error["telefono"] = "El telefono debe tener al menos 10 digitos"
    }

    if (format.mensaje?.length <= validadorForm.mensaje && type === "contacto") {
        error["mensaje"] = "Ingresa algún mensaje"
    }

    if (!validadorForm.email.test(format.email)) {
        error["email"] = "Ingresa un e-mail valido"
    }        

    if (!validadorForm.password.test(format.password) && type !== "contacto") {
        error["password"] = "La contraseña debe tener al menos 4 letras y 4 numeros"
    }        

    if (!validadorForm.imagen.test(format.imagen?.name) && type === "sign-up") {
        error["imagen"] = "El archivo debe ser una imagen en formato JPEG, JPG, PNG o GIF"
    }

    if (Object.keys(error).length !== 0) {
        return {
            state: "error",
            error: error
        }
    }

    if (type === "contacto") {
        return {
            state: "success",
            values: {
                nombre: format.nombre, 
                apellido: format.apellido,
                telefono: format.telefono,
                email: format.email,
                mensaje: format.mensaje
            }
        }
    }

    if (type === "sign-in") {
        return {
            state: "success",
            values: {
                email: format.email,
                password: format.password
            }
        }
    }

    if (type === "sign-up") {
        return {
            state: "success",
            values: {
                nombre: format.nombre, 
                apellido: format.apellido,
                email: format.email,
                userName: format.userName,
                password: format.password,
                imagen: format.imagen
            }
        }
    }
}

export default verifyForm
