import React, { useEffect, useState } from "react";
import "./Loader.css";
import logo from "../assets/logo.png";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setMoveUp(true); 
    }, 1000);

    const timer2 = setTimeout(() => {
      setLoading(false); 
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`loader ${!loading ? "loader--hidden" : ""}`}>
      <div className={`loader__inner ${moveUp ? "move-up" : ""}`}>
        <div className="loader__ring" aria-hidden="true" />
        <img
          src={logo}
          alt="Company Logo"
          className="loader__logo"
          draggable="false"
        />
        {!moveUp && <p className="loader__text">Loading…</p>}
      </div>
    </div>
  );
};

export default Loader;