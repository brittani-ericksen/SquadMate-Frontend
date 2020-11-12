import React from "react";
import Header from "./Header";
import Home from "../Home/Home"
import HomeHeader from "./homeHeader";
import Footer from "./Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import Signin from "../Home/SigninPage";
import Signup from "../Home/SignupPage";
import { Switch, Route, Redirect } from 'react-router-dom';
import GetCardInfo from "../Admin/GetCardInfo";

const Layout = props =>{
    const { user, setUser, isLoggedIn, setIsLoggedIn } = props;
    
    return (
        <>
        <div>
            <div className="removePrint">
        {!!isLoggedIn ? <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user}/> : <HomeHeader />}
        </div>
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
                        {isLoggedIn ? <Admin user={user} setUser={setUser}/> : <Redirect to="/signin" />}
                        
                    </Route>
                    <Route path="/user">
                        {isLoggedIn ? <User user={user} setUser={setUser}/> : <Redirect to="/signin" />}
                        
                    </Route>
                    <Route path="/getCardInfo/:id">
                        <GetCardInfo />
                    </Route>
                </Switch>        
            <Footer />
        </div>
        </>
    );
}

export default Layout;
