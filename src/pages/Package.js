// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// // import { Link as ScrollLink } from "react-scroll";
// import { useNavigate } from 'react-router-dom'; 
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./bookRide.css";
// import rideImage from "../assets/CKZ_3773.jpg";
// const fetchRideData = () => {
//   return Promise.resolve([
//     {
//       id: "pro-training",
//       title: "PRO DRIVER TRAINING SESSION",
//       subtitle:
//         "Learn From The Experts - Master The Art Of Off-Road Driving!",
//       description:
//         "Join Our Off-Road Experts For A Hands-On Training Session Covering Essential Off-Road Driving Techniques To Handle The Toughest Terrains With Confidence For 5 Minutes Session.",
//     },
//     {
//       id: "full-throttle",
//       title: "FULL THROTTLE EXPERIENCE",
//       subtitle: "Feel The Adrenaline - Push The Ashva 4x4 To Its Limits!",
//       description:
//         "Designed For Thrill-Seekers, This High-Speed Track Lets You Experience The Raw Power And Handling Capabilities Of The Ashva 4x4 On An Extreme Off-Road Circuit For 10 Minutes.",
//     },
//   ]);
// };

// const BookRide = () => {
//   const [rides, setRides] = useState([]);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     fetchRideData().then((data) => setRides(data));
//   }, []);

//   return (
//     <>
//       <section className="book-ride-section" id="bookRide">

//         <div className="ride-cards-desktop">
//           {rides.map((ride, index) => (
//             <motion.div
//               className="ride-card"
//               key={ride.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//             >
//               <div className="ride-image">
//                 <motion.img
//                   src={rideImage}
//                   alt={ride.title}
//                   initial={{ scale: 1.1 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.8 }}
//                 />
//               </div>
//               <div className="ride-content">
//                 <motion.h2
//                   className="ride-title red"
//                   initial={{ x: -50, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                   {ride.title}
//                 </motion.h2>
//                 <p className="ride-subtitle">{ride.subtitle}</p>
//                 <p className="ride-description">{ride.description}</p>
//                   <motion.button
//                     className="book-btn"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => navigate('/experience')}
//                   >
//                     BOOK NOW
//                   </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="ride-cards-mobile">
//           <Swiper
//             modules={[ Autoplay, Pagination ]}
//             spaceBetween={20}
//             slidesPerView={1}
//             pagination={{ clickable: true}}
//             autoplay={{ delay: 3500, disableOnInteraction: false }}
//           >
//             {rides.map((ride, idx) => (
//               <SwiperSlide key={ride.id}>
//                 <motion.div
//                   className="ride-card"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <div className="ride-image">
//                     <img src={rideImage} alt={ride.title} />
//                   </div>
//                   <div className="ride-content">
//                     <h2 className="ride-title red">{ride.title}</h2>
//                     <p className="ride-subtitle">{ride.subtitle}</p>
//                     <p className="ride-description">{ride.description}</p>
//                   <motion.button
//                     className="book-btn"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => navigate('/experience')}
//                   >
//                     BOOK NOW
//                   </motion.button>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       {/* Booking FORM */}
//       {/* <section id="bookingForm" className="booking-form">
//         <h2 className="red">Booking Form</h2>
//         <p style={{ color: "#ccc" }}>Replace this with your actual form</p>
//       </section> */}
//     </>
//   );
// };

// export default BookRide;





import React, { useEffect } from "react";
import "./Package.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/Events/EI-1.png";
import img2 from "../assets/Events/EI-2.png";
import img3 from "../assets/Events/EI-3.png";
import img4 from "../assets/Events/EI-3.png";
import img5 from "../assets/Events/EI-3.png";
import { Link } from "react-router-dom";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const eventData = [
    {
      id: 1,
      title: "Pro Drive Training – ₹999",
      img: img1,
      desc: "Take your first step into off-road driving with our Pro Drive Training package...",
      // knowMore: "/EventCele", 
      details: "/ProDriver",
      quote: "/eventCele/quote",
    },
    {
      id: 2,
      title: "Obstacle Conqueror Challenge – ₹1,799",
      img: img2,
      desc: "The Obstacle Conqueror Challenge is made for true enthusiasts...",
      // knowMore: "/corporate",
      details: "/Obstacle",
      quote: "/corporate/quote",
    },
    {
      id: 3,
      title: "Full Throttle Experience – ₹3,299",
      img: img3,
      desc: "Crave the thrill of speed? The Full Throttle Experience puts you in...",
      // knowMore: "/host",
      details: "/Throttle",
      quote: "/host/quote",
    },
    {
      id: 4,
      title: "Adventure Value Pack – ₹3,999 (in demaND)",
      img: img4,
      desc: "Our best-selling package, the Adventure Value Pack, brings you...",
      // knowMore: "/host",
      details: "/Adventure",
      quote: "/host/quote",
    },
    {
      id: 5,
      title: "Complimentary Experience – Free (Limited Slots)",
      img: img5,
      desc: "Get introduced to the world of off-roading with our Complimentary...",
      // knowMore: "/host",
      details: "/Complementary",
      quote: "/host/quote",
    },
  ];

  return (
    <section className="events-section" id="events">
      <div className="events-header" data-aos="fade-up">
        <h2>PACKAGES</h2>
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
            <img src={event.img} alt={event.title} className="event-img" />
            <h3 className="event-title">{event.title}</h3>
            <p className="event-desc">
              {event.desc}{" "}
              {/* <Link to={event.knowMore} className="know-more">
                Know More
              </Link> */}
            </p>
            <div className="event-buttons">
              <Link to={event.details} className="btn-outline">
                VIEW DETAILS
              </Link>
              <Link to={event.quote} className="btn-outline">
                GET INQUIRE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;