import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home" onClick={toggleNavbar}>Home</a></li>
        <li><a href="#about" onClick={toggleNavbar}>About</a></li>
        <li><a href="#projects" onClick={toggleNavbar}>Projects</a></li>
        <li><a href="#contact" onClick={toggleNavbar}>Contact</a></li>
      </ul>
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleNavbar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;