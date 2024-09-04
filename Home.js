import React from 'react';
import Feed from '../components/Feed';  // Import the Feed component
import './Home.css';  // Import the CSS file for styling

const Home = () => {
    // Example posts data
    const posts = [
        { title: 'Post 1', content: 'This is the content of post 1' },
        { title: 'Post 2', content: 'This is the content of post 2' },
    ];

    return (
        <div className="home">
            <h1>Welcome to the Job Portal</h1>
            <Feed posts={posts} />  {/* Display the feed of posts */}
        </div>
    );
};

export default Home;
