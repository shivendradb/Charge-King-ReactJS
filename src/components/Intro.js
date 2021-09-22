import React from 'react';
import "./Intro.css";
import { Link } from "react-scroll"

function Intro() {
    const windowHeight = "100vh";
    return (
        <div className="intro section">
            <img id="intro" src="./mercedes.jpg" alt="" />

            <div className="intro__heading">
                <h1>Redefining the Electric Vehicle Charging Experience</h1>
            </div>

            <div class="arrow bounce">
                <Link activeClass="active" to="#about" spy={true} smooth={true}>
                    <img src="./down-arrow.svg" alt="" className="intro__downArrow" />
                </Link>
            </div>
        </div>
    )
}
export default Intro
