import React, { useEffect, useState } from "react";
import "./GPackages.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { FaCouch, FaShower, FaParking } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import maincorp from "../assets/Events/ObstacleP.png";

const Obstacle = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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


const facilities = [
  { id: 1, title: "LOUNGE AREA", icon: <FaCouch /> },
  { id: 2, title: "SHOWER ROOMS", icon: <FaShower /> },
  { id: 3, title: "PARKING AREA", icon: <FaParking /> },
];

  return (
    <section className="gPackages-section" id="eventCor">
    <div className="gPackages-hero" style={{ backgroundImage: `url(${maincorp})` }} >
        <div className="hero-overlay" data-aos="fade-left">
        </div>
    </div>

      <div className="gPackages-content">
        <h2 className="gPackages-section-title" data-aos="fade-right">
          Obstacle Conqueror Challenge – ₹1,799
        </h2>
        <blockquote className="gPackages-quote" data-aos="fade-up">
          “Beat the Obstacles. Own the Terrain.”
        </blockquote>
        <p className="gPackages-text" data-aos="fade-up" data-aos-delay="200">
          The Obstacle Conqueror Challenge is made for true enthusiasts. In this 10-minute self-drive session, you’ll push yourself through Level 1 obstacles — from tyre gardens and articulation ramps to rock climbs. A pure test of endurance, control, and grit, this package is your chance to prove you’re built for off-roading.
        </p>
        <p className="gPackages-subtext" data-aos="fade-up"> *All prices are exclusive of 18% GST.</p>
      </div>

      <div className="gPackages-facility-section" id="GPackages-facilities">
        <h3 className="gPackages-facility-title" data-aos="fade-up">
          FACILITIES AVAILABLE
        </h3>

        {isMobile ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {facilities.map((f) => (
              <SwiperSlide key={f.id}>
                <div className="gPackages-facility-item" data-aos="zoom-in">
                  <div className="gPackages-facility-icon">{f.icon}</div>
                  <p>{f.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="gPackages-facility-grid">
            {facilities.map((f) => (
              <div
                key={f.id}
                className="gPackages-facility-item"
                data-aos="zoom-in"
                data-aos-delay={f.id * 100}
              >
                <div className="gPackages-facility-icon">{f.icon}</div>
                <p>{f.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="gPackages-experience-container">
      <h1 className="gPackages-experience-title">BOOK YOUR SLOT</h1>
      <hr className="divider" />

      <form className="gPackages-form-container" onSubmit={handleSubmit}>
        <div className="gPackages-form-group-row">
          <div className="gPackages-form-group">
            <label className="gPackages-form-label">NAME</label>
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

        <div className="gPackages-form-group">
          <label className="gPackages-form-label">PHONE</label>
          <input
            type="tel"
            name="phone"
            placeholder="📞 +91 **********"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="gPackages-form-group">
          <label className="gPackages-form-label">EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="📧 email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="gPackages-form-group">
          <label className="gPackages-form-label">DATE-TIME</label>
          <input
            type="text"
            name="datetime"
            placeholder="📅 DD-MM-YYYY    ⏰ HH:MM AM/PM"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="gPackages-form-group">
          <label className="gPackages-form-label">TYPE OF RIDE</label>
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

        <div className="gPackages-form-group">
          <label className="gPackages-form-label">PAYMENT</label>
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

        <div className="gPackages-form-group">
          <button type="submit" className="submit-btn">
            CONTINUE
          </button>
        </div>
      </form>
    </div>
      <div className="gPackages-map" data-aos="fade-right">
          <iframe
            title="ASX Motodrome Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.448713504769!2d77.8142723!3d13.0819974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae05003985d9ab%3A0x3b2632be939e174a!2sASX%20MotoDrome!5e0!3m2!1sen!2sin!4v1723972800000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </section>
  );
};

export default Obstacle;