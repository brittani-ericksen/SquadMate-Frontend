import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";

export default () => (
    <Carousel autoplay infiniteLoop>
                <div>
                    <img src="/team-image-1.jpg" />
                </div>
                <div>
                    <img src="/team-image-2.jpg" />
                </div>
                <div>
                    <img src="/team-image-3.jpg" />
                </div>
                <div>
                    <img src="/team-image-4.jpg" />
                </div>
                <div>
                    <img src="/team-image-5.jpg" />
                    {/* <p className="legend">Legend 5</p> */}
                </div>
    </Carousel>
);