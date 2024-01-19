import React from 'react';
import './Courses.css'; // Import your CSS file for styling
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Courses = () => {
  return (
    <div className='crs'>
      <h2 className="titl"  style={{ color: '#FFA500',  marginLeft:'30px' , paddingTop:'20px' }}>Courses/Certificates</h2>
    <div className="courses">
      <div className="course-item">
        <h3>Java Full Stack Course</h3>
        <p>Institute: J-Spiders, Bangalore</p>
        <p>Duration: 4 months</p>
      </div>

      <div className="course-item">
        <h3>Web Development Course</h3>
        <p>Institute: J-Spiders, Bangalore</p>
        <p>Duration: 2 months</p>
      </div>

      <div className="course-item">
        <h3>SQL Course</h3>
        <p>Institute: J-Spiders, Bangalore</p>
        <p>Duration: 2 months</p> 
      </div>

    </div>
    <p className='certificate'>Certificate : <Button className='cirti' variant="contained" endIcon={<SendIcon />}>
    <a className='anchor' href="../Vinith_course_cirtificate.png">Check it out</a>
      </Button></p>
    </div>
  );
};

export default Courses;
