import React from "react";
import Header from "./Header";
import Home from "../Home/Home"
import HomeHeader from "./homeHeader";
import Footer from "./Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import Signin from "../Home/SigninPage";
import Signup from "../Home/SignupPage";
import { Switch, Route } from 'react-router-dom';

const Layout = props =>{
    const { user, setUser, isLoggedIn, setIsLoggedIn } = props;
    
    return (
        <>
        <div>
        {!!isLoggedIn ? <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/> : <HomeHeader />}
                <Switch>
                    <Route exact path="/">
                        <Home user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/signin">
                        <Signin user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                    </Route>
                    <Route path="/signup">
                        <Signup user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                    </Route>
                    <Route path="/admin">
                        <Admin user={user} setUser={setUser}/>
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
