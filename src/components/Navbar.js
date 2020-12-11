import React from 'react'
import {NavLink, Link} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand bg-primary">
        <Link 
            className="navbar-brand"
            to="/" 
        >
            TVMaze
        </Link>

        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink 
                    className="nav-link" 
                    to="/" 
                    exact
                >
                    Show
                </NavLink>
            </li>
            <li className="navbar-item">
                <NavLink 
                    className="nav-link" 
                    to="/episodes" 
                >
                    Episodes
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;