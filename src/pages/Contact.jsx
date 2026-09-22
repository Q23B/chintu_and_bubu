import { useState } from "react";
import useRevealOnScroll from "../components/common/useRevealOnScroll";
import "../styles/Contact.css";

const collaborationIntents = [
  { value: "brand", label: "Brand Collaboration" },
  { value: "campaign", label: "Campaign Partnership" },
  { value: "content", label: "Content Collaboration" },
  { value: "other", label: "Other" },
];

function Contact() {
  const [intent, setIntent] = useState("");
  const [intentError, setIntentError] = useState(false);
  const [draftReady, setDraftReady] = useState(false);
  const [heroRef, heroRevealed] = useRevealOnScroll();
  const [highlightsRef, highlightsRevealed] = useRevealOnScroll();
  const [formRef, formRevealed] = useRevealOnScroll();
  const [finalRef, finalRevealed] = useRevealOnScroll();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!intent) {
      setIntentError(true);
      return;
    }

    setIntentError(false);
    setDraftReady(true);
  };

  return (
    <div className="contact-page">
      <section
        ref={heroRef}
        className={`contact-hero page-section interaction-reveal ${heroRevealed ? "is-revealed" : ""}`}
        aria-labelledby="contact-title"
      >
        <div className="page-container contact-hero__container">
          <span className="contact-eyebrow">
            LET&apos;S CREATE SOMETHING SPECIAL
          </span>
          <h1 id="contact-title" className="contact-title">
            Have something that belongs in their world?
          </h1>
          <p className="contact-intro">
            Tell us what you&apos;re thinking. We&apos;ll figure out where
            Chintu &amp; Bubu fit in and whether the idea belongs inside the
            story.
          </p>
        </div>
      </section>

      <section
        ref={highlightsRef}
        className={`contact-highlights page-section interaction-reveal ${highlightsRevealed ? "is-revealed" : ""}`}
        aria-labelledby="contact-highlights-title"
      >
        <div className="page-container contact-highlights__grid">
          <div className="contact-highlights__text">
            <h2 id="contact-highlights-title">
              Built for stories that feel natural.
            </h2>
            <p>
              Chintu &amp; Bubu operates through familiarity, emotion and
              character-led storytelling. The best collaborations feel like they
              were always meant to be there.
            </p>
            <ul className="contact-highlights__list">
              <li>Brand Collaborations</li>
              <li>Campaign Partnerships</li>
              <li>Character-led Storytelling</li>
            </ul>
          </div>

          <div className="contact-highlights__visual" aria-hidden="true">
            <div className="contact-card">
              <div className="contact-card__circle contact-card__circle--pink" />
              <div className="contact-card__circle contact-card__circle--blue" />
              <div className="contact-card__stripe" />
              <div className="contact-card__panel">
                <span className="contact-card__label">Collaboration</span>
                <strong className="contact-card__heading">
                  A good idea belongs in the moment
                </strong>
                <p className="contact-card__copy">
                  Bring the idea. We&apos;ll find the place where it feels like
                  Chintu &amp; Bubu were always part of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={formRef}
        id="contact-enquiry"
        className={`contact-form-section page-section interaction-reveal ${formRevealed ? "is-revealed" : ""}`}
        aria-labelledby="contact-form-title"
      >
        <div className="page-container contact-form__container">
          <div className="contact-form__panel">
            <div className="contact-form__header">
              <span className="contact-form__eyebrow">ENQUIRY</span>
              <h2 id="contact-form-title">Send a partnership enquiry</h2>
              <p>
                Share a few details and we&apos;ll work out whether it belongs
                in the world of Chintu &amp; Bubu.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__fields">
                <label className="contact-field">
                  <span>Full Name</span>
                  <input type="text" name="name" required />
                </label>

                <label className="contact-field">
                  <span>Brand / Company</span>
                  <input type="text" name="company" required />
                </label>

                <label className="contact-field">
                  <span>Email Address</span>
                  <input type="email" name="email" required />
                </label>

                <label className="contact-field">
                  <span>Phone Number</span>
                  <input type="tel" name="phone" />
                </label>

                <fieldset
                  className={`contact-intent ${intentError ? "is-invalid" : ""}`}
                  aria-describedby={
                    intentError ? "contact-intent-error" : undefined
                  }
                >
                  <legend>Collaboration Type</legend>
                  <div className="contact-intent__options">
                    {collaborationIntents.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`contact-intent__option ${intent === option.value ? "is-selected" : ""}`}
                        aria-pressed={intent === option.value}
                        onClick={() => {
                          setIntent(option.value);
                          setIntentError(false);
                          setDraftReady(false);
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <input
                    type="hidden"
                    name="collaborationType"
                    value={intent}
                  />
                  {intentError && (
                    <span
                      id="contact-intent-error"
                      className="contact-intent__error"
                    >
                      Select the collaboration type that best fits your idea.
                    </span>
                  )}
                </fieldset>

                <label className="contact-field contact-field--message">
                  <span>Message</span>
                  <textarea name="message" rows="5" required />
                </label>
              </div>

              <div className="contact-form__actions">
                <button
                  type="submit"
                  className="button button--primary button--pill"
                >
                  Send Enquiry
                </button>
              </div>

              {draftReady && (
                <p className="contact-form__notice" role="status">
                  Your enquiry details are ready. Official contact details are
                  coming soon.
                </p>
              )}
            </form>
          </div>

          <aside className="contact-direct-card">
            <h3>Prefer a direct conversation?</h3>
            <p>Official contact details coming soon.</p>
          </aside>
        </div>
      </section>

      <section
        ref={finalRef}
        className={`contact-final page-section interaction-reveal ${finalRevealed ? "is-revealed" : ""}`}
        aria-labelledby="contact-final-title"
      >
        <div className="page-container contact-final__panel">
          <div>
            <p className="contact-final__eyebrow">
              Have an idea for Chintu &amp; Bubu?
            </p>
            <h2 id="contact-final-title">
              Let&apos;s turn a simple idea into a memorable story.
            </h2>
          </div>
          <a
            href="#contact-enquiry"
            className="button button--primary button--pill contact-final__button"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
