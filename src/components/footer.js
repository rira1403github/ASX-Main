// import React, { useState } from 'react';
// import './footer.css';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";

// const Footer = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const sections = [
//     {
//       title: 'TRACK RENTAL',
//       links: [
//         { name: 'Hourly-Based Rentals', path: '/track/hourly' },
//         { name: 'Weekday Pricing', path: '/track/weekday' },
//         { name: 'Weekend Pricing', path: '/track/weekend' },
//         { name: 'Car-Based Pricing', path: '/track/car-pricing' }
//       ]
//     },
//     {
//       title: 'EXPERIENCE',
//       links: [
//         { name: 'Buddy Pack', path: '/experience/buddy-pack' },
//         { name: 'Off Road ATV Training', path: '/experience/atv-training' },
//         { name: 'Full Throttle Experience', path: '/experience/full-throttle' },
//         { name: 'Adventure Value Pack', path: '/experience/adventure' },
//         { name: 'Obstacle Conqueror Challenge', path: '/experience/obstacle' }
//       ]
//     },
//     {
//       title: 'EVENTS',
//       links: [
//         { name: 'Corporate Connect', path: '/events/corporate' },
//         { name: 'Squad Outing', path: '/events/squad' },
//         { name: 'Off-Road Challenge', path: '/events/offroad' },
//         { name: 'Personal Milestone', path: '/events/milestone' }
//       ]
//     },
//     {
//       title: 'ABOUT US',
//       links: [
//         { name: 'Corporate', path: '/about/corporate' },
//         { name: 'Sustainability', path: '/about/sustainability' },
//         { name: 'Media Centre', path: '/about/media' },
//         { name: 'News', path: '/about/news' }
//       ]
//     }
//   ];

//   return (
//     <footer className="footer-section">
//       <div className="footer-columns">
//         {sections.map((col, i) => (
//           <div className="footer-col" key={i}>
//             <div className="footer-col-header" onClick={() => handleToggle(i)}>
//               <h4>{col.title}</h4>
//               <span className="toggle-icon">{openIndex === i ? <FaChevronUp /> : <FaChevronDown />}</span>
//             </div>
//             <ul className={`footer-col-links ${openIndex === i ? 'open' : ''}`}>
//               {col.links.map((link, j) => (
//                 <li key={j}>
//                   <Link to={link.path}>{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="social-footer">
//         <a href="https://www.facebook.com/people/A-thon/61567067664336/?rdid=KhKFvb5di8wMmWAe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FcND9rTs3aHFeZcEi" target="_blank" rel="noopener noreferrer" className="social-item">
//           <FaFacebookF /> <span>FACEBOOK</span>
//         </a>
//         <a href="https://www.instagram.com/asx_motodrome?igsh=Z2Zmdm13a3ZncHd0" target="_blank" rel="noopener noreferrer" className="social-item">
//           <FaInstagram /> <span>INSTAGRAM</span>
//         </a>
//         <a href="https://www.linkedin.com/company/asx-motodrome/" target="_blank" rel="noopener noreferrer" className="social-item">
//           <FaLinkedinIn /> <span>LINKEDIN</span>
//         </a>
//         <a href="https://x.com/ATHON1705" target="_blank" rel="noopener noreferrer" className="social-item">
//           <FaXTwitter /> <span>TWITTER</span>
//         </a>
//         <a href="https://youtube.com/@asxmotodrome?si=MN43_eDC-g2c1SK3" target="_blank" rel="noopener noreferrer" className="social-item">
//           <FaYoutube /> <span>YOUTUBE</span>
//         </a>
//       </div>

//       <div className="footer-bottom">
//         <div className="footer-links">
//           <Link to="/privacy-policy">PRIVACY POLICY</Link>
//           <Link to="/terms">TERMS & CONDITIONS</Link>
//           <Link to="/thought">THOUGHT</Link>
//         </div>
//         <p className="footer-copy">Copyright © 2025 ASX VENTURES · All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React, { useState } from 'react';
import './footer.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'OFFERS',
      links: [
        { name: 'Influencer Collaboration', id: 'hourly' },
        { name: 'Weekday Offer', id: 'weekday' },
        { name: 'Group Discount', id: 'weekend' },
        { name: 'Festive Offer', id: 'car-pricing' }
      ]
    },
    {
      title: 'EXPERIENCE',
      links: [
        { name: 'Pro Drive Training', id: 'buddy-pack' },
        { name: 'Obstacle Conqueror Challenge', id: 'atv-training' },
        { name: 'Full Throttle Experience', id: 'full-throttle' },
        { name: 'Adventure Value Pack', id: 'adventure' },
        { name: 'Complimentary Experience', id: 'obstacle' }
      ]
    },
    {
      title: 'EVENTS',
      links: [
        { name: 'Celebration', id: 'celebration' },
        { name: 'Corporate Connect', id: 'corporate' },
        { name: 'Squad Outing', id: 'squad' },
        { name: 'Personal Milestone', id: 'milestone' }
      ]
    },
    {
      title: 'ABOUT US',
      links: [
        { name: 'Our Story', id: 'aboutUs' },
        { name: 'Who Ww Are', id: 'whoweare' },
        { name: 'What We Offer', id: 'media' },
        { name: 'Our Vision', id: 'news' }
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
              <span className="toggle-icon">
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <ul className={`footer-col-links ${openIndex === i ? 'open' : ''}`}>
              {col.links.map((link, j) => (
                <li key={j}>
                  <ScrollLink
                    to={link.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    onClick={() => setOpenIndex(null)} 
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="social-footer">
        <a href="https://www.facebook.com/p/ASX-Motodrome-61575127250339/" target="_blank" rel="noopener noreferrer" className="social-item">
          <FaFacebookF /> <span>FACEBOOK</span>
        </a>
        <a href="https://www.instagram.com/asx_motodrome?igsh=Z2Zmdm13a3ZncHd0" target="_blank" rel="noopener noreferrer" className="social-item">
          <FaInstagram /> <span>INSTAGRAM</span>
        </a>
        <a href="https://www.linkedin.com/company/asx-motodrome/" target="_blank" rel="noopener noreferrer" className="social-item">
          <FaLinkedinIn /> <span>LINKEDIN</span>
        </a>
        <a href="https://youtube.com/@asxmotodrome?si=MN43_eDC-g2c1SK3" target="_blank" rel="noopener noreferrer" className="social-item">
          <FaYoutube /> <span>YOUTUBE</span>
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <ScrollLink to="privacy" smooth={true} duration={600} offset={-80}>PRIVACY POLICY</ScrollLink>
          <ScrollLink to="terms" smooth={true} duration={600} offset={-80}>TERMS & CONDITIONS</ScrollLink>
          <ScrollLink to="thought" smooth={true} duration={600} offset={-80}>THOUGHT</ScrollLink>
        </div>
        <p className="footer-copy">Copyright © 2025 ASX VENTURES · All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;