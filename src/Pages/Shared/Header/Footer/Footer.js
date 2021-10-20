import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-success">
            <Row >
                <Col>
                    <h5>Company Name</h5>
                    <h5 className="text-danger mt-5">GO Home Pharmacy</h5>
                </Col>
                <Col>
                    <h5>Quicks Links</h5>
                    <h6>Get Started</h6>
                    <h6>Top Leaders</h6>
                    <h6>Success Stories</h6>
                    <h6>Event/tickets</h6>
                    <h6>News</h6>
                    <h6>Life Style</h6>
                    <h6>About</h6>
                </Col>
                <Col>
                    <h5>Get Started</h5>

                    <p>Get Access to your full training and marketing</p>
                    <Button>Register Now</Button>
                </Col>
                <Col>
                    <h5>Contact US</h5>
                    <h5>Phone: 0128937289</h5>
                    <h6>info@gmail.com</h6>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;