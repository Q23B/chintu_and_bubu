import { useNavigate } from "react-router-dom";
import useRevealOnScroll from "../components/common/useRevealOnScroll";
import aboutHero from "../assets/about/about-hero.webp";
import aboutIdentity from "../assets/about/about-identity.webp";
import "../styles/About.css";
import "../styles/interactions.css";

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
  const [heroRef, heroRevealed] = useRevealOnScroll();
  const [ideaRef, ideaRevealed] = useRevealOnScroll();
  const [worldRef, worldRevealed] = useRevealOnScroll();
  const [storytellingRef, storytellingRevealed] = useRevealOnScroll();
  const [identityRef, identityRevealed] = useRevealOnScroll();
  const [ctaRef, ctaRevealed] = useRevealOnScroll();

  return (
    <div className="about-page">
      <section
        ref={heroRef}
        className={`about-hero page-section interaction-reveal ${heroRevealed ? "is-revealed" : ""}`}
        aria-labelledby="about-hero-title"
      >
        <div className="page-container about-hero__grid">
          <div className="about-hero__copy">
            <span className="about-eyebrow">ABOUT CHINTU &amp; BUBU</span>
            <h1 id="about-hero-title">
              Two characters.
              <br />
              One very real story.
            </h1>
            <p>
              Chintu &amp; Bubu began as a way to tell everyday stories without
              making the people behind them the story. The characters carry the
              feeling. The moments stay real.
            </p>
          </div>

          <div className="about-hero__visual">
            <img
              src={aboutHero}
              alt="Chintu & Bubu in their little world"
              className="about-hero__image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section
        ref={ideaRef}
        className={`about-idea page-section interaction-reveal ${ideaRevealed ? "is-revealed" : ""}`}
        aria-labelledby="about-idea-title"
      >
        <div className="page-container about-idea__wrapper">
          <span className="about-eyebrow">THE IDEA</span>
          <div className="about-idea__copy">
            <h2 id="about-idea-title">
              We didn&apos;t want to be on camera.
              <br />
              So we created two characters.
            </h2>
            <p>
              The idea was simple: tell honest, everyday stories without turning
              the people behind them into the story itself.
            </p>
            <p>
              Chintu and Bubu became a way to hold onto those little moments —
              the reactions, the confusion, the affection, the humour that feels
              familiar because it is.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={worldRef}
        className={`about-world page-section interaction-reveal ${worldRevealed ? "is-revealed" : ""}`}
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
        ref={storytellingRef}
        className={`about-storytelling page-section interaction-reveal ${storytellingRevealed ? "is-revealed" : ""}`}
        aria-labelledby="about-storytelling-title"
      >
        <div className="page-container about-storytelling__panel">
          <div className="about-storytelling__content">
            <span className="about-eyebrow">CHARACTER-LED STORYTELLING</span>
            <h2 id="about-storytelling-title">
              One is expressive. The other usually handles the aftermath.
            </h2>
            <p>
              Chintu and Bubu are built around distinct personalities, familiar
              reactions and the kind of everyday situations that feel instantly
              recognizable. Their stories live in the small details — the pause,
              the look, the misunderstanding, the tiny moment of care.
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
        ref={identityRef}
        className={`about-identity page-section interaction-reveal ${identityRevealed ? "is-revealed" : ""}`}
        aria-labelledby="about-identity-title"
      >
        <div className="page-container about-identity__grid">
          <div className="about-identity__copy">
            <h2 id="about-identity-title">Recognizable by feeling.</h2>
            <p>
              Audiences start to know how Chintu will react before he even does.
              They know the kind of calm Bubu will bring in after the chaos.
              That familiarity is part of the brand — not because the characters
              are perfect, but because they feel like real little personalities.
            </p>
          </div>

          <div className="about-identity__visual">
            <img
              src={aboutIdentity}
              alt="Chintu & Bubu character identity artwork"
              className="about-identity__image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`about-cta page-section interaction-reveal ${ctaRevealed ? "is-revealed" : ""}`}
      >
        <div className="page-container about-cta__panel">
          <div>
            <h2>There&apos;s more to Chintu &amp; Bubu than the reels.</h2>
            <p>
              A little world, a lot of feeling and a story that keeps growing.
            </p>
          </div>

          <div className="about-cta__actions">
            <button
              type="button"
              className="button button--primary button--pill"
              onClick={() => navigate("/characters")}
            >
              Meet Chintu &amp; Bubu
            </button>
            <button
              type="button"
              className="button button--secondary button--pill"
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
