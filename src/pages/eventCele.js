import React, { useEffect } from "react";
import "./eventCele.css";
import AOS from "aos";
import "aos/dist/aos.css";
import lastImg from "../assets/Events/last-main.png";
import img1 from "../assets/Events/Event1.webp";
import img2 from "../assets/Events/Event2.webp";
import img3 from "../assets/Events/Event3.webp";
import img4 from "../assets/Events/Event4.webp";
import img5 from "../assets/Events/Event5.webp";

const Celebrations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="celebrations-section" id="celebrations">
      
      <div className="celebrations-hero">
        <div className="hero-overlay">
          <h1 data-aos="fade-up">CELEBRATE LIFE’S MILESTONES</h1>
          <h2 data-aos="fade-up" data-aos-delay="100">
            WITH ADRENALINE.
          </h2>
        </div>
      </div>

      <div className="celebrations-content">
        <h2 className="section-title" data-aos="fade-right">
          CELEBRATIONS
        </h2>
        <blockquote
          className="celebrations-quote"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          “Celebrate life’s milestones with adrenaline.”
        </blockquote>
        <p className="celebrations-text" data-aos="fade-up" data-aos-delay="200">
          Make your special day truly unforgettable at{" "}
          <span className="highlight">ASX Motodrome</span>. From theme-based
          birthdays to milestone celebrations, we take care of everything — you
          share the date, and we plan the rest. Whether it’s a private birthday
          party or a group celebration, our adrenaline-filled rides and curated
          activities guarantee joy, laughter, and memories that last a lifetime.
          Because every celebration deserves more than the ordinary.
        </p>
      </div>

      <div className="journey-section">
        <h3 className="journey-title" data-aos="fade-left">
          OUR JOURNEY
        </h3>
        <div className="journey-grid">
          <div className="journey-card" data-aos="zoom-in">
            <img src={img1} alt="Warm Welcome" />
            <p>Warm Welcome</p>
          </div>
          <div className="journey-card" data-aos="zoom-in" data-aos-delay="50">
            <img src={img2} alt="Lunch" />
            <p>Lunch</p>
          </div>
          <div className="journey-card" data-aos="zoom-in" data-aos-delay="100">
            <img src={img3} alt="Adrenaline Fueled Ride" />
            <p>Adrenaline Fueled Ride</p>
          </div>
          <div className="journey-card" data-aos="zoom-in" data-aos-delay="150">
            <img src={img4} alt="Professional Photography" />
            <p>Professional Photography</p>
          </div>
          <div className="journey-card" data-aos="zoom-in" data-aos-delay="200">
            <img src={img5} alt="Celebration" />
            <p>Celebration</p>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <h3 className="gallery-title" data-aos="fade-up">
          OUR GALLERY OF EVENTS
        </h3>
        <div className="gallery-grid">
          <div className="gallery-item" data-aos="fade-up">
            <img src={lastImg} alt="Gallery Event" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebrations;