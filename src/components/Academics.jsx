import { academics } from "../data/content";
import Reveal from "./Reveal";

function Academics() {
  return (
    <section id="academics" className="section academics">
      <Reveal>
        <div className="section-head split">
          <div>
            <p className="eyebrow">02 / ACADEMICS</p>
            <h2>Learning that asks<br /><em>better questions.</em></h2>
          </div>
          <p>At TIS, the CBSE course structure is shaped to prioritise reasoning and analytical thinking over rote memorisation, with project-based and art-integrated approaches.</p>
        </div>
      </Reveal>
      <div className="academic-grid">
        {academics.map(([title, description], index) => (
          <Reveal key={title} className="academic-card">
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="https://tis.edu.in/academics/affilation/" target="_blank" rel="noreferrer">Learn more <span aria-hidden="true">↗</span></a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Academics;
