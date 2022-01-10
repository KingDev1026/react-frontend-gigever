import React, { useState } from "react";
import './ResultBody.css';
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { BsFunnelFill } from "react-icons/bs";
import ReactStars from 'react-stars';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'

const sliderStyle = {  // Give the slider some width
    position: 'relative',
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    // border: '1px solid steelblue',
}  
const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
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
            marginLeft: -10,
            marginTop: 25,
            zIndex: 2,
            width: 15,
            height: 30,
            border: 0,
            textAlign: 'center',
            cursor: 'pointer',
            // borderRadius: '50%',
            backgroundColor: '#2C4870',
            color: '#333',
          }}
          {...getHandleProps(id)}
        >
          <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
            {value}
          </div>
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
                marginTop: 35,
                backgroundColor: '#546C91',
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
    return(
        <Slider
            rootStyle={sliderStyle /* inline styles for the outer div. Can also use className prop. */}
            domain={[0, 100]}
            step={1}
            mode={2}
            values={[0, 100]}
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
                ))}
                </div>
            )}
            </Handles>
            <Tracks right={false}>
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
    )
}
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
                                <Button className="Every-Button" variant="secondary ">egal</Button>
                            </ButtonGroup>
                        </div>
                        <CustomSlider />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResultBody;