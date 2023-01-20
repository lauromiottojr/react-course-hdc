import { useEffect, useState } from 'react'

const HookUseEffect = () => {

    const [number, setNumber] = useState(1)

    // quando o array de dependencias não existe, qualquer redenrização o useEffect é executado
    // quando existe porem está vazio, é executado apena 1x
    // quando possui alguma variável no array, será executado sempre quando essa variável for alterada

    useEffect(() => {
        console.log("Estou sendo executado");
    }, [])

    const changeSomthing = () => {
        setNumber(number + 1)
    }

    // cleanup useEffect    
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Hi")
        }, 2000)
        return () => clearTimeout(timer)
    }, [number])

    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={changeSomthing}>Somar</button>
            <hr />
        </div>
    )
}

export default HookUseEffect