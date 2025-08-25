import React from 'react';
import './contact.css';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 

const Contact = () => {
  const menuItems = [
    { label: 'PACKAGES', link: '/Package' },
    { label: 'OFFERS', link: '/OfferPage' },
    { label: 'EVENTS', link: '/events' },
    { label: 'RULES & REGULATIONS', link: '/RULES' },
    { label: 'ABOUT US', link: '/aboutUs' },
    { label: 'CONTACT US', link: '/pageContact' },
  ];
  
  return (
    <div className="contact-section">
      {menuItems.map((item, index) => (
        <Link 
          to={item.link} 
          className="contact-item" 
          key={index} 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="contact-label">{item.label}</span>
          <FiChevronRight className="contact-icon" />
        </Link>
      ))}
    </div>
  );
};

export default Contact;