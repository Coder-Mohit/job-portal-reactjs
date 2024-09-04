import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the main App component
import './index.css';     // Import global styles

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')  // This is where the app will be rendered
);
