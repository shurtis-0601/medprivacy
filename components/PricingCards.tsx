import { FadeIn } from "./FadeIn";

export function PricingCards() {
  return (
    <section className="pricing" id="trial">
      <div className="container">
        <FadeIn className="pricing-header">
          <div className="section-label">Pricing</div>
          <h2>Soft Launch — Special Pricing Available</h2>
          <p>
            MedPrivacy is currently in soft launch and we are working directly
            with early adopters to find the right fit. Get in touch and we
            will tailor a plan for your practice.
          </p>
        </FadeIn>
        <FadeIn className="pricing-cards">
          <div className="p-card">
            <p className="p-tier">Solo Practitioner</p>
            <div className="p-price">
              <span className="p-amount" style={{ fontSize: "1.4rem" }}>
                Early Adopter Pricing
              </span>
            </div>
            <p className="p-sub">For individual allied health practitioners</p>
            <ul className="p-features">
              <li>Full PII detection engine</li>
              <li>Client database management</li>
              <li>PDF, DOCX and TXT support</li>
              <li>Email support</li>
              <li>30-day free trial included</li>
            </ul>
            <a
              href="/founding-members"
              className="btn btn-navy"
              style={{
                width: "100%",
                textAlign: "center",
                display: "block",
              }}
            >
              Start Free Trial
            </a>
          </div>
          <div className="p-card featured">
            <p className="p-tier">Small Practice</p>
            <div className="p-price">
              <span
                className="p-amount"
                style={{ fontSize: "1.4rem", color: "var(--gold)" }}
              >
                Early Adopter Pricing
              </span>
            </div>
            <p className="p-sub">For practices with 2 to 5 practitioners</p>
            <ul className="p-features">
              <li>Full PII detection engine</li>
              <li>Shared client database</li>
              <li>PDF, DOCX and TXT support</li>
              <li>Priority email support</li>
              <li>30-day free trial included</li>
            </ul>
            <a
              href="/founding-members"
              className="btn btn-gold"
              style={{
                width: "100%",
                textAlign: "center",
                display: "block",
              }}
            >
              Start Free Trial
            </a>
          </div>
          <div className="p-card">
            <p className="p-tier">Practice Group</p>
            <div className="p-price">
              <span className="p-amount" style={{ fontSize: "1.4rem" }}>
                Early Adopter Pricing
              </span>
            </div>
            <p className="p-sub">For groups with 6 or more practitioners</p>
            <ul className="p-features">
              <li>Full PII detection engine</li>
              <li>Shared client database</li>
              <li>PDF, DOCX and TXT support</li>
              <li>Phone and email support</li>
              <li>30-day free trial included</li>
            </ul>
            <a
              href="/founding-members"
              className="btn btn-navy"
              style={{
                width: "100%",
                textAlign: "center",
                display: "block",
              }}
            >
              Start Free Trial
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
