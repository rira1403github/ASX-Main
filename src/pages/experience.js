import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './experience.css';

const Experience = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    datetime: '',
    rideType: '',
    payment: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    navigate('/payment', { state: { bookingData: formData } });
  };

  return (
    <div className="experience-container">
      <h1 className="experience-title">ASX MOTO DROME EXPERIENCE DRIVE</h1>
      <hr className="divider" />

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label className="form-label">NAME</label>
            <input
              type="text"
              name="name"
              placeholder="FULL NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">PHONE</label>
          <input
            type="tel"
            name="phone"
            placeholder="📞 +91 **********"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="📧 email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">DATE-TIME</label>
          <input
            type="text"
            name="datetime"
            placeholder="📅 DD-MM-YYYY    ⏰ HH:MM AM/PM"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">TYPE OF RIDE</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="rideType"
                value="SELF DRIVE"
                checked={formData.rideType === 'SELF DRIVE'}
                onChange={handleChange}
              />
              <span>SELF DRIVE (INTRODUCTORY DISCOUNTS LIVE)</span>
            </label>
            <label>
              <input
                type="radio"
                name="rideType"
                value="CO-PILOT"
                checked={formData.rideType === 'CO-PILOT'}
                onChange={handleChange}
              />
              <span>CO-PILOT (COMPLIMENTARY)</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">PAYMENT</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="payment"
                value="REGISTRATION FEE"
                checked={formData.payment === 'REGISTRATION FEE'}
                onChange={handleChange}
              />
              <span>REGISTRATION FEE</span>
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="FULL PAYMENT"
                checked={formData.payment === 'FULL PAYMENT'}
                onChange={handleChange}
              />
              <span>FULL PAYMENT</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">
            CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience;