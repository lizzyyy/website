import React from "react";
import "./About.css";

import { FaMousePointer, FaPen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>About Me</h5>
      <h2>Who am I?</h2>

      <div className="container about_container">
        <div className="image-container">
          <div className="me image-card"></div>
        </div>

        <div className="about_content">
          <p>
            I'm <span>Lizzy Wang</span>, nice to meet you! I'm a developer,
            designer, and student at UC Berkeley. I love creating, designing and
            problem solving. Web design has been a way to unite these parts of
            me together, and I'm always looking to learn more. I'm still
            discovering who I am, and I can't wait to see what the future has in
            store!
          </p>

          <div className="about_card">
            <article className="about_card-content">
              <h5>Software Skills</h5>
              <div class="about_card-body">
                <div class="about_card-item">
                  <FaMousePointer className="about_icons" />
                  <small>Python</small>
                </div>
                <div class="about_card-item">
                  <FaMousePointer className="about_icons" />
                  <small>Java</small>
                </div>
                <div class="about_card-item">
                  <FaMousePointer className="about_icons" />
                  <small>HTML, CSS, JavaScript</small>
                </div>
                <div class="about_card-item">
                  <FaMousePointer className="about_icons" />
                  <small>Data Structures</small>
                </div>
                <div class="about_card-item">
                  <FaMousePointer className="about_icons" />
                  <small>Algorithms, algorithmic design</small>
                </div>
              </div>
            </article>

            <article className="about_card-content">
              <h5>Design Skills</h5>
              <div class="about_card-body">
                <div class="about_card-item">
                  <FaPen className="about_icons" />
                  <small>Figma</small>
                </div>
                <div class="about_card-item">
                  <FaPen className="about_icons" />
                  <small>Adobe Photoshop</small>
                </div>
                <div class="about_card-item">
                  <FaPen className="about_icons" />
                  <small>Adobe Illustrator</small>
                </div>
                <div class="about_card-item">
                  <FaPen className="about_icons" />
                  <small>Adobe Premiere Pro</small>
                </div>
                <div class="about_card-item">
                  <FaPen className="about_icons" />
                  <small>Procreate, etc</small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
