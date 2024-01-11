// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QualificationSelect from './QualificationSelect';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';

const Navbar = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
      <div className="container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span className="first-half">Port</span>
          <span className="second-half">folio</span>
        </div>
        <div className="nav1">
          <ul className="homii">
            <li className="nav-item" onClick={() => scrollToSection('home')}>
              <HomeRoundedIcon />
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-item" onClick={() => scrollToSection('about')}>
              About
            </li>
            <li className="nav-item" onClick={() => scrollToSection('skills')}>
              Skills
            </li>
            <li className="nav-item">
              <QualificationSelect onChange={() => scrollToSection('education')} />
            </li>
            <li className="nav-item" onClick={() => scrollToSection('contact')}>
              Contact
            </li>
          </ul>
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
          
          {isLightTheme ? <DarkModeSharpIcon/> : <TipsAndUpdatesSharpIcon/>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
