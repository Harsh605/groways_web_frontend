import React, { Fragment, useEffect, useRef, useState } from "react";
import './DashBoard.css'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import NorthIcon from '@mui/icons-material/North';
import { FaCopy } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import { FaWallet } from "react-icons/fa6";






const Dashboard = () => {

  const [visibleItems, setVisibleItems] = useState(15); // Number of items to display initially

  const [isSeeMoreVisible, setIsSeeMoreVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
        setIsSeeMoreVisible(false); // Reset visibility on larger screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSeeMoreClick = () => {
    setIsSeeMoreVisible(true);
    setIsButtonVisible(false);
  };



  const platformdata = [
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },


  ]

  const showMoreItems = () => {
    setVisibleItems(visibleItems + 15); // Increase the number of visible items
  };

  const boxdata3 = [
    { name: 'x3/x4', link: ' 0x5ac...B97' },
    { name: 'x3/x4', link: ' 0x5ac...B97' },
    // { name: 'x3/x4', link: ' 0x5ac...B97' },
    // { name: 'x3/x4', link: ' 0x5ac...B97' },
    // { name: 'x3/x4', link: ' 0x5ac...B97' }
  ]

  return (
    <div className="Platform-container">


      {/* <DashBoardWidgets /> */}

      <div className="platform-heading" style={{display:'flex', justifyContent:'start', textAlign:'start', alignItems:'start'}}>
        <span>Platform recent activity</span>
      </div>

      <div className="platform-container-main overscroll-y-container">
        <div className="platform-left-container">
          <div className="platform-left-box" >
            <div></div>
            {platformdata.slice(0, visibleItems).map((data, index) => (
              <div className="table-in-row-1" key={index}>
                <div className="table-left-div">
                  <div className="table-user-icon" style={{ fontSize: '15px' }}>
                    {data.usericon}
                  </div>
                  <div className={data.className}>

                    <div className="new-user-heading">
                      <span>{data.newuser}</span>
                    </div>
                    <div className="ID-box">ID {data.UserId}</div>
                  </div>
                </div>

                <div className="table-right-div">
                  <span>
                    <CiShare1 size={'18px'} style={{ fontWeight: '800' }} />
                  </span>
                  <span>{data.jioningtiming}</span>
                </div>
              </div>

            ))}


            {platformdata.length > visibleItems && (
              <div className="see-more-div">
                <div className="see-more-button" onClick={showMoreItems}>

                  <IoEyeSharp />  See More
                </div>
              </div>
            )}

          </div>

        </div>

        <div className="platform-right-container">
          <div className="platform-right-box-1" >
            <div>
              <span className="right-box-1-heading">
                Members total
              </span>
            </div>

            <div>
              <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                <span>1452 555</span>
              </div>
              <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                <span><NorthIcon sx={{ fontSize: '16px' }} />554</span>
              </div>
            </div>
          </div>

          <div className="platform-right-box-2">
            <div>
              <span className="right-box-1-heading">
                Members received
              </span>
            </div>

            <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
              <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                <span> 1452 555</span>
              </div>
              <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                <span>
                  {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                  + 554</span>
              </div>
            </div>

            <div>
              <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                <span>1452 555</span>
              </div>
              <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                <span>
                  {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                  + 554</span>
              </div>
            </div>
          </div>

          <div className="platform-right-box-3">
            <div>
              <span className="right-box-3-heading-main">
                Forsage BUSD Contracts
              </span>
            </div>
            {boxdata3.map((data1, index) => {
              return (
                <div className="right-box-3-data-div">
                  <div className="right-box-3-data-div-left">
                    <span >
                      {data1.name}
                    </span>
                  </div>

                  <div className="right-box-3-data-div-right">
                    <span >
                      {data1.link}
                    </span>
                    <span style={{ cursor: 'pointer' }} title="copy link"><FaCopy /></span>
                    <span ><FaLink fontSize={'medium'} /></span>
                  </div>
                </div>
              )
            })}

            <div>
              <span className="right-box-1-heading">
                Transactions made
              </span>
            </div>

            <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
              <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                <span>1452 555</span>
              </div>
              <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                <span>
                  {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                  + 554</span>
              </div>
            </div>

            <div>
              <span className="right-box-1-heading">
                Turnover, BUSD
              </span>
            </div>

            <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
              <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                <span>1452 555</span>
              </div>
              <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                <span>
                  {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                  + 554</span>
              </div>
            </div>

          </div>


        </div>

      </div>


    </div>
  );
};

export default Dashboard;
