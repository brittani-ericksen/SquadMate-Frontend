import React from "react";

import LoginButton from "../Home/LoginButton";

import Carousel from "./Carousel";
import LazyHero from 'react-lazy-hero';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => {
  return (
    <>
      <div>Home</div>
      <LoginButton />
      <LazyHero color="#ffffff" imageSrc="https://unsplash.it/2000/1000" opacity="0.5" parallaxOffset="100">
                <h1>SquadMate</h1>
                <h2>this is a test</h2>
      </LazyHero>
      <Carousel />
      {/* features */}
    </>
  );
};

export default Home;
