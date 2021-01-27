import React from 'react';
import './Portraits.css';
import Navbar from '../Navbar/Navbar';
import PhotosNav from '../PhotosNav/PhotosNav';
import DSC2824 from '../../assests/DSC2824.jpg';
import DSC3861 from '../../assests/DSC3861.jpg';
import DSC5820 from '../../assests/DSC5820.jpg';
import DSC2793 from '../../assests/DSC2793.jpg';
import DSC2787 from '../../assests/DSC2787.jpg';
import DSC6264 from '../../assests/DSC6264.jpg';
import DSC2718 from '../../assests/DSC2718.jpg';
const Portraits = () => {
    return (
        <div className='Portraits'>
            <Navbar />
            <PhotosNav />
            <div className='PortraitsDiv'>
                <img src={DSC2824} className='PortraitImages'></img>
                <img src={DSC3861} className='PortraitImages'></img>
                <img src={DSC5820} className='PortraitImages'></img>
                <img src={DSC2793} className='PortraitImages'></img>
                <img src={DSC2787} className='PortraitImages'></img>
                <img src={DSC6264} className='PortraitImages'></img>
                <img src={DSC2718} className='PortraitImages'></img>

            </div>


        </div>
    )
}

export default Portraits;
