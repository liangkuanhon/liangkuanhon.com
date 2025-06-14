import "./Home.css";
import { projects } from "/public/projects/projects";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

export default function Home() {

    return (
    <>
      <title>Hon's Home</title>
      <div className="image-hover-wrapper">
          {/* Halves */}
          <img src="/images/nestcart.png" className="half left" alt="Left Half A" />
          <img src="/images/luminova.png" className="half right" alt="Right Half B" />

          {/* Hover zones */}
          <Link to="/portfolio" className="hover-zone left-zone"></Link>
          <Link to="/about" className="hover-zone right-zone"></Link>

          {/* Full images */}
          <img src="/images/nestcart.png" className="full-image full-a" alt="Full A" />
          <img src="/images/luminova.png" className="full-image full-b" alt="Full B" />
      </div>

      <div className="border">
        <span>MY WORK, SIMPLY PUT...</span>
      </div>

      <div className="grid-container">
        {projects.slice(0, 3).map((project) => (
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
