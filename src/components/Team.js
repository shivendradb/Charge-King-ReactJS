import React from 'react'
import "./Team.css"
import AvatarComp from './AvatarComp';

function Team() {
    return (
        <div className="team section" id="team">
            <h1>Team</h1>
            <div className="team__avatars">
                <AvatarComp source="ShivendraSingh" name="Shivendra Singh" designation="Co-Founder and CEO" />
                <AvatarComp source="Shaurya" name="Shaurya Thakur" designation="Co-Founder and COO" />
                <AvatarComp source="" name="Devansh Bansal" designation="Co-Founder and CCO" />
                <AvatarComp source="" name="Adnan Mohd" designation="Co-Founder" />
                <AvatarComp source="" name="Shubhi Gupta" designation="Co-Founder" />
                <AvatarComp source="" name="Saumya Rathaur" designation="Co-Founder" />
            </div>

        </div>
    )
}

export default Team
