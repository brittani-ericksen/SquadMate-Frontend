import React from "react";
import Admin from "./Admin/Admin";
import LogoutButton from "./LogoutButton";
import User from "./User/User";

const Layout = () =>{

    return (
        <>
            <div>
                <h1>SquadMate</h1>
                <LogoutButton />
            </div>
        <User />
        <Admin />
        
            <footer>
                <ul>
                    <li>Terms of Service</li>
                    <li>About Us</li>
                    <li>Download the app</li>
                    <li>Contact us</li>
                    <li>How it works</li>
                    <li>Privacy Policy</li>

                </ul>

            </footer>
        </>
    );
}

export default Layout;
