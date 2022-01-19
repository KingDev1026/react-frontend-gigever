import React, { useState, useRef } from "react";
import './LogIn.css';
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function LogIn () {
    const [userType, setUserType] = useState("User")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [eHide, setEHide] = useState("none")
    const [pHide, setPHide] = useState("none")
    
    const loginHandler = () => {
        if(email == "" || email.search("@") < 0)
            setEHide("block")
        if(password == "")
            setPHide("block")
        if(eHide == "block" || pHide == "block")
            return;
        if(email != "admin@email.com" || password != "admin")
            return;
        
    }
    return (
        <div className="LogIn">
            <Container>
                <Row>
                    <Col md={1}/>
                    <Col md={10}>
                    <div className="Form-Title">{ userType } Log In</div>
                        <Form>
                            <Form.Group className="mb-3 row align-items-center form-div" controlId="formBasicEmail">
                                <div className="col-md-3 text-label">
                                    <Form.Label>{ userType } E-Mail-Address</Form.Label>
                                </div>
                                <div className="col-md-9">
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>
                                <div className="invalid invalid-email" style={{display:eHide}}>Invalid E-mail. Reinput.</div>
                            </Form.Group>
                            <Form.Group className="mb-3 row align-items-center form-div" controlId="formBasicPassword">
                                <div className="col-md-3 text-label">
                                    <Form.Label>{ userType } Password</Form.Label>
                                </div>
                                <div className="col-md-9">
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                                </div>
                                <div className="invalid invalid-password" style={{display:pHide}}>Invalid Password. Reinput.</div>
                            </Form.Group>
                            <Row className="justify-content-center">
                                <Form.Group className="mb-3 col-md-3 check-label" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Performer" onChange={(e) => {
                                        if(userType == "User")
                                            setUserType("Performer")
                                        else
                                            setUserType("User")
                                    }} />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-3 check-label" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Save Password" />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" className="login-button" onClick={ loginHandler }> Login </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogIn;