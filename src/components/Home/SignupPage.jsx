import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    color: 'black',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    backgroundColor: 'white',
    padding: '30px 30px 30px 30px',
    borderRadius: '20px',
  },
  submit: {
    backgroundColor: '#223F84',
    margin: theme.spacing(3, 0, 2),
  },
  red: {
    color: 'red'
  }
}));

export default function SignUp(props) {
  const classes = useStyles();
  const { setUser, setIsLoggedIn } = props; 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const _handleFirstName = input => {
    setFirstName(input);
  }
  const _handleLastName = input => {
    setLastName(input);
  }
  const _handleEmail = input => {
    setEmail(input);
  }
  const _handlePassword = input => {
    setPassword(input);
  }

  const _handleCheck = (value) => {
    setChecked(!checked);
  }

  const _handleSubmit = async(e) => {
    e.preventDefault();
      
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      parentForm: {
        parentOne: {
          firstName: firstName,
          lastName: lastName,
        },
        emergencyContactOne:{
          firstName: firstName,
          lastName: lastName,
        }
      }
    }

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/`, {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(data)
    });
    const resdata = await response.json();
    setUser(resdata);
    setIsLoggedIn(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    history.push('/user');
    
  } 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} validate onSubmit={e => _handleSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e => _handleFirstName(e.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={e => _handleLastName(e.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type='email'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => _handleEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => _handlePassword(e.target.value)}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                required
                control={<Checkbox value={checked} onClick={e => _handleCheck(e.target.value)} color="primary" />}
                label="I acknowledge that I am a parent/legal guardian of a rider and I am above the age of 18."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            disabled={!checked}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
