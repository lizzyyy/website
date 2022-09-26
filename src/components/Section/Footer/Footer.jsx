import React from "react";
import "./Footer.css";

import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import { IoMdRocket } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <div className="social_media">
          <a
            href={"https://github.com/lizzyyy"}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href={"https://www.linkedin.com/in/yuchen-wang-07724b21b/"}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href={"mailto:yuchen.w@berkeley.edu"}>
            <BsEnvelope />
          </a>
        </div>
        <p className="mail_text">> yuchen.w@berkeley.edu</p>
        <div className="up">
          <small>
            <a href={"/#"}>Back to top</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
