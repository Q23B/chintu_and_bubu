import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRevealOnScroll from "../common/useRevealOnScroll";
import "../../styles/CharacterShowcase.css";
import chintuCharacter from "../../assets/characters/chintu-character.webp";
import bubuCharacter from "../../assets/characters/bubu-character.webp";

const characters = [
  {
    id: "chintu",
    name: "Chintu",
    label: "THE EXPRESSIVE ONE",
    description:
      "Chintu turns the smallest moments into the biggest reactions — with curiosity, charm and just the right amount of drama.",
    personality: ["Dramatic", "Playful", "Expressive", "Mischievous"],
    accent: "pink",
    image: chintuCharacter,
    alt: "Chintu — official character artwork",
  },
  {
    id: "bubu",
    name: "Bubu",
    label: "THE CALM ONE",
    description:
      "Bubu brings calm to the chaos — thoughtful, caring and always there when Chintu needs him.",
    personality: ["Calm", "Caring", "Patient", "Funny"],
    accent: "blue",
    image: bubuCharacter,
    alt: "Bubu — official character artwork",
  },
];

function CharacterShowcase() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [discoveredCharacters, setDiscoveredCharacters] = useState(
    () => new Set(),
  );
  const [showcaseRef, showcaseRevealed] = useRevealOnScroll();
  const togetherUnlocked = discoveredCharacters.size === 2;

  function selectCharacter(character) {
    const nextDiscovered = new Set(discoveredCharacters);
    nextDiscovered.add(character);
    setDiscoveredCharacters(nextDiscovered);
    setSelectedCharacter(character);
  }

  return (
    <section
      ref={showcaseRef}
      className={`character-showcase interaction-reveal ${showcaseRevealed ? "is-revealed" : ""}`}
      aria-labelledby="character-showcase-title"
    >
      <div className="character-showcase__intro page-container">
        <span className="character-showcase__eyebrow">MEET THE CHARACTERS</span>
        <h2 id="character-showcase-title" className="character-showcase__title">
          One has a plan.
          <br />
          The other usually finds out later.
        </h2>
        <p className="character-showcase__text">
          Chintu brings the chaos. Bubu brings the calm. Together, they turn
          ordinary moments into something recognizable, warm and very human.
        </p>
      </div>

      <div className="character-showcase__cards page-container">
        {characters.map((character) => (
          <article
            key={character.id}
            className={`character-showcase__card character-showcase__card--${character.accent} ${selectedCharacter === character.id ? "is-selected" : ""} ${selectedCharacter && selectedCharacter !== character.id ? "is-secondary" : ""} ${togetherUnlocked ? "is-paired" : ""}`}
          >
            <div
              className={`character-showcase__frame character-showcase__frame--${character.accent}`}
            >
              <button
                type="button"
                className="character-showcase__select"
                aria-label={`Explore ${character.name}'s personality`}
                aria-pressed={selectedCharacter === character.id}
                onClick={() => selectCharacter(character.id)}
              >
                <span>Explore {character.name}</span>
              </button>
              {character.image ? (
                <img
                  src={character.image}
                  alt={character.alt}
                  className="character-showcase__image"
                  loading="lazy"
                />
              ) : (
                <div
                  className="character-showcase__placeholder"
                  role="img"
                  aria-label={`${character.name} artwork reserved image area`}
                >
                  <span className="character-showcase__placeholder-dot character-showcase__placeholder-dot--one" />
                  <span className="character-showcase__placeholder-dot character-showcase__placeholder-dot--two" />
                  <span className="character-showcase__placeholder-ring" />
                </div>
              )}
            </div>

            <div className="character-showcase__info">
              <p
                className={`character-showcase__label character-showcase__label--${character.accent}`}
              >
                {character.label}
              </p>
              <h3 className="character-showcase__name">{character.name}</h3>
              <p className="character-showcase__description">
                {character.description}
              </p>

              <div className="character-showcase__personality">
                <p className="character-showcase__personality-title">
                  PERSONALITY
                </p>
                <div className="character-showcase__personality-tags">
                  {character.personality.map((trait) => (
                    <span key={trait} className="character-showcase__tag">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <p className="character-showcase__discovery" aria-live="polite">
                {selectedCharacter === character.id
                  ? `${character.name} is ${character.label.toLowerCase()}.`
                  : ""}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div
        className={`character-showcase__shared ${togetherUnlocked ? "is-visible" : ""}`}
        aria-live="polite"
      >
        <p>
          Chintu brings the reaction. Bubu brings the look that says he saw it
          coming. Together, they make ordinary moments feel like theirs.
        </p>
        <button
          type="button"
          className="button button--secondary button--pill"
          onClick={() => navigate("/characters")}
        >
          Meet Them More Closely
        </button>
      </div>
    </section>
  );
}

export default CharacterShowcase;
