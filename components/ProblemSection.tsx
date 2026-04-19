import { FadeIn } from "./FadeIn";

export function ProblemSection() {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-label">The Problem</div>
        <h2>
          The Privacy Problem Every
          <br />
          NDIS Practitioner Faces
        </h2>
        <FadeIn className="problem-grid">
          <div className="problem-text">
            <p>
              You want to use AI to help write reports, synthesise clinical
              evidence, and reduce documentation time. But every report you
              receive contains your participant&apos;s name, address, NDIS
              number, and family details.
            </p>
            <p>
              Uploading that to ChatGPT or Claude without removing the personal
              information first is a breach of the Privacy Act 1988 and your
              NDIS obligations.
            </p>
            <p>
              Manual de-identification takes 15 to 60 minutes per document and
              humans still miss things. A name in a footer. A phone number in a
              signature block. A parent&apos;s name buried in the body text.
            </p>
            <p
              style={{
                fontWeight: 600,
                color: "var(--navy)",
                fontSize: "1.05rem",
              }}
            >
              There is a better way.
            </p>
          </div>
          <div className="problem-callout">
            <h3>What practitioners deal with daily</h3>
            <div className="pain-item">
              <div className="pain-icon">⏱</div>
              <p className="pain-text">
                <strong>60–80 minutes</strong> of manual redaction per batch of
                reports before you can even start the AI-assisted writing
              </p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">⚠</div>
              <p className="pain-text">
                <strong>Human error</strong> — names in footers, phone numbers
                in signatures, parent names throughout body text that are easy
                to miss
              </p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">🔒</div>
              <p className="pain-text">
                <strong>Privacy Act 1988</strong> obligations and NDIS privacy
                requirements that make uploading unredacted documents a
                compliance risk
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
