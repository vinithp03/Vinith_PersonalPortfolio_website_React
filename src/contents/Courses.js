import React from 'react';
import './Courses.css'; // Import your CSS file for styling

const Courses = () => {
  return (
    <div className='crs'>
      <h2 className="titl"  style={{ color: '#FFA500',  marginLeft:'30px' }}>Courses/Certificates</h2>
    <div className="courses">
      <div className="course-item">
        <h3>Java Full Stack Course</h3>
        <p>Institute: J-Spiders, Bangalore</p>
        <p>Duration: 4 months</p>
        {/* Add a link to the Java Full Stack certificate when available */}
        <p>Certificate: [Link to Certificate]</p>
      </div>

      <div className="course-item">
        <h3>Web Development Course</h3>
        <p>Institute: J-Spiders, Bangalore</p>
        <p>Duration: 2 months</p>
        {/* Add a link to the Web Development certificate when available */}
        <p>Certificate: [Link to Certificate]</p>
      </div>

      {/* Add more course items as needed */}
    </div>
    </div>
  );
};

export default Courses;
