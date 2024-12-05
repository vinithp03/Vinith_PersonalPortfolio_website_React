import React, { useRef } from 'react';
import "./Projects.css";
import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { projectsList } from './projectslist.js';

const Projects = () => {
  const { toggle } = useSelector((store) => store.mode);
  const projectsRef = useRef(null);

  const scrollLeft = () => {
    projectsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    projectsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className='project-container'>
      <h2 className={toggle ? "title-light" : "title"} style={{ color: "#FFA500", marginLeft: "12px" }}>Personal Projects (React)</h2>
      <div className="carousel-controls">
        <button onClick={scrollLeft}>←</button>
        <button onClick={scrollRight}>→</button>
      </div>
      <section id="projects" ref={projectsRef}>
        {projectsList.map((ele, index) => (
          <div key={index} className={toggle ? "project-light" : "project"}>
            <h3>{ele.title}</h3>
            <img src={ele.imgSrc} alt="img" />
            <p>{ele.description}</p>
            <ul>
              <li>{ele.skill}</li>
              <li>{ele.features}</li>
              <li>
                <a href={ele.live}><RiLiveLine size={20} style={{ marginBottom: "-4.5px" }} /> Live Demo</a> |
                <a href={ele.github}><FaGithub size={20} style={{ marginBottom: "-4.5px" }} /> GitHub Repo</a>
              </li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
