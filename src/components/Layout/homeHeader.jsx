import React from "react";
import LoginButton from "../Home/LoginButton";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
//import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomeHeader = (props) => {
  const classes = useStyles();
  const { setIsLoggedIn, setUser, isLoggedIn } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SquadMate
          </Typography>
          <LoginButton />
            
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HomeHeader;