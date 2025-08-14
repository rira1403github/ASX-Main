import React, { useState } from "react";
import "./Payment.css";
import { motion } from "framer-motion";

const Payment = () => {
  const [selected, setSelected] = useState(null);

  const paymentOptions = [
    {
      category: "UPI",
      methods: [
        { title: "Pay by Any UPI", subtitle: "Google Pay, PhonePe, Paytm" }
      ]
    },
    {
      category: "Credit & Debit Card",
      methods: [
        { title: "Add a New Credit or Debit Card", subtitle: "" }
      ]
    },
    {
      category: "More Ways to Pay",
      methods: [
        { title: "Net Banking", subtitle: "" },
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
                onClick={() => setSelected(`${index}-${mIndex}`)}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={isSelected}
                  onChange={() => setSelected(`${index}-${mIndex}`)}
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
    </motion.div>
  );
};

export default Payment;