import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (        
        <nav className="navbar">

            <Link to='/'>
               <img className='logo' src={logo} alt='tourist hotels logo' /> 
            </Link>
            
            <ul className="nav-links">
                <li>
                    <Link to="/" className='nav-link'>
                        home</Link>
                </li>
                <li>
                    <Link to="/hotelList" className='nav-link'>
                        hotels</Link>
                </li>
                <li>
                    <Link to="/about" className='nav-link'>
                        about</Link>
                </li>
            </ul>
        </nav>
        )
}
