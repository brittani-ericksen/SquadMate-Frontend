import React from 'react';
import AdminEmergencyCards from "./AdminEmergencyCards";
import AdminForms from "./AdminForms";
import AdminProfile from "./AdminProfile";
import MemberList from "./MemberList";
import Avatar from 'react-avatar';
import { Switch, Route, Link } from 'react-router-dom';

const Admin = (props) =>  {
    const { user } = props;
    return (
        <>
        <Switch>
            <Route exact path="/admin">
                <div>
                <Avatar githubHandle={user.github} src="/avatar-placeholder.png" size="105" round />                   
                <h1>Welcome {user.firstName}</h1>
                    <Link to="/admin/profile"><button>Profile</button></Link>
                    <Link to="/admin/memberlist"><button>Members</button></Link>
                    <Link to="/admin/forms"><button>Forms</button></Link>
                    <Link to="/admin/emergencycards"><button>Emergency Cards</button></Link>
                </div>
            </Route>
            <Route path="/admin/profile">
                <h1>Profile</h1>
                <AdminProfile user={user}/>
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
                <AdminEmergencyCards user={user}/>
            </Route>
        </Switch>
            
            
            
            
        </>
    );
}
export default Admin;
