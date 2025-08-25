import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/Offers/influenceOfferMain.webp";
import img2 from "../assets/Offers/weekOfferMain.webp";
import img3 from "../assets/Offers/groupOfferMain.webp";
import img4 from "../assets/Offers/festiveOfferMain.webp";

import "swiper/css";
import "swiper/css/navigation";
import "./generalPackages.css";

const Packages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const packages = [
    { 
      title: "INFLUENCER COLLABORATIONS", 
      info: "VIEW DETAILS", 
      img: img1,
      link: "/InfluenceOffer"
    },
    { 
      title: "WEEKDAY OFFER", 
      info: "VIEW DETAILS", 
      img: img2,
      link: "/WeekOffer"
    },
    { 
      title: "GROUP DISCOUNTS", 
      info: "VIEW DETAILS", 
      img: img3,
      link: "/GroupOffer"
    },
    { 
      title: "FESTIVE OFFER", 
      info: "VIEW DETAILS", 
      img: img4,
      link: "/FestiveOffer"
    },
  ];

  return (
    <section className="general-packages-section">
      <div className="general-packages-header">
        <h2 data-aos="fade-right">OFFERS</h2>
        <a href="/OfferPage" className="know-more" data-aos="fade-left">
          KNOW MORE <span className="big-arrow">&gt;</span>
        </a>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={25}
        slidesPerView={1.3}
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