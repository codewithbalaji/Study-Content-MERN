import { useState, useEffect } from "react";
import "../css/navbar.css"; // Make sure to import your CSS file
import logo from "../assets/images/logo.png";


const NavProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("userName");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all items from local storage
  };

  return (
    <nav className="sticky">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={showMenu ? "showmenu" : ""}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/profile">
            {username
              ? `Hello ${username.charAt(0).toUpperCase() + username.slice(1)}`
              : "Profile"}
          </a>
        </li>
        <li>
          <a className="logout" href="/login" onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavProfile;
