import React, { Component, useState } from "react";
import './ProBewer.css';
import { Container, Row, Col, ProgressBar, Panel, PanelGroup } from "react-bootstrap";
import {BsFillStarFill} from "react-icons/bs";
import Rating from 'react-simple-star-rating';
import ReactStars from 'react-stars';

const RatingStar = (props) => {
    const ratingChanged = (newRating) => {
        setRate(newRating)
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
const Progress = (props) => {
    return(
        <Row className="Progress">
            <Col className="Progress-Title" sm={3}>
                {props.title}
            </Col>
            <Col sm={7}>
                <ProgressBar now={props.value} variant="custom" className="Pro-Main"/>
            </Col>
            <Col className="Progress-Value" sm={2}>
                ({props.value})
            </Col>
        </Row>
    )
}
const Evalue = (props) => {
    return(
        <Row className="Evalue-Div">
            <Col className="Evalue-Title">
                {props.title}
            </Col>
            <Col className="Evalue-Value">
                ({props.value})
            </Col>
        </Row>
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
                            <RatingStar title="Reliability" mark={5} />
                            <RatingStar title="Friendliness" mark={5} />
                        </div>
                        <div className="Overall-Star">
                            <RatingStar title="Overall grade" mark={5}/>
                        </div>
                        <div className="Overall">
                            <div className="Overall-Title">
                                Overall rating according to stars
                            </div>
                            <div className="Progresses">
                                <Progress title="5 Stars" value={100}/>
                                <Progress title="5 Stars" value={0}/>
                                <Progress title="5 Stars" value={0}/>
                                <Progress title="5 Stars" value={0}/>
                                <Progress title="5 Stars" value={0}/>
                            </div>
                        </div>
                        <div className="Evaluations">
                            <div className="Evaluations-Title">
                                Evaluations by type of event
                            </div>
                            <Evalue title="Birthday" value={2} />
                            <Evalue title="Wedding" value={1} />
                        </div>
                    </Col>
                    <Col md={7} sm={12} className="Musical">
                        {/* <PanelGroup
                            accordion
                            id="accordion-controlled-example"
                            // activeKey={this.state.activeKey}
                            // onSelect={this.handleSelect}
                        >
                            <Panel eventKey="1">
                            <Panel.Heading>
                                <Panel.Title toggle>Panel heading 1</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>Panel content 1</Panel.Body>
                            </Panel>
                            <Panel eventKey="2">
                            <Panel.Heading>
                                <Panel.Title toggle>Panel heading 2</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>Panel content 2</Panel.Body>
                            </Panel>
                        </PanelGroup> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProBewer;