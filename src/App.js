import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
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
        <div className='App Site'>
            <StylesProvider injectFirst>
            <Router>
                <Layout className="Site-content"
                    user={user}
                    setUser={setUser}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                />

            </Router>
            </StylesProvider>
        </div>
    );
}

export default App;
