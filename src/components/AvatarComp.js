import React from 'react'
import "./AvatarComp.css"
import Avatar from '@mui/material/Avatar';

function AvatarComp({ source, name, designation }) {
    return (
        <div className="avatarComp">
            <Avatar src={source + ".jpg"} className="MuiAvatar" alt={name} sx={{ width: 140, height: 140 }} />

            <h3>{name}</h3>
            <h4>{designation}</h4>
        </div>
    )
}

export default AvatarComp
