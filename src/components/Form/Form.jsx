import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className='FormContainer'>
            <form className='Form'>
                <label>Name</label>
                <input className='FormName'></input>
                <label>Email</label>
                <input className='FormEmail'></input>
                <label>Message</label>
                <input className='FormMessage'></input>
            </form>

        </div>
    )
}

export default Form;
