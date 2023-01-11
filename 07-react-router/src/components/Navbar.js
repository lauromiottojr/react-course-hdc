import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            {/*<NavLink to="/" className={(isActive)=> (isActive ? 'active' : "nonActive")}>Home</NavLink>*/}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar