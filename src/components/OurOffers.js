import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Events/InfluenceP.webp";
import img2 from "../assets/Events/WeekdayP.webp";
import img3 from "../assets/Events/GroupDP.webp";
import img4 from "../assets/Events/FestiveP.webp";

import "swiper/css";
import "swiper/css/navigation";
import "./generalPackages.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const packages = [
    { 
      title: "INFLUENCER COLLABORATIONS", 
      info: "VIEW DETAILS", 
      img: img1,
      link: "/packages/full-throttle"
    },
    { 
      title: "WEEKDAY OFFER", 
      info: "VIEW DETAILS", 
      img: img2,
      link: "/packages/pro-drive"
    },
    { 
      title: "GROUP DISCOUNTS", 
      info: "VIEW DETAILS", 
      img: img3,
      link: "/packages/obstacle-conqueror"
    },
    { 
      title: "FESTIVE OFFER", 
      info: "VIEW DETAILS", 
      img: img4,
      link: "/packages/obstacle-conqueror"
    },
  ];

  return (
    <section className="packages-section">
      <div className="packages-header">
        <h2 data-aos="fade-right">OUR OFFERS</h2>
        <a href="#more" className="know-more" data-aos="fade-left">
          KNOW MORE <span className="big-arrow">&gt;</span>
        </a>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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