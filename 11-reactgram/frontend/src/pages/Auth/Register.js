import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './Auth.css'

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id='register'>
      <h2>Reactgram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos de seus amigos</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Senha' />
        <input type="password" placeholder='Confirme a senha' />
        <input type="submit" value='Cadastrar' />
      </form>
      <p>Já possui conta? <Link to='/login'>Faça seu login</Link></p>
    </div>
  )
}

export default Register