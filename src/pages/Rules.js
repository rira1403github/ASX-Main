import React, { useEffect } from "react";
import "./aboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const RULES = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="rules-section" id="rules">
        <div className="rules-header" data-aos="fade-up">
          <h2 className="rules-title">RULES & REGULATIONS</h2>
          <hr
            className="rules-divider"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>

        <p className="rules-subtext" data-aos="fade-up" data-aos-delay="200">
          At ASX Motodrome, safety and adventure go hand-in-hand. To ensure a secure and enjoyable experience for all, we request every participant to follow the guidelines below:
        </p>

        <div className="rules-header" data-aos="fade-up">
          <h2 className="rules-title">GENERAL GUIDELINES</h2>
        </div>

        <p className="rules-subtext" data-aos="fade-up" data-aos-delay="300">
         <ol>
            <li>All participants must fill out and sign an Indemnity Form before taking the ride. Forms will be provided at the venue.</li>
            <li>Management reserves the right to deny entry or stop any activity if safety rules are violated.</li>
         </ol>
        </p>

        <div className="section-header" data-aos="fade-up">
          <h2 className="rules-title">DRIVING & TRACK RULES</h2>
        </div>

        <ol
          className="rules-subtext"
          data-aos="fade-up"
          data-aos-delay="350"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li>
            Helmets, seatbelts, and safety gear provided by ASX Motodrome must be worn at all times.
          </li>
          <li>
            Self-drive participants under 18 years of age are required to contact the registered number for detailed guidance before booking.
          </li>
          <li>
            Only one driver is allowed per vehicle at a time. Our instructor will always accompany you while driving to ensure safety.
          </li>
          <li>
            Strictly follow the instructor’s briefing before entering the track. Rash driving, drifting, or unsafe maneuvers are not permitted.
          </li>
          <li>
            Passenger rides are only permitted on designated vehicles with official drivers.
          </li>
        </ol>

        <div className="section-header" data-aos="fade-up">
          <h2 className="rules-title">OFFERS, BOOKINGS & PAYMENTS</h2>
        </div>

        <ul
          className="rules-subtext"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li>
            All offers (weekday, group, festive) are subject to availability and must be booked in advance.
          </li>
          <li>
            Prices are exclusive of 18% GST. The final billed amount will be shown during booking/payment.
          </li>
          <li>
            Bookings are transferable, but you must inform us in advance and get confirmation for any changes.
          </li>
          <li>
            In case of bad weather or unforeseen circumstances, ASX Motodrome reserves the right to reschedule or cancel activities (refunds/rescheduling will be provided).
          </li>
        </ul>

        <div className="section-header" data-aos="fade-up">
          <h2 className="rules-title">PHOTOGRAPHY & CONTENT</h2>
        </div>

        <ul
          className="rules-subtext"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li>
            Personal photography and videography are allowed. Drone usage requires prior approval.
          </li>
          <li>
            Influencers must sign an indemnity form and agree to content usage terms before collaborations.
          </li>
          <li>
            ASX Motodrome may capture photos/videos of participants for promotional purposes unless explicitly opted out.
          </li>
        </ul>

        <div className="section-header" data-aos="fade-up">
          <h2 className="rules-title">LIABILITY & RESPONSIBILITY</h2>
        </div>

        <ul
          className="rules-subtext"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li>
            All participants must sign a waiver before engaging in any driving activity.
          </li>
          <li>
            ASX Motodrome is not liable for personal injury, loss, or damage caused due to non-compliance with safety rules.
          </li>
          <li>
            Participants are requested to follow staff instructions at all times — your safety is our priority.
          </li>
        </ul>

        <p
          className="rules-subtext"
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ fontWeight: 900, textAlign: "center" }}
        >
          By entering ASX Motodrome, you agree to abide by these rules and regulations to ensure a safe, fun, and unforgettable off-road adventure.
        </p>
      </section>
    </>
  );
};

export default AboutUs;