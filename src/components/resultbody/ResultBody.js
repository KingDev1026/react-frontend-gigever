import React, { useState } from "react";
import './ResultBody.css';
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { BsFunnelFill } from "react-icons/bs";
import ReactStars from 'react-stars';

const RatingStar = (props) => {
    // const ratingChanged = (newRating) => {
    //     setRate(newRating)
    // }
    const [rate, setRate] = useState(5)
    return (
        <div className="RatingStar">
            <Row className="RatingRow">
                <Col className="Star-Title" sm={3}>
                    {props.title}
                </Col>
                <Col className="Star-Mark" sm={9}>
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        value={props.value}
                        size={35}
                        color2={'#ffd700'} 
                    />
                </Col>
            </Row>
        </div>
    )
}
function ResultBody () {
    return(
        <div className="ResultBody">
            <Container>
                <Row>
                    <Col lg={3} sm={12} className="Search">
                        <div className="Search-Title">
                            <BsFunnelFill className="Search-Icon"/>
                            <div className="Search-Title1">
                                Suche eingrenzen
                            </div>
                        </div>
                        <div className="Bewertung">
                            <div className="Bewertung-Title">
                                Bewertung
                            </div>
                            <RatingStar title="mind." value={0} />
                        </div>
                        <div className="Geschiecht">
                            <div className="Geschiecht-Title">
                                Geschiecht
                            </div>
                            <ButtonGroup className="Geschiecht-Button" aria-label="Basic example">
                                <Button className="Every-Button" variant="secondary">männlich</Button>
                                <Button className="Every-Button" variant="secondary">weiblich</Button>
                                <Button className="Every-Button" variant="secondary">egal</Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResultBody;