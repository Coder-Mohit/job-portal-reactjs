import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar component
import Home from './pages/Home';           // Import Home page component
import Profile from './pages/Profile';     // Import Profile page component
import JobSearch from './pages/JobSearch'; // Import JobSearch page component
import Messages from './pages/Messages';   // Import Messages page component
import './App.css';                        // Import global CSS

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />  {/* Include Navbar at the top */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/jobs" component={JobSearch} />
                    <Route path="/messages" component={Messages} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
