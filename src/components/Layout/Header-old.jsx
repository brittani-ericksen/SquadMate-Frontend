import React from "react";
import { useHistory } from 'react-router-dom';
import LogoutButton from "./LogoutButton";
import Avatar from 'react-avatar';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
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

const Header = (props) => {
  const classes = useStyles();
  const { setIsLoggedIn, setUser, isLoggedIn, user } = props;


  const history = useHistory();
  const _handleClick = (e) => {
    if (user.isAdmin){history.push("/admin/profile")
    }else{history.push("/user/profile")
  };
  }; 

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            SquadMate
          </Typography>
          <Avatar src={user.avatarUrl} name={user.firstName + ' ' + user.lastName}size="75" round /> 
          {!!isLoggedIn ? <LogoutButton setIsLoggedIn={setIsLoggedIn} setUser={setUser}/> : ''}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;