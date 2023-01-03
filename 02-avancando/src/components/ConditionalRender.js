import { useState } from "react"

const ConditionalRender = () => {

    const [x, setX] = useState(true)

    const [name, setName] = useState('joao')

    return (
        <div>
            { }
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>x é falso</p>}
            {
                name === 'joao' ? (<div>O nome é João!</div>) : (<div>O nome não é João!</div>)
            }
        </div>
    )
}

export default ConditionalRender