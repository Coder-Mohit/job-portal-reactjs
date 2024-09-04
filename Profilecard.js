import React from 'react';
import './ProfileCard.css';  // Import the CSS file for styling

const ProfileCard = ({ name, title, avatar }) => {
    return (
        <div className="profile-card">
            <img src={avatar} alt={`${name}'s avatar`} />
            <h2>{name}</h2>
            <p>{title}</p>
        </div>
    );
};

export default ProfileCard;
