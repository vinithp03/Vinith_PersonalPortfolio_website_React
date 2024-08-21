import React from "react";
import "./Courses.css"; // Import your CSS file for styling
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";

const Courses = () => {
  const { toggle } = useSelector(store => store.mode);
  return (
    <div className={toggle ? "crs-light" : "crs"}>
      <h2
        className="titl"
        style={{ color: "#FFA500", marginLeft: "30px", paddingTop: "20px" }}
      >
        Courses/Certificates
      </h2>
      <div className="courses">
        <div className={toggle ? "course-item-light" : "course-item"}>
          <h3>Java Full Stack Course</h3>
          <img className="jspiderlogo" src="/jspidersLogo.jpg" alt="Jspiders" />
          <p>JSpiders Training & Development center, Bangalore</p>
          <p>Duration: 4 months</p>
        </div>

        <div className={toggle ? "course-item-light" : "course-item"}>
          <h3>Web Development Course</h3>
          <img className="jspiderlogo" src="/jspidersLogo.jpg" alt="Jspiders" />
          <p>JSpiders Training & Development center, Bangalore</p>
          <p>Duration: 2 months</p>
        </div>

        <div className={toggle ? "course-item-light" : "course-item"}>
          <h3>SQL Course</h3>
          <img className="jspiderlogo" src="/jspidersLogo.jpg" alt="Jspiders" />
          <p>JSpiders Training & Development center, Bangalore</p>
          <p>Duration: 2 months</p>
        </div>
      </div>
      <p className={toggle ? "certificate-light" : "certificate"}>
        Certificate :{"  "}
        <Button className="cirti" variant="contained" endIcon={<SendIcon />}>
          <a
            className="anchor"
            href={"/Vinith_course_cirtificate.png"}
          >
            Check it out
          </a>
        </Button>
      </p>
    </div >
  );
};

export default Courses;
