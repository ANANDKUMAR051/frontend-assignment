import { images } from "../data/content";

function Hero({ goTo }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">THE MODERN GURUKUL · DEHRADUN</p>
          <h1>
            Where curiosity becomes <em>capability.</em>
          </h1>
          <p className="hero-text">
            A CBSE co-educational residential school for Grades IV–XII, where academic rigour meets sport, creativity, character and opportunity.
          </p>
          <div className="hero-actions">
            <button className="btn btn-dark" onClick={() => goTo("about")}>
              Discover TIS <span aria-hidden="true">↗</span>
            </button>
            <button className="text-btn" onClick={() => goTo("admissions")}>
              Explore admissions <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className="hero-meta">
            <span><strong>22</strong> acre campus</span>
            <span><strong>16+</strong> Olympic sports</span>
            <span><strong>6:1</strong> student–teacher ratio</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-ring" />
          <img className="student-img" src={images.student} alt="TIS student" />
          <div className="hero-note">
            <span>EST. 2012</span>
            <b>Learning without limits.</b>
          </div>
          <div className="vertical-label">TULAS · DEHRADUN</div>
        </div>
      </div>
      <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
    </section>
  );
}

export default Hero;
