import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import p24 from '../Images/Img/Group 50.svg'
import p22 from '../Images/Img/Group 49.svg'
import p1 from '../Images/Img/Group 33.svg'
import p2 from '../Images/Img/Group 32.svg'
import p3 from '../Images/Img/Group 48.svg'
import p4 from '../Images/Img/Group 25.svg'
import p5 from '../Images/Img/Group 19 (1).svg'

const Roadmap = () => {


  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (<div id='roadmap' className='bg-transparent py-10 md:py-20 px-4 sm:px-14 md:px-28  sm:overflow-x-hidden'>
    <div className='p-3'>
      {/* <div className="ml-10 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
      <h1 className="bigHeading text-center font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f1552c] to-[#f1552c]">
          {" "}
          RoadMap{" "}
        </span>
      </h1>
      <p className='text-white pt-2 mb-2 text-center'>Learn more about our Vision behind Decentralised Finance Institute and our Mission towards greatness.</p>
      <br />
    </div>
    <div className="px-3">
      <Carousel style={{ color: "red" }} responsive={responsive}>
        <div><img src={screenSize.dynamicWidth >= 465 ? p1 : p1} style={{ position: "relative", top: "-1px" }} alt="" /></div>
        <div><img src={(screenSize.dynamicWidth >= 465) ? p2 : p22} style={{ position: "relative", top: "-2px" }} alt="" /></div>
        <div><img src={screenSize.dynamicWidth >= 465 ? p3 : p3} alt="" /></div>
        <div><img src={screenSize.dynamicWidth >= 465 ? p4 : p24} style={{ position: "relative", top: "3px" }} alt="" /></div>
        <div><img src={screenSize.dynamicWidth >= 465 ? p5 : p5} alt="" /></div>
      </Carousel>
    </div>
  </div>
  )
}

export default Roadmap