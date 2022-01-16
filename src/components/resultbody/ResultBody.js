import React, { useState } from "react";
import './ResultBody.css';
import { Container, Row, Col, Button, ButtonGroup, Carousel } from "react-bootstrap";
import { BsFunnelFill } from "react-icons/bs";
import ReactStars from 'react-stars';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import FirstImage from "../../assets/img/listing_musicians.jpg"
import SecondImage from "../../assets/img/music_service.jpg"
import { Link } from 'react-router-dom';

const sliderStyle = {  // Give the slider some width
    position: 'relative',
    width: '100%',
    height: 40,
    // backgroundColor: 'white',
    // border: '1px solid steelblue',
}  
const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
}
const Handle = ({
    handle: { id, value, percent },
    getHandleProps
}) => {
    return (
        <div
          style={{
            left: `${percent}%`,
            position: 'absolute',
            marginLeft: -5,
            marginTop: 7,
            zIndex: 2,
            width: 15,
            height: 25,
            border: 0,
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '20%',
            backgroundColor: '#2a917d',
            color: '#333',
          }}
          {...getHandleProps(id)}
        >
          {/* <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
            {value}
          </div> */}
        </div>
    )
}
const Track = ({source, target, getTrackProps}) => {
    return (
        <div
            style={{
                position: 'absolute',
                height: 10,
                zIndex: 1,
                marginTop: 15,
                backgroundColor: '#2a917d',
                borderRadius: 5,
                cursor: 'pointer',
                left: `${source.percent}%`,
                width: `${target.percent - source.percent}%`,
            }}
            {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
        />
    )
}
const CustomSlider = (props) => {
    const [curVal, setCurVal] = useState(props.minval + props.unit + " - " + props.maxval + props.unit)
    return(
        <div className="CustomSlider">
            <div className="Slider-Text">
                <div className="Slider-Title Title-Class">{props.title}</div>
                <div className="Slider-Curval">{curVal}</div>
            </div>
            <Slider
                rootStyle={sliderStyle /* inline styles for the outer div. Can also use className prop. */}
                domain={[props.minval, props.maxval]}
                step={1}
                mode={2}
                values={[props.minval, props.maxval]}
                onChange={(event) => {setCurVal(event[0] + props.unit + " - " + event[1] + props.unit) }}
                className="Slider-Main"
            >
                <Rail>
                    {({ getRailProps }) => (
                        <div style={railStyle} {...getRailProps()} />
                    )}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))
                            }
                        </div>
                    )}
                </Handles>
                <Tracks right={false} left={false}>
                {({ tracks, getTrackProps }) => (
                    <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                        <Track
                            key={id}
                            source={source}
                            target={target}
                            getTrackProps={getTrackProps}
                        />
                    ))}
                    </div>
                )}
                </Tracks>
            </Slider>
        </div>
    )
}
const CustomCheck = (props) => {
    return (
        <div class="CustomCheck">
            <input type="checkbox" class="Check-Control-Input" id="Check-Control-Input" indeterminate />
            <span class="checkmark"></span>
            <label class="Check-Control-Label" for="Check-Control-Input">{props.title}</label>
      </div>
    )
}
const RatingStar = (props) => {
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
                        size={props.size}
                        color2={'#ffd700'} 
                        // editing={false} 
                        edit={false}
                    />
                </Col>
            </Row>
        </div>
    )
}
const CustomCard = (props) => {
    return (
        <div className="CustomCard">
            <Carousel controls={true}>
                <Carousel.Item>
                    <img
                        className = "d-block w-100"
                        src = {FirstImage}
                        alt = "First slide"
                    />
                    <Carousel.Caption className="Cap-Text">
                        <div className="FirstName">
                            {props.firstName}
                        </div>
                        <div className="Age">
                            {props.age + "years , " + props.distance + "km"}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className = "d-block w-100"
                        src = {SecondImage}
                        alt = "Second slide"
                    />

                    <Carousel.Caption className="Cap-Text">
                        <div className="FirstName">
                            {props.firstName}
                        </div>
                        <div className="Age">
                            {props.age + " , " + props.distance + "km"}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="Job-Rating">
                <div className="Description">
                    Mobile DJ <br/>
                    Wedding DJ
                </div>
                <div className="Re-Rating">
                    <div className="Ra-Text">{ props.rating }</div>
                    <RatingStar title="" value={ props.rating } size={20}/>
                </div>
            </div>
            <div className="word">
                <div className="word-element">
                    Independent
                </div>
                <div className="word-element">
                    All-Round
                </div>
                <div className="word-element">
                    Charts
                </div>
                <div className="word-element">
                    Classic Rock
                </div>
                <div className="word-element">
                    Disco
                </div>
            </div>
            <div className="introduction">
                {props.introduction}
            </div>
            <div className="price-more">
                <div className="price">
                    {props.priceUnit + " " + props.price}
                </div>
                {/* <Button className="more" variant="primary">more</Button> */}
                <Link to="/profile" className='more n-link en-link nav-link'>more</Link>
            </div>
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
                            <div className="Search-Title1 Title-Class">
                                Suche eingrenzen
                            </div>
                        </div>
                        <div className="Bewertung">
                            <div className="Bewertung-Title Title-Class">
                                Bewertung
                            </div>
                            <RatingStar title="mind." value={0} size={35} />
                        </div>
                        <div className="Geschiecht">
                            <div className="Geschiecht-Title Title-Class">
                                Geschiecht
                            </div>
                            <ButtonGroup className="Geschiecht-Button" aria-label="Basic example">
                                <Button className="Every-Button" variant="secondary">männlich</Button>
                                <Button className="Every-Button" variant="secondary">weiblich</Button>
                                <Button className="Every-Button" variant="secondary ">egal</Button>
                            </ButtonGroup>
                        </div>
                        <CustomSlider title="Preis" minval={470} maxval={2260} unit="€"/>
                        <CustomSlider title="Entfernung" minval={0} maxval={300} unit="km"/>
                        <CustomSlider title="Alter" minval={25} maxval={74} unit="Jahre"/>
                        <CustomSlider title="Erfahrung" minval={3} maxval={57} unit="Jahre"/>
                        <CustomSlider title="Bewertungen" minval={0} maxval={307} unit="Jahre"/>
                        <CustomSlider title="Buchungen" minval={0} maxval={602} unit="Jahre"/>
                        <div className="Musik-Rich">
                            <div className="Musik-Title Title-Class">
                                Musikrichtungen
                            </div>
                            <CustomCheck title="80er Hits"/>
                            <CustomCheck title="90er Hits"/>
                            <CustomCheck title="Allround"/>
                            <CustomCheck title="Charts"/>
                            <CustomCheck title="Country"/>
                            <CustomCheck title="Disco"/>
                            <CustomCheck title="Eloktro"/>
                            <CustomCheck title="Funk"/>
                            <CustomCheck title="Hip Hop"/>
                            <CustomCheck title="House"/>
                        </div>
                    </Col>
                    <Col lg={9} sm={12} className="Card-Box">
                        <Row>
                            <Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col>
                            <Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col><Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col><Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col><Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col><Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col><Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col>
                            <Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col>
                            <Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col><Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col><Col lg={4} sm={6}>
                                <CustomCard 
                                    firstName="Christian" 
                                    age={12} 
                                    distance={11} 
                                    rating={5} 
                                    introduction="Happy guests are roses for old age. Celebrate with us."
                                    price={760}
                                    priceUnit="$"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResultBody;