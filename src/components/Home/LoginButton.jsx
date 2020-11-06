import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '@material-ui/core/Button';

const Button = () => {
  const { loginWithRedirect } = useAuth0();

  return <Link to='/signin'>
            <LoginButton>Log In</LoginButton>
          </Link>;
};

export default Button;