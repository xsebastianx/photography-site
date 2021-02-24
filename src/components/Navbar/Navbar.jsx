import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
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
                <li>
                    <a href='https://www.instagram.com/sebastiansaturated/?hl=en' target='_blank' rel='noreferrer'> <FontAwesomeIcon icon={faInstagram} className='InstaLogo' /></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;


