import { useState, useRef, useEffect } from "react";
import "../css/navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const profileDropdownListRef = useRef(null);
  const btnRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    const storedProfileUrl = localStorage.getItem("profileUrl");
    if (storedProfileUrl) {
      setProfileUrl(storedProfileUrl);
    }
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem("userName");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    // Clear authToken from localStorage
    localStorage.removeItem("authToken");
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        className="navbar-logo"
        alt="logo"
        onClick={() => {
          // Add logic for handling logo click if needed
        }}
      />
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={showMenu ? "showmenu" : ""}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#subjects">Subjects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        {windowWidth < 640 && (
          <li>
            <a className="logout" href="/login" onClick={handleLogout}>
              Logout
            </a>
          </li>
        )}
      </ul>
      <div className="profile-dropdown" ref={profileDropdownListRef}>
        <div
          onClick={toggleDropdown}
          className="profile-dropdown-btn"
          ref={btnRef}
        >
          <div className="profile-img">
          <img className="profile-img" src={profileUrl} alt="Profile" />
            <i className="fa-solid fa-circle"></i>
          </div>

          <span>
            {username
              ? `${username.charAt(0).toUpperCase() + username.slice(1)}`
              : "Profile"}{" "}
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>

        <ul className={`profile-dropdown-list ${isActive ? "active" : ""}`}>
          <li className="profile-dropdown-list-item">
            <a href="/profile">
              <i className="fa-regular fa-user"></i> Edit Profile
            </a>
          </li>

          <li className="profile-dropdown-list-item">
            <a href="#">
              <i className="fa-regular fa-envelope"></i> Inbox
            </a>
          </li>

          <li className="profile-dropdown-list-item">
            <a href="/score">
              <i className="fa-solid fa-chart-line"></i> Score Board
            </a>
          </li>

          <li className="profile-dropdown-list-item">
            <a href="#">
              <i className="fa-regular fa-circle-question"></i> Help & Support
            </a>
          </li>
          <hr />

          <li className="profile-dropdown-list-item">
            <a href="/login" onClick={handleLogout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
