import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <h1 className='Name'>
                Sebastian Arnavat
            </h1>
            <ul className='InternalLinks'>
                <li>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Work</Link>
                </li>
                <li>
                    <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>About</Link>
                </li>
                <li>
                    <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;


