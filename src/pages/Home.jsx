import "./Home.css";
import { projects } from "/public/projects/projects";
import { Link } from "react-router-dom";
import React, {useState} from "react";

export default function Home() {

  const [hoveredSide, setHoveredSide] = useState(null); // 'left' | 'right' | null

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    setHoveredSide(x < width / 2 ? "left" : "right");
  };

  return (
    <>
      <title>Hon's Home</title>
      <div
        className="image-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div
          className={`image left ${
            hoveredSide === "left" ? "expanded" : hoveredSide === "right" ? "collapsed" : ""
          }`}
        >
          <img src="/images/nestcart.png" alt="Left" />
        </div>
        <div
          className={`image right ${
            hoveredSide === "right" ? "expanded" : hoveredSide === "left" ? "collapsed" : ""
          }`}
        >
          <img src="/images/dumbo.png" alt="Right" />
        </div>
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
