import React from "react";
import Header from "./Header";
import Home from "../Home/Home";
import Footer from "./Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import { Switch, Route } from 'react-router-dom';

const Layout = props =>{
    const { user, setUser, isLoggedIn, setIsLoggedIn } = props;
    
    return (
        <>
        <div> 
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
                <Switch>
                    <Route exact path="/">
                        <Home user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                    </Route>
                    <Route path="/admin">
                        <Admin user={user}/>
                    </Route>
                    <Route path="/user">
                        <User user={user}/>
                    </Route>
                </Switch>        
            <Footer />
        </div>
        </>
    );
}

export default Layout;
