import { useState } from 'react'

import './MyForm.css'

const MyForm = ({ user }) => {

    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form enviado")
        console.log(name, email, bio, role)

        setName("")
        setEmail("")
        setBio("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />
                </div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                </label>
                <label>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}><span>Bio</span></textarea>
                </label>
                <label>
                    <span>Função no sistema</span>
                    <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="adm">ADM</option>
                        <option value="editor">Editor</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm