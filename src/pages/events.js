// import React, { useEffect } from "react";
// import "./events.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import img1 from "../assets/Events/hero-main.webp";
// import img2 from "../assets/Events/eventCor-main.webp";
// import img3 from "../assets/Events/eventRallymain.webp";
// import { Link } from "react-router-dom";

// const Events = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const eventData = [
//     {
//       id: 1,
//       title: "Celebration",
//       img: img1,
//       desc: "Make your special day truly unforgettable at ASX Motodrome...",
//       // knowMore: "/EventCele", 
//       details: "/EventCele",
//       quote: "/Enguiry",
//     },
//     {
//       id: 2,
//       title: "Corporate Outings",
//       img: img2,
//       desc: "Step away from routine and bond with your team at ASX Motodrome...",
//       // knowMore: "/corporate",
//       details: "/EventCor",
//       quote: "/Enguiry",
//     },
//     {
//       id: 3,
//       title: "Host an Event",
//       img: img3,
//       desc: "Workshops, off-roading rallies, championships, or adventure-themed events...",
//       // knowMore: "/host",
//       details: "/EventRally",
//       quote: "/Enguiry",
//     },
//   ];

//   return (
//     <section className="events-section" id="events">
//       <div className="events-header" data-aos="fade-up">
//         <h2>EVENTS</h2>
//         <hr />
//       </div>

//       <div className="events-grid">
//         {eventData.map((event, index) => (
//           <div
//             className="event-card"
//             key={event.id}
//             data-aos="fade-up"
//             data-aos-delay={index * 150}
//           >
//             <img src={event.img} alt={event.title} className="event-img" />
//             <h3 className="event-title">{event.title}</h3>
//             <p className="event-desc">
//               {event.desc}{" "}
//               {/* <Link to={event.knowMore} className="know-more">
//                 Know More
//               </Link> */}
//             </p>
//             <div className="event-buttons">
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

// export default Events;



import React, { useEffect } from "react";
import "./events.css";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/Events/hero-main.webp";
import img2 from "../assets/Events/eventCor-main.webp";
import img3 from "../assets/Events/eventRallymain.webp";

import { Link } from "react-router-dom";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    AOS.refresh(); // ✅ prevents stuck scrolling
    return () => {
      AOS.refreshHard(); // ✅ cleanup memory leaks
    };
  }, []);

  const eventData = [
    {
      id: 1,
      title: "Celebration",
      img: img1,
      desc: "Make your special day truly unforgettable at ASX Motodrome...",
      details: "/EventCele",
      quote: "/Enguiry",
    },
    {
      id: 2,
      title: "Corporate Outings",
      img: img2,
      desc: "Step away from routine and bond with your team at ASX Motodrome...",
      details: "/EventCor",
      quote: "/Enguiry",
    },
    {
      id: 3,
      title: "Host an Event",
      img: img3,
      desc: "Workshops, off-roading rallies, championships, or adventure-themed events...",
      details: "/EventRally",
      quote: "/Enguiry",
    },
  ];

  return (
    <section className="events-section" id="events">
      <div className="events-header" data-aos="fade-up">
        <h2>EVENTS</h2>
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
            {/* ✅ clickable + lazy loading */}
            <Link to={event.details}>
              <img
                src={event.img}
                alt={event.title}
                className="event-img"
                loading="lazy"
              />
            </Link>

            <h3 className="event-title">{event.title}</h3>
            <p className="event-desc">{event.desc}</p>

            <div className="event-buttons">
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

export default Events;