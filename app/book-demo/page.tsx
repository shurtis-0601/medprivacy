import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Book a Demo | MedPrivacy",
  description:
    "Schedule a free MedPrivacy demo to see how Australian NDIS practitioners de-identify clinical documents in 30 seconds.",
  alternates: { canonical: "https://medprivacy.com.au/book-demo" },
  openGraph: {
    title: "Book a Demo | MedPrivacy",
    description:
      "Schedule a free MedPrivacy demo to see how Australian NDIS practitioners de-identify clinical documents in 30 seconds.",
    url: "https://medprivacy.com.au/book-demo",
    type: "website",
    locale: "en_AU",
  },
};

const BOOKING_URL = "https://au.bigin.online/org7006551924/bookings/medprivacy-demo";

export default function BookDemoPage() {
  return (
    <main id="medprivacy">
      <section className="hero" style={{ padding: "80px 0 60px" }}>
        <div className="hero-inner">
          <div className="section-label">Book a Demo</div>
          <h1>
            See MedPrivacy <em>in Action.</em>
          </h1>
          <p className="hero-sub">
            Pick a 30-minute slot that suits you. We will walk you through
            de-identifying a real NDIS clinical document, answer your questions,
            and show you exactly how MedPrivacy fits into your practice
            workflow.
          </p>
          <p className="hero-sub-2">
            100% local processing &nbsp;·&nbsp; Built for Australian NDIS &amp;
            Allied Health Practitioners
          </p>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "60px 0 80px" }}>
        <div className="container">
          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 6px 24px rgba(5, 28, 42, 0.06)",
            }}
          >
            <iframe
              src={BOOKING_URL}
              title="MedPrivacy demo booking calendar"
              width="100%"
              height="700"
              frameBorder={0}
              style={{ border: 0, display: "block", width: "100%" }}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "24px",
              fontSize: "0.95rem",
            }}
          >
            Trouble loading the calendar?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold)", fontWeight: 600 }}
            >
              Open booking page in a new tab →
            </a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
