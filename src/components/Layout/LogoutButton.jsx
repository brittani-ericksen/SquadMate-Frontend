import React from "react";
import LogoutButton from '@material-ui/core/Button';
import { Box } from "@material-ui/core";
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
    <Box color="text.primary">
      <LogoutButton 
      accent="purple.A200" 
      onClick={() => _handleClick()}>
        Log Out
      </LogoutButton>
    </Box>
  );
};

export default Button;