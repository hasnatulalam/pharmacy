import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg'
import banner2 from '../../../images/Banner/banner2.jpg'
import banner3 from '../../../images/Banner/banner3.jpg'


const Banner = () => {
    return (
        <div id="home">
            <br />
            <br />

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-5"
                        src={banner1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-5"
                        src={banner2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={banner3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;