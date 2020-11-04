import React from "react";
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
            <Footer />
        </div>
        </>
    );
}

export default Layout;
