import React, {useState} from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import localData from './localData.js';

function App() {
    const [user, setUser] = useState(localData);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='App'>
            <Router>
                <Layout user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>     
            </Router>
            
        </div>
    );
}

export default App;
