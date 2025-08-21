import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Events/EI-1.png";
import img2 from "../assets/Events/EI-2.png";
import img3 from "../assets/Events/EI-3.png";

import "swiper/css";
import "swiper/css/navigation";
import "./generalPackages.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const packages = [
    { 
      title: "CELEBRATIONS", 
      info: "VIEW DETAILS", 
      img: img1,
      link: "/EventCele"
    },
    { 
      title: "CORPORATE OUTINGS", 
      info: "VIEW DETAILS", 
      img: img2,
      link: "/EventCor"
    },
    { 
      title: "HOST AN EVENT", 
      info: "VIEW DETAILS", 
      img: img3,
      link: "/EventRally"
    },
  ];

  return (
    <section className="packages-section">
      <div className="packages-header">
        <h2 data-aos="fade-right">OUR EVENTS</h2>
        <a href="/events" className="know-more" data-aos="fade-left">
          KNOW MORE →
        </a>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1.4}
        centeredSlides={true}
        loop={true}
        className="packages-swiper"
      >
        {packages.map((pkg, index) => (
          <SwiperSlide key={index}>
            <div className="package-card" data-aos="zoom-in">
              <img src={pkg.img} alt={pkg.title} className="package-img" />
              <div className="package-footer">
                <h3>{pkg.title}</h3>
                <a href={pkg.link} className="view-details">
                  {pkg.info}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Packages;