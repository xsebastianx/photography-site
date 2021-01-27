import React from 'react';
import './PhotosNav.css';
import { Link } from 'react-router-dom';



const PhotosNav = () => {
    return (
        <div className='PhotosNav'>

            <ul className='PhotoLinks'>
                <li>
                    <Link to='/portraits' style={{ textDecoration: 'none', color: 'black' }}>Portraits</Link>
                </li>
                <li>
                    <Link to='/fashion' style={{ textDecoration: 'none', color: 'black' }}>Fashion</Link>
                </li>
                <li>
                    <Link to='/flowers' style={{ textDecoration: 'none', color: 'black' }}>Flowers</Link>
                </li>
            </ul>
        </div>
    )
}

export default PhotosNav;
