import React, { useEffect } from "react";
import "./events.css";
import AOS from "aos";
import "aos/dist/aos.css";

const EventPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="event-page">
      <section className="event-hero">
        <div className="hero-overlay">
          <h1 className="hero-title" data-aos="fade-up">ASX MOTO DROME 2025</h1>
          <p className="hero-date" data-aos="fade-up" data-aos-delay="200">BENGALURU, India</p>
        </div>
      </section>

      <section className="event-card" data-aos="fade-up">
        <div className="event-image" data-aos="zoom-in"></div>
        <div className="event-details" data-aos="fade-up" data-aos-delay="200">
          <h2 className="event-title">BIRTHDAY BASH</h2>
          <p className="event-intro">Short introduction about the event goes here. Add a catchy one-liner!</p>
          <button className="event-btn">GET ENQUIRE</button>
        </div>
      </section>
       <section className="event-card" data-aos="fade-up">
        <div className="event-image" data-aos="zoom-in"></div>
        <div className="event-details" data-aos="fade-up" data-aos-delay="200">
          <h2 className="event-title">CORPORATIVE EVENTS</h2>
          <p className="event-intro">Short introduction about the event goes here. Add a catchy one-liner!</p>
          <button className="event-btn">GET ENQUIRE</button>
        </div>
      </section>
       <section className="event-card" data-aos="fade-up">
        <div className="event-image" data-aos="zoom-in"></div>
        <div className="event-details" data-aos="fade-up" data-aos-delay="200">
          <h2 className="event-title">RALLY RACING</h2>
          <p className="event-intro">Short introduction about the event goes here. Add a catchy one-liner!</p>
          <button className="event-btn">GET ENQUIRE</button>
        </div>
      </section>
    </div>
  );
};

export default EventPage;