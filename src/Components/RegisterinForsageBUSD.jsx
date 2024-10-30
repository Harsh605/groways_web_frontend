import React, { useState,useEffect  } from "react";
import "./RegisterinForsageBUSD.css";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import Show from "./Show";

const RegisterinForsageBUSD = () => {
  const navigate = useNavigate();

  const { address, isConnected } = useAccount();
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState("");

  const handleOpenBuyPopup = () => {
    setOpen(true);
  };
  useEffect(() => {
    // Set the launch date
    const launchDate = new Date("2024-1-01T09:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Website has launched!");
        return;
      }

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the countdown string
      const countdownString = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
      setCountdown(countdownString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        <Show />
      </div>
      <p style={{fontSize:"25px",textAlign:"center",color:"red"}}>Slot is going to launch in {countdown}</p>
      <div className="welcome-container">
        <div className="welcome-inner-div register-inner-div">
          <div className="welcome-left-div register-left-div">
            <h2>Register in GroWays USDT</h2>
            <p>
              You can use this Wallet (0xBb3D...150d) to register as a new
              member. Watch a tutorial to learn more{" "}
            </p>
            <div className="tow-buttons">
              <div className="Join-groways">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://user.groways.io"
                >
                  {/* <a style={{ textDecoration: 'none' }} href="#"> */}
                  {/* <button onClick={()=>navigate('./RegisterinForsageBUSDPage')}>Join GroWays</button> */}
                  <button>Join GroWays</button>
                </a>
              </div>

              <div className="watch-now-button-1">
                <a
                  style={{ textDecoration: "none", listStyle: "none" }}
                  href="https://youtu.be/DZCMExTA7hI?si=GCCTMxjHegg1r0Ll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Watch Tutorial</button>
                </a>
              </div>
            </div>
          </div>
          <div className=" register-right-div">
            <img src="image/UnknownUser.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterinForsageBUSD;
