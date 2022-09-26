import React from "react";
import "./Fun.css";

// import About_Image from "../../../assets/Pics/about_image.png";

import { FaAward } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const Fun = () => {
  return (
    <section id="fun">
      <h5>More Fun Stuff</h5>
      <h2>So, what else?</h2>

      <div className="container fun_container">
        <div className="fun_content">
          <p>
            In my free time, I like to do{" "}
            <span>crafts, crochet, and fashion design</span>! I want to use the
            hobbies I've picked up to make a positive change in my community.
          </p>
          <br />
          <p>
            With that said, for the past 5 years, I've been helping out as an
            Organizing Committee Member of{" "}
            <span>
              <a href="https://robocupap.org/">RoboCup Asia Pacific</a>
            </span>
            , leading volunteers <span>across the world</span> to manage
            competition leagues and <span>working with professionals</span> in
            the field to interview, judge and score participants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fun;
