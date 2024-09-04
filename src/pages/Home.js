import React from 'react';  // Import React
import Feed from '../components/Feed';  // Import the Feed component
import './Home.css';  // Import the CSS file for styling the Home page

// Define the Home component
const Home = () => {
    // Example data for posts
    const posts = [
        { title: 'Post 1', content: 'This is the content of post 1' },
        { title: 'Post 2', content: 'This is the content of post 2' },
    ];

    return (
        <div className="home">  {/* Main container for the Home page */}
            <h1>Welcome to the Job Portal</h1>  {/* Page title */}
            <Feed posts={posts} />  {/* Render the Feed component and pass the posts data as props */}
        </div>
    );
};

export default Home;  // Export the Home component as the default export
