import { useNavigate } from "react-router-dom";
import galleryHero from "../assets/gallery/gallery-hero.webp";
import galleryFeatured from "../assets/gallery/gallery-featured.webp";
import gallery01 from "../assets/gallery/gallery-01.webp";
import gallery02 from "../assets/gallery/gallery-02.webp";
import gallery03 from "../assets/gallery/gallery-03.webp";
import gallery04 from "../assets/gallery/gallery-04.webp";
import gallery05 from "../assets/gallery/gallery-05.webp";
import gallery06 from "../assets/gallery/gallery-06.webp";
import chintuGallery from "../assets/gallery/chintu-gallery.webp";
import bubuGallery from "../assets/gallery/bubu-gallery.webp";
import "../styles/Gallery.css";

const galleryCards = [
  {
    id: "01",
    title: "Little Reactions",
    label: "CHARACTER",
    asset: gallery01,
  },
  {
    id: "02",
    title: "Everyday Adventures",
    label: "EVERYDAY",
    asset: gallery02,
  },
  {
    id: "03",
    title: "Playful Moments",
    label: "PLAY",
    asset: gallery03,
  },
  {
    id: "04",
    title: "Quiet Togetherness",
    label: "TOGETHER",
    asset: gallery04,
  },
  {
    id: "05",
    title: "Big Feelings",
    label: "EMOTION",
    asset: gallery05,
  },
  {
    id: "06",
    title: "Just Chintu & Bubu",
    label: "STORY",
    asset: gallery06,
  },
];

const characterMoments = [
  {
    title: "CHINTU",
    label: "THE EXPRESSIVE ONE",
    asset: chintuGallery,
    alt: "Chintu expressive character artwork",
  },
  {
    title: "BUBU",
    label: "THE CALM ONE",
    asset: bubuGallery,
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
          <div className="gallery-hero__visual" aria-hidden="true">
            <img
              src={galleryHero}
              alt=""
              className="gallery-hero__image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section
        className="gallery-featured page-section"
        aria-labelledby="gallery-featured-title"
      >
        <div className="page-container gallery-featured__grid">
          <div className="gallery-featured__visual" aria-hidden="true">
            <img
              src={galleryFeatured}
              alt=""
              className="gallery-featured__image"
              loading="eager"
            />
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
                <div className="gallery-card__image" aria-hidden="true">
                  <img
                    src={card.asset}
                    alt=""
                    className="gallery-card__image-element"
                    loading="lazy"
                  />
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
                <div className="gallery-moments__visual" aria-hidden="true">
                  <img
                    src={item.asset}
                    alt={item.alt}
                    className="gallery-moments__image"
                    loading="lazy"
                  />
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
