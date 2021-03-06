import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png'

export default function Navbar() {
    return (        
        <nav className="navbar">
            <a href='/'>
               <img className='logo' src={logo} alt='tourist hotels logo' /> 
            </a>
            
            <ul className="nav-links">
                <li>
                    <a href="/" className='nav-link'>
                        home</a>
                </li>
                <li>
                    <a href="/" className='nav-link'>
                        hotels</a>
                </li>
                <li>
                    <a href="/" className='nav-link'>
                        about</a>
                </li>
            </ul>
        </nav>
        )
}
