import React from "react";
import "./Header.css";

import TypingEffect from "./TypingEffect";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_text">
          <h3>Hello! I am</h3>
          <TypingEffect />
          <span>Developer and designer.</span>
          <CTA />
        </div>
      </div>
    </header>
  );
};

export default Header;
