import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";

const carousel = () => (
    <div className="carousel">
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="team-image-1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="team-image-2.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="team-image-3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
);

export default carousel;