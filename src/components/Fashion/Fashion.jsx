import React from 'react';
import './Fashion.css';
import Navbar from '../Navbar/Navbar';
import PhotosNav from '../PhotosNav/PhotosNav';
import DSC5750 from '../../assests/DSC5750.jpg';
import DSC6818 from '../../assests/DSC6818.jpg';
import DSC2710 from '../../assests/DSC2710.jpg';
import DSC4579 from '../../assests/DSC4579.jpg';
import DSC2831 from '../../assests/DSC2831.jpg';
import DSC4049 from '../../assests/DSC4049.jpg';


const Fashion = () => {
    return (
        <div className='Fashion'>
            <Navbar />
            <PhotosNav />
            <div className='FashionDiv'>
                <img src={DSC5750} alt='fashion' className='FashionImages'></img>
                <img src={DSC6818} alt='fashion' className='FashionImages'></img>
                <img src={DSC2710} alt='fashion' className='FashionImages'></img>
                <img src={DSC4579} alt='fashion' className='FashionImages'></img>
                <img src={DSC2831} alt='fashion' className='FashionImages'></img>
                <img src={DSC4049} alt='fashion' className='FashionImages'></img>
            </div>

        </div>
    )
}

export default Fashion
