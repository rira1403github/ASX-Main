import React, { useEffect } from "react";
import "./events.css";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/Events/hero-main.webp";
import img2 from "../assets/Events/eventCor-main.webp";
import img3 from "../assets/Events/eventRallymain.webp";

import { Link } from "react-router-dom";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    AOS.refresh(); 
    return () => {
      AOS.refreshHard(); 
    };
  }, []);

  const eventData = [
    {
      id: 1,
      title: "Celebration",
      img: img1,
      desc: "Make your special day truly unforgettable at ASX Motodrome...",
      details: "/EventCele",
      quote: "/PageContact",
    },
    {
      id: 2,
      title: "Corporate Outings",
      img: img2,
      desc: "Step away from routine and bond with your team at ASX Motodrome...",
      details: "/EventCor",
      quote: "/PageContact",
    },
    {
      id: 3,
      title: "Host an Event",
      img: img3,
      desc: "Workshops, off-roading rallies, championships, or adventure-themed events...",
      details: "/EventRally",
      quote: "/PageContact",
    },
  ];

  return (
    <section className="events-section" id="events">
      <div className="events-header" data-aos="fade-up">
        <h2>EVENTS</h2>
        <hr />
      </div>

      <div className="events-grid">
        {eventData.map((event, index) => (
          <div
            className="event-card"
            key={event.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <Link to={event.details}>
              <img
                src={event.img}
                alt={event.title}
                className="event-img"
                loading="lazy"
              />
            </Link>

            <h3 className="event-title">{event.title}</h3>
            <p className="event-desc">{event.desc}</p>

            <div className="event-buttons">
              <Link to={event.details} className="btn-outline">
                VIEW DETAILS
              </Link>
              <Link to={event.quote} className="btn-outline">
                GET INQUIRY
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;