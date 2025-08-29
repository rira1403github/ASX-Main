import React, { useEffect } from "react";
import "./Rules.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Rules = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="rules-section" id="rules">
      
      <div className="rules-header" data-aos="fade-down">
        <h2 className="rules-title">RULES & REGULATIONS</h2>
        <hr className="rules-divider" />
      </div>

      <p className="rules-subtext" data-aos="fade-up">
        At <span className="highlight">ASX Motodrome</span>, safety and adventure go hand-in-hand. 
        To ensure a secure and enjoyable experience for all, please follow the guidelines below:
      </p>

      <div className="section-header" data-aos="zoom-in">
        <h2 className="rules-title">GENERAL GUIDELINES</h2>
      </div>
      <ol className="rules-list" data-aos="fade-up" data-aos-delay="100">
        <li>All participants must sign an Indemnity Form before the ride.</li>
        <li>Management reserves the right to deny entry if safety rules are violated.</li>
      </ol>

      <div className="section-header" data-aos="zoom-in">
        <h2 className="rules-title">DRIVING & TRACK RULES</h2>
      </div>
      <ul className="rules-list" data-aos="fade-up" data-aos-delay="150">
        <li>Helmets, seatbelts, and safety gear must be worn at all times.</li>
        <li>Under 18? Contact the team before booking for guidance.</li>
        <li>Only one driver per vehicle. Instructors accompany for safety.</li>
        <li>Follow instructor briefings. Rash driving is strictly prohibited.</li>
        <li>Passenger rides allowed only with official drivers.</li>
      </ul>

      <div className="section-header" data-aos="zoom-in">
        <h2 className="rules-title">OFFERS, BOOKINGS & PAYMENTS</h2>
      </div>
      <ul className="rules-list" data-aos="fade-up" data-aos-delay="200">
        <li>All offers are subject to availability and advance booking.</li>
        <li>Prices exclude 18% GST.</li>
        <li>Bookings are transferable with prior confirmation.</li>
        <li>Events may be rescheduled/cancelled due to bad weather.</li>
      </ul>

      <div className="section-header" data-aos="zoom-in">
        <h2 className="rules-title">PHOTOGRAPHY & CONTENT</h2>
      </div>
      <ul className="rules-list" data-aos="fade-up" data-aos-delay="250">
        <li>Personal photography allowed. Drone usage requires approval.</li>
        <li>Influencers must agree to content usage terms.</li>
        <li>
          ASX Motodrome may use event footage for promotions unless opted out.
        </li>
      </ul>

      <div className="section-header" data-aos="zoom-in">
        <h2 className="rules-title">LIABILITY & RESPONSIBILITY</h2>
      </div>
      <ul className="rules-list" data-aos="fade-up" data-aos-delay="300">
        <li>All participants must sign a waiver before driving activities.</li>
        <li>ASX Motodrome is not liable for injuries due to rule violations.</li>
        <li>Follow staff instructions at all times — safety is our priority.</li>
      </ul>

      <p
        className="rules-subtext footnote"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        ✅ By entering ASX Motodrome, you agree to these rules for a 
        <span className="highlight"> safe, fun, and unforgettable adventure!</span>
      </p>
    </section>
  );
};

export default Rules;