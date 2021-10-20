import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="bg-light text-dark">
            <h1 className="mt-5">About Go Home Pharmacy </h1>
            <p>Go home Pharmacy is an online based pharmacy where you can buy medicine ..We delivered it to your home</p>

            <div>
                <h1 className="text-warning">  Our Team</h1>
            </div>
            <Row>
                <Col>
                    <div className="card text-dark shadow-lg ms-5 me-5">
                        <img width="100%" height="400px" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/132893962_2808477312729846_2899808976811298083_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHUevUfEzjRfyppRItFS3lZq96IukVzzFWr3oi6RXPMVRDylndg4nqvsvSUPIdBLlIo-DTvAxjwIXbQlN-BsyGQ&_nc_ohc=kMDSmpdI5S8AX81BnZA&tn=o1T-fTcGNwkRO_0R&_nc_ht=scontent.fcgp7-1.fna&oh=f6cf604621cdf31fd754b843d17a2832&oe=619275CF" alt="" />
                        <h6>Ataul Hamid</h6>
                        <p class="title">CEO & Founder</p>
                        <p>He is founder of Go Home Pharmacy</p>
                        <p>ataul@gmail.com</p>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-1/p200x200/222628486_3217620958485171_451502788482977506_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFbPelGrdW0-NShGmqJwPfCk9zlaagSNGGT3OVpqBI0YQQ_tMTgFIL8jLRBfYLC_x0_1P5hzCsbdkbTvTcT3OCG&_nc_ohc=XWaDb_lM0wMAX9hZLur&_nc_ht=scontent.fcgp7-1.fna&oh=ed1e11b6cfac0d5cca1b33088e3bb196&oe=61939D78" alt="" />
                        <h6>Khorshed Alam</h6>
                        <p class="title">CEO & Founder</p>
                        <p>He is founder of Go Home Pharmacy</p>
                        <p>khorshed@gmail.com</p>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-1/p200x200/245180855_2921020751493402_9014708564535686920_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeE6CMBN5ELtZ3Z53DVA9IaE5VTdpdd8LwvlVN2l13wvC7nX06SPKihh0aX9izNELRiydpwNnp6j8DxjkXlff76B&_nc_ohc=6gRjs98_KqcAX_UqAGP&_nc_ht=scontent.fcgp7-1.fna&oh=c3edc0b76e61c7d40021db8432853a4e&oe=6173766D" alt="" />
                        <h6>Irfan Ullah Munna</h6>
                        <p class="title">CEO & Founder</p>
                        <p>He is founder of Go Home Pharmacy</p>
                        <p>munna@gmail.com</p>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
            </Row>
            <br />
            <br />

        </div>
    );
};

export default About;