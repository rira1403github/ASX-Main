import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isMenuOpen]);

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
            <RouterLink to="/experience" className="menu-scroll-link">EXPERIENCE ASHVA</RouterLink>
          </li>
          <li className="slide-in-item" style={{ animationDelay: `0.5s` }} onClick={closeMenu}>
            <RouterLink to="/Events" className="menu-scroll-link">EVENTS</RouterLink>
          </li>
          <li className="slide-in-item" style={{ animationDelay: `0.6s` }} onClick={closeMenu}>
            <RouterLink to="/aboutUs" className="menu-scroll-link">ABOUT US</RouterLink>
          </li>
          {/* <li className="slide-in-item" style={{ animationDelay: `0.6s` }}>
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
          </li> */}
          <li className="slide-in-item" style={{ animationDelay: `0.7s` }} onClick={closeMenu}>
            <RouterLink to="/pageContact" className="menu-scroll-link">CONTACT US</RouterLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;