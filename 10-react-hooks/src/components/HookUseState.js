import { useState } from 'react'

const HookUseState = () => {

    let username = "Lauro"

    const [name, setName] = useState("João")

    const changeNames = () => {
        username = "Lauro Miotto"
        setName("João Augusto")
        console.log(name);
        console.log(username);
    }

    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {username}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
        </div>
    )
}

export default HookUseState