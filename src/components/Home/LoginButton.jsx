import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '@material-ui/core/Button';

const Button = () => {
  const { loginWithRedirect } = useAuth0();

  return <LoginButton onClick={() => loginWithRedirect()}>Log In</LoginButton>;
};

export default Button;