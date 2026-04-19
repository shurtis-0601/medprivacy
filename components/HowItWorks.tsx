import { FadeIn } from "./FadeIn";

export function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <FadeIn className="how-header">
          <div className="section-label" style={{ color: "var(--gold)" }}>
            Three Steps
          </div>
          <h2>No Technical Knowledge Required</h2>
          <p>
            A clean desktop application. No command line. No setup beyond a
            one-time database import.
          </p>
        </FadeIn>
        <FadeIn className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Open MedPrivacy</h3>
            <p>
              Double-click MedPrivacy.exe. A clean desktop app opens with
              Process, Database and Settings tabs. No installation required.
            </p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Add Your Documents</h3>
            <p>
              Click Add Files to select one document, or Add Folder to load an
              entire folder at once. Supports PDF, Word and Text files.
            </p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Run De-identification</h3>
            <p>
              Click Run. Watch each file turn green. De-identified files land
              automatically in a separate De-identified subfolder. Right-click
              any file to open its folder directly.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
