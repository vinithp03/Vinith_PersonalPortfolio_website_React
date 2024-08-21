import { GiBackgammon } from "react-icons/gi";
import About from "../components/About";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Qualification from "../components/Qualification";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "grey", borderRadius: "18px" }}>
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Contact />
    </div>
  );
};


export default HomePage;