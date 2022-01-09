import React from "react";
import './Request.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import Photo from '../../assets/img/profile/avata.png';
import LeftImg from '../../assets/img/profile/left.jpg';

function Request () {
    return (
        <div className="Request">
            <div className="Left-Image">
                <img src={LeftImg} alt="banner"/>
            </div>
            <Container>
                <Row>
                    <Col lg={6} sm={12} className="Request-Text">
                        <div className="Request-Name">
                            ANNI GRAHAN
                        </div>
                        <div className="Request-Question">
                            How Can I Start<br/>
                            Shooting Elopements<br/>
                            & Intimate Weddings?
                        </div>
                        <div className="Request-Answer">
                            ANNI's answer.<br/>
                            As a lover of extended hikes, epic sceneries and road trips around the<br/>
                            world,Anni has managed to build a business around all the things she<br/>
                            is passionate about. her job dosen't only allow her to keep exploring<br/>
                            the planet-her enthusiasm also attracts her ideal clientele.<br/><br/>
                            She will share all about her leap into elopements & intimate weddings<br/>
                            and how she wows her clients with her epic iimages.
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="Request-Image">
                            <img src={Photo} alt="banner"/>
                        </div>
                        <Button className="request-button">Request Anni</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Request;