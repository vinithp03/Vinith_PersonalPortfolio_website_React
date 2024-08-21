import React from 'react';
import './Education.css';
import { useSelector } from 'react-redux';

const Education = () => {
  const { toggle } = useSelector(store => store.mode);
  return (

    <div className={toggle ? "edu-light" : "edu"}>
      <h2 className='he2' style={{ color: '#FFA500' }}>Education</h2>
      <div className={toggle ? "education-item-light" : "education-item"}>
        <img
          className="institution-logo"
          src={'/clglogo.jpg'}
          alt="College Logo"
        />
        <div className="education-details">
          <h3>Yenepoya Institute of Technology</h3>
          <p>Bachelor of Engineering (BE) in Mechanical Engineering</p>
          <p>July 2018 - August 2022</p>
          <p>Moodbidre, Mangalore</p>
          <p>CGPA: 8.5 / 10</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
