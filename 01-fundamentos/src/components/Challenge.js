import React from 'react'

const Challenge = () => {

    const a = 2;
    const b = 4;

    return (
        <div>
            <h2>O primeiro valor é: {a}</h2>
            <h2>O segundo valor é: {b}</h2>
            <button onClick={() => {console.log(a + b)}}>Clique aqui para somar</button>
        </div>
    )
}

export default Challenge