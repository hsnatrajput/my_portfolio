import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Button from "../../components/Button/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); 

  return (
    <nav className="navbar">
      <div className="logo">Mohammad Hasnat</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>HOME</Link>
        <Link to="services" smooth={true} duration={500} onClick={closeMenu}>SERVICES</Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>PROJECTS</Link>
        <Link to="testimonials" smooth={true} duration={500} onClick={closeMenu}>TESTIMONIALS</Link>
        <Link to="certifications" smooth={true} duration={500} onClick={closeMenu}>CERTIFICATIONS</Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>CONTACT</Link>
      </div>
      <Button text="GET STARTED" to="contact" />;
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"} 
      </div>
    </nav>
  );
};

export default Navbar;
