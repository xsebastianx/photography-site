import React from 'react';
import './Flowers.css';
import Navbar from '../Navbar/Navbar';
import PhotosNav from '../PhotosNav/PhotosNav';
import DSC3300 from '../../assests/DSC3300.jpg';
import DSC7461 from '../../assests/DSC7461.jpg';
import DSC2368 from '../../assests/DSC2368.jpg';
import DSC3343 from '../../assests/DSC3343.jpg';
import DSC3378 from '../../assests/DSC3378.jpg';

const Flowers = () => {
    return (
        <div className='Flowers'>
            <Navbar />
            <PhotosNav />
            <div className='FlowersDiv'>
                <img src={DSC7461} alt='flower photo' className='FlowersImages'></img>
                <img src={DSC3300} alt='flower photo' className='FlowersImages'></img>
                <img src={DSC2368} alt='flower photo' className='FlowersImages'></img>
                <img src={DSC3343} alt='flower photo' className='FlowersImages'></img>
                <img src={DSC3378} alt='flower photo' className='FlowersImages'></img>

            </div>



        </div>
    )
}

export default Flowers;
