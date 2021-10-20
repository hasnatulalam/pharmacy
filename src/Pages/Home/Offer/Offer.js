import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Offer = () => {
    return (
        <div className="bg-secondary mb-5 ms-3 me-5">
            <p>We Care About Your HEALTH</p>
            <h5>Health Care Service</h5>

            <div>
                <Row>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <h6>EMERGENCY CASE</h6>
                        <div>--------------------</div>
                        <p>In any kind of emergency we are ready to help you</p>
                        <Button>Read More</Button>

                    </Col>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <h6>24 Hours Service</h6>
                        <div>----------------------</div>
                        <p>24 hours we ready for you</p>
                        <Button>Read More</Button>

                    </Col>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <h6>Opening Hours</h6>
                        <div>-------------------</div>
                        <p>24 hours open</p>
                        <Button>Read More</Button>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Offer;