import React from 'react';

import EmergencyCard from "../User/EmergencyCard";
import UserProfile from "./UserProfile";
import Forms from "./Forms";
import Team from "./Team";

import { Switch, Route, Link } from 'react-router-dom';

import { Box, makeStyles, Button } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: 1,
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
const User = (props) => {
    const classes = useStyles();
    const { firstName } = props.user;
    return (
        <>
        <Box color="primary.main" width="100%" className="mainContent">
        <Switch>
            <Route exact path="/user">
                <div>
                    <img src="../../public/avatar-placeholder.png" alt="placeholder" />
                    <h1>Welcome {firstName}</h1>
                </div>
                <div className={classes.root}>
                <Alert variant="filled" severity="error">
                    Missing Forms Alert — check it out!
                </Alert>
                </div>
                <div>
                <Link to="/user/profile" >
                    <Button component="button" variant="body2" >Profile</Button>
                </Link>
                <Link to="/user/forms" >
                    <Button component="button" variant="body2">Forms</Button>
                </Link>
                <Link to="/user/team" >
                    <Button component="button" variant="body2">Team</Button>
                </Link>
                <Link to="/user/emcard" >
                    <Button component="button" variant="body2">EmergencyCard</Button>
                </Link>
                </div>
            </Route>
            <Route path="/user/profile">
                <div>Profile</div>
                <Link to="/user">Go Back</Link>
                <UserProfile />
            </Route>
            <Route path="/user/forms">
                <h1>Forms</h1>
                {/* <Forms /> */}
                <Link to="/user">Go Back</Link>
                <Forms />
            </Route>
            <Route path="/user/team">
                <h1>Team</h1>
                {/* <Team /> */}
                <Link style={{ height: 100, width: '100%', position: 'fixed' }} to="/user">Go Back</Link>
                <Team />
            </Route>
            <Route path="/user/emcard">
                <h1>EmergencyCard</h1>
                <Link to="/user">Go Back</Link>
                <EmergencyCard />
            </Route>
        </Switch>
        </Box>
        </>
    );
}

export default User;