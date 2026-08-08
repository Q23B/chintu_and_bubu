import "../../styles/CharacterShowcase.css";

const characters = [
  {
    id: "chintu",
    name: "Chintu",
    label: "THE EXPRESSIVE ONE",
    description:
      "Chintu turns the smallest moments into the biggest reactions — with curiosity, charm and just the right amount of drama.",
    personality: ["Dramatic", "Playful", "Expressive", "Mischievous"],
    accent: "pink",
    image: null,
    alt: "Chintu — official character artwork",
    reservedPath: "src/assets/characters/chintu-character.webp",
  },
  {
    id: "bubu",
    name: "Bubu",
    label: "THE CALM ONE",
    description:
      "Bubu brings calm to the chaos — thoughtful, caring and always there when Chintu needs him.",
    personality: ["Calm", "Caring", "Patient", "Funny"],
    accent: "blue",
    image: null,
    alt: "Bubu — official character artwork",
    reservedPath: "src/assets/characters/bubu-character.webp",
  },
];

function CharacterShowcase() {
  return (
    <section
      className="character-showcase"
      aria-labelledby="character-showcase-title"
    >
      <div className="character-showcase__intro page-container">
        <span className="character-showcase__eyebrow">MEET THE CHARACTERS</span>
        <h2 id="character-showcase-title" className="character-showcase__title">
          Two Little Personalities. One Big Bond.
        </h2>
        <p className="character-showcase__text">
          Meet the two hearts behind the little world of Chintu & Bubu — where
          every personality, reaction and little moment has a story to tell.
        </p>
      </div>

      <div className="character-showcase__cards page-container">
        {characters.map((character) => (
          <article key={character.id} className="character-showcase__card">
            <div
              className={`character-showcase__frame character-showcase__frame--${character.accent}`}
            >
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CharacterShowcase;
