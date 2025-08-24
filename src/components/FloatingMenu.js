import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingMenu.css";
import { FaTicketAlt, FaCalendarAlt, FaChevronLeft } from "react-icons/fa";
import carimage from "../assets/ashva.png";

const FloatingMenu = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className="floating-menu">

      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <FaChevronLeft className={`chevron ${open ? "rotated" : ""}`} />
      </button>

      <div className={`menu-items ${open ? "show" : ""}`}>
        <div
          className={`menu-item ${active === "packages" ? "active" : ""}`}
          onClick={() => handleClick("packages")}
        >
          <Link to="/Package" className="menu-link">
            <img src={carimage} className="icon-image" alt="Packages" />
            <span>PACKAGES</span>
          </Link>
        </div>

        <div
          className={`menu-item ${active === "offers" ? "active" : ""}`}
          onClick={() => handleClick("offers")}
        >
          <Link to="/OfferPage" className="menu-link">
            <FaTicketAlt className="icon" />
            <span>OFFERS</span>
          </Link>
        </div>

        <div
          className={`menu-item ${active === "events" ? "active" : ""}`}
          onClick={() => handleClick("events")}
        >
          <Link to="/Events" className="menu-link">
            <FaCalendarAlt className="icon" />
            <span>EVENTS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;