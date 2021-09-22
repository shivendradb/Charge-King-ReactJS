import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll'

function Header() {
    return (
        <div className="header">
            {/* Left Side */}
            <div className="header__leftSide">
                <Link activeClass="active" to="intro" spy={true} smooth={true}><img className="header__logo" src="./logo.png" alt="" /></Link>

            </div>

            {/* Right Side */}
            <div className="header__rightSide">
                <h1><Link activeClass="active" to="intro" spy={true} smooth={true}>Home</Link></h1>
                <h1><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></h1>
                <h1><Link activeClass="active" to="team" spy={true} smooth={true}>Our Team</Link></h1>
                <h1><Link activeClass="active" to="contactUs" spy={true} smooth={true}>Contact Us</Link></h1>
            </div>
        </div>
    )
}

export default Header
