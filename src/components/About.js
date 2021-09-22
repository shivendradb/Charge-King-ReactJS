import React from 'react'
import "./About.css"

function About() {
    return (
        <div className="about section" id="about">
            <div className="about__heading">
                <h1>About our company</h1>
            </div>

            <div className="about__subHeading">
                <h2>About Charge King</h2>
                <p>Tired of waiting in a long queue for a quick charge. We'll come to your home and set up a charging station for your EV car.
                </p>
                <p> We make your home EV car ready. Dedicated EV charging pads, plugs, wiring & adapters.</p>
                <p>Charge like a king at home.</p>
                <br />
                <p>Charge King is the only electric vehicle (EV) charging station in India that is customized to suit your needs.
                </p>
                <p>
                    Our solution includes installing an EV charger at your home/office, setting up a back-end management system, and real-time monitoring of all charging activities.
                </p>
                <p>We also offer billing & invoicing services for EV owners in addition to customized packages that can be tailored to suit individual requirements.
                </p>
                <p>We are passionate about providing you with high speed, reliable, and affordable EV charging solutions to power your vehicles.</p>
            </div>

            <div className="about__mission">
                <h4>Our Mission</h4>
                <p>To accelerate the adoption of electric vehicles by providing the finest charging experience to its consumers.</p>
            </div>

            <div className="about__mission">
                <h4>Our Vision</h4>
                <p>To make electric car charging more accessible to the consumers.</p>
            </div>
        </div >
    )
}

export default About
