import React from 'react'
import "./Projects.css"
import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { blue } from '@mui/material/colors';



const Projects = () => {
  const { toggle } = useSelector((store) => store.mode)
  return (
    <section id="projects">
      <h2 class={toggle ? "title-light" : "title"}>Personal Projects (React)</h2>

      <div class={toggle ? "project-light" : "project"}>
        <h3>Todo App</h3>
        <img src="/toDoAppUi.png" alt="Todo App Screenshot" />
        <p>A simple task management application(ToDo app) to help users organize their daily tasks.</p>
        <ul>
          <li>React, Redux, HTML,CSS,JS</li>
          <li>Features: Task creation, deletion, and completion</li>
          <li ><a href="https://drive.google.com/file/d/1PsCSAxpv6F6R9G_2aBpBRiLnlv260RnZ/view?usp=sharing"><RiLiveLine size={20} style={{ marginBottom: "-4.5px" }} /> Live Demo</a> | <a href="https://github.com/vinithp03/Vinith-React_ToDo_App/tree/main"><FaGithub size={20} style={{ marginBottom: "-4.5px" }} /> GitHub Repo</a></li>
        </ul>
      </div>

      <div class={toggle ? "project-light" : "project"}>
        <h3>Myntra Clone</h3>
        <img src="/myntraClone-ui.png" alt="Myntra Clone Screenshot" />
        <p>An e-commerce web application that mimics the functionality of Myntra, including product listing and filtering.</p>
        <ul>
          <li>React, Redux, Router</li>
          <li>Features: product display, Add to bag, responsive design</li>
          <li><a href="https://drive.google.com/file/d/1Zm5AnlwThHaSoIe5eUdMKRhsEP2Y3YiF/view?usp=sharing"> <RiLiveLine size={20} style={{ marginBottom: "-4.5px" }} /> Live Demo</a> | <a href="https://github.com/vinithp03/Myntra-clone-react/tree/main"><FaGithub size={20} style={{ marginBottom: "-4.5px" }} /> GitHub Repo</a></li>
        </ul>
      </div>

    </section >

  )
}

export default Projects

