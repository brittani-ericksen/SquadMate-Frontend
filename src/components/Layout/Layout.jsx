import React from "react";
import Header from "./Header";
import Home from "../Home/Home"
import Footer from "./Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import { Switch, Route } from 'react-router-dom';

const Layout = () =>{

    return (
        <>
        <div> 
            <Header />
                <Switch>
                    <Route exact path="/">
                        <h1>Layout Page</h1>
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                </Switch>        
            <Footer />
        </div>
        </>
    );
}

export default Layout;
