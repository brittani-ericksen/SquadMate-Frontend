import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


const Button = () => {
  const { logout } = useAuth0();

  return (
    <LogoutButton 
      accent="purple.A200" 
      onClick={() => logout({ returnTo: window.location.origin })}>Log Out
    </LogoutButton>
  );
};

export default Button;