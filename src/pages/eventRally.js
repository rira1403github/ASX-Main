import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./eventRally.css";

const EventRally = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="eventRally-section" id="eventRally">
      <div className="eventRally-hero">
        <div className="hero-overlay" data-aos="fade-left"></div>
      </div>

      <div className="eventRally-content">
        <h2 className="section-title" data-aos="fade-right">
          HOST AN EVENT
        </h2>
        <blockquote className="eventRally-quote" data-aos="fade-up">
          “A ONE-OF-A-KIND VENUE FOR ONE-OF-A-KIND EVENTS.”
        </blockquote>
        <p
          className="eventRally-text"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Workshops, off-roading rallies, championships, or adventure-themed
          gatherings — whatever you have in mind, ASX Motodrome is the perfect
          place to host it. With world-class off-road tracks, customizable
          experiences, and ample outdoor space, we create an unforgettable
          setting for events of any scale. From thrill-seekers to
          professionals, we cater to every audience with energy, precision,
          and passion. Here, every event turns into an experience worth
          remembering.
        </p>
      </div>
    </section>
  );
};

export default EventRally;