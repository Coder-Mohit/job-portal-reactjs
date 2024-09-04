import React from 'react';
import Message from '../components/Message';  // Import Message component
import './Messages.css';  // Import the CSS file for styling

const Messages = () => {
    // Example messages data
    const messages = [
        { user: 'Alice', text: 'Hi there!' },
        { user: 'Bob', text: 'Hello!' },
    ];

    return (
        <div className="messages">
            <h1>Messages</h1>
            {messages.map((msg, index) => (
                <Message key={index} {...msg} />  {/* Display messages */}
            ))}
        </div>
    );
};

export default Messages;
