import React from "react";
import LogoutButton from '@material-ui/core/Button';
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
    <LogoutButton onClick={() => _handleClick()}>
      Log Out
    </LogoutButton>
  );
};

export default Button;