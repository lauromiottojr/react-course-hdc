import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useAuth } from '../../hooks/useAuth'

import { reset, logout } from '../../slices/authSlice'

import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const { auth } = useAuth()
    const { user } = useSelector((state) => state.auth)

    const [query, setQuery] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/login")
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (query) {
            return navigate(`/search?query=${query}`)
        }
    }

    return (
        <nav id='nav'>
            <Link to='/'><h2>ReactGram</h2></Link>
            <form id='searchForm' onSubmit={handleSearch}>
                <BsSearch />
                <input type="text" placeholder='Pesquisar'
                    onChange={(e) => setQuery(e.target.value)} value={query} />
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
                                <NavLink to={`/users/${user._id}`} >
                                    <BsFillCameraFill />
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to='/profile'>
                                <BsFillPersonFill />
                            </NavLink>
                        </li>
                        <li>
                            <span onClick={handleLogout}>Sair</span>
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