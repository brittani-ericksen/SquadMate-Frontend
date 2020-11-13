import React from "react";
import UserHeader from "./NavBar/UserHeader";
import HomeHeader from "./NavBar/HomeHeader";
import HomeHeaderLinks from "./NavBar/HomeHeaderLinks.js";
import UserLinks from './NavBar/UserLinks.js';
import LeftLinks from './NavBar/LeftLinks.js';
import Home from "../Home/Home";
import Footer from "./Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import Signin from "../Home/SigninPage";
import Signup from "../Home/SignupPage";
import { Switch, Route, Redirect } from 'react-router-dom';
import GetCardInfo from "../Admin/GetCardInfo";


const Layout = props =>{
    const { user, setUser, isLoggedIn, setIsLoggedIn, ...rest } = props;
    
    return (
        <>
        <div>
            <div className="removePrint">
            {!!isLoggedIn ?
                <UserHeader
                    brand=""
                    leftLinks={<LeftLinks />
                    }
                    rightLinks={<UserLinks user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />}
                    color="dark"
                    {...rest}
                    isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user}
                />
            :   <HomeHeader
                    
                    rightLinks={<HomeHeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                    height: 400,
                    color: "white"
                    }}
                    {...rest} 
                />}
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
