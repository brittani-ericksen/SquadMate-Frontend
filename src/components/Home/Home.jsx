import LoginButton from "../Home/LoginButton";
import Signin from "./SigninPage"
import Signup from "./SignupPage";
import React from "react";

const Home = props => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = props;
  return (
    <>
      <div>Home</div>
      <Signup />
      <Signin user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </>
  );
};

export default Home;
