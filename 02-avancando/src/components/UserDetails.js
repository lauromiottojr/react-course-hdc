import React, { useState } from 'react'

const UserDetails = () => {

    const [users, setUsers] = useState([
        { nome: 'lauro', idade: 10, profissao: 'guarda' },
        { nome: 'ze', idade: 20, profissao: 'seguranca' },
        { nome: 'maria', idade: 30, profissao: 'porteiro' },
    ])

    return (
        <div>
            {users.map((user) => (
                <div>
                    <h3>Usuário: {user.nome}</h3>
                    <ul>
                        <li>{user.idade}</li>
                        <li>{user.profissao}</li>
                        {user.idade >= 18 && <p>Usuário pode tirar carteira de habilitação!</p>}
                    </ul>
                </div>

            ))}
        </div>
    )
}

export default UserDetails