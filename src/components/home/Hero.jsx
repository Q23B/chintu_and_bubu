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
            You know the characters.
            <br />
            You just haven&apos;t heard the story behind them.
          </h1>
          <p className="hero-tagline">
            We didn&apos;t want to be on camera.
            <br />
            So we created two characters.
          </p>
          <p className="hero-copy">
            What started as a simple idea became a world built around real
            reactions, everyday misunderstandings, little jokes and the moments
            people recognize from their own lives.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button--primary button--pill"
              onClick={() => navigate("/characters")}
            >
              Meet Chintu &amp; Bubu
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
            The characters are digital. The moments are real.
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
