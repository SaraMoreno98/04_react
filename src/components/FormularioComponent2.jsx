import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponent2 = () => {
    /**
     * useRef
     * utilizamos useRef para hacer referencia a un input
     */
    const focusRef = useRef()

    useEffect(() => {
        // Pone el foco en el elemento
        focusRef.current.focus()
        // Hace scroll hasta el elemento
        focusRef.current.scrollIntoView({
            // Para un scroll suave
            behavior: 'smooth',
            // Alinea al inicio del elemento
            block: 'start'
        })
    }, [])

    const initialForm = {
        nombre: '',
        correo: '',
        contra: ''
    }

    const {formState, nombre, correo, contra, onInputChange} = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
                ref={focusRef}
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={onInputChange}
            />
        </div>
            <div className="form-group">
                <label htmlFor="correo">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="correo"
                    placeholder="Escribe tu correo"
                    value={correo}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="contra">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    name="contra"
                    placeholder="Contrasña"
                    value={contra}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}