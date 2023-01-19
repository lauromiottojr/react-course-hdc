import { useReducer } from 'react'

const HookUseReducer = () => {

    // state == number
    // "dispatch" is a function name that will change my state or "number"
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número</button>
            <hr />
        </div>
    )
}

export default HookUseReducer