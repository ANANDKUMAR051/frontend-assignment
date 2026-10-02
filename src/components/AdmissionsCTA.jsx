
function AdmissionsCTA({ goTo }) {
  return (
    <section id="admissions" className="admissions">
      <div className="admissions-inner">
        <p className="eyebrow">07 / ADMISSIONS 2027</p>
        <h2>Begin your journey<br /><em>at Tulas.</em></h2>
        <p>Registrations are open for Classes IV–IX and XI. Explore the admissions process and discover the TIS experience.</p>
        <div className="hero-actions">
          <a className="btn btn-light" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Apply now <span aria-hidden="true">↗</span></a>
          <button className="light-text-btn" onClick={() => goTo("contact")}>Talk to us <span aria-hidden="true">↗</span></button>
        </div>
      </div>
      <div className="admissions-orb" />
    </section>
  );
}

export default AdmissionsCTA;
