import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section className="cta">
      <div className="container">
        <FadeIn>
          <div className="section-label">Get Started</div>
          <h2>
            Start De-identifying in
            <br />
            the Next 10 Minutes
          </h2>
          <p>
            Download MedPrivacy, add your first client to the database, and
            process your first document. The whole setup takes less than ten
            minutes.
          </p>
          <div className="cta-btns">
            <a
              href="mailto:info@collabedgesolutions.com.au?subject=MedPrivacy%20Trial%20Request"
              className="btn btn-gold"
            >
              Start Your Free 30-Day Trial
            </a>
            <a
              href="https://www.collabedgesolutions.com.au/appt"
              className="btn btn-outline"
            >
              Book a Demo
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
