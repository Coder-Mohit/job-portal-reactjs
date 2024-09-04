import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import CSS for styling the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/network">Network</Link></li>
                <li><Link to="/messages">Messages</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
