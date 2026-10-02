import { sports } from "../data/content";
import Reveal from "./Reveal";

function Activities() {
  return (
    <section id="life" className="section life">
      <Reveal>
        <div className="section-head split">
          <div>
            <p className="eyebrow">05 / LIFE AT TIS</p>
            <h2>Find your <em>field.</em></h2>
          </div>
          <p>Sport at Tulas is positioned as a foundation for joy and discipline, with more than 16 sports across the campus.</p>
        </div>
      </Reveal>
      <div className="sports-grid">
        {sports.map(([title, image], index) => (
          <Reveal key={title} className={`sport-card sport-${index}`}>
            <img src={image} alt={`${title} at Tulas International School`} />
            <div>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <a
                href="https://tis.edu.in/beyond-academics/sports/"
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${title} at Tulas International School`}
              >
                ↗
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Activities;
