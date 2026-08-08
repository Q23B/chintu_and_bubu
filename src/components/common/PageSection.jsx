import "../../styles/PageSection.css";

function PageSection({ title, description }) {
  return (
    <section className="page-section">
      <div className="page-container">
        <h1>{title}</h1>
        {description && (
          <p className="page-section__description">{description}</p>
        )}
      </div>
    </section>
  );
}

export default PageSection;
