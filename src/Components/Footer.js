import React from 'react'
import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
// import Privacypolicy from './Privacypolicy';
function Footer() {
    return (
        <div className="bg-transparent  lg:px-28 pt-14 px-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
                <div >
                    <h1 className="text-[#4361EE] font-semibold lg:text-2xl pt-3">Decentralised Finance Institute</h1>
                    <p className="text-white xl:w-[559px] pt-4">
                        Our vision is to transform the education sector into a decentralized and financially empowered ecosystem.
                    </p>
                    <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-1 md:grid-cols-1 pt-9">

                        <div className="flex gap-2 text-white md:pt-4 pt-4 xl:pt-0">
                            <svg

                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white bg-[#4361EE] rounded-full leading-4 p-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                />
                            </svg>
                            <div>
                                <p className="text-[#4361EE] mb-0 fs-5">Contact us at</p>
                                <p className='fs-5'>contact@dfi.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="text-[#4361EE] font-semibold lg:text-xl md:pt-4 ">
                            Newsletter
                        </h2>
                        <p className="text-white xl:w-[555px] pt-4 pb-5">
                            Be the first one to know about discounts, offers and events.
                            Unsubscribe whenever you like.
                        </p>
                        <div className="relative">
                            <input
                                placeholder="Enter your email"
                                className="rounded-full px-4 py-3 bg-[#342F49] w-full input-p"
                            ></input>
                            <button className="homePageBtnHover text-white md:px-7 md:py-3 px-7 text-xs md:text-base rounded-full bg-[#6366F1] h-full absolute right-0 submit-btn hover:text-black hover:text-black c-btn tracking-wider overflow-hidden">
                                <span className="absolute inset-0 bg-[#4361EE]"></span>
                                <span className="absolute inset-0 flex justify-center items-center">
                                    Submit
                                </span>
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end pt-5 gap-4 socials">

                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" href="https://www.linkedin.com/in/buff-goofy-164bb027a">
                                <FaLinkedinIn className="social-links text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                            </a></span>
                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" href="mailto:contact@dfi.com">
                                <i className="social-links fa-solid fa-envelope text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8"></i>
                            </a></span>
                        </div>
                        <div className=" relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" href="https://www.facebook.com/profile.php?id=100093479117440">
                                <i className=" social-links fa-brands fa-facebook text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8"></i>
                            </a></span>
                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block">
                                <a target="_blank" href="https://www.instagram.com/buff.goofy/">
                                    <i className="social-links fa-brands fa-instagram text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8"></i>
                                </a></span>

                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block">
                                <a target="_blank" href="http://discordapp.com/users/1118422230804725760">
                                    <i className="social-links fa-brands fa-discord text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8"></i>
                                </a></span>

                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block">
                                <a target="_blank" href="https://www.reddit.com/user/Buff_Goofy/">
                                    <i className="social-links fa-brands fa-reddit text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8"></i>
                                </a></span>

                        </div>
                        <div className="relative overflow-hidden block footer-div cursor-pointer">
                            <span className="block"><a target="_blank" href="https://twitter.com/findoutsoon">
                                <FiTwitter className="social-links text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                            </a></span>
                        </div>
                        {/* <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <FaWhatsapp className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div> */}
                    </div>
                </div>
            </div>

            {/* Lower footer */}
            <div className="grid lg:grid-cols-2 grid-cols-1 pt-16 md:grid-cols-1">
                <div className="md:flex justify-between text-white text-xs md:text-base flex-col lg:flex-row">
                    <p>
                        <a className='footer-links no-underline text-white ' href='#ecosystem'>Ecosystem</a>
                    </p>
                    <p><a className='footer-links no-underline text-white' href='#roadmap'>Roadmap</a></p>
                    {/* <Privacypolicy /> */}
                    <p><a className='footer-links no-underline text-white' href='#tokenomics'>Tokenomics</a></p>
                    <p><a className='footer-links no-underline text-white' href='#howToBuy'>How to Buy</a></p>
                </div>
                <div className="text-white lg:justify-end justify-start pt-0 flex md:justify-start md:pt-4 text-xs md:text-base lg:pt-0">
                    © 2000-2023, All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer