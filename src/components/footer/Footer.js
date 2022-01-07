import React from "react";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Footer() {
    return (
        <div className="Footer">
            <Container>
                <Row className="Footer-Body">
                    <Col>
                        <div className="Left-Text">
                            @Copyright GIGEVER Entertainment 2020.
                        </div>
                    </Col>
                    <Col className="Footer-Urls">
                        <ul>
                            <a href="#">Terms Of Services |</a>
                            <a href="#"> Privacy Polices |</a>
                            <a href="#"> ImPrint</a>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;