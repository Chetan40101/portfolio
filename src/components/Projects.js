import React, { useState } from "react";
import "./Projects.css"

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <p
        style={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => setShowProjects((prev) => !prev)}
        title="Click to toggle projects"
      >
        Here you'll find some of my favorite projects, from websites to web
        applications, all designed to solve problems and create impact.
      </p>

      {showProjects && (
        <div className="projects-grid">
          <button
            className="project-button"
            onClick={() => window.open("https://resplendent-concha-5d37f0.netlify.app", "_blank")}
            title="Apple Clone"
          >
            Apple Clone
          </button>

          <button
            className="project-button"
            onClick={() => window.open("https://supplierfirst.ril.com", "_blank")}
            title="SupplierFirst Portal"
          >
            SupplierFirst Portal
          </button>

          <button
            className="project-button"
            onClick={() => window.open("https://pncplatform.ril.com/jiocontracts", "_blank")}
            title="Jio Contracts"
          >
            Jio Contracts
          </button>

          <button
            className="project-button"
            onClick={() => window.open("https://neipncdev.ril.com/warehousemanagement", "_blank")}
            title="Warehouse Management"
          >
            Warehouse Management
          </button>

          <button
            className="project-button"
            onClick={() => window.open("https://neipncdev.ril.com/warehousemanagement", "_blank")}
            title="Warehouse Management"
          >
            Warehouse Management
          </button>

          {/* Add more buttons here for other projects */}
        </div>
      )}
    </section>
  );
};

export default Projects;
