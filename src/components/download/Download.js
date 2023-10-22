import React from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import "../../";

const Download = () => {
  return (
    <section id="download">
      <div className="container download">
        <h2 className="u-title-h2 u-text-light">SOCIALX MESSENGER DOWNLOAD</h2>
        <p className="u-text-small u-text-light">
          Our apps are available for download on all stores.
        </p>
        <IconContext.Provider value={{ size: "15", color: "#fff" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple />
              <p className="u-text-light">IOS</p>
            </div>
            <div className="download-icon">
              <GrAndroid />
              <p className="u-text-light">Android</p>
            </div>
            <div className="download-icon">
              <FaWindows />
              <p className="u-text-light">Windows</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
