import React, { useState } from 'react';
import './Navbar.css';
import Brand from "../brand2.png"
import WagmiUtils from '../blockchain/WagmiUtils';
import YourApp from '../blockchain/YourApp';
import BuyPopUp from './BuyNowPopUp';
import { useAccount } from 'wagmi';

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    if (isNavbarOpen) {
      setNavbarOpen(false);
    }
  };

  const { address, isConnected } = useAccount()
  const [open, setOpen] = useState(false)

  const handleOpenBuyPopup = () => {
    setOpen(true)
  }

  return (
    <header className="navbar-header-container">
      <div className="main-navbar-div">
        {/* <nav className="nav-primary navbar navbar-expand-lg justify-content-spa">
          <button className="navbar-toggler p-0 " type="button" onClick={toggleNavbar}>
            <i style={{ color: "rgb(241, 85, 44)" }} className="fa-solid fa-bars fs-4"></i>
          </button>
          <div className={`navbar-collapse offcanvas-collapse ${isNavbarOpen ? 'show' : ''}`}>
            <ul id="menu-main" className={`navbar-nav h-[100vh] lg:h-auto align-items-center justify-content-${isNavbarOpen ? 'center' : 'around'} w-100`}>
              <li id="menu-item-26" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 nav-item">
                <a href="#ecosystem" title="Ecosystem" className={`nav-link no-underline ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>Ecosystem</a>
              </li>
              <li id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27 nav-item">
                <a href="#howToBuy" title="How to Buy" className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>How to Buy</a>
              </li>
              <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28 nav-item">
                <a href="#roadmap" title="Roadmap" className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>Roadmap</a>
              </li>
              <li id="menu-item-32" className="LOGO menu-item menu-item-type-custom menu-item-object-custom menu-item-32 nav-item">
                <a href="#" className={`nav-link menu-image-title-after menu-image-not-hovered ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>
                  <img width="123" src={Brand} className="menu-image menu-image-title-after" alt="" loading="lazy" />
                  <span className="menu-image-title-after menu-image-title"></span>
                </a>
              </li>
              <li id="menu-item-142" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-142 nav-item">
                <a href='#blockchains' title="BLOCKCHAINS" className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>BLOCKCHAINS</a>
              </li>
              <li id="menu-item-30" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 nav-item">
                <a href="#tokenomics" title="Community" className={`nav-link ${isNavbarOpen ? 'text-black' : 'text-white'}`} onClick={handleLinkClick}>Tokenomics</a>
              </li>
            </ul>
          </div>
        </nav> */}
        <nav className="navbars ">
          <div className='Navbar-left-header flex justify-center p-2'>
            {/* <p className="text-white text-lg pt-3" style={{fontFamily:"sans-serif"}}>Groways</p> */}
            <img src="/Growayslogo1-preview.png" alt="" />
          </div>

          <div>
              <BuyPopUp open={open} setOpen={setOpen} address={address} />

            <div className='Navbar-right-header' >


              {!isConnected ?
                <WagmiUtils comp={<YourApp style={{ borderColor: "#f1552c" }} classes="btn btn-primary bg-transparent border-4  border-color-custom-1" />} />
                : <div className='flex flex-wrap justify-center gap-2'>
                  <a className="btn btn-primary bg-transparent border-4 border-color-custom" style={{ borderColor: "#f1552c" }}>
                    {address.slice(0, 6)}...{address.slice(-4)}
                  </a>

                </div>}

            </div>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
