import React from 'react';
import './contact.css';
import { FiChevronRight } from 'react-icons/fi';

const Contact = () => {
  const menuItems = [
    'BOOK MY RIDE',
    'EXPERIENCE ASHVA',
    'GET A RIDE',
    'ABOUT US',
    'CONTACT US',
  ];

  return (
    <div className="contact-section">
      {menuItems.map((item, index) => (
        <div className="contact-item" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          <span className="contact-label">{item}</span>
          <FiChevronRight className="contact-icon" />
        </div>
      ))}
    </div>
  );
};

export default Contact;