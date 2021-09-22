import React, { useState } from 'react'
import "./ContactUs.css"
import Input from '@mui/material/Input';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="contactUs section" id="contactUs">
            <div className="contactUs__formDiv">
                <h1>Contact Us</h1>
                <h2>Have any Queries? We are here to Help!</h2>
                <h3>Just write to us</h3>

                <form className="contactUs__form">
                    <h5>Full Name</h5>
                    <Input type="text" className="contactUs__formInput" placeholder="Enter Full Name" value={name} onChange={e => setName(e.target.value)} required={true} />

                    <h5>Email</h5>
                    <Input type='email' className="contactUs__formInput" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter E-Mail ID' required={true} />

                    <h5>Contact Number</h5>
                    <Input type='tel' className="contactUs__formInput" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='Enter Phone Number' required={true} />

                    <h5>Your Message</h5>
                    <Input className="contactUs__formInput Message" value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your Message here...' required={true} />

                    <br />

                    <button type='submit' className='contactUs__button'>Submit</button>
                </form>
            </div>
            <div className="contactUs__image">
                <img src="./audi-bg.png" alt="" />
            </div>
        </div>
    )
}

export default ContactUs
