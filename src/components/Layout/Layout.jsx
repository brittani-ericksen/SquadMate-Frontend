import React from "react";
import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () =>{

    return (
        <>
        <div>
            <Header />
            <LoginButton />
            <LogoutButton />
            <Footer />
        </div>
        </>
    );
}

export default Layout;
