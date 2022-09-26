import React from "react";
import "./Exp.css";
import { FaPaperPlane } from "react-icons/fa";

const Exp = () => {
  return (
    <section id="experience">
      <h5>Software Development</h5>
      <h2>Projects and Work Experience</h2>

      <div className="container experience_container">
        <div>
          <div className="experience_name">
            <h3>
              Software Engineering Intern <span>@ Circles.Life</span>
            </h3>
            <small>May 2022 - Aug 2022</small>
          </div>
          <div className="experience_content">
            <div className="experience_image">
              <img src={require("../../../assets/Pics/circles.png")} />
            </div>
            <div className="experience_desc">
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Designed and implemented a <span>Tableau-like UI</span> for a
                  data analytics platform to improve UX
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Refactored sites using updated designs and functionalities
                  like filtering
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Designed a <span>dashboard and delivery flow</span> following
                  research and User Testing
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Communicated with a full team of engineers, designers,
                  managers and clients daily
                </p>
              </div>
              <div className="experience_stacks">
                <FaPaperPlane className="experience_stacks-icons" />
                <p>
                  HTML, CSS, JavaScript, React.js, Material UI, custom styled
                  components
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="experience_name">
            <h3>Pacman AI</h3>
            <small>2022</small>
          </div>
          <div className="experience_content">
            <div className="experience_image">
              <img src={require("../../../assets/Pics/pacman.png")} />
            </div>
            <div className="experience_desc">
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Designed{" "}
                  <span>search functions, heuristics and strategies</span> for
                  Pacman, modeled as an adversarial and stochastic search
                  problem
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Incorporated higher order functions to{" "}
                  <span>create game agents</span> like competitors and enemies,
                  using minimax and expectimax strategies
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Developed strategies in evaluation functions to result in a
                  <span> 100% win rate</span> with >1000 average score
                </p>
              </div>
              <div className="experience_stacks">
                <FaPaperPlane className="experience_stacks-icons" />
                <p>Python, search algorithms</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="experience_name">
            <h3>Gitlet</h3>
            <small>2021</small>
          </div>
          <div className="experience_content">
            <div className="experience_image">
              <img src={require("../../../assets/Pics/gitlet.png")} />
            </div>
            <div className="experience_desc">
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Developed a <span>version control system</span> that mimics
                  the functionalities of Git
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Maintained a repository that stores{" "}
                  <span>serialized and encrypted </span>
                  files
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Allowed user to save and restore files, maintain and view
                  backup histories, create multiple branches, and merge
                  different versions of files
                </p>
              </div>
              <div className="experience_item">
                <FaPaperPlane className="experience_details-icons" />
                <p>
                  Used <span>data structures</span> such as Hashmaps and
                  Hashtrees to conduct breadth first traversals in linear time
                </p>
              </div>
              <div className="experience_stacks">
                <FaPaperPlane className="experience_stacks-icons" />
                <p>Java, unit testing, data structures, search algorithms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
