import React, { useState, useRef } from "react";
import './Register.css';
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Register () {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [birth, setBirth] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const radioChangeHandle = (curVal) => {
        console.log(curVal)
    }
    return (
        <div className="Register">
            <Container>
                <div className="register-main">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFname">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    First Name
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control placeholder="Input First Name." />
                                </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLname">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Last Name
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control placeholder="Input Last Name." />
                                </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridBirthday">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Birthday
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control placeholder="Input Birthday." />
                                </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Email
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="email" placeholder="Input Email." />
                                </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Mobile Phone
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control placeholder="Input Mobile Phone Number." />
                                </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Address
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control as="textarea" rows={3} placeholder="Input Addresss." />
                                </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    City
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control placeholder="Input City." />
                                </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Zip Code
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control placeholder="Input Zip Code." />
                                </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    State
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control placeholder="Input State." />
                                </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCountry">
                                <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Country
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="email" placeholder="Input Country" />
                                </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="formGridApply">
                            <Row>
                                <Form.Label column sm={3} className="label-text">
                                    Apply as:
                                </Form.Label>
                                <div key={`inline-radio`} className="col-sm-9 d-flex justify-content-left align-items-center" >
                                    <Form.Check inline label="User" name="userType" type="radio" id={`inline-radio-0`} onChange={(e) => {radioChangeHandle(0)}} defaultChecked/>
                                    <Form.Check inline label="Musician" name="userType" type="radio" id={`inline-radio-1`} onChange={(e) => {radioChangeHandle(1)}}/>
                                    <Form.Check inline label="DJ" name="userType" type="radio" id={`inline-radio-2`} onChange={(e) => {radioChangeHandle(2)}}/>
                                    <Form.Check inline label="Comedian" name="userType" type="radio" id={`inline-radio-3`} onChange={(e) => {radioChangeHandle(3)}}/>
                                    <Form.Check inline label="Photographer" name="userType" type="radio" id={`inline-radio-4`} onChange={(e) => {radioChangeHandle(4)}}/>
                                </div>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
                <div className="register-other">
                </div>
            </Container>
        </div>
    )
}

export default Register;