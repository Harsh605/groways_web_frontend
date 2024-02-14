import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import "./UserAccount.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchOneUserData,
  fetchPackageInfoForDashboardBox,
  fetchSlotsInfoForDashboardBox,
} from "../api";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import { useParams } from 'react-router-dom';

const UserAccount = () => {
  const { userId } = useParams();
  console.log(`user id is : ${userId}`);
  const navigate = useNavigate();
  const [refferalIncome, setRefferalIncome] = useState();
  const [levelIncome, setLevelIncome] = useState();
  const [slotIncome, setSlotIncome] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [totalUsers, setTotalUsers] = useState();
  const [packageIncome, setPackageIncome] = useState();
  const [totalReferrals, setTotalReferrals] = useState();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  //   const {address} = useAccount();
  //   const {userData} = useContext(MyContext);
  //   const [platformData , setPlatformData] = useState([])
  const [listOfALLPackages, setListOfAllPackages] = useState([]);
  const [listOfAllSlots, setListOfAllSlots] = useState([]);

  //   const [isSeeMoreVisible, setIsSeeMoreVisible] = useState(false);
  //   const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // let data = {
      //     userId : userId
      // }
      let data;
      if (userId <= 30000) {
        data = { userId: userId };
      } else {
        data = { address: userId };
      }
      try {
        const response = await fetchOneUserData(data);
        setLevelIncome(response.user.levelIncome);
        setPackageIncome(response.user.packageIncome);
        setSlotIncome(response.user.slotIncome);
        setRefferalIncome(response.user.refferalIncome);
        setTotalIncome(response.user.levelIncome);
        setName(response.user.name);
        setId(response.user.userId);
        setTotalReferrals(response.user.referTo.length);
        setProfilePicture(response.user.profilePicture);
        setAddress(response.user.address);
        let data1 = {
          address: response.user.address,
        };
        try {
          const response = await fetchPackageInfoForDashboardBox(data);
          setListOfAllPackages([...response.allPackagesOfUser]);
        } catch (error) {}
      } catch (error) {
        console.log(`error in the page getting all the data`);
      }
    };

    const fetchAllSlots = async () => {
      try {
        let data = {
          userId: userId,
        };
        const response = await fetchSlotsInfoForDashboardBox(data);
        setListOfAllSlots([...response.slotsOfUser]);
      } catch (error) {
        console.log(
          `error in fetch all slots for dashboard function : ${error.message}`
        );
      }
    };

    fetchData();
    fetchAllSlots();
    window.scrollTo(0, 0);
  }, [userId]);
  return (
    // <div style={{background : "white" , height : "100vh"}}>
    <div>
      <Navbar />

      <div className="welcome-container">
        <div
          style={{ background: "#363e5c" }}
          className="welcome-inner-div register-inner-div"
        >
          <div className="welcome-left-div register-left-div">
            <h2>
              {" "}
              {id ? "ID " + id : ""} (
              {address
                ? address.slice(0, 7) + "..." + address.slice(38, 48)
                : "0x0000...00000"}
              )
            </h2>
            <p>
              {address
                ? address.slice(0, 7) + "..." + address.slice(38, 48)
                : "0x0000...00000"}
            </p>
            <div className="tow-buttons">
              <div className="Join-groways">
                <a
                  style={{ textDecoration: "none" }}
                
                >
                  {/* <a style={{ textDecoration: 'none' }} href="#"> */}
                  {/* <button onClick={()=>navigate('./RegisterinForsageBUSDPage')}>Join GroWays</button> */}
                  <button onClick={()=>navigate('/allusers')}>All Users</button>
                </a>
              </div>

              <div className="watch-now-button-1">
                <a
                  style={{ textDecoration: "none", listStyle: "none" }}
                
                >
                  <button onClick={()=>navigate(`/referrals/${address}`)}>All Referrals</button>
                </a>
              </div>
            </div>
          </div>
          <div className=" register-right-div ">
            <div className="user-img-box">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}/${profilePicture}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>



      <div
        className="welcome-container"
        style={{ padding: "0px 33px", margin: "0px 0px 40px 0px" }}
      >
        <div
          style={{ background: "#363e5c" }}
          className="welcome-inner-div register-inner-div"
        >
          <div
            className="first-container-box-left"
          >
            <b>Total Referral</b>
            <h5>{totalReferrals}</h5>
            <div
              className="icon-redius"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ color: "white" }} className="zero-number">
                {" "}
                0
              </div>
              <div className="reload-icon">
                {" "}
                <img src="/images/activity_white.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="first-container-box-left">
            <b>Total Profit</b>
            <h5>{totalIncome}</h5>
            <div
              className="icon-redius"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ color: "white" }} className="zero-number">
                {" "}
                0
              </div>
              <div className="reload-icon">
                {" "}
                <img src="/images/activity_white.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="first-container-box-left">
            <b>Today Profit</b>
            <h5>{totalIncome}</h5>
            <div
              className="icon-redius"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ color: "white" }} className="zero-number">
                {" "}
                0
              </div>
              <div className="reload-icon">
                {" "}
                <img src="/images/activity_white.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="welcome-container"
        style={{ padding: "0px 15px", margin: "0px 0px 40px 0px" }}
      >
        <div
          style={{ background: "transparent", border: "none" }}
          className="welcome-inner-div register-inner-div"
        >
          <div className="dashboard-container">
            <div className="dashboard-container-box dashboard-boxes">
              <div>
                <div>
                  {" "}
                  <span style={{ fontSize: "34px", fontWeight: "500" }}>
                    {refferalIncome}
                  </span>
                </div>
                <div>
                  {" "}
                  <span>Referral Income</span>
                </div>
              </div>
            </div>
            <div className="dashboard-container-box dashboard-boxes">
              <div>
                <div>
                  {" "}
                  <span style={{ fontSize: "34px", fontWeight: "500" }}>
                    {levelIncome}
                  </span>
                </div>
                <div>
                  {" "}
                  <span>Level Income</span>
                </div>
              </div>
            </div>

            <div className="dashboard-container-box dashboard-boxes">
              <div>
                <div>
                  {" "}
                  <span style={{ fontSize: "34px", fontWeight: "500" }}>
                    {packageIncome}
                  </span>
                </div>
                <div>
                  {" "}
                  <span>Package Upgrade Income</span>
                </div>
              </div>
            </div>
            <div className="dashboard-container-box dashboard-boxes">
              <div>
                <div>
                  {" "}
                  <span style={{ fontSize: "34px", fontWeight: "500" }}>
                    {slotIncome}
                  </span>
                </div>
                <div>
                  {" "}
                  <span>Slot Income</span>
                </div>
              </div>
            </div>

            <div className="dashboard-container-box dashboard-boxes">
              <div>
                <div>
                  {" "}
                  <span style={{ fontSize: "34px", fontWeight: "500" }}>
                    {slotIncome + packageIncome + levelIncome + refferalIncome}
                  </span>
                </div>
                <div>
                  {" "}
                  <span>Total Income</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row style={{ marginBottom: "50px" }}>
        <Row className="m-0"></Row>

        <Row className="m-0">
          <div
            style={{ padding: "0px 33px" }}
            className="main-package-slot-container"
          >
            <div className="inner-package-slot-container">
              <div className="inner-left-package-container">
                <div className="package-first-flex">
                  <div>
                    <div>
                      <span className="package-header">Package</span>
                    </div>
                  </div>

                  <div>
                    <div>
                      <span className="package-header">{packageIncome}</span>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="empty-div-row">
                  <div className="empty-main-div">
                    <div className="empty-row-1-div">
                      {listOfALLPackages.includes("20") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("30") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("80") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("160") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("320") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("640") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("1280") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("2560") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("5120") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfALLPackages.includes("10240") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-left-package-container inner-right-slot-container">
                <div className="package-first-flex">
                  <div>
                    <div>
                      <span className="package-header">Slot</span>
                    </div>
                  </div>

                  <div>
                    <div>
                      <span className="package-header">{slotIncome}</span>
                    </div>
                    <div></div>
                  </div>
                </div>

                <div className="empty-div-row">
                  {}
                  <div className="empty-main-div">
                    <div className="empty-row-1-div">
                      {listOfAllSlots.includes("20") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfAllSlots.includes("50") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfAllSlots.includes("100") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfAllSlots.includes("200") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfAllSlots.includes("500") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfAllSlots.includes("800") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfAllSlots.includes("1000") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                      {listOfAllSlots.includes("1500") ? (
                        <div className="empty-div empty-div-2-1"></div>
                      ) : (
                        <div className="empty-div"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Row>
      </Row>
    </div>
  );
};

export default UserAccount;
