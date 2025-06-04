import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Header">
      <div className="logo"></div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={menuOpen ? 'nav open' : 'nav'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Service">Service</Link></li>
        <li><Link to="/AboutMe">About Me</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
      </ul>
    </div>
  );
};

export default Header;
