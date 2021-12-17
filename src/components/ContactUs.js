import React, { useRef, useState } from 'react'
import "./ContactUs.css"
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import emailjs from 'emailjs-com';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_74wmil8', 'template_2l5xq4e', e.target, 'user_bnqQfJJG0Hm78ohRxMEKW')
            .then((result) => {
                console.log(result.text);
                alert("Message sent!")
                e.target.reset();

            }, (error) => {
                console.log(error.text);
                alert(`Error! ${error.text}`)
            });


    };

    return (
        <div className="contactUs section" id="contactUs">
            <div className="contactUs__formDiv">
                <h1>Contact Us</h1>
                <h2>Have any Queries? We are here to Help!</h2>
                <h3>Just write to us</h3>

                <form className="contactUs__form" ref={form} onSubmit={sendEmail}>
                    <h5>Full Name</h5>
                    <Input type="text"
                        name="name"
                        className="contactUs__formInput"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required={true} />

                    <h5>Email</h5>
                    <Input type='email'
                        name="email"
                        className="contactUs__formInput"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Enter E-Mail ID'
                        required={true} />

                    <h5>Contact Number</h5>
                    <Input type='tel'
                        name="phoneNumber"
                        className="contactUs__formInput"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} placeholder='Enter Phone Number'
                        required={true} />

                    <h5>Your Message</h5>
                    <TextField
                        className="contactUs__formInput Message"
                        name="message"
                        value={message}
                        variant="outlined"
                        onChange={e => setMessage(e.target.value)}
                        placeholder='Enter your Message here...'
                        required={true}
                        rows={3}
                        multiline
                    />

                    <br />

                    <button type='submit' className='contactUs__button'>
                        Submit
                    </button>
                </form>
            </div>
            <div className="contactUs__image">
                <img src="./audi-bg.png" alt="" />
            </div>


        </div>
    )
}

export default ContactUs
