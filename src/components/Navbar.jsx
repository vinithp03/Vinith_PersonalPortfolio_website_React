import './Navbar.css';
import { IoHome } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { modeAction } from '../store/ModeSlice';
import { TbBulbFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const dispatch = useDispatch();
  const { toggle } = useSelector(store => store.mode);

  return (
    <nav className="navbar">
      <div className={toggle ? "container-light" : "container"}>
        <div className="logo">
          <span className="first-half">Port</span>
          <span className={toggle ? "second-half-light" : "second-half"}>folio</span>
        </div>
        <div className="nav1">
          <Link to='/home'>
            <ul className="homii">
              <li className="nav-item">
                <IoHome size={20} />
              </li>
            </ul>
          </Link>
          <ul className="nav-list">
            <Link to='/about' type='none'>
              <li className="nav-item" >
                About
              </li>
            </Link>
            <Link to='/skills'>
              <li className="nav-item">
                Skills
              </li>
            </Link>
            <Link to='/projects'>
              <li className="nav-item">
                Projects
              </li>
            </Link>
            <Link to='/qualifications'>
              <li className="nav-item">
                Qualification
              </li>
            </Link>
            <Link to='/contact'>
              <li className="nav-item">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="theme-toggle" onClick={() => dispatch(modeAction.handleToggle())}>
          {toggle ? <TbBulbFilled size={20} /> : <MdOutlineDarkMode size={20} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
