import React from 'react';
import { Carousel } from 'react-bootstrap';



const Banner = () => {
    return (
        <div id="home">
            <br />
            <br />

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-5"
                        src={"https://i.ibb.co/7t9WW55/slider3jpg.jpg"}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-5"
                        src={"https://i.ibb.co/c2cPjq8/medicaljpg.jpg"}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={"https://i.ibb.co/DwPnHc7/slider4.jpg"}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;