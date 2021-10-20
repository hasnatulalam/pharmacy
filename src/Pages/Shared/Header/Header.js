
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="ms-5" href="#home"> <img height="40px" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-1/p148x148/107813538_325376768851317_7773296267190165965_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeFo5ArCn3-CUTO-Cc4yxAH9U0gx3O7bgX1TSDHc7tuBfUhUkNWJckp4c-VjXLkpBkrRPMF5OWg6Xriget0lCv6C&_nc_ohc=IYGQvwnrH9EAX96zwe0&_nc_ht=scontent.fcgp7-1.fna&oh=14e12f9b9b2b204523991d430e2b94e4&oe=6195734A" alt="" /> GO Home Pharmacy</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/medicine">Medicine</Nav.Link>

                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        {
                            user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>Signed in as: <a href="#login">{user?.displayName}</a> </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;