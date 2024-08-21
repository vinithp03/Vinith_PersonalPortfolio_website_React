import { useSelector } from 'react-redux';
import './About.css'; // Import your CSS file for styling

const About = () => {
  const { toggle } = useSelector(store => store.mode);
  return (
    <div className={toggle ? "about-container-light" : "about-container"}>
      <h2 className={toggle ? "heading-light" : "heading"}>About Me</h2>
      <p className={toggle ? "aboutme-light" : "aboutme"}>
        I am a passionate and dedicated individual from a diverse background.
        My journey in the world of coding began with a keen interest in creating
        user-friendly and visually appealing web interfaces. Despite not having
        a formal education in frontend development, I pursued courses in the
        field and am currently working as a software developer. I bring
        creativity and problem-solving skills to every project.
      </p>
    </div>
  );
};

export default About;
