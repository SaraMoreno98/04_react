import { useState } from "react"

export const FormularioComponent = () => {
    const [formState, setFormState] = useState({
        nombre: '',
        correo: '',
        contra: ''
    })

    const {nombre, correo, contra} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        // console.log(name)
        // console.log(value)
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Escribe tu nombre"
                value={formState.nombre}
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
                    value={formState.correo}
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
                    value={formState.contra}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}