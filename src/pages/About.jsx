import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const worldCards = [
  {
    title: "LOVE",
    description:
      "Small gestures, quiet care and the comfort of having someone beside you.",
  },
  {
    title: "PLAY",
    description:
      "Curiosity, mischief and the little chaos that makes ordinary days memorable.",
  },
  {
    title: "LAUGHTER",
    description:
      "Funny reactions, playful moments and unexpected little surprises.",
  },
  {
    title: "TOGETHERNESS",
    description:
      "The simple joy of sharing everyday moments with someone who gets you.",
  },
];

const storytellingPrinciples = [
  {
    label: "01 — EXPRESSIVE",
    description: "Every emotion has a personality.",
  },
  {
    label: "02 — RELATABLE",
    description: "Everyday situations become stories.",
  },
  {
    label: "03 — HEARTFELT",
    description: "Connection stays at the center.",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <section
        className="about-hero page-section"
        aria-labelledby="about-hero-title"
      >
        <div className="page-container about-hero__grid">
          <div className="about-hero__copy">
            <span className="about-eyebrow">ABOUT CHINTU &amp; BUBU</span>
            <h1 id="about-hero-title">
              Little Moments.
              <br />
              Big Emotions.
            </h1>
            <p>
              Chintu &amp; Bubu is an original character world built around the
              little moments, emotions and everyday stories that make life feel
              special.
            </p>
          </div>

          <div
            className="about-hero__visual"
            aria-hidden="true"
            data-asset-path="src/assets/about/about-hero.webp"
          >
            <div className="about-hero__placeholder">
              <span>Reserved artwork area</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-idea page-section"
        aria-labelledby="about-idea-title"
      >
        <div className="page-container about-idea__wrapper">
          <span className="about-eyebrow">THE IDEA</span>
          <div className="about-idea__copy">
            <h2 id="about-idea-title">
              Ordinary moments can become unforgettable.
            </h2>
            <p>
              At the heart of Chintu &amp; Bubu is a simple idea: the smallest
              moments can carry the biggest emotions.
            </p>
            <p>
              From playful chaos and teasing to quiet understanding and shared
              laughter, their world celebrates the warmth found in simply being
              together.
            </p>
          </div>
        </div>
      </section>

      <section
        className="about-world page-section"
        aria-labelledby="about-world-title"
      >
        <div className="page-container about-world__wrapper">
          <div className="about-world__intro">
            <span className="about-eyebrow">
              THE WORLD OF CHINTU &amp; BUBU
            </span>
            <h2 id="about-world-title">
              A world built from everyday emotions.
            </h2>
          </div>

          <div className="about-world__cards">
            {worldCards.map((card) => (
              <article key={card.title} className="about-world__card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-storytelling page-section"
        aria-labelledby="about-storytelling-title"
      >
        <div className="page-container about-storytelling__panel">
          <div className="about-storytelling__content">
            <span className="about-eyebrow">CHARACTER-LED STORYTELLING</span>
            <h2 id="about-storytelling-title">
              Two personalities. One unforgettable world.
            </h2>
            <p>
              Chintu &amp; Bubu are designed around distinct personalities,
              expressive emotions and relatable everyday interactions. Their
              stories are driven by character, connection and the small details
              that make a moment feel real.
            </p>
          </div>

          <div className="about-storytelling__principles">
            {storytellingPrinciples.map((item) => (
              <div key={item.label} className="about-principle">
                <span className="about-principle__label">{item.label}</span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-identity page-section"
        aria-labelledby="about-identity-title"
      >
        <div className="page-container about-identity__grid">
          <div className="about-identity__copy">
            <h2 id="about-identity-title">Recognizable by design.</h2>
            <p>
              From expressive faces and distinctive personalities to carefully
              crafted visual details, Chintu &amp; Bubu are built to feel
              instantly recognizable while leaving room for every story to feel
              fresh.
            </p>
          </div>

          <div
            className="about-identity__visual"
            aria-hidden="true"
            data-asset-path="src/assets/about/about-identity.webp"
          >
            <div className="about-identity__placeholder">
              <span>Reserved identity artwork</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta page-section">
        <div className="page-container about-cta__panel">
          <div>
            <h2>Welcome to their little world.</h2>
            <p>
              Explore Chintu &amp; Bubu, discover their personalities and
              experience the little moments that make their world special.
            </p>
          </div>

          <div className="about-cta__actions">
            <button
              type="button"
              className="button button--secondary button--pill"
              onClick={() => navigate("/characters")}
            >
              Meet Chintu &amp; Bubu
            </button>
            <button
              type="button"
              className="button button--primary button--pill"
              onClick={() => navigate("/contact")}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
