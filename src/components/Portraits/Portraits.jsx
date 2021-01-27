import React from 'react';
import './Portraits.css';
import Navbar from '../Navbar/Navbar';
import PhotosNav from '../PhotosNav/PhotosNav';
import DSC2824 from '../../assests/DSC2824.jpg';
import DSC3861 from '../../assests/DSC3861.jpg';
import DSC5820 from '../../assests/DSC5820.jpg';
const Portraits = () => {
    return (
        <div className='Portraits'>
            <Navbar />
            <PhotosNav />
            <div className='ImgDiv'>
                <img src={DSC2824} className='Images'></img>
                <img src={DSC3861} className='Images'></img>
                <img src={DSC5820} className='Images'></img>

            </div>


        </div>
    )
}

export default Portraits;
