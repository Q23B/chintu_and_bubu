import { useNavigate } from "react-router-dom";
import {
  collaborationTypes,
  featuredPartners,
  processSteps,
  benefitPoints,
} from "../data/collaborations";
import "../styles/Collaborations.css";

function Collaborations() {
  const navigate = useNavigate();

  return (
    <div className="collaborations-page">
      <section
        className="collaborations-hero page-section"
        aria-labelledby="collaborations-hero-title"
      >
        <div className="page-container collaborations-hero__grid">
          <div className="collaborations-hero__copy">
            <span className="collaborations-eyebrow">COLLABORATIONS</span>
            <h1 id="collaborations-hero-title">
              Premium partnerships.
              <br />
              Thoughtfully designed.
            </h1>
            <p>
              Chintu &amp; Bubu brings character-led storytelling, elegant
              visual identity and heartfelt everyday moments to brand
              collaborations that feel authentic and memorable.
            </p>
            <div className="collaborations-hero__actions">
              <button
                type="button"
                className="button button--primary button--pill"
                onClick={() => navigate("/contact")}
              >
                Start a Partnership
              </button>
              <button
                type="button"
                className="button button--secondary button--pill"
                onClick={() => navigate("/about")}
              >
                Discover the Brand
              </button>
            </div>
          </div>

          <div
            className="collaborations-hero__visual"
            aria-hidden="true"
            data-asset-path="src/assets/collaborations/collaborations-hero.webp"
          >
            <div className="collaborations-placeholder">
              <span>Reserved collaboration artwork</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="collaborations-types page-section"
        aria-labelledby="collaborations-types-title"
      >
        <div className="page-container collaborations-types__wrapper">
          <div className="collaborations-section-intro">
            <span className="collaborations-eyebrow">PARTNERSHIP TYPES</span>
            <h2 id="collaborations-types-title">
              Collaboration formats designed for premium storytelling.
            </h2>
          </div>

          <div className="collaborations-types__grid">
            {collaborationTypes.map((item) => (
              <article key={item.title} className="collaboration-card">
                <span className="collaboration-card__label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="collaborations-partners page-section"
        aria-labelledby="collaborations-partners-title"
      >
        <div className="page-container collaborations-partners__grid">
          <div className="collaborations-partners__content">
            <span className="collaborations-eyebrow">FEATURED PARTNERS</span>
            <h2 id="collaborations-partners-title">
              Thoughtful collaborations with premium brands.
            </h2>
            <p>
              We design partnerships around shared values, visual quality and
              stories that connect with audiences in a genuine way.
            </p>
          </div>

          <div className="collaborations-partners__list">
            {featuredPartners.map((partner) => (
              <article key={partner.name} className="partner-card">
                <span className="partner-card__type">{partner.type}</span>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="collaborations-process page-section"
        aria-labelledby="collaborations-process-title"
      >
        <div className="page-container collaborations-process__wrapper">
          <div className="collaborations-section-intro">
            <span className="collaborations-eyebrow">OUR PROCESS</span>
            <h2 id="collaborations-process-title">
              A collaborative process built for clarity and creative craft.
            </h2>
          </div>

          <div className="collaborations-process__steps">
            {processSteps.map((step) => (
              <article key={step.step} className="process-step">
                <div className="process-step__number">{step.step}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="collaborations-benefits page-section"
        aria-labelledby="collaborations-benefits-title"
      >
        <div className="page-container collaborations-benefits__wrapper">
          <div className="collaborations-benefits__content">
            <span className="collaborations-eyebrow">WHY PARTNER</span>
            <h2 id="collaborations-benefits-title">
              Create collaborations that feel premium, polished and alive.
            </h2>
            <p>
              We shape every partnership around memorable characters, strong
              visual identity and a polished storytelling experience.
            </p>
          </div>

          <div className="collaborations-benefits__list">
            {benefitPoints.map((item) => (
              <article key={item.title} className="benefit-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="collaborations-visual page-section">
        <div className="page-container collaborations-visual__panel">
          <div
            className="collaborations-visual__image"
            aria-hidden="true"
            data-asset-path="src/assets/collaborations/collaborations-highlight.webp"
          >
            <div className="collaborations-placeholder collaborations-placeholder--large">
              <span>Reserved collaboration highlight</span>
            </div>
          </div>
          <div className="collaborations-visual__content">
            <span className="collaborations-eyebrow">VISUAL HIGHLIGHT</span>
            <h2>Built for storytelling, designed for impact.</h2>
            <p>
              From art direction to visual refinement, every collaboration is
              constructed to feel emotionally rich, premium and easy to use in
              launch campaigns.
            </p>
          </div>
        </div>
      </section>

      <section className="collaborations-cta page-section">
        <div className="page-container collaborations-cta__panel">
          <div>
            <h2>Ready to partner with Chintu &amp; Bubu?</h2>
            <p>
              Contact us for a thoughtful partnership approach that honors your
              brand and brings the characters to life.
            </p>
          </div>
          <div className="collaborations-cta__actions">
            <button
              type="button"
              className="button button--secondary button--pill"
              onClick={() => navigate("/about")}
            >
              Learn More
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

export default Collaborations;
