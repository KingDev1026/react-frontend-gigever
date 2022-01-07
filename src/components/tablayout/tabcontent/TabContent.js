import React from "react";
import './TabContent.css';
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import {BiMap} from 'react-icons/bi';
import {FaRegCalendarAlt, FaRegClock} from 'react-icons/fa';

function TabContent () {
    return(
        <div className="TabContent">
            <Container>
                <Row>
                    <Col md = {10}>
                        <Table striped bordered hover className="Tab-Table">
                            <thead>
                                <tr>
                                    <th><BiMap className="Table-Icon"/>22523 Hamburg</th>
                                    <th><FaRegCalendarAlt className="Table-Icon"/>Do, 13.01.2022</th>
                                    <th><FaRegClock className="Table-Icon"/>18:00 - <FaRegClock className="Table-Icon"/>03:00</th>
                                    <th>Jazz</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                    <Col md = {2}>
                        <Button variant="danger" className="search-btn">search</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TabContent;