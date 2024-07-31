import React from 'react';
import '../../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Trash<span>It</span></h1>
          <p>
            Turning waste into wealth. Join us in making the world a cleaner place by recycling and managing waste efficiently.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +1 234 567 890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@trashit.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Social Media</h2>
          <br />
          <div className="social-links">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 TrashIt | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;
