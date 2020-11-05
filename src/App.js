import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Layout />
                    </Route>
                </Switch>        
            </Router>
            
        </div>
    );
}

export default App;
