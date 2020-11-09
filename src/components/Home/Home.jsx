import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from '@material-ui/core';
import Carousel from "./Carousel";
import LazyHero from 'react-lazy-hero';
import Signin from "./SigninPage";
import Signup from "./SignupPage";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = props => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = props;
  const classes = useStyles();

  return (
    <>
      <div>Home</div>
      <LazyHero color="#ffffff" imageSrc="/heroimage.jpg" opacity="0.7" parallaxOffset="100">
                <h1>SquadMate</h1>
                <Link to="/signin"><Button variant="contained">Sign In</Button></Link>
                <Link to="/signup"><Button variant="contained">Sign Up</Button></Link>
      </LazyHero>
      <Carousel />
      <div className={classes.root}>
        <h2>Features:</h2>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><strong>Admin</strong></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><strong>Members</strong></Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/memberlist.png" />
                <p>View a List of Team Members</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/pageimage.png" />
                <p>Update Profile</p>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/emergencycardslist.png" />
                <p>Print Emergency Contact Cards for all Members</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/emergencycard.png" />
                <p>Update Emergency Contact Info Anytime</p>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/uploadreceiveforms.png" />
                <p>Upload and Receive Completed Forms</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <p>Fill Out and Submit Forms</p>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Grid>
    </div>
    </>
  );
};

export default Home;
