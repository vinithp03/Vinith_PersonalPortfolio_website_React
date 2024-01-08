import React from 'react';
import './Education.css';

const Education = () => {
  return (
   
    <div className='edu'>
       <h2 className='he2'  style={{ color: '#FFA500'}}>Education</h2>
      <div className="education-item">
        <img
          className="institution-logo"
          src={process.env.PUBLIC_URL + '/clglogo.jpg'}
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
