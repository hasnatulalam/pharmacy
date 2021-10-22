
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect sticky="top" bg="white" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand className="ms-5 fw-bolder" href="#home"> <img height="40px" src="https://i.ibb.co/1vx3qzG/Nav.png" alt="" /> Online Pharmacy</Navbar.Brand>
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