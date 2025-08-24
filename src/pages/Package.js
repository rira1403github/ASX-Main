import React, { useEffect } from "react";
import "./Package.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../assets/Packages/ObstacleP.png";
import img3 from "../assets/Packages/ThrottleP.png";
import img4 from "../assets/Packages/AdventureP.png";
import img5 from "../assets/Packages/ComplimentaryP.png";
import { Link } from "react-router-dom";

const Package = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  const eventData = [
    {
      id: 1,
      title: "Pro Drive Training – ₹999",
      img: img5,
      desc: "Take your first step into off-road driving with our Pro Drive Training package...",
      details: "/ProDriver",
      quote: "/eventCele/quote",
    },
    {
      id: 2,
      title: "Obstacle Conqueror Challenge – ₹1,799",
      img: img2,
      desc: "The Obstacle Conqueror Challenge is made for true enthusiasts...",
      details: "/Obstacle",
      quote: "/corporate/quote",
    },
    {
      id: 3,
      title: "Full Throttle Experience – ₹3,299",
      img: img3,
      desc: "Crave the thrill of speed? The Full Throttle Experience puts you in...",
      details: "/Throttle",
      quote: "/host/quote",
    },
    {
      id: 4,
      title: "Adventure Value Pack – ₹3,999 (in demand)",
      img: img4,
      desc: "Our best-selling package, the Adventure Value Pack, brings you...",
      details: "/Adventure",
      quote: "/host/quote",
    },
    {
      id: 5,
      title: "Complimentary Experience – Free (Limited Slots)",
      img: img5,
      desc: "Get introduced to the world of off-roading with our Complimentary...",
      details: "/Complementary",
      quote: "/host/quote",
    },
  ];

  return (
    <section className="package-section" id="events">
      <div className="package-header" data-aos="fade-up">
        <h2>PACKAGES</h2>
        <hr />
      </div>

      <div className="package-grid">
        {eventData.map((event, index) => (
          <div
            className="package-card"
            key={event.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <Link to={event.details}>
              <img
                src={event.img}
                alt={event.title}
                className="package-img"
                loading="lazy"
              />
            </Link>

            <h3 className="package-title">{event.title}</h3>
            <p className="package-desc">{event.desc}</p>

            <div className="package-buttons">
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

export default Package;








// import React, { useEffect } from "react";
// import "./Package.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import img2 from "../assets/Packages/ObstacleP.png";
// import img3 from "../assets/Packages/ThrottleP.png";
// import img4 from "../assets/Packages/AdventureP.png";
// import img5 from "../assets/Packages/ComplimentaryP.png";
// import { Link } from "react-router-dom";

// const Package = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-in-out",
//       offset: 80, // reduce re-triggering
//     });
//     return () => {
//       // cleanup safely to avoid scroll freeze
//       AOS.refresh();
//     };
//   }, []);

//   const eventData = [
//     {
//       id: 1,
//       title: "Pro Drive Training – ₹999",
//       img: img5,
//       desc: "Take your first step into off-road driving with our Pro Drive Training package...",
//       details: "/ProDriver",
//       quote: "/eventCele/quote",
//     },
//     {
//       id: 2,
//       title: "Obstacle Conqueror Challenge – ₹1,799",
//       img: img2,
//       desc: "The Obstacle Conqueror Challenge is made for true enthusiasts...",
//       details: "/Obstacle",
//       quote: "/corporate/quote",
//     },
//     {
//       id: 3,
//       title: "Full Throttle Experience – ₹3,299",
//       img: img3,
//       desc: "Crave the thrill of speed? The Full Throttle Experience puts you in...",
//       details: "/Throttle",
//       quote: "/host/quote",
//     },
//     {
//       id: 4,
//       title: "Adventure Value Pack – ₹3,999 (in demand)",
//       img: img4,
//       desc: "Our best-selling package, the Adventure Value Pack, brings you...",
//       details: "/Adventure",
//       quote: "/host/quote",
//     },
//     {
//       id: 5,
//       title: "Complimentary Experience – Free (Limited Slots)",
//       img: img5,
//       desc: "Get introduced to the world of off-roading with our Complimentary...",
//       details: "/Complementary",
//       quote: "/host/quote",
//     },
//   ];

//   return (
//     <section className="package-section" id="events">
//       <div className="package-header" data-aos="fade-up">
//         <h2>PACKAGES</h2>
//         <hr />
//       </div>

//       <div className="package-grid">
//         {eventData.map((event, index) => (
//           <div
//             className="package-card"
//             key={event.id}
//             data-aos="fade-up"
//             data-aos-delay={index * 150}
//           >
//             <Link to={event.details}>
//               <img
//                 src={event.img}
//                 alt={event.title}
//                 className="package-img"
//                 loading="lazy"
//               />
//             </Link>

//             <h3 className="package-title">{event.title}</h3>
//             <p className="package-desc">{event.desc}</p>

//             <div className="package-buttons">
//               <Link to={event.details} className="btn-outline">
//                 VIEW DETAILS
//               </Link>
//               <Link to={event.quote} className="btn-outline">
//                 GET INQUIRY
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Package;
