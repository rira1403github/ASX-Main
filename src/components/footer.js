import React, { useState } from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import {  FaXTwitter } from 'react-icons/fa6';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'TRACK RENTAL',
      links: [
        'Hourly-Based Rentals','Weekday Pricing','Weekend Pricing','Car-Based Pricing'
      ]
    },
    {
      title: 'EXPERIENCE',
      links: [
        'Buddy Pack','Off Road ATV Training', 'Full Throttle Experience','Adventure Value Pack','Obstacle Conqueror Challenge'
      ]
    },
    {
      title: 'EVENTS',
      links: [
        'Corporate Connect','Squad Outing', 'Off-Road Challenge','Personal Milestone'
      ]
    },
    {
      title: 'ABOUT US',
      links: [
        'Corporate', 'Sustainability', 'Media Centre', 'News'
      ]
    }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-columns">
        {sections.map((col, i) => (
          <div className="footer-col" key={i}>
            <div className="footer-col-header" onClick={() => handleToggle(i)}>
              <h4>{col.title}</h4>
              <span className="toggle-icon">{openIndex === i ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <ul className={`footer-col-links ${openIndex === i ? 'open' : ''}`}>
              {col.links.map((link, j) => (
                <li key={j}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

       <div className="social-footer">
        <a href="https://www.facebook.com/people/A-thon/61567067664336/?rdid=KhKFvb5di8wMmWAe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FcND9rTs3aHFeZcEi" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaFacebookF /> <span>FACEBOOK</span>
        </a>
        <a href="https://www.instagram.com/athon_allterrain/" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaInstagram /> <span>INSTAGRAM</span>
        </a>
        <a href="https://www.linkedin.com/company/athonat/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaLinkedinIn /> <span>LINKEDIN</span>
        </a>
        <a href="https://x.com/ATHON1705" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaXTwitter /> <span>TWITTER</span>
        </a>
        <a href="https://www.youtube.com/@a-thon" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaYoutube /> <span>YOUTUBE</span>
        </a>
        </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <span>PRIVACY POLICY</span>
          <span>TERMS & CONDITIONS</span>
          <span>THOUGHT</span>
        </div>
        <p className="footer-copy">Copyright © 2025 ASX VENTURES · All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;