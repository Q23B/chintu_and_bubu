import "../../styles/BrandStory.css";

const brandStoryCards = [
  {
    title: "Heartfelt Connection",
    description:
      "Chintu and Bubu turn ordinary moments into warm, playful memories through their unique bond and expressive personalities.",
    accent: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20s-6-4.35-9-8.25C0 7.18 2.7 4 6.2 4c1.78 0 3.42.9 4.3 2.3C11.4 4.9 13.02 4 14.8 4 18.3 4 21 7.18 21 11.75 18 15.65 12 20 12 20Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Everyday Wonder",
    description:
      "Small everyday experiences become memorable stories — filled with curiosity, laughter, emotion and little surprises.",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5l1.5 4.3 4.6.4-3.6 2.7 1.4 4.5L12 13.9l-3.9 1.9 1.4-4.5-3.6-2.7 4.6-.4L12 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Expressive Character World",
    description:
      "Distinct personalities, expressive emotions and carefully crafted visual storytelling make every Chintu & Bubu moment instantly recognizable.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2.2l1.9 3.8 4.2.6-3 2.8.7 4.2-3.8-2-3.8 2 .7-4.2-3-2.8 4.2-.6L12 2.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function BrandStory() {
  return (
    <section className="brand-story" aria-labelledby="brand-story-title">
      <div className="brand-story__container page-container">
        <div className="brand-story__intro">
          <span className="brand-story__eyebrow">
            THE MAGIC OF CHINTU & BUBU
          </span>
          <h2 id="brand-story-title" className="brand-story__title">
            Why Audiences Fall in Love
          </h2>
          <p className="brand-story__description">
            A premium original character world rooted in genuine warmth,
            relatable everyday moments, and expressive storytelling.
          </p>
        </div>

        <div className="brand-story__cards">
          {brandStoryCards.map((card) => (
            <article key={card.title} className="brand-story__card">
              <div
                className={`brand-story__icon brand-story__icon--${card.accent}`}
              >
                {card.icon}
              </div>
              <h3 className="brand-story__card-title">{card.title}</h3>
              <p className="brand-story__card-copy">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
