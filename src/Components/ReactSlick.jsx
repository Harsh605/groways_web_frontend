
import React, { Component } from "react";
import Slider from "react-slick";
import './ReactSlick.css'

export default class Autoplay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 911,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]

            //    cssEase: "linear"
        };
        return (
            <div className="slider-main-div" >
                {/* <h2 class="title">Voices of Our <span class="cus_title">Satisfied Clients</span></h2> */}
                <div className="slider-div">

                    <Slider {...settings}>

                        <div className="background-container">
                            <div className="slider-left-div">
                                <h1>FRGX Tokan</h1>
                                <button>
                                    More About FRGX
                                </button>
                                {/* Your content goes here */}
                            </div>
                        </div>
                        <div className="background-container-1">
                            <div className="slider-left-div-1">
                                <h1>MaxQore</h1>
                                <p>Meet MaxQore, the largest Forsage program ever!</p>
                                {/* Your content goes here */}
                            </div>
                        </div>

                        {/* <div className="background-container-2">
                            <div className="slider-left-div-2">
                                <h1>FRGX Tokan</h1>
                                <button>
                                    More About FRGX
                                </button>
                            </div>
                            <div className="slider-right-div-2">
                            </div>
                        </div> */}

                    </Slider>
                </div>

            </div>
        );
    }
}


{/* <section className="osiz_testimonial_sec">
    <div className="container">
        <h2 className="title">
            Voices of Our <span className="cus_title">Satisfied Clients</span>
        </h2>
        <div className="testimonials slider">
            <div className="item">
                <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/Nicky.webp"
                    className="img-fluid user_img"
                    alt="Testimonials"
                    title="Testimonials"
                />
                <div className="testMoLst">
                    <div className="testMoImgBg">
                        <div className="head_sec">
                            <p className="sub_title">Nicky G Khun</p>
                            <p className="sub_title1">
                                Business Developer at SF Capital
                            </p>
                        </div>
                        <a
                            href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                            target="_blank"
                        >
                            <img
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                                className="img-fluid"
                                alt="Review-Star"
                                title="Review"
                            />
                        </a>
                    </div>
                    <p className="sub_contents">
                        "I have been working with Osiz Technologies with three
                        months until now. I have been very satisfied with the
                        outcome of the work produced by them. I have dealt with
                        crypto exchange and trading website, an excellent
                        professional and with the best customer service."
                    </p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/Mandid.webp"
                    className="img-fluid user_img"
                    alt="Testimonials"
                    title="Testimonials"
                />
                <div className="testMoLst">
                    <div className="testMoImgBg">
                        <div className="head_sec">
                            <p className="sub_title">Manid Chimhoga</p>
                            <p className="sub_title1">
                                Financial Advisor at Liberty Life
                            </p>
                        </div>
                        <a
                            href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                            target="_blank"
                        >
                            <img
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                                className="img-fluid"
                                alt="Review-Star"
                                title="Review"
                            />
                        </a>
                    </div>
                    <p className="sub_contents">
                        "I have had the opportunity and pleasure to work with Osiz
                        for a year and and they are the best above the rest. Working
                        with them is a bliss because of their are flexibility, which
                        is a plus especially on blockchain projects, which
                        inevitably require constant tweaking and structural
                        improvements."
                    </p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/victor.webp"
                    className="img-fluid user_img"
                    alt="Testimonials"
                    title="Testimonials"
                />
                <div className="testMoLst">
                    <div className="testMoImgBg">
                        <div className="head_sec">
                            <p className="sub_title">Victor Odera</p>
                            <p className="sub_title1">Director at ZaZu Mall Ltd</p>
                        </div>
                        <a
                            href="https://clutch.co/profile/osiztechnologies#reviews"
                            target="_blank"
                        >
                            <img
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/clutch.webp"
                                className="img-fluid"
                                alt="Review-Star"
                                title="Review"
                            />
                        </a>
                    </div>
                    <p className="sub_contents">
                        "The company has done good job despite not meeting with us
                        physically. They developed, improved, protected our system
                        until when they handed over everything. hey never complained
                        but always created time out of their busy scheduled time
                        table to come to our rescue whenever need arose."
                    </p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/testimonial-user.webp"
                    className="img-fluid user_img"
                    alt="Testimonials"
                    title="Testimonials"
                />
                <div className="testMoLst">
                    <div className="testMoImgBg">
                        <div className="head_sec">
                            <p className="sub_title">Kavita Pandey</p>
                            <p className="sub_title1">CEO, Titan Corp Inc</p>
                        </div>
                        <a
                            href="https://clutch.co/profile/osiztechnologies#reviews"
                            target="_blank"
                        >
                            <img
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/clutch.webp"
                                className="img-fluid"
                                alt="Review-Star"
                                title="Review"
                            />
                        </a>
                    </div>
                    <p className="sub_contents">
                        "Osiztechnologies Limited deployed the smart contracts and
                        pushed the three games to the production server. Their team
                        provided prompt responses and got the work done, though they
                        improve their delivery time. Moreover, they facilitated a
                        good workflow between both parties."
                    </p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/choi.webp"
                    className="img-fluid user_img"
                    alt="Testimonials"
                    title="Testimonials"
                />
                <div className="testMoLst">
                    <div className="testMoImgBg">
                        <div className="head_sec">
                            <p className="sub_title">choi john</p>
                            <p className="sub_title1">CTO at braindude</p>
                        </div>
                        <a
                            href="https://www.goodfirms.co/company/osiz-technologies-p-ltd"
                            target="_blank"
                        >
                            <img
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/good-firms.webp"
                                className="img-fluid"
                                alt="Review-Star"
                                title="Review"
                            />
                        </a>
                    </div>
                    <p className="sub_contents">
                        "I've been working with OSIZ Technologies' Subramanian for
                        the last few months. They were so kind and gave me a very
                        satisfying result. Technology was the best, and they
                        responded in real time to meet my expectations. I'm very
                        happy to recommend Osiz for web &amp; software development."
                    </p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/testimonial-user.webp"
                    className="img-fluid user_img"
                    alt="Testimonials"
                    title="Testimonials"
                />
                <div className="testMoLst">
                    <div className="testMoImgBg">
                        <div className="head_sec">
                            <p className="sub_title">Gisella Josephine</p>
                            <p className="sub_title1">Co-Founder, at BDC</p>
                        </div>
                        <a
                            href="https://clutch.co/profile/osiztechnologies#reviews"
                            target="_blank"
                        >
                            <img
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/clutch.webp"
                                className="img-fluid"
                                alt="Review-Star"
                                title="Review"
                            />
                        </a>
                    </div>
                    <p className="sub_contents">
                        "They delivered our blockchain project, which has a
                        measurable, tangible, and verified outcome. They
                        communicated via Skype and Telegram. Their availability and
                        responsiveness throughout the engagement impressed the
                        client."
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>  */}
