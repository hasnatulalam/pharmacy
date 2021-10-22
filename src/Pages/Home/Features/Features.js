import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Features.css'

const Features = () => {
    return (
        <div className=" mb-5 mt-5">
     
            <h1 className="text-success">Our Features</h1>
            <h3 class="text-warning">Why Choose Us?</h3>

            <div className="ms-5 me-5" >
                <Row >
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <i class="fas fa-stethoscope"></i>
                        <br />
                        <h6>Internal Medicine</h6>
                        <br />
                        <p className="mx-3">Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p> 
                    </Col>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <i class="fas fa-lungs-virus"></i>
                        <br />
                        <h6>Respiratory</h6>
                        <br />
                         <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus. </p> 
                    </Col>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <i class="fas fa-head-side-virus"></i>
                        <br />
                        <h6>
                            Neurology
                    </h6>
                        <br />
                        <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p> 
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <i class="fas fa-dna"></i>
                        <br />
                        <h6>Genetics Service</h6>
                        <br />
                         <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p> 
                        <br />
                    </Col>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <i class="fas fa-microscope"></i>
                        <br />
                        <h6>Oncology Care</h6><br />
                        <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p> 
                    </Col>
                    <Col className="card ms-3 me-3 px-3 py-3">
                        <i class="fas fa-tooth"></i>
                        <br />
                        <h6>
                            Dental Care
                    </h6>
                        <br />
                         <p>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus.</p> 
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Features;