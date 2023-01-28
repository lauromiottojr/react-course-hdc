import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs'

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav id='nav'>
            <Link to='/'>Reactgram</Link>
            <form>
                <BsSearch />
                <input type="text" />
                <ul id='navLinks'>
                    <NavLink to='/'>
                        <BsHouseDoorFill />
                    </NavLink>
                    <NavLink to='/login'>
                        Entrar
                    </NavLink>
                    <NavLink to='/register'>
                        Cadastrar
                    </NavLink>
                </ul>
            </form>
        </nav>
    )
}

export default Navbar