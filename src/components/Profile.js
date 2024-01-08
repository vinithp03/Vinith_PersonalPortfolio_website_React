// Profile.js

import React from 'react';
import './Profile.css'; // Import your CSS file for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="../vinith2.O.jpg" alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>Hello, It's Me</h2>
        <h1>VINITH</h1>
        <p>And I'm a <span className='role'>Frontend Developer</span></p>
      </div>
    </div>
  );
};

export default Profile;
