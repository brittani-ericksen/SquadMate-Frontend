import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

import UserProfile from "./UserProfile";
import Forms from "./Forms";
import Team from "./Team";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 100,
    width: 100,
    
  },
}));

const User = (props) => {
    const { user } = props;
    const classes = useStyles();
  return (
    <>
      <Switch>

        <Route exact path="/user">

        <div>
            <Avatar githubHandle={user.github} src="/avatar-placeholder.png" size="75" round />
                <h1>Welcome {user.firstName}</h1>
        </div>
            <Alert 
                justify="center" 
                variant="filled" 
                severity="error">
                Missing Forms Alert — check it out!
            </Alert>

          <div className={classes.root}>

            <div style={{marginLeft:"25%"}}>

              <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Link to="/user/profile" >
                        <Paper className={classes.paper}>
                            Profile
                        </Paper>
                    </Link>
                </Grid>

                <Grid item xs={2}>
                    <Link to="/user/forms" >
                        <Paper className={classes.paper}>
                            Forms
                        </Paper>
                    </Link>
                </Grid>

                <Grid item xs={2}>
                    <Link to="/user/team" >
                        <Paper className={classes.paper}>
                            Team
                        </Paper>
                    </Link>
                </Grid>
              </Grid>

            </div>
          </div>
        </Route>

            <Route path="/user/profile">
                <div>Profile</div>
                <Link to="/user">
                    Go Back
                </Link>
                <UserProfile user={user}/>
            </Route>
            <Route path="/user/forms">
                <h1>Forms</h1>
                <Link to="/user">
                    Go Back
                </Link>
                <Forms />
            </Route>
            <Route path="/user/team">
                <h1>Team</h1>
                <Link to="/user">
                    Go Back
                </Link>
                <Team />
            </Route>

      </Switch>
    </>
  );
}
export default User;