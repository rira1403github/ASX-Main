// import React, { useState, useEffect, useRef } from 'react';
// import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
// import './navbar.css';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const menuRef = useRef();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   // Scroll background effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Scroll lock on body when menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
//     return () => (document.body.style.overflow = 'auto');
//   }, [isMenuOpen]);

//   // Auto-close on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
//         closeMenu();
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMenuOpen]);

//   return (
//     <>
//       <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="navbar-icon" onClick={toggleMenu}>
//           {isMenuOpen ? <FiX /> : <FiMenu />}
//         </div>

//         <div className="navbar-logo">
//           <img src={logo} alt="ASX Logo" />
//         </div>

//         <div className="navbar-icon">
//           <FiSearch />
//         </div>
//       </nav>

//       <div ref={menuRef} className={`menu-overlay ${isMenuOpen ? 'slide-out' : ''}`}>
//         <div className="menu-close" onClick={closeMenu}>
//           <FiX />
//         </div>

//         <h2 className="menu-title red">MENU</h2>
//         <ul className="menu-links">
//           {[
//             'BOOK MY RIDE',
//             'EXPERIENCE ASHVA',
//             'GET A RIDE',
//             'ABOUT US',
//             'CONTACT US',
//           ].map((item, index) => (
//             <li
//               key={index}
//               onClick={closeMenu}
//               style={{ animationDelay: `${0.1 * index + 0.3}s` }}
//               className="slide-in-item"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;











// import React, { useState, useEffect, useRef } from 'react';
// import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
// import { Link as ScrollLink } from 'react-scroll';
// import './navbar.css';
// import logo from '../assets/logo.png';
// // import BookRide from './bookRide';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const menuRef = useRef();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   // Change navbar background on scroll
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Scroll lock body when menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
//     return () => (document.body.style.overflow = 'auto');
//   }, [isMenuOpen]);

//   // Auto-close on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
//         closeMenu();
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMenuOpen]);

//   return (
//     <>
//       <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="navbar-icon" onClick={toggleMenu}>
//           {isMenuOpen ? <FiX /> : <FiMenu />}
//         </div>

//         <div className="navbar-logo">
//           <img src={logo} alt="ASX Logo" />
//         </div>

//         <div className="navbar-icon">
//           <FiSearch />
//         </div>
//       </nav>

//       <div ref={menuRef} className={`menu-overlay ${isMenuOpen ? 'slide-out' : ''}`}>
//         <div className="menu-close" onClick={closeMenu}>
//           <FiX />
//         </div>

//         <h2 className="menu-title red">MENU</h2>
//         <ul className="menu-links">
//           {[
//             { label: 'BOOK MY RIDE', target: 'bookRide' },
//             { label: 'EXPERIENCE ASHVA' },
//             { label: 'GET A RIDE' },
//             { label: 'ABOUT US', target: 'Book' },
//             { label: 'CONTACT US', target: 'Contact' },
//           ].map((item, index) =>
//             item.target ? (
//               <ScrollLink
//                 to={item.target}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 onClick={closeMenu}
//                 className="menu-scroll-link slide-in-item"
//                 style={{ animationDelay: `${0.1 * index + 0.3}s` }}
//                 key={index}
//               >
//                 {item.label}
//               </ScrollLink>
//             ) : (
//               <li
//                 key={index}
//                 onClick={closeMenu}
//                 className="slide-in-item"
//                 style={{ animationDelay: `${0.1 * index + 0.3}s` }}
//               >
//                 {item.label}
//               </li>
//             )
//           )}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;








// import React, { useState, useEffect, useRef } from 'react';
// import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import './navbar.css';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const menuRef = useRef();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   // Background change on scroll
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Scroll lock on body
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
//     return () => (document.body.style.overflow = 'auto');
//   }, [isMenuOpen]);

//   // Auto-close on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
//         closeMenu();
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMenuOpen]);

//   return (
//     <>
//       <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="navbar-icon" onClick={toggleMenu}>
//           {isMenuOpen ? <FiX /> : <FiMenu />}
//         </div>

//         <div className="navbar-logo">
//           <img src={logo} alt="ASX Logo" />
//         </div>

//         <div className="navbar-icon">
//           <FiSearch />
//         </div>
//       </nav>

//       <div ref={menuRef} className={`menu-overlay ${isMenuOpen ? 'slide-out' : ''}`}>
//         <div className="menu-close" onClick={closeMenu}>
//           <FiX />
//         </div>

//         <h2 className="menu-title red">MENU</h2>
//         <ul className="menu-links">
//           <li
//             onClick={closeMenu}
//             className="slide-in-item"
//             style={{ animationDelay: `0.3s` }}
//           >
//             <Link to="/bookride" className="menu-scroll-link">BOOK MY RIDE</Link>
//           </li>

//           {[
//             'EXPERIENCE ASHVA',
//             'GET A RIDE',
//             'ABOUT US',
//             'CONTACT US',
//           ].map((item, index) => (
//             <li
//               key={index}
//               onClick={closeMenu}
//               className="slide-in-item"
//               style={{ animationDelay: `${0.1 * (index + 1) + 0.3}s` }}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;











import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll lock on menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isMenuOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="ASX Logo" />
        </div>
        <div className="navbar-icon">
          <FiSearch />
        </div>
      </nav>

      <div ref={menuRef} className={`menu-overlay ${isMenuOpen ? 'slide-out' : ''}`}>
        <div className="menu-close" onClick={closeMenu}>
          <FiX />
        </div>

        <h2 className="menu-title red">MENU</h2>
        <ul className="menu-links">
          <li className="slide-in-item" style={{ animationDelay: `0.3s` }} onClick={closeMenu}>
            <RouterLink to="/bookride" className="menu-scroll-link">BOOK MY RIDE</RouterLink>
          </li>
          <li className="slide-in-item" style={{ animationDelay: `0.4s` }} onClick={closeMenu}>
            <RouterLink to="/experience" className="menu-scroll-link">Experience Ashva</RouterLink>
          </li>
          <li className="slide-in-item" style={{ animationDelay: `0.5s` }} onClick={closeMenu}>
            <span className="menu-scroll-link">GET A RIDE</span>
          </li>
          <li className="slide-in-item" style={{ animationDelay: `0.6s` }}>
            <ScrollLink
              to="book"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="menu-scroll-link"
            >
              ABOUT US
            </ScrollLink>
          </li>
          <li className="slide-in-item" style={{ animationDelay: `0.7s` }}>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="menu-scroll-link"
            >
              CONTACT US
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

