import React, { useState } from "react";
import "./FloatingMenu.css";
// import { FaCar, FaTicketAlt, FaCalendarAlt, FaChevronLeft } from "react-icons/fa";
import { FaTicketAlt, FaCalendarAlt, FaChevronLeft } from "react-icons/fa";
// import carimage from "../assets/carimage.png"; FaCar,
import carimage from "../assets/ashva.png";


const FloatingMenu = () => {
  const [open, setOpen] = useState(false);
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
          {/* <FaCar className="icon" /> */}
          <img src={carimage} className="icon-image"></img>
          <span>PACKAGES</span>
        </div>
        <div
          className={`menu-item ${active === "offers" ? "active" : ""}`}
          onClick={() => handleClick("offers")}
        >
          <FaTicketAlt className="icon" />
          <span>OFFERS</span>
        </div>
        <div
          className={`menu-item ${active === "events" ? "active" : ""}`}
          onClick={() => handleClick("events")}
        >
          <FaCalendarAlt className="icon" />
          <span>EVENTS</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;