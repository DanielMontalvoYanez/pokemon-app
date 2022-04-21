import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink style={{ color: "blue", textDecoration: "none" }} to={'/'}>Home</NavLink>
            </div>
        </nav>
    )
}

export default Navbar