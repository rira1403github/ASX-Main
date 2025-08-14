import React, { useState } from "react";
import "../styles/modal.css";

export default function UPIModal({ onClose, onVerified }) {
  const [upi, setUpi] = useState("");
  const [err, setErr] = useState("");

  const validate = () => {
    // basic UPI format: name/number@bank
    const ok = /^[a-zA-Z0-9.\-_]{2,}(@)[a-zA-Z0-9.\-_]{2,}$/.test(upi.trim());
    if (!ok) { setErr("Invalid UPI ID format. Example: 9876543210@okaxis"); return; }
    setErr("");
    onVerified();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card slide-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-title">YOUR UPI APPS</div>
        <div className="upi-apps">
          <button className="app-chip bounce">
            <span className="app-icon phonepe">पे</span> PHONEPE
          </button>
          <button className="app-chip bounce">
            <span className="app-icon gpay">G</span> GPAY
          </button>
        </div>

        <div className="modal-title mt24">OTHER WAYS</div>
        <div className="enter-upi">
          <input
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            placeholder="ENTER  UPI  ID"
          />
          <button onClick={validate} className="verify-btn">Verify</button>
        </div>
        <p className="hint">
          The UPI ID is in the format of <b>name/phone@bankname</b>
        </p>
        {err && <div className="error-text">{err}</div>}
      </div>
    </div>
  );
}
