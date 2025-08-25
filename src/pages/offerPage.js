import React, { useEffect } from "react";
import "./offerPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/Offers/weekOffer.webp";
import img2 from "../assets/Offers/groupOffer.webp";
import img3 from "../assets/Offers/festiveOffer.webp";
import img4 from "../assets/Offers/influenceOffer.webp";

import { Link } from "react-router-dom";

const OfferPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    AOS.refresh(); 
    return () => {
      AOS.refreshHard(); 
    };
  }, []);

  const eventData = [
    {
      id: 1,
      title: "Weekday Offer - Flat 15% OFF (Tue-Fri)",
      img: img1,
      desc: "Turn weekdays into adventure days. From Tuesday to Friday, enjoy 15% off on all packages...",
      details: "/WeekOffer",
      quote: "/PageContact",
    },
    {
      id: 2,
      title: "Group Discounts - 20% OFF (All Days)",
      img: img2,
      desc: "More people, more thrill, more savings. Groups of 4 or more enjoy a 20% discount on all packages...",
      details: "/GroupOffer",
      quote: "/PageContact",
    },
    {
      id: 3,
      title: "Festive Offer - Flat 15% OFF (Festival Days)",
      img: img3,
      desc: "Celebrate festivals with an adventure twist. On festive days, enjoy 15% off on all packages...",
      details: "/FestiveOffer",
      quote: "/PageContact",
    },
    {
      id: 4,
      title: "Influencer Collaborations",
      img: img4,
      desc: "Let's create content as thrilling as the ride. At ASX Motodrome, we love partnering with influencers...",
      details: "/InfluenceOffer",
      quote: "/PageContact",
    },
  ];

  return (
    <section className="offerPage-section" id="offerPage">
      <div className="offerPage-header" data-aos="fade-up">
        <h2>EXCLUSIVE OFFERS</h2>
        <hr />
      </div>

      <div className="offerPage-grid" role="list">
        {eventData.map((event, index) => (
          <article
            className="offerPage-card"
            key={event.id}
            role="listitem"
            data-aos="fade-up"
            data-aos-delay={Math.min(index * 150, 600)}
          >
            <Link to={event.details}>
              <img
                src={event.img}
                alt={event.title || "Offer image"}
                className="offerPage-img"
                loading="lazy"
              />
            </Link>

            <h3 className="offerPage-title">{event.title}</h3>
            <p className="offerPage-desc">{event.desc}</p>

            <div className="offerPage-buttons">
              <Link to={event.details} className="btn-outline primary">
                VIEW DETAILS
              </Link>
              <Link to={event.quote} className="btn-outline secondary">
                BUY NOW
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OfferPage;