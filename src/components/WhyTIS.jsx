import { values } from "../data/content";
import Reveal from "./Reveal";

function WhyTIS() {
  return (
    <section className="section values">
      <Reveal>
        <div className="section-head split">
          <div>
            <p className="eyebrow">04 / WHY TIS</p>
            <h2>More than a curriculum.<br /><em>A way of growing.</em></h2>
          </div>
          <p>TIS describes its mission as helping students excel academically while supporting personal and social growth beyond academics.</p>
        </div>
      </Reveal>
      <div className="value-grid">
        {values.map(([number, title, description]) => (
          <Reveal key={number}>
            <article>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default WhyTIS;
