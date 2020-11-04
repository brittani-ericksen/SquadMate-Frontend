import React from 'react';
import UserProfile from "./UserProfile";
import EmergencyCard from "../User/EmergencyCard";
//import Forms from "./Forms";
//import Team from "./Team";


const User = () =>{

    return (
        <>
            <div>
                <img src="../../public/avatar-placeholder.png" alt="placeholder" />
                <h1>Welcome "UserName"</h1>
            </div>
            <div>
                Missing stuff......
            </div>
            <UserProfile />
            <EmergencyCard />
            
        </>
    );
}

export default User;
