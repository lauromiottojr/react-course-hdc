import React, { useState } from 'react'

const ManageData = () => {

    const someData = 10;

    const [number, setNumber] = useState(10)

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => { someData = 15 }}>Mudar valor</button>
            <p>Valor: {number}</p>
            <button onClick={() => { setNumber(15)}}>Mudar state</button>
        </div>
    )
}

export default ManageData