import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import LoginButton from "../Home/LoginButton";
import LogoutButton from './LogoutButton';
import { Switch, Route } from 'react-router-dom';

const Layout = () =>{

    return (
        <>
        <div> 
            <Header />
            <Switch>
                <Route exact path="/">
                    <LoginButton />
                    <LogoutButton />
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
