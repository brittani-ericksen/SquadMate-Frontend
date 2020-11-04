import React from "react";
import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";
import Header from "./Header";
import Footer from "./Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";

const Layout = () =>{

    return (
        <>
        <div> 
            <Header />
            <Admin />
            <User />
            <LoginButton />
            <LogoutButton />
            <Footer />
        </div>
        </>
    );
}

export default Layout;
