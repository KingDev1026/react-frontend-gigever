import React from "react";
import './ProDescription.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import Image1 from '../../assets/img/profile/1.png';
import Image2 from '../../assets/img/profile/2.png';
import Image3 from '../../assets/img/profile/3.png';
import Image4 from '../../assets/img/profile/4.png';
import Image5 from '../../assets/img/profile/5.png';
import { BsQuestionCircle } from "react-icons/bs";

const DesText = () => {
    return (
        <div className="Des-Text">
            <div className="Des-Icon">
                <BsQuestionCircle/>
            </div>
            <div className="Des-Desctiption">
                You sit your car after a couple session, feeling 
                frustrated because once again you haven't been able to 
                get those natural shots you have always dreamed of 
                taking-and you are completely unsure about how to 
                get there?
            </div>
        </div>
    )
}
function ProDescription() {
    return (
        <div className="ProDescription">
            <Container>
                <div className="Des-Title">
                    ANNI'S PORTFOLIO
                </div>
                <div className="Des-Main">
                    <Row className="mt-5">
                        <Col md={4} sm={12}>
                            <div className="Des-Image">
                                <img src={Image1} alt="banner"/>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <DesText />
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="Des-Image">
                                <img src={Image2} alt="banner"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} sm={12}>
                            <DesText />
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="Des-Image">
                                <img src={Image3} alt="banner"/>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <DesText />
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col md={4} sm={12}>
                            <div className="Des-Image">
                                <img src={Image1} alt="banner"/>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <DesText />
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="Des-Image">
                                <img src={Image2} alt="banner"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ProDescription;
