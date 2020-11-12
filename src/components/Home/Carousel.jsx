import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";

const carousel = () => (
    <div className="carousel">
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="carouselimages/carousel1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="carouselimages/carousel2.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="carouselimages/carousel3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="carouselimages/carousel4.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="carouselimages/carousel5.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
);

export default carousel;