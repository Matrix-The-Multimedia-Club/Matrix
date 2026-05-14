import React from 'react';
import './Footer.css';   // We'll create this next

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="club-name">THE MATRIX CLUB</h2>
          <p className="tagline">Decoding Creativity | VIT Bhopal University</p>
        </div>

        {/* Quick Links */}
        <div className="footer-center">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#join">Join Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-right">
          <h3 className="footer-heading">FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2026 The Matrix Club — VIT Bhopal. All rights reserved.
        </p>
        <p className="made-with">
          Made with ❤️ by The Matrix Technical Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;