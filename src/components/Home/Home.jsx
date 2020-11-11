import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from '@material-ui/core';
import Carousel from "./Carousel";
import LazyHero from 'react-lazy-hero';
import Signin from "./SigninPage";
import Signup from "./SignupPage";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#132143',
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#E6EAF3',
    border: '2px solid #FFBA00',
    color: '#132143',
    paddingBottom: '10px',
    paddingTop: '20px',
    textAlign: 'center',
  },
  text: {
    paddingTop: '16px',
  }
}));

const Home = props => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = props;
  const classes = useStyles();

  return (
    <>
      <LazyHero color="#E6EAF3" imageSrc="/heroimage.jpg" opacity="0.6" parallaxOffset="100">
        <img className="logo" src="squadmatelogo.png" />
      </LazyHero>
      <Carousel />
      <div className={classes.root}>
        <h2>Features</h2>
        <Grid className="blue" container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Admin</h3></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}><h3>Members</h3></Paper>
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
                <p className={classes.text}>View a List of Team Members</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/pageimage.png" />
                <p className={classes.text}>Update Profile</p>
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
                <p className={classes.text}>Print Emergency Contact Cards for all Members</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/emergencycard.png" />
                <p className={classes.text}>Update Emergency Contact Info Anytime</p>
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
                <p className={classes.text}>Upload and Receive Completed Forms</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/filloutforms.png" />
                <p className={classes.text}>Fill Out and Submit Forms</p>
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
