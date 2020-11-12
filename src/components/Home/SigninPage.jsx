import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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
    color: '#E6EAF3'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    backgroundColor: '#E6EAF3',
    padding: '15px 30px 30px 30px',
    borderRadius: '20px'
  },
  submit: {
    backgroundColor: '#223F84',
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: '#132143'
  }
}));

export default function SignIn(props) {
  const { setUser, setIsLoggedIn } = props;
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState('');
  const history = useHistory();


  const _handleEmail = input => {
    setEmail(input);
  }
  const _handlePassword = input => {
    setPassword(input);
  }

  const _handleSubmit = async(e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password
    }
    const response = await fetch(`http://localhost:3333/user/login`, {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(data)
    });

    const resdata = await response.json();
    if (resdata.msg) {
      setSignInError(resdata.msg);
    } else {
      setUser(resdata);
      setIsLoggedIn(true);
      if (resdata.isAdmin) {
        history.push('/admin');
      } else {
        history.push('/user');
      }
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} validate="true" onSubmit={e => _handleSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => _handleEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
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

          <Container className={classes.error}>
          {!!signInError ? signInError : ""}
          </Container>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Container>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
              </Container>
        </form>
      </div>
    </Container>
  );
}