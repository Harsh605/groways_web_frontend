import React, { useEffect, useState } from "react";
import video_1 from "../Images/missiongraphic.png"

function SecondCompo() {


  return (
    <>
      <section id="home" className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div>
                <h1 className="section_heading">
                  First step to invest in TA Trading
                </h1>
                <p className="para">
                  Welcome to TA Trading, the world’s first 100% Decentralized
                  platform for everyone to invest &amp; earn profit with
                  multi-trading assets.
                </p>
                <div className="hero_table"></div>

                <div className="time_counter_div">
                  <div className="my-5 who_we_content_col">
                    <a
                      // download
                      className="btns header_btn_hover"
                    // target="_blank"
                    // href={File}
                    >
                      ROI - 8% Monthly
                    </a>
                  </div>
                  <div>
                    <div id="countdown">
                      <ul className="countdown">
                        <li>
                          <span className="time_num" id="days">
                            {" "}
                            {/* {countdown?.days} */}
                          </span>
                          days
                        </li>
                        <li>
                          <span className="time_num" id="hours">
                            {" "}
                            {/* {countdown?.hours} */}
                          </span>
                          Hours
                        </li>
                        <li>
                          <span className="time_num" id="minutes">
                            {" "}
                            {/* {countdown?.minutes} */}
                          </span>
                          Minutes
                        </li>
                        <li>
                          <span className="time_num" id="seconds">
                            {/* {countdown?.seconds} */}
                          </span>
                          Seconds
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="time_counter_div">
                  <h3>Join the TA Trading Community</h3>
                  <div>
                    <div>
                      <ul className="header_socail_icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/htx_in" target="_blank">
                            <i className="fa fa-telegram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="home-banner-left">
                <img
                  className="img-fluid"
                  src={video_1}
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondCompo;
