import { FadeIn } from "./FadeIn";

export function DetectionMatrix() {
  return (
    <section className="detection">
      <div className="container">
        <FadeIn className="detection-header">
          <div className="section-label">What Gets Detected</div>
          <h2>
            Comprehensive Detection.
            <br />
            Zero Manual Work for Common Identifiers.
          </h2>
          <p>
            The core engine handles pattern-detectable information
            automatically. Your database handles everything else — and you
            only set it up once.
          </p>
        </FadeIn>
        <FadeIn className="detection-grid">
          <div className="det-card auto">
            <h3>Detected Automatically</h3>
            <p className="sub">
              No setup required. Detected in every document.
            </p>
            <div className="det-pill-wrap">
              <span className="det-pill">NDIS numbers</span>
              <span className="det-pill">Phone numbers</span>
              <span className="det-pill">Email addresses</span>
              <span className="det-pill">Street addresses</span>
              <span className="det-pill">Dates of birth</span>
              <span className="det-pill">Australian states</span>
              <span className="det-pill">Postcodes</span>
            </div>
          </div>
          <div className="det-card manual">
            <h3>Add to Your Database</h3>
            <p className="sub">
              One-time setup. Two minutes. Used in every document thereafter.
            </p>
            <div className="det-pill-wrap">
              <span className="det-pill">Participant names</span>
              <span className="det-pill">Carer &amp; parent names</span>
              <span className="det-pill">Provider names</span>
              <span className="det-pill">Organisation names</span>
              <span className="det-pill">Specific locations</span>
            </div>
            <p className="det-note">
              Import your existing client list from any CRM via CSV in one
              click.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
