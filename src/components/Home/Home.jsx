import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Carousel from "./Carousel";
import LazyHero from 'react-lazy-hero';
import Konami from 'react-konami-code';
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


const KonamiImg = styled.div`
position: fixed;
z-index: 5;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #132143a8;

img {
  width: 600px;
}
`;

const Home = props => {
  const classes = useStyles();
  
  const playSound= () => {
    const audio = new Audio('Excellent-laugh.wav');
    audio.play();
  }

  return (
    <>
      <LazyHero color="#ffffff" imageSrc="/heroimage.jpg" opacity="0.7" parallaxOffset="100">
        <img className="logo" src="squadmatelogo.png" />
      </LazyHero>
      <Carousel />
      <div className={classes.root}>
        <h2>Features</h2>
        <Grid className="darkblue" container spacing={1}>
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
                <img src="iconimages/memberlist.png" alt="memberlist"/>
                <p className={classes.text}>View a List of Team Members</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/pageimage.png" alt="paperImage"/>
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
                <img src="iconimages/emergencycardslist.png" alt="cardList"/>
                <p className={classes.text}>Print Emergency Contact Cards for all Members</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/emergencycard.png" alt="emergencycard"/>
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
                <img src="iconimages/uploadreceiveforms.png" alt="receiveForm"/>
                <p className={classes.text}>Upload and Receive Completed Forms</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="iconimages/filloutforms.png" alt="fillout-forms"/>
                <p className={classes.text}>Fill Out and Submit Forms</p>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Grid>

        <Konami action={playSound} timeout={5000}>  
      <KonamiImg>
        <Typography variant="h2">
          Yelrac Zil defeats Snake Jodgel!!
        </Typography>
        <img src="https://github.com/chrisowensdev/terminal-kombat/raw/master/images/intro_screen.png" alt="terminal-kombat" />
      </KonamiImg>
    </Konami>
    </div>
    </>
  );
};

export default Home;
