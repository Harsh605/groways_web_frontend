import React, { Component } from "react";
import Slider from "react-slick";
import './FRGXTokan.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            customPaging: (i) => (
                <div
                    style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "white", // Set the background color to white
                        margin: "0 5px",
                        cursor: "pointer",
                    }}
                ></div>
            ),
        };
        return (
            <div style={{}}>
                <Slider {...settings}>
                    <div className="">

                    </div>


                </Slider>
            </div>
        );
    }
}