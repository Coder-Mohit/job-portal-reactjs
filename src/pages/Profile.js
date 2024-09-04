import React from 'react';
import ProfileCard from '../components/ProfileCard';  // Import ProfileCard component
import './Profile.css';  // Import the CSS file for styling

const Profile = () => {
    return (
        <div className="profile">
            <ProfileCard
                name="John Doe"
                title="Software Engineer"
                avatar="https://via.placeholder.com/150"
            />  {/* Display the user's profile information */}
        </div>
    );
};

export default Profile;
