import { images } from "../data/content";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="section about">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">01 / ABOUT TIS</p>
          <h2>A school built for <em>the whole person.</em></h2>
        </div>
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-copy">
          <p>Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.</p>
          <p>We believe school should be a place to belong, grow and shine — combining academic learning with the experiences that help students discover who they can become.</p>
          <a className="underlink" href="https://tis.edu.in/about-tis/vision-mission/" target="_blank" rel="noreferrer">Our vision & mission <span aria-hidden="true">↗</span></a>
        </Reveal>
        <Reveal className="stats">
          <div><b>22</b><span>acre pollution-free campus</span></div>
          <div><b>16+</b><span>Olympic sports</span></div>
          <div><b>24×7</b><span>medical assistance</span></div>
          <div><b>6:1</b><span>student–teacher ratio</span></div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
