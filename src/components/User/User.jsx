import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { Switch, Route, Link } from 'react-router-dom';

const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Profile',
    width: '40%',
    route: "/user/profile",
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Team',
    width: '30%',
    route: "/user/team",
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Forms',
    width: '30%',
    route: "/user/forms",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
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
    position: 'absolute',
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
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 30,
    right: 30,
    top: 25,
    bottom: 30,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(2) + 6}px`,
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
}));

function User () {
  const classes = useStyles();

  return (
    <>
    <div><img src="" alt="placeholder" /><Typography variant="h2" >Welcome</Typography></div>
    <Alert variant="filled" severity="error">Missing Forms Alert — check it out!</Alert>
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
        <Link to={image.route}>
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
  </>
  );
}
export default User;


{/* <Switch>             
            <div>
            <Route path="/user/profile"><div>Profile</div><Link to="/user">Go Back</Link><UserProfile /></Route>
            <Route path="/user/forms"><h1>Forms</h1><Link to="/user">Go Back</Link><Forms /></Route>
            <Route path="/user/team"><h1>Team</h1><Link  to="/user">Go Back</Link><Team /></Route>
            </div>
    </Switch> */}
{/* <Route exact path="/user">
        </Route> */}
        {/* <div>
                <Link to="/user/profile" ><Button component="button" variant="body2" >Profile</Button></Link>
                    <Link to="/user/forms" >
                        <Button component="button" variant="body2">Forms</Button>
                    </Link>
                    <Link to="/user/team" >
                        <Button component="button" variant="body2">Team</Button>
                    </Link>
                    <Link to="/user/emcard" >
                        <Button component="button" variant="body2">EmergencyCard</Button>
                    </Link>
                </div> */}