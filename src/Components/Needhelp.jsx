import React from "react";
import "./Needhelp.css";

const Needhelp = () => {
  return (
    <>
      <div className="w-full my-5">
        <h2
          style={{ color: "white" }}
          className="text-center font-bold text-3xl"
        >
          <span className="text-primary">User Friendly</span> Dashboard
        </h2>
        <div className="mt-4 w-full flex justify-center items-center p-4 max-w-3xl mx-auto">
          <img
            alt="Dashboad inside Laptop looks"
            loading="lazy"
            width={1920}
            height={1080}
            decoding="async"
            data-nimg={1}
            style={{ color: "transparent" }}
            src="./images/Modern_illustrated_Programming_and_Software_Instagram_Post___1_-removebg-preview.png"
          />
        </div>
      </div>
      <div className="Need-help-container">
        <h1>Need help with using the platform?</h1>
        <p>Get qualified support from GroWays experts via online chat</p>
        <button>
          <a
            target="_blank"
            style={{ textDecoration: "none" }}
            href="mailto:contact@Groways.com"
          >
            Contact Support
          </a>
        </button>
      </div>
    </>
  );
};

export default Needhelp;
