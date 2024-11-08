import { useCounter } from "../hooks/useCounter"

export const ContadorComponents = () => {
    const {contador, incrementar, decrementar, resetear} = useCounter(0)

    return (
        <>
            <h2>Mostrar el valor del contador: {contador}</h2>
            <button className="btn btn-primary" onClick={() => incrementar()}>+ 1</button>
            <button className="btn btn-primary" onClick={() => decrementar(1, true)}>- 1</button>
            <button className="btn btn-danger" onClick={resetear}>Reset</button>
        </>
    )
}