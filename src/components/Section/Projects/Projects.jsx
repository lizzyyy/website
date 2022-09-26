import React from "react";
import "./projects.css";

import { data } from "./ProjectMap";

const Projects = () => {
  return (
    <section id="projects">
      <h5>Design</h5>
      <h2>Recent Works</h2>

      <div className="container project_container">
        {data.map(({ id, image, title, app }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{app}</small>
            </article>
          );
        })}

        <a className="btn">More Coming Soon!</a>
      </div>
    </section>
  );
};

export default Projects;
