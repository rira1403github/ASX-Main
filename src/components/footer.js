import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-title red">ADDRESS</h3>
          <p>
            Next To AL MIraj Convention <br />
            Centre, Shauhardha Layout, <br />
            Hoskote, Karnataka 562114
          </p>
          <p>Contact Us: +91 7624881965</p>
        </div>

        <div className="footer-right">
          <h3 className="footer-title red">SOCIAL MEDIA</h3>
          <div className="social-links">
            <div className="social-item">
              <FaFacebookF className="icon" />
              <span>FACEBOOK</span>
            </div>
            <div className="social-item">
              <FaInstagram className="icon" />
              <span>INSTAGRAM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <span>PRIVACY POLICY</span>
          <span>TERMS & CONDITIONS</span>
          <span>THOUGHT</span>
        </div>
        <p className="footer-copy">
          Copyright © 2025 ASX VENTURES · All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
