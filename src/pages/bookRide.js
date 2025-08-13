import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./bookRide.css";
import rideImage from "../assets/CKZ_3773.jpg";
import Contact from "../components/contact";
import Footer from "../components/footer";

const fetchRideData = () => {
  return Promise.resolve([
    {
      id: "pro-training",
      title: "PRO DRIVER TRAINING SESSION",
      subtitle:
        "Learn From The Experts - Master The Art Of Off-Road Driving!",
      description:
        "Join Our Off-Road Experts For A Hands-On Training Session Covering Essential Off-Road Driving Techniques To Handle The Toughest Terrains With Confidence For 5 Minutes Session.",
    },
    {
      id: "full-throttle",
      title: "FULL THROTTLE EXPERIENCE",
      subtitle: "Feel The Adrenaline - Push The Ashva 4x4 To Its Limits!",
      description:
        "Designed For Thrill-Seekers, This High-Speed Track Lets You Experience The Raw Power And Handling Capabilities Of The Ashva 4x4 On An Extreme Off-Road Circuit For 10 Minutes.",
    },
  ]);
};

const BookRide = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetchRideData().then((data) => setRides(data));
  }, []);

  return (
    <>
      <section className="book-ride-section" id="bookRide">

        <div className="ride-cards-desktop">
          {rides.map((ride, index) => (
            <motion.div
              className="ride-card"
              key={ride.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="ride-image">
                <motion.img
                  src={rideImage}
                  alt={ride.title}
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="ride-content">
                <motion.h2
                  className="ride-title red"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {ride.title}
                </motion.h2>
                <p className="ride-subtitle">{ride.subtitle}</p>
                <p className="ride-description">{ride.description}</p>
                <ScrollLink to="bookingForm" smooth duration={500}>
                  <motion.button
                    className="book-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    BOOK NOW
                  </motion.button>
                </ScrollLink>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="ride-cards-mobile">
          <Swiper
            modules={[ Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
          >
            {rides.map((ride, idx) => (
              <SwiperSlide key={ride.id}>
                <motion.div
                  className="ride-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="ride-image">
                    <img src={rideImage} alt={ride.title} />
                  </div>
                  <div className="ride-content">
                    <h2 className="ride-title red">{ride.title}</h2>
                    <p className="ride-subtitle">{ride.subtitle}</p>
                    <p className="ride-description">{ride.description}</p>
                    <ScrollLink to="bookingForm" smooth duration={500}>
                      <button className="book-btn">BOOK NOW</button>
                    </ScrollLink>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Booking FORM */}
      {/* <section id="bookingForm" className="booking-form">
        <h2 className="red">Booking Form</h2>
        <p style={{ color: "#ccc" }}>Replace this with your actual form</p>
      </section> */}

      <Contact />
      <Footer />
    </>
  );
};

export default BookRide;