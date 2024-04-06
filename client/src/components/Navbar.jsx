import { useState } from 'react';
import '../css/navbar.css'; // Make sure to import your CSS file

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // Clear authToken from localStorage
    localStorage.removeItem('authToken');
  };

  return (
    <nav className="sticky">
      <div className="logo">
        <a href="">IT STUDY</a>
      </div>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={showMenu ? 'showmenu' : ''}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#subjects">Subjects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a className="logout" href="/login" onClick={handleLogout}>Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
