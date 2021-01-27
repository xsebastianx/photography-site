import React from 'react';
import './Flowers.css';
import Navbar from '../Navbar/Navbar';
import PhotosNav from '../PhotosNav/PhotosNav';
import DSC3300 from '../../assests/DSC3300.jpg';
import DSC7461 from '../../assests/DSC7461.jpg';
import DSC2368 from '../../assests/DSC2368.jpg';

const Flowers = () => {
    return (
        <div className='Flowers'>
            <Navbar />
            <PhotosNav />
            <div className='FlowersDiv'>
                <img src={DSC3300} className='FlowersImages'></img>
                <img src={DSC7461} className='FlowersImages'></img>
                <img src={DSC2368} className='FlowersImages'></img>

            </div>



        </div>
    )
}

export default Flowers;
