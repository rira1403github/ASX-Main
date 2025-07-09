import React from 'react';
import './experience.css';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">ASX MOTO DROME EXPERIENCE DRIVE</h1>
      <hr className="divider" />

      {/* Name Fields */}
      <div className="form-group-row">
        <div className="form-group">
          <label className="form-label">NAME*</label>
          <input type="text" placeholder="FIRST NAME" />
        </div>
        <div className="form-group">
          <label className="form-label invisible-label">.</label>
          <input type="text" placeholder="SECOND NAME" />
        </div>
      </div>

      {/* Phone Field */}
      <div className="form-group">
        <label className="form-label">PHONE *</label>
        <input type="tel" placeholder="📞 +91  FIRST NAME" />
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label className="form-label">EMAIL *</label>
        <input type="email" placeholder="📧 email.com" />
      </div>

      {/* Date-Time Field */}
      <div className="form-group">
        <label className="form-label">DATE-TIME *</label>
        <input type="text" placeholder="📅 DD-MM-YYYY    ⏰ HH:MM AM/PM" />
      </div>

      {/* Ride Type */}
      <div className="form-group">
        <label className="form-label">TYPE OF RIDE*</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="ride" />
            <span>SELF DRIVE (INTRODUCTORY DISCOUNTS LIVE)</span>
          </label>
          <label>
            <input type="radio" name="ride" />
            <span>CO-PILOT (COMPLIMENTARY)</span>
          </label>
        </div>
      </div>
      <div>
          <Contact />
          <Footer />
      </div>
    </div>
    
  );
  
};


export default Experience;
