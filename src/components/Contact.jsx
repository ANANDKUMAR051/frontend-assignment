import { useState } from "react";
import Reveal from "./Reveal";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    setError("");
    setSent(false);

    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please complete all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^[+\d\s()-]{8,}$/.test(form.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <div className="section-head split">
          <div>
            <p className="eyebrow">08 / CONTACT</p>
            <h2>Let’s start<br /><em>a conversation.</em></h2>
          </div>
          <div className="contact-info">
            <p>Tulas International School<br />Dhoolkot, P.O – Selaqui, Chakrata Road<br />Dehradun-248011, Uttarakhand</p>
            <a href="tel:+919837983791">+91 98379 83791</a>
            <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
            <span>0135-2699444 · 0135-2699666</span>
          </div>
        </div>
      </Reveal>

      <div className="contact-layout">
        <form onSubmit={submit} noValidate>
          <div className="field-row">
            <label>Name<input value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" /></label>
            <label>Email<input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" /></label>
          </div>
          <div className="field-row">
            <label>Phone<input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+91" /></label>
            <label>Message<textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="How can we help?" /></label>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          {sent && <p className="form-success" role="status">Thank you. Your enquiry has been prepared successfully.</p>}
          <button className="btn btn-dark" type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
        </form>

        <div className="map-card">
          <div>
            <span>VISIT TIS</span>
            <b>Dehradun<br />Uttarakhand</b>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Tulas+International+School+Dehradun" target="_blank" rel="noreferrer">Open in Maps <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
