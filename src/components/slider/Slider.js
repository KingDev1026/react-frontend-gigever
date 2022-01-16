import React from "react";
import './Slider.css';
import { Carousel } from "react-bootstrap";
import FirstImage from "../../assets/img/listing_musicians.jpg"
import SecondImage from "../../assets/img/music_service.jpg"

function Slider() {
    return ( <
        div className = "Slider" >
        <
        Carousel controls = { false } >
        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = { FirstImage }
        alt = "First slide" /
        >
        <
        Carousel.Caption >
        <
        h2 >
        Find your < br / >
        Ideal Entertainment < br / >
        Services at Best Prices < br / >
        <
        /h2> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = { SecondImage }
        alt = "Second slide" /
        >

        <
        Carousel.Caption >
        <
        h2 >
        Find your < br / >
        Ideal Entertainment < br / >
        Services at Best Prices < br / >
        <
        /h2> <
        /Carousel.Caption> <
        /Carousel.Item> <
        /Carousel> <
        /div>
    )
}

export default Slider;