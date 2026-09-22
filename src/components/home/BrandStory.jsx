import useRevealOnScroll from "../common/useRevealOnScroll";
import "../../styles/BrandStory.css";

const brandStoryCards = [
  {
    title: "The Feeling of Familiar",
    description:
      "A look, a pause, a joke that lands badly. Chintu and Bubu make the little things feel instantly familiar.",
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
    title: "Small Things, Big Reactions",
    description:
      "The day can be completely ordinary. Then Chintu reacts, Bubu notices, and suddenly it is worth remembering.",
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
    title: "A World with Its Own Rhythm",
    description:
      "Chintu brings the feeling out loud. Bubu gives it somewhere to land. That rhythm is what makes them recognizable.",
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
  const [storyRef, storyRevealed] = useRevealOnScroll();

  return (
    <section
      ref={storyRef}
      className={`brand-story interaction-reveal ${storyRevealed ? "is-revealed" : ""}`}
      aria-labelledby="brand-story-title"
    >
      <div className="brand-story__container page-container">
        <div className="brand-story__intro">
          <span className="brand-story__eyebrow">
            THE MAGIC OF CHINTU & BUBU
          </span>
          <h2 id="brand-story-title" className="brand-story__title">
            What started as two characters became a world.
          </h2>
          <p className="brand-story__description">
            Everyday conversations. Little misunderstandings. Honest reactions.
            A familiar rhythm people recognize immediately.
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
