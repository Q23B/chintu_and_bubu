import { useNavigate } from "react-router-dom";
import charactersHero from "../assets/characters/characters-hero.webp";
import chintuProfile from "../assets/characters/chintu-profile.webp";
import bubuProfile from "../assets/characters/bubu-profile.webp";
import "../styles/Characters.css";

const worldCards = [
  {
    title: "CHAOS",
    description: "Chintu's playful energy keeps every moment unpredictable.",
  },
  {
    title: "CALM",
    description: "Bubu brings patience, warmth and quiet understanding.",
  },
  {
    title: "CONNECTION",
    description: "Together, their differences create the heart of every story.",
  },
];

const identityPrinciples = [
  {
    title: "FACIAL IDENTITY",
    description:
      "Distinctive expressions that make every reaction recognizable.",
  },
  {
    title: "PERSONALITY",
    description: "Clear personalities that drive their interactions.",
  },
  {
    title: "PROPORTIONS",
    description:
      "Consistent toddler proportions and recognizable height relationship.",
  },
  {
    title: "EXPRESSION",
    description:
      "Emotion-first storytelling expressed through subtle reactions and playful moments.",
  },
];

function Characters() {
  const navigate = useNavigate();

  return (
    <div className="characters-page">
      <section
        className="characters-hero page-section"
        aria-labelledby="characters-hero-title"
      >
        <div className="page-container characters-hero__grid">
          <div className="characters-hero__copy">
            <span className="characters-eyebrow">MEET THE CHARACTERS</span>
            <h1 id="characters-hero-title">
              Two little personalities.
              <br />
              One big world.
            </h1>
            <p>
              Meet Chintu &amp; Bubu — two distinct personalities whose everyday
              interactions turn little moments into memorable stories.
            </p>
          </div>
          <div className="characters-hero__visual" aria-hidden="true">
            <img
              src={charactersHero}
              alt=""
              className="characters-hero__image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section
        className="character-profile page-section"
        aria-labelledby="chintu-profile-title"
      >
        <div className="page-container character-profile__grid">
          <div className="character-profile__visual" aria-hidden="true">
            <img
              src={chintuProfile}
              alt=""
              className="character-profile__image"
              loading="eager"
            />
          </div>

          <div className="character-profile__content">
            <span className="characters-eyebrow">THE EXPRESSIVE ONE</span>
            <h2 id="chintu-profile-title">Chintu</h2>
            <p>
              Chintu brings the drama, mischief and big emotions. Playful,
              expressive and full of personality, she has a special way of
              turning even the smallest moment into something memorable.
            </p>
            <div className="characters-tags">
              {[
                "Dramatic",
                "Playful",
                "Mischievous",
                "Emotional",
                "Expressive",
              ].map((tag) => (
                <span key={tag} className="characters-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="characters-note">
              Chintu has distinctive expressive features and slightly chubby
              toddler proportions that are central to her identity.
            </p>
          </div>
        </div>
      </section>

      <section
        className="character-profile page-section"
        aria-labelledby="bubu-profile-title"
      >
        <div className="page-container character-profile__grid character-profile__grid--reverse">
          <div className="character-profile__content">
            <span className="characters-eyebrow">THE CALM ONE</span>
            <h2 id="bubu-profile-title">Bubu</h2>
            <p>
              Bubu is calm, caring and quietly funny — the steady presence
              behind the chaos. Patient and understanding, he brings warmth and
              balance to their everyday moments.
            </p>
            <div className="characters-tags">
              {["Calm", "Caring", "Patient", "Protective", "Understanding"].map(
                (tag) => (
                  <span key={tag} className="characters-tag">
                    {tag}
                  </span>
                ),
              )}
            </div>
            <p className="characters-note">
              Bubu has a slightly taller toddler proportion than Chintu,
              creating their recognizable height relationship.
            </p>
          </div>

          <div className="character-profile__visual" aria-hidden="true">
            <img
              src={bubuProfile}
              alt=""
              className="character-profile__image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section
        className="characters-dynamic page-section"
        aria-labelledby="characters-dynamic-title"
      >
        <div className="page-container characters-dynamic__wrapper">
          <div className="characters-dynamic__intro">
            <span className="characters-eyebrow">THEIR DYNAMIC</span>
            <h2 id="characters-dynamic-title">
              Different personalities.
              <br />
              Perfectly together.
            </h2>
            <p>
              Chintu brings the chaos. Bubu brings the calm. Somewhere between
              the two is where their little world comes alive.
            </p>
          </div>

          <div className="characters-dynamic__cards">
            {worldCards.map((card) => (
              <article key={card.title} className="characters-dynamic__card">
                <span className="characters-dynamic__label">{card.title}</span>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="characters-identity page-section"
        aria-labelledby="characters-identity-title"
      >
        <div className="page-container characters-identity__wrapper">
          <span className="characters-eyebrow">CHARACTER IDENTITY</span>
          <h2 id="characters-identity-title">Recognizable in every frame.</h2>
          <p>
            Chintu &amp; Bubu are built around consistent facial identity,
            distinct personalities, recognizable proportions and expressive
            storytelling.
          </p>

          <div className="characters-identity__cards">
            {identityPrinciples.map((item) => (
              <article key={item.title} className="characters-identity__card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="characters-cta page-section">
        <div className="page-container characters-cta__panel">
          <div>
            <h2>Every little moment has a story.</h2>
            <p>
              Explore their world and discover the personalities behind Chintu
              &amp; Bubu.
            </p>
          </div>
          <div className="characters-cta__actions">
            <button
              type="button"
              className="button button--secondary button--pill"
              onClick={() => navigate("/")}
            >
              Explore Their World
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

export default Characters;
