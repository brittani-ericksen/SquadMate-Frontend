import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Layout />     
            </Router>
            
        </div>
    );
}

export default App;
