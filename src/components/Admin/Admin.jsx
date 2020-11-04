import React from 'react';
import EmergencyCard from "./EmergencyCard";
//import AdminProfile from "./AdminProfile";
//import MemberList from "./MemberList";
import { Switch, Route } from 'react-router-dom';

const Admin = () =>{

    return (
        <>
        <Switch>
            <Route exact path="/admin">
                <div>
                    <img src="../../public/avatar-placeholder.png" alt="placeholder" />
                    <h1>Welcome "AdminName"</h1>
                </div>
                <div>
                Missing stuff......
                </div>
            </Route>
            <Route path="/admin/memberlist">
                <h1>Member List</h1>
            </Route>
            <Route path="/admin/forms">
                <h1>Forms</h1>
            </Route>
            <Route path="/admin/emergencycards">
                <EmergencyCard />
            </Route>
        </Switch>
            
            
            
            
        </>
    );
}
export default Admin;
