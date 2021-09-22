import React from 'react'
import "./Footer.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className="footer">

            <div className="footer__center">
                <span></span>
                <h1><span>© {new Date().getFullYear()},</span> Charge King</h1>
            </div>

            <div className="footer__rightSide">
                <a>
                    <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/charge.king/">
                    <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/Charge-King-267110158459998">
                    <FacebookIcon />
                </a>
            </div>
        </div>
    )
}

export default Footer
