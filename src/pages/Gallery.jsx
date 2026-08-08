import { useNavigate } from "react-router-dom";
import "../styles/Gallery.css";

const galleryCards = [
  {
    id: "01",
    title: "Little Reactions",
    label: "CHARACTER",
    asset: "src/assets/gallery/gallery-01.webp",
  },
  {
    id: "02",
    title: "Everyday Adventures",
    label: "EVERYDAY",
    asset: "src/assets/gallery/gallery-02.webp",
  },
  {
    id: "03",
    title: "Playful Moments",
    label: "PLAY",
    asset: "src/assets/gallery/gallery-03.webp",
  },
  {
    id: "04",
    title: "Quiet Togetherness",
    label: "TOGETHER",
    asset: "src/assets/gallery/gallery-04.webp",
  },
  {
    id: "05",
    title: "Big Feelings",
    label: "EMOTION",
    asset: "src/assets/gallery/gallery-05.webp",
  },
  {
    id: "06",
    title: "Just Chintu & Bubu",
    label: "STORY",
    asset: "src/assets/gallery/gallery-06.webp",
  },
];

const characterMoments = [
  {
    title: "CHINTU",
    label: "THE EXPRESSIVE ONE",
    asset: "src/assets/gallery/chintu-gallery.webp",
    alt: "Chintu expressive character artwork",
  },
  {
    title: "BUBU",
    label: "THE CALM ONE",
    asset: "src/assets/gallery/bubu-gallery.webp",
    alt: "Bubu calm character artwork",
  },
];

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">
      <section
        className="gallery-hero page-section"
        aria-labelledby="gallery-hero-title"
      >
        <div className="page-container gallery-hero__grid">
          <div className="gallery-hero__copy">
            <span className="gallery-eyebrow">THE WORLD IN FRAMES</span>
            <h1 id="gallery-hero-title">
              Little moments.
              <br />
              Captured beautifully.
            </h1>
            <p>
              Explore the visual world of Chintu &amp; Bubu — expressive
              characters, everyday moments and little stories brought to life.
            </p>
          </div>
          <div
            className="gallery-hero__visual"
            aria-hidden="true"
            data-asset-path="src/assets/gallery/gallery-hero.webp"
          >
            <div className="gallery-placeholder">
              <span>Reserved hero artwork</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="gallery-featured page-section"
        aria-labelledby="gallery-featured-title"
      >
        <div className="page-container gallery-featured__grid">
          <div
            className="gallery-featured__visual"
            aria-hidden="true"
            data-asset-path="src/assets/gallery/gallery-featured.webp"
          >
            <div className="gallery-placeholder gallery-placeholder--large">
              <span>Reserved featured artwork</span>
            </div>
          </div>
          <div className="gallery-featured__content">
            <span className="gallery-eyebrow">FEATURED MOMENT</span>
            <h2 id="gallery-featured-title">
              Everyday moments become stories.
            </h2>
            <p>
              From playful expressions to quiet little moments, Chintu &amp;
              Bubu turn ordinary experiences into something memorable.
            </p>
            <span className="gallery-featured__label">CHINTU &amp; BUBU</span>
          </div>
        </div>
      </section>

      <section
        className="gallery-collection page-section"
        aria-labelledby="gallery-collection-title"
      >
        <div className="page-container">
          <div className="gallery-collection__intro">
            <span className="gallery-eyebrow">VISUAL COLLECTION</span>
            <h2 id="gallery-collection-title">
              A carefully curated visual archive.
            </h2>
          </div>

          <div className="gallery-collection__grid">
            {galleryCards.map((card) => (
              <article key={card.id} className="gallery-card">
                <div
                  className="gallery-card__image"
                  aria-hidden="true"
                  data-asset-path={card.asset}
                >
                  <div className="gallery-placeholder gallery-placeholder--square">
                    <span>{card.title}</span>
                  </div>
                </div>
                <div className="gallery-card__content">
                  <span className="gallery-card__label">{card.label}</span>
                  <h3>
                    {card.id} — {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="gallery-moments page-section"
        aria-labelledby="gallery-moments-title"
      >
        <div className="page-container gallery-moments__wrapper">
          <div className="gallery-moments__intro">
            <span className="gallery-eyebrow">CHARACTER MOMENTS</span>
            <h2 id="gallery-moments-title">
              Two personalities.
              <br />
              Countless little moments.
            </h2>
            <p>
              Chintu brings the expression. Bubu brings the calm. Together, they
              create the world of Chintu &amp; Bubu.
            </p>
          </div>

          <div className="gallery-moments__cards">
            {characterMoments.map((item) => (
              <article key={item.title} className="gallery-moments__card">
                <div
                  className="gallery-moments__visual"
                  aria-hidden="true"
                  data-asset-path={item.asset}
                >
                  <div className="gallery-placeholder gallery-placeholder--tall">
                    <span>{item.label}</span>
                  </div>
                </div>
                <div className="gallery-moments__meta">
                  <p className="gallery-moments__label">{item.label}</p>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="gallery-story page-section"
        aria-labelledby="gallery-story-title"
      >
        <div className="page-container gallery-story__panel">
          <span className="gallery-eyebrow">VISUAL STORYTELLING</span>
          <h2 id="gallery-story-title">Emotion lives in the little details.</h2>
          <p>
            An expression. A reaction. A shared laugh. A quiet moment. The world
            of Chintu &amp; Bubu is built around these small details.
          </p>
        </div>
      </section>

      <section className="gallery-cta page-section">
        <div className="page-container gallery-cta__panel">
          <div>
            <h2>More little moments are waiting.</h2>
            <p>
              Step into the world of Chintu &amp; Bubu and discover the stories
              behind every expression.
            </p>
          </div>
          <div className="gallery-cta__actions">
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

export default Gallery;
