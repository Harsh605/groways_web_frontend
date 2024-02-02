import React from 'react';
import './Timeline.css'; // Import your CSS file
import logo from "../brand.jpg"

const Timeline = () => {
  return (
    <>
    <div id='roadmap' className='p-3'>
    {/* <div className="ml-10 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
    <h1 className="bigHeading text-center font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4cc9f0] to-[#4cc9f0]">
        {" "}
        RoadMap{" "}
      </span>
    </h1>
    <p className='text-white pt-2 mb-2 text-center'>Learn more about our Vision and Steps behind Decentralised Finance Institute and our Mission towards greatness.</p>
    <br />
  </div>
    <div className="timeline">
      <div className="container_timeline left-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>Website Launch Date</h1>
          <small> 1 Oct 2023</small>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="left-arrow"></span>
        </div>
      </div>

      <div className="container_timeline right-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>Ist Ico Launch Date</h1>
          <small> Oct-Nov 2023</small>
          {/* <small>2021-22</small> */}
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="right-arrow"></span>
        </div>
      </div>
      

      <div className="container_timeline left-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>2nd Ico Launch Date</h1>
          <small> Dec-Jan 2023</small>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="left-arrow"></span>
        </div>
      </div>

      <div className="container_timeline right-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>Listing On PenCake Exchange</h1>
          <small>March 2024</small>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="right-arrow"></span>
        </div>
      </div>

      <div className="container_timeline left-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>5 Exchange Listing Dates</h1>
          
          <small>May 2024, June 2024, July 2024, Aug 2024, Sept 2024   </small>
         
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="left-arrow"></span>
        </div>
      </div>

      <div className="container_timeline right-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>DFI Wallet</h1>
          <small>Oct 2024</small>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="right-arrow"></span>
        </div>
      </div>
      <div className="container_timeline left-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>DFI Blockchain</h1>
          
          <small>Oct 2024</small>
         
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="left-arrow"></span>
        </div>
      </div>
      <div className="container_timeline right-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>Coin Market Cap</h1>
          <small>Nov 2024</small>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="right-arrow"></span>
        </div>
      </div>
      <div className="container_timeline left-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>DEX- DFI Coin, Farming- ARB Coins</h1>
          
          <small>Dec 2024</small>
         
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="left-arrow"></span>
        </div>
      </div>
      <div className="container_timeline right-container_timeline">
        <img className='img_timeline' src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" alt="" />
        <div className="textbox">
          <h1>Price Predection- 100000$ </h1>
          <small>Till Jan 2025</small>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odit libero exercitationem, excepturi labore praesentium asperiores itaque rem accusantium minima!</p> */}
          <span className="right-arrow"></span>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Timeline;
