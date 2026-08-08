import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero page-section">
        <div className="page-container contact-hero__container">
          <span className="contact-eyebrow">
            LET&apos;S CREATE SOMETHING SPECIAL
          </span>
          <h1 className="contact-title">Partner With Chintu &amp; Bubu</h1>
          <p className="contact-intro">
            For brand collaborations, creative partnerships and business
            enquiries, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-highlights page-section">
        <div className="page-container contact-highlights__grid">
          <div className="contact-highlights__text">
            <h2>Made for Meaningful Collaborations</h2>
            <p>
              Chintu &amp; Bubu brings everyday emotions, playful storytelling
              and memorable character-led content together to create
              collaborations that feel natural, engaging and genuinely
              relatable.
            </p>
            <ul className="contact-highlights__list">
              <li>Brand Collaborations</li>
              <li>Creative Campaigns</li>
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
                  Premium partnership experience
                </strong>
                <p className="contact-card__copy">
                  Refined, elegant and built for storytelling that connects with
                  brand audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section page-section">
        <div className="page-container contact-form__container">
          <div className="contact-form__panel">
            <div className="contact-form__header">
              <span className="contact-form__eyebrow">ENQUIRY</span>
              <h2>Send a partnership enquiry</h2>
              <p>
                Share a few details and we&apos;ll get back to you with a
                thoughtful response.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
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

                <label className="contact-field">
                  <span>Collaboration Type</span>
                  <select name="collaborationType" required>
                    <option value="">Select an option</option>
                    <option value="brand">Brand Collaboration</option>
                    <option value="campaign">Campaign Partnership</option>
                    <option value="content">Content Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </label>

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

              {submitted && (
                <p className="contact-form__success">
                  Thank you — your enquiry has been noted.
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

      <section className="contact-final page-section">
        <div className="page-container contact-final__panel">
          <div>
            <p className="contact-final__eyebrow">
              Have an idea for Chintu &amp; Bubu?
            </p>
            <h2>Let&apos;s turn a simple idea into a memorable story.</h2>
          </div>
          <button
            type="button"
            className="button button--primary button--pill contact-final__button"
            onClick={() => window.history.pushState(null, "", "/contact")}
          >
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
