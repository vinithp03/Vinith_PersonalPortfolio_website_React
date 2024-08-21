import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App
