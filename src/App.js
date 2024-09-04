import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';  // Import the Home component
import Profile from './pages/Profile';
import JobSearch from './pages/JobSearch';
import Messages from './pages/Messages';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />  {/* Set Home.js as the default route */}
                    <Route path="/profile" component={Profile} />
                    <Route path="/jobs" component={JobSearch} />
                    <Route path="/messages" component={Messages} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
