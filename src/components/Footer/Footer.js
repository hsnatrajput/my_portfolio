import React , {useState} from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false); 
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="brand-name">Mohammad Hasnat</h2>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>➤ <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
            <li>➤ <Link to="certificates" smooth={true} duration={500} onClick={closeMenu}>Certificates</Link></li>
            <li>➤ <Link to="testimonials" smooth={true} duration={500} onClick={closeMenu}>Testimonials</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>➤ <Link to="services" smooth={true} duration={500} onClick={closeMenu}>Services</Link></li>
            <li>➤ <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
            <li>➤ <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Me</h3>
          <ul>
            <li>
              <FaEnvelope /> <Link to="contact" smooth={true} duration={500} onClick={closeMenu}> hasnatnaveed00@gmail.com </Link>
            </li>
            <li>
                <Link to="bookingpage" smooth={true} duration={500} onClick={closeMenu}>📞 BOOK A CALL </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2023 Mohammad Hasnat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
