import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Events/hero-main.webp";
import img2 from "../assets/Events/eventCor-main.webp";
import img3 from "../assets/Events/eventRallymain.webp";

import "swiper/css";
import "swiper/css/navigation";
import "./generalPackages.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const packages = [
    {
      title: "CELEBRATIONS",
      info: "VIEW DETAILS",
      img: img1,
      link: "/EventCele",
    },
    {
      title: "CORPORATE OUTINGS",
      info: "VIEW DETAILS",
      img: img2,
      link: "/EventCor",
    },
    {
      title: "HOST AN EVENT",
      info: "VIEW DETAILS",
      img: img3,
      link: "/EventRally",
    },
    {
      title: "CORPORATE OUTINGS",
      info: "VIEW DETAILS",
      img: img2,
      link: "/EventCor",
    },
  ];

  return (
    <section className="general-packages-section">
      <div className="general-packages-header">
        <h2 data-aos="fade-right">OUR EVENTS</h2>
        <a href="/events" className="know-more" data-aos="fade-left">
          KNOW MORE <span className="big-arrow">&gt;</span>
        </a>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={40}
        slidesPerView={1.4}
        centeredSlides={true}
        loop={true}
        className="general-packages-swiper"
      >
        {packages.map((pkg, index) => (
          <SwiperSlide key={index}>
            <div className="general-package-card" data-aos="zoom-in">
              <img src={pkg.img} alt={pkg.title} className="general-package-img" />
              <div className="general-package-footer">
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