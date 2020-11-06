import React from "react";

import Carousel from "./Carousel";
import LazyHero from 'react-lazy-hero';
import Signin from "./SigninPage";
import Signup from "./SignupPage";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = props => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = props;

  return (
    <>
      <div>Home</div>
      <LazyHero color="#ffffff" imageSrc="https://unsplash.it/2000/1000" opacity="0.5" parallaxOffset="100">
                <h1>SquadMate</h1>
                <h2>this is a test</h2>
      </LazyHero>
      <Carousel />
      <Signup />
      <Signin user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {/* features */}
    </>
  );
};

export default Home;
