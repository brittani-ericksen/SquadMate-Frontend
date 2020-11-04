import React from 'react';
//import AdminEmergencyCards from "./AdminEmergencyCards";
//import AdminForms from "./AdminForms";
//import AdminProfile from "./AdminProfile";
//import MemberList from "./MemberList";

const Admin = () =>{

    return (
        <>
            <div>
                <img src="../../public/avatar-placeholder.png" alt="placeholder" />
                <h1>Welcome "AdminName"</h1>
            </div>
            {/* buttons will route to each page */}
            <button>Member List</button>
            <button>Forms</button>
            <button>Emergency Cards</button>
            <button>Profile</button>
        </>
    );
}
export default Admin;
