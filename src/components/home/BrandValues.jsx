import "../../styles/BrandValues.css";

const values = [
  {
    title: "LOVE",
    description: "Because the smallest gestures can say the most.",
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
    title: "PLAY",
    description: "Because ordinary days are better with a little mischief.",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 4.5l2.2 4.7 5.1.4-3.9 3.1 1.2 4.9L12 15.6l-4.6 2.5 1.2-4.9-3.9-3.1 5.1-.4L12 4.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "LAUGHTER",
    description:
      "Because sometimes the funniest moments are completely unplanned.",
    accent: "coral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 17.5c-2.6 0-4.7-1.6-5.5-3.8.3-.2.7-.4 1.1-.4h8.8c.4 0 .8.2 1.1.4-.8 2.2-2.9 3.8-5.5 3.8Zm-3-6.8a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0Zm7.4 0a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "TOGETHERNESS",
    description: "Because every little moment feels better when shared.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8.5 10.2c1 0 1.8-.8 1.8-1.8S9.5 6.6 8.5 6.6 6.7 7.4 6.7 8.4s.8 1.8 1.8 1.8Zm7 0c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.8.8-1.8 1.8.8 1.8 1.8 1.8ZM12 14.5c-3.4 0-6 1.2-6 2.7V19h12v-1.8c0-1.5-2.6-2.7-6-2.7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function BrandValues() {
  return (
    <section className="brand-values" aria-labelledby="brand-values-title">
      <div className="brand-values__wrapper page-container">
        <div className="brand-values__intro">
          <span className="brand-values__eyebrow">
            THE WORLD OF CHINTU & BUBU
          </span>
          <h2 id="brand-values-title" className="brand-values__title">
            Little Things.
            <span className="brand-values__title--accent">Big Feelings.</span>
          </h2>
          <p className="brand-values__text">
            At the heart of Chintu & Bubu is a simple idea: the smallest moments
            can carry the biggest emotions.
          </p>
          <p className="brand-values__text brand-values__text--subtle">
            From playful chaos to quiet little moments, their world celebrates
            the joy of simply being together.
          </p>
          <div className="brand-values__decor" aria-hidden="true">
            <span className="brand-values__decor-heart" />
            <span className="brand-values__decor-star" />
            <span className="brand-values__decor-line" />
          </div>
        </div>

        <div className="brand-values__grid">
          {values.map((value) => (
            <article key={value.title} className="brand-values__card">
              <div
                className={`brand-values__icon brand-values__icon--${value.accent}`}
              >
                {value.icon}
              </div>
              <div className="brand-values__content">
                <h3 className="brand-values__name">{value.title}</h3>
                <p className="brand-values__description">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandValues;
