
import React from 'react';
import './Skills.css'; // Import your CSS file for styling

const Skills = () => {
  return (
    <div className='skills-container'>
    <div className="outerSkill">
      <h2 className='skl'  style={{ color: '#FFA500'}}>Skills</h2>
      <h3>Frontend Development</h3>
      <div className="skill-category">
        <div className="skill-box">
          <p>HTML5</p>
        </div>
        <div className="skill-box">
          <p>CSS3</p>
        </div>
        <div className="skill-box">
          <p>JavaScript</p>
        </div>
        <div className="skill-box">
          <p>React.js</p>
        </div>
      </div>
      <h3>Backend Development</h3>
      <div className="skill-category">
        <div className="skill-box">
          <p>Java</p>
        </div>
        <div className="skill-box">
          <p>C++</p>
        </div>
      </div>
      <h3>Database</h3>
      <div className="skill-category">
        <div className="skill-box">
          <p>SQL</p>
        </div>
        
      </div>
    </div>
    <div className="skillImgae">
    <img className='skilimg' src="../routine.png" alt="Profile" />
    </div>

    </div>
  );
};

export default Skills;
