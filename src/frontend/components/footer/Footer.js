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
        <BiEnvelope style={{ "font-size": "25px" }} className="social-media" />{" "}
        <IoLogoGithub
          style={{ "font-size": "25px" }}
          className="social-media"
        />{" "}
        <IoLogoLinkedin
          style={{ "font-size": "25px" }}
          className="social-media"
        />{" "}
        <IoLogoWhatsapp
          style={{ "font-size": "25px" }}
          className="social-media"
        />{" "}
      </div>
    </div>
  );
};
