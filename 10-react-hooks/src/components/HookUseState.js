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

    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(age)
    }

    return (
        <div onSubmit={handleSubmit}>
            <h2>useState</h2>
            <p>Variável: {username}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            <hr />
            <form>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <button>Enviar</button>
            </form>
            <p>Você tem {age} anos!</p>
        </div>
    )
}

export default HookUseState