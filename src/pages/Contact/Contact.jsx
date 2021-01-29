import React from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import Form from '../../components/Form/Form';


const Contact = () => {
    return (
        <div className='Contact'>
            <Navbar />
            <div className='ContactForm'>
                <Form />
            </div>

        </div>
    )
}

export default Contact;