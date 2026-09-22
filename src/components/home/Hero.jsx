import { useNavigate } from "react-router-dom";
import useRevealOnScroll from "../common/useRevealOnScroll";
import "../../styles/Home.css";
import heroImage from "../../assets/characters/characters-hero.webp";

function Hero() {
  const navigate = useNavigate();
  const [heroRef, heroRevealed] = useRevealOnScroll();

  return (
    <section
      ref={heroRef}
      className={`home-hero interaction-reveal ${heroRevealed ? "is-revealed" : ""}`}
      aria-labelledby="home-hero-title"
    >
      <div className="home-hero__panel page-container">
        <div className="home-hero__content">
          <span className="hero-eyebrow">OFFICIAL CHARACTER WORLD</span>
          <h1 id="home-hero-title" className="hero-title">
            Chintu & Bubu
          </h1>
          <p className="hero-tagline">
            Little Moments.
            <br />
            Big Emotions.
          </p>
          <p className="hero-copy">
            Welcome to the little world of Chintu & Bubu — where everyday
            moments become big emotions.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button--primary button--pill"
              onClick={() => navigate("/characters")}
            >
              Explore Their World
            </button>
            <button
              type="button"
              className="button button--secondary button--pill hero-button--secondary"
              onClick={() => navigate("/contact")}
            >
              Partner With Us
            </button>
          </div>

          <p className="hero-micro">
            Original Characters • Everyday Stories • Big Emotions
          </p>
        </div>

        <div className="home-hero__visual">
          <div className="hero-visual-frame">
            <img
              src={heroImage}
              alt="Chintu & Bubu official characters"
              className="character-showcase__image"
            />
          </div>

          <span className="hero-decor hero-decor--pink" />
          <span className="hero-decor hero-decor--blue" />
          <span className="hero-decor hero-decor--gold" />
          <span className="hero-decor hero-decor--soft" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
