import React from "react";
import LogoutButton from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import { useHistory } from 'react-router-dom';

const Button = (props) => {
  const { setIsLoggedIn, setUser } = props;
  const history = useHistory();

  const _handleClick = () => {
    setIsLoggedIn(false);
    setUser('');
    history.push('/');
  } 
  return (
    <LogoutButton 
    accent="purple.A200" 
    onClick={() => _handleClick()}>
      Log Out
    </LogoutButton>
  );
};

export default Button;