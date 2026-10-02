import About from "../components/About";
import Academics from "../components/Academics";
import Activities from "../components/Activities";
import AdmissionsCTA from "../components/AdmissionsCTA";
import Contact from "../components/Contact";
import Facilities from "../components/Facilities";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import WhyTIS from "../components/WhyTIS";

function Home({ goTo }) {
  return (
    <main id="top">
      <Hero goTo={goTo} />
      <About />
      <Academics />
      <Facilities />
      <WhyTIS />
      <Activities />
      <Testimonials />
      <AdmissionsCTA goTo={goTo} />
      <Contact />
    </main>
  );
}

export default Home;
