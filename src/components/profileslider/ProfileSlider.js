import React from "react";
import { useRef } from "react";
import './ProfileSlider.css';
import Banner from '../../assets/img/profile/top-background.jpg';
// import { Carousel } from "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Avatar1 from '../../assets/img/profile/1.png';
import Avatar2 from '../../assets/img/profile/2.png';
import Avatar3 from '../../assets/img/profile/3.png';
import Avatar4 from '../../assets/img/profile/4.png';
import Avatar5 from '../../assets/img/profile/5.png';
import Avatar6 from '../../assets/img/profile/1.png';
import Avatar7 from '../../assets/img/profile/2.png';
import Avatar8 from '../../assets/img/profile/3.png';
import Avatar9 from '../../assets/img/profile/4.png';
import Avatar10 from '../../assets/img/profile/5.png';
import Carousel from 'react-multi-carousel';
import { CarouselRef } from "react-bootstrap/esm/Carousel";

import "react-multi-carousel/lib/styles.css";

function ProfileSlider () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 5
        }
      };
    return (
        <div className="ProfileSlider">
            <div className="ProfileSlider-main">
                <img src={Banner} alt="banner"/>
            </div>
            <Container className="Slider-Main">
                <Row>
                    <Col md={6} sm={6}>
                        <Carousel responsive={responsive} autoPlay="true">
                            <div><img src={Avatar1} alt="Avatar1"/></div>
                            <div><img src={Avatar2} alt="Avatar2"/></div>
                            <div><img src={Avatar3} alt="Avatar3"/></div>
                            <div><img src={Avatar4} alt="Avatar4"/></div>
                            <div><img src={Avatar5} alt="Avatar5"/></div>
                            <div><img src={Avatar6} alt="Avatar6"/></div>
                            <div><img src={Avatar7} alt="Avatar7"/></div>
                            <div><img src={Avatar8} alt="Avatar8"/></div>
                            <div><img src={Avatar9} alt="Avatar9"/></div>
                            <div><img src={Avatar10} alt="Avatar10"/></div>
                        </Carousel>
                    </Col>
                    <Col md={6} sm={6}>asdf</Col>
                </Row>
            </Container>
        </div>
    )
}
// const afterChange = () => {
//     if (carouselRef.current) {
//         alert("Asdf")
//         const slide = carouselRef.current.state.currentSlide;
//         // slide is 2, 3, 4
//         // expecting 0, 1, 2
//     }
// };
export default ProfileSlider;