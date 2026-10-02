import { testimonials } from "../data/content";
import Reveal from "./Reveal";

function Testimonials() {
  return (
    <>
      <section className="quote-band">
        <div className="quote-mark">“</div>
        <Reveal>
          <p>At Tulas, we believe in bringing out the best in every student — whether it’s academics, music, art, or drama.</p>
          <span>— Tulas International School</span>
        </Reveal>
      </section>
      <section className="section testimonials">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">06 / FROM THE TIS COMMUNITY</p>
            <h2>Words from <em>parents.</em></h2>
          </div>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map(([name, role, quote]) => (
            <Reveal key={name}>
              <article>
                <div className="stars">★★★★★</div>
                <blockquote>“{quote}”</blockquote>
                <footer>
                  <b>{name}</b>
                  <span>{role}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
