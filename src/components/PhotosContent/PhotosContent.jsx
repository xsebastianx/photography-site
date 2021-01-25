import React from 'react';
import './PhotosContent.css';
import { Link } from 'react-router-dom';

const PhotosContent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/Portraits'>Portraits</Link>
                </li>
                <li>
                    <Link to='/fashion'>Fashion</Link>
                </li>
                <li>
                    <Link to='/flowers'>Flowers</Link>
                </li>
            </ul>
        </div>
    )
}

export default PhotosContent;
