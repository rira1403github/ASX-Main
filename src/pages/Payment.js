import React, { useState } from "react";
import "./Payment.css";
import { motion, AnimatePresence } from "framer-motion";
import phonepeLogo from "../assets/PHONEPE.png";
import gpayLogo from "../assets/GPay.png";

const Payment = () => {
  const [selected, setSelected] = useState(null);
  const [showUPIMenu, setShowUPIMenu] = useState(false);
  const [showCardMenu, setShowCardMenu] = useState(false);

  const paymentOptions = [
    {
      category: "UPI",
      methods: [
        { title: "Pay by Any UPI", subtitle: "Google Pay, PhonePe, Paytm" }
      ]
    },
    {
      category: "Credit & Debit Card",
      methods: [{ title: "Add a New Credit or Debit Card", subtitle: "" }]
    },
    {
      category: "More Ways to Pay",
      methods: [
        { title: "Pay on Spot", subtitle: "" }
      ]
    }
  ];
  const handleProceed = () => {
    if (selected === null) {
      alert("Please select a payment method before proceeding.");
      return;
    }
    alert(`Payment method selected: ${selected}`);
  };

  const handleOptionClick = (index, mIndex) => {
    setSelected(`${index}-${mIndex}`);
    if (index === 0) {
      setShowUPIMenu(true);
      setShowCardMenu(false);
    } else if (index === 1) {
      setShowCardMenu(true);
      setShowUPIMenu(false);
    } else {
      setShowUPIMenu(false);
      setShowCardMenu(false);
    }
  };

  return (
    <motion.div
      className="payment-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="payment-title">Select a Payment Method</h2>

      {paymentOptions.map((section, index) => (
        <motion.div
          key={index}
          className="payment-section"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="payment-category">{section.category}</h3>
          {section.methods.map((method, mIndex) => {
            const isSelected = selected === `${index}-${mIndex}`;
            return (
              <div
                key={mIndex}
                className={`payment-option ${isSelected ? "selected" : ""}`}
                onClick={() => handleOptionClick(index, mIndex)}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={isSelected}
                  onChange={() => handleOptionClick(index, mIndex)}
                />
                <div className="payment-text">
                  <span className="payment-method">{method.title}</span>
                  {method.subtitle && (
                    <span className="payment-subtitle">{method.subtitle}</span>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      ))}

      <motion.button
        className="proceed-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleProceed}
      >
        Proceed to Pay
      </motion.button>

      <AnimatePresence>
        {showUPIMenu && (
          <motion.div
            className="menu-bar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <button className="close-btn" onClick={() => setShowUPIMenu(false)}>
              ✕
            </button>
            <h3>Your UPI Apps</h3>
            <div className="upi-option">
              <img src={phonepeLogo} alt="PhonePe" />
              <span>PhonePe</span>
            </div>
            <div className="upi-option-II">
              <img src={gpayLogo} alt="GPay" />
              <span>GPay</span>
            </div>
            <h4>Other Ways</h4>
            <input type="text" placeholder="Enter UPI ID" className="upi-input" />
            <button className="verify-btn">Verify</button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCardMenu && (
          <motion.div
            className="menu-bar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <button className="close-btn" onClick={() => setShowCardMenu(false)}>
              ✕
            </button>
            <h3>Add a New Credit or Debit Card</h3>
            <input type="text" placeholder="Enter the Name" />
            <input type="number" placeholder="Card Number" />
            <h3>EXPIRY DATE</h3>
            <div className="expiry-cvv">
              <input type="text" placeholder="MM" />
              <input type="text" placeholder="YYYY" />
            </div>
            <h3>CVV</h3>
            <input type="password" placeholder="CVV" />
            <button className="continue-btn">Continue</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Payment;