import LoginButton from "../Home/LoginButton";
import Signin from "./SigninPage";
import Signup from "./SignupPage";
import React from "react";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <LoginButton />
      <Signup />
      <Signin />
    </>
  );
};

export default Home;
