import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const value = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

        setScrolled(scrollTop > 24);
        setProgress(Math.min(100, value));
        ticking = false;
      });
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <ScrollProgress progress={progress} />
      <CustomCursor />
      <Navbar scrolled={scrolled} goTo={goTo} />
      <Home goTo={goTo} />
      <Footer goTo={goTo} />
    </div>
  );
}

export default App;
