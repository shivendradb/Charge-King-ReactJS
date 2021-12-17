import React, { useRef } from 'react'
import "./Footer.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Input from '@mui/material/Input';
import emailjs from 'emailjs-com';


function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_74wmil8', 'template_x6j73ro', e.target, 'user_bnqQfJJG0Hm78ohRxMEKW')
            .then((result) => {
                console.log(result.text);
                alert("Thank you for subscribing!")
            }, (error) => {
                console.log(error.text);
                alert("Error!")

            });

        e.target.reset();
    };

    return (
        <div className="footer section">
            <div className="footer__top">
                <h1>Follow us to get the latest updates!</h1>
                <form action="submit" ref={form} onSubmit={sendEmail}>
                    <div className="footer__subscribe">
                        <input type="text" name="email" className="footer__top__subscribeInput" placeholder="Enter Email Address" />
                        <button className="footer__top__subscribeButton" type='submit'>Subscribe</button>
                    </div>
                </form>
            </div>

            <div className="footer__rightSide">
                <a href="https://www.linkedin.com/company/charge-kingg/" target="_blank">
                    <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://www.instagram.com/charge.king/" target="_blank">
                    <InstagramIcon fontSize="large" />
                </a>
                <a href="https://www.facebook.com/Charge-King-267110158459998" target="_blank">
                    <FacebookIcon fontSize="large" />
                </a>
            </div>
            <div className="footer__center">
                <h1><span>© {new Date().getFullYear()},</span> Charge King</h1>
            </div>

        </div>
    )
}

export default Footer
