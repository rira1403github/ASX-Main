import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./OurPackages.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const packages = [
    { title: "FULL THROTTLE", info: "SMALL INFORMATION" },
    { title: "ADVENTURE RIDE", info: "SMALL INFORMATION" },
    { title: "SPEED DEMON", info: "SMALL INFORMATION" },
    { title: "TRACK MASTER", info: "SMALL INFORMATION" },
  ];

  return (
    <section className="packages-section">
      <div className="packages-header">
        <h2 data-aos="fade-right">OUR PACKAGES</h2>
        <a href="#more" className="know-more" data-aos="fade-left">
          KNOW MORE →
        </a>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        className="packages-swiper"
      >
        {packages.map((pkg, index) => (
          <SwiperSlide key={index}>
            <div className="package-card" data-aos="zoom-in">
              <div className="package-footer">
                <h3>{pkg.title}</h3>
                <p>{pkg.info}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Packages;