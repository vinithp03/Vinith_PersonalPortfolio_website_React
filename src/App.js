// App.js

import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./contents/About";
import Skills from "./contents/Skills";
import Education from "./contents/Education";
import Experience from "./contents/Experience";
import Contact from "./contents/Contact";
import Courses from "./contents/Courses";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div id="home">
        <Profile className="prof" />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="course">
        <Courses />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
