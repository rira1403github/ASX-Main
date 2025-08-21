import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Events/ThrottleP.png";
// import img2 from "../assets/Events/ProDriverP.png";
import img3 from "../assets/Events/ObstacleP.png";
import img4 from "../assets/Events/AdventureP.png";
import img5 from "../assets/Events/ComplimentaryP.png";

import "swiper/css";
import "swiper/css/navigation";
import "./generalPackages.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const packages = [
    { 
      title: "Full Throttle Experience", 
      info: "VIEW DETAILS", 
      img: img1,
      link: "/Throttle"
    },
    { 
      title: "Pro Drive Training", 
      info: "VIEW DETAILS", 
      img: img5,
      link: "/ProDriver"
    },
    { 
      title: "Obstacle Conqueror Challenge", 
      info: "VIEW DETAILS", 
      img: img3,
      link: "/Obstacle"
    },
    { 
      title: "Adventure Value Pack", 
      info: "VIEW DETAILS", 
      img: img4,
      link: "/Adventure"
    },
    { 
      title: "Complimentary Experience – Free (Limited Slots)", 
      info: "VIEW DETAILS", 
      img: img5,
      link: "/Complementary"
    },
  ];

  return (
    <section className="packages-section">
      <div className="packages-header">
        <h2 data-aos="fade-right">OUR PACKAGES</h2>
        <a href="/Package" className="know-more" data-aos="fade-left">
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