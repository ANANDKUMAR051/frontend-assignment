import { facilities, images } from "../data/content";
import Reveal from "./Reveal";

function Facilities() {
  return (
    <section id="campus" className="section campus">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">03 / CAMPUS & FACILITIES</p>
          <h2>Spaces designed to make<br /><em>learning tangible.</em></h2>
        </div>
      </Reveal>
      <div className="facility-layout">
        <div className="facility-feature">
          <div className="facility-image">
            <img src={images.archery} alt="TIS students practicing archery on campus" />
          </div>
          <div className="feature-caption">
            <span>THE CAMPUS</span>
            <b>Room to explore.<br />Room to grow.</b>
          </div>
        </div>
        <div className="facility-list">
          {facilities.map(([title, description, category, link], index) => (
            <Reveal key={title}>
              <article>
                <span className="facility-no">0{index + 1}</span>
                <div>
                  <small>{category}</small>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <a
                  className="circle-arrow"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${title}`}
                >
                  ↗
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
