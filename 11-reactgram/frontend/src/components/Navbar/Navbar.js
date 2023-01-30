import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useAuth } from '../../hooks/useAuth'


import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const { auth } = useAuth()
    const { user } = useSelector((state) => state.auth)

    return (
        <nav id='nav'>
            <Link to='/'><h2>ReactGram</h2></Link>
            <form id='searchForm'>
                <BsSearch />
                <input type="text" placeholder='Pesquisar...' />
            </form>
            <ul id='navLinks'>
                {auth ? (
                    <>
                        <li>
                            <NavLink to='/'>
                                <BsHouseDoorFill />
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to={`/users/${user.id}`} />
                                <BsFillCameraFill />
                            </li>
                        )}
                        <li>
                            <NavLink to='/profile'>
                                <BsFillPersonFill />
                            </NavLink>
                        </li>
                        <li>
                            <span>Sair</span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to='/login'>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/register'>
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar