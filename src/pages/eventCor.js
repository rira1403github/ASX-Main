import React, { useEffect, useState } from "react";
import "./eventCor.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCouch, FaShower, FaParking } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import lastImg from "../assets/Events/GEco.jpg";
import img1 from "../assets/Events/Event1.webp";
import img2 from "../assets/Events/Event2.webp";
import img3 from "../assets/Events/Event3.webp";
import img4 from "../assets/Events/Event4.webp";
import img5 from "../assets/Events/Event5.webp";
import img6 from "../assets/Events/Event6.webp";

const facilities = [
  { id: 1, title: "LOUNGE AREA", icon: <FaCouch /> },
  { id: 2, title: "SHOWER ROOMS", icon: <FaShower /> },
  { id: 3, title: "PARKING AREA", icon: <FaParking /> },
];

const EventCor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="eventCor-section" id="eventCor">
      <div className="eventCor-hero">
        <div className="hero-overlay" data-aos="fade-left">
        </div>
      </div>

      <div className="eventCor-content">
        <h2 className="section-title" data-aos="fade-right">
          CORPORATE EVENTS
        </h2>
        <blockquote className="eventCor-quote" data-aos="fade-up">
          “FUEL TEAMWORK WITH THRILL AND ADVENTURE.”
        </blockquote>
        <p className="eventCor-text" data-aos="fade-up" data-aos-delay="200">
          Step away from routine and recharge your team at ASX Motodrome. Whether it’s a small group of 5 or a large corporate gathering of 200+, we curate stress-free, high-energy outings tailored to your needs. From burnout-busting off-road rides to team bonding games, adventure packages, and curated lunches — we specialize in designing experiences that inspire, connect, and energize.
        </p>
      </div>

      <div className="journey-section">
        <h3 className="journey-title" data-aos="fade-left">
          OUR JOURNEY
        </h3>
        <div className="journey-grid">
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <div
              key={i}
              className="journey-card"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <img src={img} alt={`Journey step ${i + 1}`} />
              <p>
                {[
                  "Warm Welcome",
                  "Lunch",
                  "Adrenaline Fueled Ride",
                  "Professional Photography",
                  "Team Bonding Activities",
                  "Corporate Burnout Activities",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="facility-section" id="facilities">
        <h3 className="facility-title" data-aos="fade-up">
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
                <div className="facility-item" data-aos="zoom-in">
                  <div className="facility-icon">{f.icon}</div>
                  <p>{f.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="facility-grid">
            {facilities.map((f) => (
              <div
                key={f.id}
                className="facility-item"
                data-aos="zoom-in"
                data-aos-delay={f.id * 100}
              >
                <div className="facility-icon">{f.icon}</div>
                <p>{f.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="gallery-section">
        <h3 className="gallery-title" data-aos="fade-up">
          OUR GALLERY OF EVENTS
        </h3>
        <div className="gallery-grid">
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
            <img src={lastImg} alt="Gallery Event" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCor;