import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formstate, setFormstate] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = (target)

        setFormstate({
            ...formstate,
            name: [value]
        })
    }

    return {
        formstate,
        ...formstate,
        onInputChange,
        setFormstate
    }
}