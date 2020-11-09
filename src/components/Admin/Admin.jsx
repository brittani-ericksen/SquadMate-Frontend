import React from 'react';
import AdminEmergencyCards from "./AdminEmergencyCards";
import AdminForms from "./AdminForms";
import AdminProfile from "./AdminProfile";
import MemberList from "./MemberList";

import { Switch, Route, Link } from 'react-router-dom';

const Admin = (props) =>  {
    const { firstName } = props.user;
    return (
        <>
        <Switch>
            <Route exact path="/admin">
                <div>
                    <img src="avatar-placeholder.png" alt="placeholder" />
                    <h1>Welcome {firstName}</h1>
                    <Link to="/admin/profile"><button>Profile</button></Link>
                    <Link to="/admin/memberlist"><button>Members</button></Link>
                    <Link to="/admin/forms"><button>Forms</button></Link>
                    <Link to="/admin/emergencycards"><button>Emergency Cards</button></Link>
                </div>
            </Route>
            <Route path="/admin/profile">
                <h1>Profile</h1>
                <AdminProfile user={props.user}/>
            </Route>
            <Route path="/admin/memberlist">
                <h1>Members</h1>
                <MemberList />
            </Route>
            <Route path="/admin/forms">
                <h1>Forms</h1>
                <AdminForms />
            </Route>
            <Route path="/admin/emergencycards">
                <h1>Emergency Cards</h1>
                <AdminEmergencyCards user={props.user}/>
            </Route>
        </Switch>
            
            
            
            
        </>
    );
}
export default Admin;
