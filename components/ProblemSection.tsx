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
              Sending identifiable participant information to an AI tool can
              raise serious privacy and NDIS obligations. Check your own
              obligations before you do.
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
              <div className="pain-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DEB96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
              </div>
              <p className="pain-text">
                <strong>60–80 minutes</strong> of manual redaction per batch of
                reports before you can even start the AI-assisted writing
              </p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DEB96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              </div>
              <p className="pain-text">
                <strong>Human error</strong> — names in footers, phone numbers
                in signatures, parent names throughout body text that are easy
                to miss
              </p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DEB96A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              </div>
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
