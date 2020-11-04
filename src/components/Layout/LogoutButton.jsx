import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '@material-ui/core/Button';

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogoutButton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </LogoutButton>
  );
};

export default LogOutButton;