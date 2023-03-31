import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projectscontainer">
        <h1>Projects</h1>
        <div className="projectscon">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Projects;
