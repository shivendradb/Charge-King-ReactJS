import React from 'react'
import "./Team.css"
import AvatarComp from './AvatarComp';

function Team() {
    return (
        <div className="team section" id="team">
            <h1>Team</h1>
            <div className="team__avatars">
                <AvatarComp source="ShivendraSingh" name="Shivendra Singh" designation="Co-Founder" />
                <AvatarComp source="ShivendraSingh" name="Shivendra Singh" designation="Co-Founder" />
                <AvatarComp source="ShivendraSingh" name="Shivendra Singh" designation="Co-Founder" />
                <AvatarComp source="ShivendraSingh" name="Shivendra Singh" designation="Co-Founder" />
                <AvatarComp source="ShivendraSingh" name="Shivendra Singh" designation="Co-Founder" />
                <AvatarComp source="ShivendraSingh" name="Shivendra Singh" designation="Co-Founder" />
            </div>

        </div>
    )
}

export default Team
