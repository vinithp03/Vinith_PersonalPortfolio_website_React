import React from "react";
import "./Profile.css"; // Import your CSS file for styling
import Button from "@mui/material/Button";

const Profile = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Provide the correct path to your CV file in the public folder
    const cvPath = process.env.PUBLIC_URL + "/Vinith_cv.pdf";
    // Create a temporary link element
    const link = document.createElement("a");
    // Set the download attribute and file path
    link.download = "Vinith_CV.pdf";
    link.href = cvPath;
    // Trigger a click on the link to start the download
    link.click();
  };

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img
          src={process.env.PUBLIC_URL + "/vinithProfile.jpg"}
          alt="Profile"
        />
      </div>
      <div className="profile-info">
        <h2>Hello, It's Me</h2>
        <h1>VINITH</h1>
        <p>
          And I'm a <span className="role">Developer</span>
        </p>
        <Button variant="outlined" color="error" onClick={handleDownloadCV}>
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default Profile;
