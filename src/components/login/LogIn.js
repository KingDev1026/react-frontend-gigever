import React from "react";
import './LogIn.css';
import { Container, ListGroup, Form } from "react-bootstrap";

function LogIn () {
    return (
        <div className="LogIn">
            <Panel>
                <Panel.Heading>Panel heading</Panel.Heading>
                <Panel.Body>Some default panel content here.</Panel.Body>
                <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>&hellip;</ListGroupItem>
                </ListGroup>
                <Panel.Body>Some more panel content here.</Panel.Body>
            </Panel>
        </div>
    )
}

export default LogIn;