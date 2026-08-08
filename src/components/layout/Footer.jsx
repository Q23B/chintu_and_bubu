import { NavLink } from "react-router-dom";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content page-container">
        <div className="footer-info">
          <div className="footer-brand">Chintu & Bubu</div>
          <p className="footer-tagline">Little Moments. Big Emotions.</p>
          <p className="footer-description">
            An original character world celebrating little moments, emotions and
            everyday stories.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-block">
            <div className="footer-headline">Explore</div>
            <NavLink to="/" className="footer-link">
              Home
            </NavLink>
            <NavLink to="/about" className="footer-link">
              About
            </NavLink>
            <NavLink to="/characters" className="footer-link">
              Characters
            </NavLink>
            <NavLink to="/gallery" className="footer-link">
              Gallery
            </NavLink>
          </div>

          <div className="footer-links-block">
            <div className="footer-headline">Connect</div>
            <NavLink to="/collaborations" className="footer-link">
              Collaborations
            </NavLink>
            <NavLink to="/contact" className="footer-link">
              Contact
            </NavLink>
          </div>

          <div className="footer-links-block">
            <div className="footer-headline">Social</div>
            <a
              href="https://www.instagram.com"
              className="footer-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com"
              className="footer-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom page-container">
        <div className="footer-bottom__divider" />
        <div className="footer-bottom__meta">
          <p>© Chintu & Bubu. All rights reserved.</p>
          <p className="footer-official">Official Brand</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
