import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand bg-primary">
        <div className="navbar-brand">
            TVMaze
        </div>

        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink 
                    className="nav-link" 
                    to="/" 
                    exact
                >
                    Main
                </NavLink>
            </li>
            <li className="navbar-item">
                <NavLink 
                    className="nav-link" 
                    to="/episode" 
                >
                    Episode
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;