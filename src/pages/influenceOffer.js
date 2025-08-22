import React, { useState } from "react";
import "./genOffer.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import maincorp from "../assets/Offers/influenceOffer.webp";

const Adventure = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    navigate("/payment", { state: { bookingData: formData } });
  };

  return (
    <section className="genOffer-section" id="eventCor">
      <div
        className="genOffer-hero"
        style={{ backgroundImage: `url(${maincorp})` }}
      >
        <div className="genOffer-hero-overlay" data-aos="fade-left"></div>
      </div>

      <div className="genOffer-content">
        <h2 className="genOffer-section-title" data-aos="fade-right">
          Influencer Collaborations
        </h2>
        <blockquote className="genOffer-quote" data-aos="fade-up">
          “Let’s create content as thrilling as the ride.”
        </blockquote>
        <div
          className="genOffer-text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="genOffer-subtext">At ASX Motodrome, we love partnering with influencers, content creators, and storytellers who share our passion for adventure and adrenaline. From off-road challenges and full-throttle experiences to behind-the-scenes glimpses of our track — we offer creators the perfect canvas to capture, share, and inspire.
Whether you’re a travel vlogger, lifestyle influencer, motorsport enthusiast, or simply someone who loves creating unique content, we’d love to collaborate.</p>
        </div>
        <p className="genOffer-subtext">
          Together, let’s turn every ride into a story worth sharing!
📩 Reach out to us at <span className="highlight">experience@asxmotodrome.com</span> or DM us on Instagram <span className="highlight">@asx_motodrome</span> to explore collaboration opportunities.
        </p>
      </div>

      <div className="genOffer-experience-container">
        <h1 className="genOffer-experience-title">BOOK YOUR SLOT</h1>
        <hr className="genOffer-divider" />

        <form className="genOffer-form-container" onSubmit={handleSubmit}>
          <div className="genOffer-form-group-row">
            <div className="genOffer-form-group">
              <label className="genOffer-form-label">NAME</label>
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

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">PHONE</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 **********"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">DATE-TIME</label>
            <input
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
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Pro Drive Training"
                  checked={formData.package === "Pro Drive Training"}
                  onChange={handleChange}
                />
                <span>Pro Drive Training – ₹999</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Obstacle Conqueror"
                  checked={formData.package === "Obstacle Conqueror"}
                  onChange={handleChange}
                />
                <span>Obstacle Conqueror Challenge – ₹1,799</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Full Throttle"
                  checked={formData.package === "Full Throttle"}
                  onChange={handleChange}
                />
                <span>Full Throttle Experience – ₹3,299</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Adventure Value Pack"
                  checked={formData.package === "Adventure Value Pack"}
                  onChange={handleChange}
                />
                <span>Adventure Value Pack – ₹3,999</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Complimentary Experience"
                  checked={formData.package === "Complimentary Experience"}
                  onChange={handleChange}
                />
                <span>Complimentary Experience – Free (Limited Slots)</span>
              </label>
            </div>
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">TYPE OF RIDE</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="rideType"
                  value="SELF DRIVE"
                  checked={formData.rideType === "SELF DRIVE"}
                  onChange={handleChange}
                />
                <span>SELF DRIVE (Introductory discounts live)</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="rideType"
                  value="CO-PILOT"
                  checked={formData.rideType === "CO-PILOT"}
                  onChange={handleChange}
                />
                <span>CO-PILOT (Complimentary)</span>
              </label>
            </div>
          </div>

          <div className="genOffer-form-group">
            <label className="genOffer-form-label">PAYMENT</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="REGISTRATION FEE"
                  checked={formData.payment === "REGISTRATION FEE"}
                  onChange={handleChange}
                />
                <span>REGISTRATION FEE</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="FULL PAYMENT"
                  checked={formData.payment === "FULL PAYMENT"}
                  onChange={handleChange}
                />
                <span>FULL PAYMENT</span>
              </label>
            </div>
          </div>

          <div className="genOffer-form-group">
            <button type="submit" className="submit-btn">
              CONTINUE
            </button>
          </div>
        </form>
      </div>

      <div className="genOffer-map" data-aos="fade-right">
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

export default Adventure;