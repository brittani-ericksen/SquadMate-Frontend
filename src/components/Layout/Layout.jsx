import React from "react";
import AdminHeader from "./NavBar/AdminHeader";
import UserHeader from "./NavBar/UserHeader";
import HomeHeader from "./NavBar/HomeHeader";
import HomeHeaderLinks from "./NavBar/HomeHeaderLinks.js";
import AdminLinks from "./NavBar/AdminLinks.js";
import UserLinks from './NavBar/UserLinks.js';
import AdminLeftLinks from './NavBar/AdminLeftLinks.js';
import UserLeftLinks from './NavBar/UserLeftLinks.js';
import Home from "../Home/Home";
import Footer from "./Footer/Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import Signin from "../Home/SigninPage";
import Signup from "../Home/SignupPage";
import { Switch, Route, Redirect } from 'react-router-dom';
import GetCardInfo from "../Admin/GetCardInfo";

const Layout = props =>{
    const { user, setUser, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, ...rest } = props;
    
    const LoginDisplay = ({isAdmin}) => 
        !!isAdmin === true ?
            <AdminHeader 
                leftLinks={<AdminLeftLinks />
                }
                rightLinks={<AdminLinks user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}
                color="dark"
                {...rest}
                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user} isAdmin={isAdmin} setIsAdmin={setIsAdmin}
            />
            :
            <UserHeader
                leftLinks={<UserLeftLinks />
                }
                rightLinks={<UserLinks user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}
                color="dark"
                {...rest}
                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user} isAdmin={isAdmin} setIsAdmin={setIsAdmin}
            />

    return (
        <>
        <div>
            <div className="removePrint">
            {!!isLoggedIn ?
                <LoginDisplay
                    isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user} isAdmin={isAdmin} setIsAdmin={setIsAdmin}
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
                        <Home user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/signin">
                        <Signin user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
                    </Route>
                    <Route path="/signup">
                        <Signup user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
                    </Route>
                    <Route path="/admin">
                        {isLoggedIn ? <Admin user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/> : <Redirect to="/signin" />}
                        
                    </Route>
                    <Route path="/user">
                        {isLoggedIn ? <User user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/> : <Redirect to="/signin" />}
                        
                    </Route>
                    <Route path="/getCardInfo/:id">
                        <GetCardInfo />
                    </Route>
                </Switch>
        </div>
        </>
    );
}

export default Layout;
