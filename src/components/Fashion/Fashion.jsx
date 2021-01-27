import React from 'react';
import './Fashion.css';
import Navbar from '../Navbar/Navbar';
import PhotosNav from '../PhotosNav/PhotosNav';
import DSC5750 from '../../assests/DSC5750.jpg';
import DSC6818 from '../../assests/DSC6818.jpg';
import DSC2710 from '../../assests/DSC2710.jpg';


const Fashion = () => {
    return (
        <div className='Fashion'>
            <Navbar />
            <PhotosNav />
            <div className='FashionDiv'>
                <img src={DSC5750} className='FashionImages'></img>
                <img src={DSC6818} className='FashionImages'></img>
                <img src={DSC2710} className='FashionImages'></img>
            </div>

        </div>
    )
}

export default Fashion
