import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./genOffer.css";
import "swiper/css";
import "swiper/css/pagination";
import maincorp from "../assets/Offers/groupOffer.webp";

const offerpackages = [
  { value: "Pro Drive Training", label: "Pro Drive Training – ₹999" },
  { value: "Obstacle Conqueror", label: "Obstacle Conqueror Challenge – ₹1,799" },
  { value: "Full Throttle", label: "Full Throttle Experience – ₹3,299" },
  { value: "Adventure Value Pack", label: "Adventure Value Pack – ₹3,999" },
  { value: "Complimentary Experience", label: "Complimentary Experience – Free (Limited Slots)" },
];

const rideTypes = [
  { value: "SELF DRIVE", label: "SELF DRIVE (Introductory discounts live)" },
  { value: "CO-PILOT", label: "CO-PILOT (Complimentary)" },
];

const paymentOptions = [
  { value: "REGISTRATION FEE", label: "REGISTRATION FEE" },
  { value: "FULL PAYMENT", label: "FULL PAYMENT" },
];

const GroupOffer = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    datetime: "",
    package: "",
    rideType: "",
    payment: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/payment", { state: { bookingData: formData } });
  };

  return (
    <section className="genOffer-section" id="groupOffer">
     
      <div
        className="genOffer-hero"
        style={{ backgroundImage: `url(${maincorp})` }}
      >
        <div className="genOffer-hero-overlay" data-aos="fade-left" />
      </div>

      <div className="genOffer-content">
        <h2 className="genOffer-section-title" data-aos="fade-right">
          Group Discounts – 20% OFF (All Days)
        </h2>
        <blockquote className="genOffer-quote" data-aos="fade-up">
          “More people, more thrill, more savings.”
        </blockquote>
        <div
          className="genOffer-text"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="genOffer-subtext">
            Groups of 4 or more enjoy a 20% discount on all packages:
          </p>
          <ul className="genOffer-list">
            <li>
              Pro Drive Training –{" "}
              <span className="genoffer-highlight">₹1,439 + GST (₹1,698 approx.)</span>
            </li>
            <li>
              Obstacle Conqueror Challenge –{" "}
              <span className="genoffer-highlight">₹1,529 + GST (₹1,804 approx.)</span>
            </li>
            <li>
              Full Throttle Experience –{" "}
              <span className="genoffer-highlight">₹2,639 + GST (₹3,112 approx.)</span>
            </li>
            <li>
              Adventure Value Pack (Most Popular) –{" "}
              <span className="genoffer-highlight">₹3,199 + GST (₹3,774 approx.)</span>
            </li>
            <li>
              Complimentary Experience –{" "}
              <span className="genoffer-highlight">
                Free (Limited Slots, no GST applicable)
              </span>
            </li>
          </ul>
        </div>
        <p className="genOffer-subtext">
          Valid on all days — the bigger the group, the bigger the savings!
        </p>
        <p
          className="genOffer-subtext-gst"
          data-aos="fade-up"
        >
          *GST is charged at 18% as per government regulations. Final billed
          amount shown in brackets.
        </p>
      </div>

      <div className="genOffer-experience-container" data-aos="fade-up">
        <h1 className="genOffer-experience-title">BOOK YOUR SLOT</h1>
        <hr className="genOffer-divider" />

        <form className="genOffer-form-container" onSubmit={handleSubmit}>
          <div className="genOffer-form-group">
            <label className="genOffer-form-label" htmlFor="name">
              NAME
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="FULL NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label" htmlFor="phone">
              PHONE
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+91 **********"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label" htmlFor="email">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label" htmlFor="datetime">
              DATE-TIME
            </label>
            <input
              id="datetime"
              type="text"
              name="datetime"
              placeholder="DD-MM-YYYY   HH:MM AM/PM"
              value={formData.datetime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">PACKAGE</label>
            <div className="radio-group">
              {offerpackages.map((pkg) => (
                <label key={pkg.value}>
                  <input
                    type="radio"
                    name="package"
                    value={pkg.value}
                    checked={formData.package === pkg.value}
                    onChange={handleChange}
                  />
                  <span>{pkg.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">TYPE OF RIDE</label>
            <div className="radio-group">
              {rideTypes.map((ride) => (
                <label key={ride.value}>
                  <input
                    type="radio"
                    name="rideType"
                    value={ride.value}
                    checked={formData.rideType === ride.value}
                    onChange={handleChange}
                  />
                  <span>{ride.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">PAYMENT</label>
            <div className="radio-group">
              {paymentOptions.map((option) => (
                <label key={option.value}>
                  <input
                    type="radio"
                    name="payment"
                    value={option.value}
                    checked={formData.payment === option.value}
                    onChange={handleChange}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="genOffer-form-group">
            <button type="submit" className="genOffer-submit-btn">
              CONTINUE
            </button>
          </div>
        </form>
      </div>

      <div className="genOffer-map" data-aos="fade-right">
        <iframe
          title="ASX Motodrome Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.448713504769!2d77.8142723!3d13.0819974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae05003985d9ab%3A0x3b2632be939e174a!2sASX%20MotoDrome!5e0!3m2!1sen!2sin!4v1723972800000!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default GroupOffer;