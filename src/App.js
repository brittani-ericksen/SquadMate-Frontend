import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import localData from './localData.js';
import Layout from './components/Layout/Layout';
import 'fontsource-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
    const [user, setUser] = useState(localData);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div className='App'>
            <Router>
                <Layout
                    user={user}
                    setUser={setUser}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                />
            </Router>
        </div>
    );
}

export default App;
