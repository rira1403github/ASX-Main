import React, { useState } from "react";
import "../styles/modal.css";

export default function CardModal({ onClose, onPaid }) {
  const [form, setForm] = useState({ name: "", number: "", mm: "", yyyy: "", cvv: "" });
  const [err, setErr] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const pay = () => {
    if (!form.name || !/^\d{16}$/.test(form.number.replace(/\s/g,"")) || !/^\d{2}$/.test(form.mm) || !/^\d{4}$/.test(form.yyyy) || !/^\d{3,4}$/.test(form.cvv)) {
      setErr("Please enter valid card details.");
      return;
    }
    setErr("");
    onPaid();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card slide-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-title">ADD A NEW CREDIT CARD OR DEBIT CARD</div>

        <div className="field"><input placeholder="ENTER THE NAME" value={form.name} onChange={update("name")} /></div>
        <div className="field"><input placeholder="CARD NUMBER" inputMode="numeric" value={form.number} onChange={update("number")} /></div>

        <div className="row2">
          <input placeholder="MM" inputMode="numeric" value={form.mm} onChange={update("mm")} />
          <input placeholder="YYYY" inputMode="numeric" value={form.yyyy} onChange={update("yyyy")} />
        </div>

        <div className="field"><input placeholder="CVV" inputMode="numeric" value={form.cvv} onChange={update("cvv")} /></div>

        {err && <div className="error-text">{err}</div>}

        <button className="primary-btn" onClick={pay}>Continue</button>
      </div>
    </div>
  );
}
