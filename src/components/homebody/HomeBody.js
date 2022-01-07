import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import './HomeBody.css';
import { Row, Col, Card } from "react-bootstrap";
import CardImage1 from '../../assets/img/card1.jpg';
import CardImage2 from '../../assets/img/card2.jpg';
import CardImage3 from '../../assets/img/card3.jpg';

const UserCard = (props) => {
    return(
        <Card>
            <Row>
                <Col>
                    <Card.Img variant="top" src={props.img} />
                </Col>
            </Row>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description1}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}
function HomeBody (){
    return (
        <div className="HomeBody">
            <div className="Body-Title">
                In 3 steps to a world class celebration
            </div>
            <Row className="Body-Card">
                <Col>
                    <UserCard 
                        img={CardImage1} 
                        title="Vergleichen & Buchen" 
                        description1="Einfach Event-Daten engebon, Suche starten und passende Dienstleister deutschlandweit vergleichen.Buchen Sie Ihre Wunsch-Angebot sofort online zum Komplettpreis."                         
                    />
                </Col>
                <Col>
                    <UserCard 
                        img={CardImage2} 
                        title="Details & Vorgesprach" 
                        description1="Nach Ihrer Buchung haben Sie genug Zeit den Dienstleister im Vorgesprach kennenzulernen. Chemie stimmt nicht? Kein Problem! Widerrufen Sie kostenfrei."                         
                    />
                </Col>
                <Col>
                    <UserCard 
                        img={CardImage3} 
                        title="Weltklasse feiern" 
                        description1="Am Tag der Feier kommt der Dienstleister inkl. gebuchter Extras zu Ihrer Location. Feiem Sie, genieBen Sie und bewerten Sie den Dienstleister anschileBend."                         
                    />
                </Col>
            </Row>
        </div>
    )
}

export default HomeBody;