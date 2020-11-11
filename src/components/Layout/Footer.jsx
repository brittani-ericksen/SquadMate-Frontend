import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SquadMate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop:theme.spacing(2),
    backgroundColor: '#132143',
  },
  button: {
    color: "white"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="s">
          <Typography variant="body6">
            <Button className={classes.button}>Home</Button>
            <Button className={classes.button}>Terms of Service</Button>
            <Button className={classes.button}>About Us</Button>
            <Button className={classes.button}>Download the app</Button>
            <Button className={classes.button}>Contact us</Button>
            <Button className={classes.button}>How it works</Button>
            <Button className={classes.button}>Privacy Policy</Button>
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
