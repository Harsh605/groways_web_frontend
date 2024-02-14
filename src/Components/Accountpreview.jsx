import React, { useState } from "react";
import "./Accountpreview.css";
import { useNavigate } from "react-router-dom";

const Accountpreview = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  const handlePreview = () => {
    if (userId.trim() !== "") {
      if (parseInt(userId) >= 502) {
        // Check if userId is greater than or equal to 502
        navigate(`/users/${userId}`);
      } else {
        // Handle the case when the input is less than 502
        alert("You can't preview user IDs less than 502.");
      }
    } else {
      // Handle the case when the input is empty
      alert("Please enter a valid ID or GroWays Wallet");
    }
  };
  return (
    <div className="Accountpreview-container">
      <div className="Accountpreview-inner-container">
        <h1>Account preview</h1>
        <p>
          Look up any GroWays member account in preview mode. Enter ID or
          GroWays address to preview or click Demo to view a random account.
        </p>
        <div className="Accountpreview-container">
          <div className="Accountpreview-left-container">
            <h4>Enter ID or GroWays Wallet</h4>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="example :503"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <button onClick={handlePreview} disabled={!userId?.trim()}>
                Preview
              </button>
            </div>
          </div>
          {/* <div className="Accountpreview-right-container">
                        <h4>Don't know any ID?</h4>
                        <button>Check Demo</button>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Accountpreview;
