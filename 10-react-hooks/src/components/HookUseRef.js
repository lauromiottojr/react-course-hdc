import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {

    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    // alteração no useRef não rerenderiza o componente
    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    return (
        <div>
            <h2>useRef</h2>
            <p>O componente renderizou : {numberRef.current} vezes.</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador 1</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador 2</button>
            <hr />
        </div>
    )
}

export default HookUseRef