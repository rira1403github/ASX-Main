// import React from 'react';
// import './contact.css';
// import { FiChevronRight } from 'react-icons/fi';

// const Contact = () => {
//   const menuItems = [
//     'OUR PACKAGES',
//     'OUR OFFERS',
//     'EVENTS',
//     'ABOUT US',
//     'CONTACT US',
//   ];

//   return (
//     <div className="contact-section">
//       {menuItems.map((item, index) => (
//         <div className="contact-item" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
//           <span className="contact-label">{item}</span>
//           <FiChevronRight className="contact-icon" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Contact;



import React from 'react';
import './contact.css';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // use this if you're using React Router

const Contact = () => {
  const menuItems = [
    { label: 'OUR PACKAGES', link: '/Package' },
    { label: 'OUR OFFERS', link: '/experience' },
    { label: 'EVENTS', link: '/events' },
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