import React from "react";
import { useHistory } from 'react-router-dom';
import LogoutButton from "./LogoutButton";
import Avatar from 'react-avatar';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
          <Typography variant="h3" className={classes.title}>
          <Box textAlign="center">
            SquadMate
            </Box>
          </Typography>
          <Avatar githubHandle={user.github} src="/avatar-placeholder.png" size="75" round onClick={e => _handleClick(e)}/>
          {!!isLoggedIn ? <LogoutButton setIsLoggedIn={setIsLoggedIn} setUser={setUser}/> : ''}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;