import React from "react";
import LogoutButton from "./LogoutButton";
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

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SquadMate
          </Typography>
            <LogoutButton />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;