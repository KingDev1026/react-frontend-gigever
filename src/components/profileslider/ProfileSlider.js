import React, { useEffect, useRef, useState } from "react";
import './ProfileSlider.css';
import Banner from '../../assets/img/profile/top-background.jpg';
import { Carousel as BootCarousel } from "react-bootstrap";
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
import "react-multi-carousel/lib/styles.css";

function ProfileSlider () {
    const responsive = {
        superLargeDesktop: {
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
    const [curSlide, setCurSlide] = useState(2)
    return (
        <div className="ProfileSlider">
            <div className="ProfileSlider-main">
                <img src={Banner} alt="banner"/>
            </div>
            <Container className="Slider-Main">
                <Row>
                    <Col md={6} sm={6}>
                        <BootCarousel activeIndex={curSlide} controls={false} className="px-2" >
                            <BootCarousel.Item> <img src = {Avatar1} className = "d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar2} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar3} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar4} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar5} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar6} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar7} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar8} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar9} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                            <BootCarousel.Item> <img src = {Avatar10} className="d-block w-100" alt = "First slide"/> </BootCarousel.Item>
                        </BootCarousel>
                    </Col>
                    <Col md={6} sm={6} className="Title-Text">
                        <div className="Sm-Text">
                            WEDDING Photographer
                        </div>
                        <div className="Line-Text"/>
                        <div className="La-Text">
                            ANNI GRAHAN
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={6}>
                        <Carousel responsive={responsive} autoPlay="true" onMove={true}
                                beforeChange={(nextSlide, { currentSlide, onMove }) => {
                                    let showSlide = (nextSlide + 2) % 10
                                    setCurSlide(showSlide)
                                }}
                        >
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
                </Row>
            </Container>
        </div>
    )
}


export default ProfileSlider;