import React from "react";
import "./Skills.css"; // Import your CSS file for styling
import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
import CppIcon from "../components/CppIcon";
import { BsFiletypeSql } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { useSelector } from "react-redux";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const Skills = () => {
  const { toggle } = useSelector((store) => store.mode);
  const fontEnd = [
    <FaHtml5 size={58} />,
    <SiCss3 size={50} />,
    <TbBrandJavascript size={60} />,
    <FaReact size={50} />,
  ];
  const backend = [<RiJavaFill size={50} />, <CppIcon />];
  return (
    <div className={toggle ? "skill-outer-light" : "skill-outer"}>
      <div className="skills-container">
        <div className="outerSkill">
          <h2 className="skl" style={{ color: "#FFA500" }}>
            Skills
          </h2>
          <h3>Frontend Development</h3>
          <div className="skill-category">
            {fontEnd.map((skill) => (
              <div className="skill-box">{skill}</div>
            ))}
          </div>
          <h3>Backend Development</h3>
          <div className="skill-category">
            {backend.map((data) => (
              <div className="skill-box">{data}</div>
            ))}
          </div>
          <h3>Database</h3>
          <div className="skill-category">
            <div className="skill-box">
              <BsFiletypeSql size={50} />
            </div>
            <span className="orange"></span>
          </div>
        </div>
        <div className="skillImgae">
          <p className={toggle ? "code-light" : "code"}>
            <span className="orange">def</span> success(dedication, persistence,
            passion):
            <br />
            dedication += 1{" "}
            <span className="comment"> # dedicate yourself </span> <br />
            persistence += 1 <span className="comment">
              {" "}
              # be persistent{" "}
            </span>{" "}
            <br />
            passion = True <span className="comment"> # have passion</span>{" "}
            <br />
            <br />
            <span className="orange">if</span> passion == True: <br />
            magic = dedication + persistence <br />
            <span className="orange">return</span> magic <br />
            else: <br />
            magic = 0 <br />
            return magic <br />
            <span className="comment" style={{ wordSpacing: "10px" }}>
              {" "}
              #love_It. #make_mistakes. #learn. #keep_Grinding.{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="gitHub">
        <FaGithub size={25} />
        <Button style={{ width: "170px", padding: "1px", backgroundColor: "black" }} variant="contained" endIcon={<SendIcon />}>
          <a className="anchor" href="https://github.com/vinithp03"> Vinith GitHub</a>
        </Button>
      </div>
    </div>
  );
};

export default Skills;
