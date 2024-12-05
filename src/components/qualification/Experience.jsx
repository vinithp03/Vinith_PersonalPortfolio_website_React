import { useSelector } from "react-redux";
import "./Experience.css";

const Experience = () => {
  const { toggle } = useSelector(store => store.mode)
  return (
    <div className={toggle ? "work-light" : "work-dark"}>
      <h2 style={{ color: "#FFA500" }}>Work Experience</h2>
      <div className={toggle ? "exp-light" : "exp-dark"}>
        <h2 className="comp">Ominion pre-media private limited</h2>
        <p className="position">Software Developer</p>
        <p className="duration">June 2023 - jun 2024</p>
        <p className="location">Udupi, Karnataka</p>
        <ul className="responsibilities">
          <li>
            Spearheading the development of innovative cross-platform desktop
            applications using C++ advanced GUI libraries like Dear ImGui.
          </li>
          <li>
            Collaborating with the team to design and implement robust,
            scalable, and user-friendly software solutions.
          </li>
          <li>
            Conducting thorough code reviews to ensure code quality,
            maintainability, and adherence to coding standards.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
