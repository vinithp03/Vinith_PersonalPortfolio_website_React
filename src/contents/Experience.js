// Experience.js

import React from 'react';
import './Experience.css';
import { orange } from '@mui/material/colors';

const Experience = () => {
  return (
    <div className='work'>
     <h2 style={{ color: '#FFA500' }}>Work Experience</h2>
     <div className='exp'>
      <h2 className='comp'>Ominion pre-media private limited</h2>
      <p className='position'>Software Developer</p>
      <p className='duration'>June 2023 - Present</p>
      <p className='location'>Udupi, Karnataka</p>
      <ul className='responsibilities'>
        <li>
        Spearheading the development of innovative cross-platform desktop applications using C++
           advanced GUI libraries like Dear ImGui.
        </li>
        <li>
          Collaborating with the team to design and implement robust, scalable, and user-friendly software solutions.
        </li>
        <li>
          Conducting thorough code reviews to ensure code quality, maintainability, and adherence to coding standards.
        </li>
       </ul>
      </div>
    </div>
  );
};

export default Experience;
