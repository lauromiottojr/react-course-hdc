import { useState } from "react"

const ListRender = () => {

    const [list, setList] = useState(['lauro', 'zé', 'maria'])

    const [users, setUsers] = useState([
        { id: 1, name: 'lauro', age: 24 },
        { id: 2, name: 'zé', age: 50 },
        { id: 3, name: 'maria', age: 45 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        console.log(randomNumber)
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.name}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender