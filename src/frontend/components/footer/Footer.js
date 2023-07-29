import React from "react";
import "./Footer.css";
import { BiEnvelope } from "react-icons/bi";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <h3>Connect with me @Channaveer</h3>
      </div>
      <div>
        <a href="mailto:channaveertadkal6064@gmail.com">
          <BiEnvelope
            style={{ "font-size": "25px" }}
            className="social-media"
          />{" "}
        </a>
        <a href="https://github.com/Channaveer6064">
          <IoLogoGithub
            style={{ "font-size": "25px" }}
            className="social-media"
          />{" "}
        </a>
        <a href="https://www.linkedin.com/in/channaveer-tadkal-806982221/">
          <IoLogoLinkedin
            style={{ "font-size": "25px" }}
            className="social-media"
          />{" "}
        </a>
      </div>
    </div>
  );
};
