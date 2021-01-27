import React from 'react'
import './Work.css';
import Navbar from '../../components/Navbar/Navbar';
import PhotosNav from '../../components/PhotosNav/PhotosNav';
import DSC3300 from '../../assests/DSC3300.jpg';


const Work = () => {
    return (
        <div className='Work'>
            <Navbar />
            <PhotosNav />
            <img src={DSC3300} className='MainImage'></img>

        </div>
    )
}

export default Work;