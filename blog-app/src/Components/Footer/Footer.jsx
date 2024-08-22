import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to Blog App, your go-to platform for insightful and engaging
            articles on various topics. Stay tuned for the latest updates and
            content from our passionate writers.
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: vamsi093511@gmail.com</p>
          <p>Phone: +91 9391128446</p>
        </div>
        <div className="footer-section social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram />
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;2024. All rights are resevred by Vamsi Krishna D</p>
      </div>
    </footer>
  );
};

export default Footer;
