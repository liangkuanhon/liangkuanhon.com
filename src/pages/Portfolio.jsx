import "./Portfolio.css";
import React from "react";
import { projects } from "/public/projects/projects";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <title>Hon’s Portfolio</title>
      <main>
        <div className="main-wrapper">
          <div className="main-text-container">
            <h1>Portfolio</h1>
            <p>Check out some of my projects I’ve worked on.</p>
          </div>

          <div className="main-image-container">
            <img
              src="/images/hon-logo.png"
              alt="Liang Kuan Hon"
              className="main-image"
            />
          </div>
        </div>
      </main>

      <div class="full-width-border"></div>

      <div className="grid-container">
          {projects.map((project) => (
            <Link to={`/portfolio/${project.slug}`} className="card" key={project.id}>
              <img src={project.image} alt={project.name} className="card-image" />
              <div className="card-body">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <i className="fas fa-chevron-right arrow"></i>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
