import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import UserProfile from "./UserProfile";
import InitialForm from "./InitialForm";

import UserTeamList from "./UserTeamList";


const images = [
  {
    url: '/userProfile.jpg',
    title: 'Profile',
    width: '50%',
    href: '/user/profile'
  },
  {
    url: '/userTeam.jpg',
    title: 'Team',
    width: '50%',
    href: '/user/team'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    
  },
  picButton: {
    dipslay: 'block'
},
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
    margin: '5px 20px ',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: '5px 20px',
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  alert: {
    width: 500,
    margin: "0 auto 24px",
    alignContent: 'center',
    paddingLeft: '120px',
  },
}));

const User = (props) => {
    const { user, setUser } = props;
    const classes = useStyles();
    const [profilePicture, setProfilePicture] = useState(user.avatarUrl)
    

    let profilePic = profilePicture === "" ? null : profilePicture;
    let githubPic = profilePicture === "" ? user.github : '';
    console.log(profilePic)
  return (
    <>
      <Switch>

        <Route exact path="/user">

        <div>
        <Avatar githubHandle={githubPic} src={profilePic}  size="100" round /> 
                
                <h1>Welcome {user.firstName}</h1>
        </div>
        {!!user.emergencyFormDone ? "" : (
          <Alert 
          className={classes.alert}
          variant="filled"
          severity="error">
            Critical Profile Items Missing
          <br />
          {!!user.emergencyFormDone ? "" : <Link to='/user/forms'>Emergency Contact Form</Link>}
      </Alert>
        )}
        <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <Link to={image.href}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
        </ButtonBase>
      ))}
    </div>
        </Route>

            <Route path="/user/profile">
                <div>Profile</div>
                <Link to="/user">
                    Go Back
                </Link>
                <UserProfile user={user} setUser={setUser} setProfilePicture={setProfilePicture} profilePicture={profilePicture}/>
            </Route>
            <Route path="/user/forms">
                <h1>Forms</h1>
                <Link to="/user">
                    Go Back
                </Link>
                <InitialForm user={user} setUser={setUser}/>
            </Route>
            <Route path="/user/team">
                <h1>Team</h1>
                <Link to="/user">
                    Go Back
                </Link>
                <UserTeamList />
            </Route>

      </Switch>
    </>
  );
}
export default User;