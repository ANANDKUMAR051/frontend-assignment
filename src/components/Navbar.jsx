import { useState } from "react";
import { images, navigation } from "../data/content";

function Navbar({ scrolled, goTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a
          className="brand"
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            go("top");
          }}
        >
          <img src={images.logo} alt="Tulas International School" />
          <span>
            TULAS
            <br />
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => {
                event.preventDefault();
                go(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => go("admissions")}>
          Apply now <span aria-hidden="true">↗</span>
        </button>

        <button
          className="menu-btn"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => {
                event.preventDefault();
                go(id);
              }}
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
          <button onClick={() => go("admissions")}>
            Apply now <span aria-hidden="true">↗</span>
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
