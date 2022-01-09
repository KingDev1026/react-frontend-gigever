import React, { Component, useState } from "react";
import './ProBewer.css';
import { Container, Row, Col } from "react-bootstrap";
import {BsFillStarFill} from "react-icons/bs";
import Rating from 'react-simple-star-rating';
import ReactStars from 'react-stars';

const RatingStar = (props) => {
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    const [rate, setRate] = useState(5)
    return (
        <div className="RatingStar">
            <Row className="contain">
                <Col className="Star-Title" sm={4}>
                    {props.title}
                </Col>
                <Col className="Star-Mark" sm={5}>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        value={5}
                        size={35}
                        color2={'#ffd700'} 
                    />
                </Col>
                <Col className="Rating-Value" sm={1}>
                    {rate}
                </Col>
            </Row>
        </div>
    )
}
function ProBewer() {
    return (
        <div className="ProBewer">
            <Container>
                <Row>
                    <Col md={5} sm={12} className="Bewertungen">
                        <div className="title">
                            <BsFillStarFill className="title-icon" />
                            <div className="title-text">
                                <h5>Bewertungen</h5>
                                <h6>Make a Bid through the Opinions of other Customers</h6>
                            </div>
                        </div>
                        <div className="Stars">
                            <div className="Stars-Title">
                                0 Overall Grade: 6 Out of 6 Stars From 3 Ratings
                            </div>
                            <RatingStar title="Power" mark={5} />
                            <RatingStar title="Power" mark={5} />
                            <RatingStar title="Power" mark={5} />
                            <RatingStar title="Power" mark={5} />
                        </div>
                    </Col>
                    <Col md={7} sm={12}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProBewer;