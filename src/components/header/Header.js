import React from "react";
import './Header.css';
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="sm">
                <Container>
                    <Navbar.Brand href=""><img src={Logo} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <Form.Select className='lang-select' aria-label="Default select example">
                                <option value="en">English</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="it">Italian</option>
                                <option value="pt">Portuguese</option>
                                <option value="ru">Russian</option>
                                <option value="es">Spanish</option>
                            </Form.Select>

                            <Link to="/login" className='n-link en-link nav-link'>Log In</Link>
                            {/* <Nav.Link className='n-link en-link' href="">Log In</Nav.Link> */}
                            {/* <Nav.Link className='n-link re-link' href="">Register</Nav.Link> */}
                            <Link to="/register" className='n-link re-link nav-link'>Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;