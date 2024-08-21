import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {

  const { toggle } = useSelector(store => store.mode);

  const handleDownloadCV = () => {
    const cvPath = "/Vinith_CareerProfile_2024.pdf";

    const link = document.createElement("a");
    link.download = "Vinith_CareerProfile_2024.pdf";
    link.href = cvPath;
    link.click();
  };

  return (
    <div className={toggle ? "profile-container-white" : "profile-container-black"} >
      <div className="profile-image">
        <img src="/vinithProfile.jpg" alt="Profile" />
      </div>
      <div className={toggle ? "profile-info-white" : "profile-info-black"}>
        <h2>Hello, It's Me</h2>
        <h1>VINITH</h1>
        <p>
          And I'm a <span className="role">Developer</span>
        </p>
        <button type="button" className="btn btn-outline-success" onClick={handleDownloadCV}>
          Download CV
        </button>
      </div>
    </div >
  );
};

export default Profile;
