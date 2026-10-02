import { images, navigation } from "../data/content";

function Footer({ goTo }) {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <img src={images.logo} alt="Tulas International School" />
          <p>The modern Gurukul.<br />Enlightening through education,<br />ensuring a promising future.</p>
        </div>
        <div>
          <span>Explore</span>
          {navigation.slice(0, 5).map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(event) => { event.preventDefault(); goTo(id); }}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <span>Connect</span>
          <a href="tel:+919837983791">+91 98379 83791</a>
          <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
          <a href="https://tis.edu.in/contact-us/" target="_blank" rel="noreferrer">Contact page</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tulas International School</span>
        <span>Dehradun · India</span>
        <a href="#top" onClick={(event) => { event.preventDefault(); goTo("top"); }}>Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
