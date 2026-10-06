import Image from "next/image";
import { FadeIn } from "./FadeIn";

export function ProductFeatureGrid() {
  return (
    <section className="what">
      <div className="container">
        <FadeIn className="what-header">
          <div className="section-label">The Solution</div>
          <h2>What MedPrivacy Does</h2>
          <p>
            A desktop application that runs on your computer. No subscriptions
            to services that hold your data. No technical knowledge required.
          </p>
        </FadeIn>
        <FadeIn className="app-screenshot">
          <Image
            src="/medprivacy-2.1.2-screenshot.webp"
            alt="MedPrivacy 2.1.2 Process tab with one invented test file awaiting review"
            width={2000}
            height={1201}
            sizes="(max-width: 860px) 100vw, 860px"
            loading="lazy"
          />
        </FadeIn>
        <p className="app-screenshot-caption">
          MedPrivacy 2.1.2. Add files, run, then review each output before further use.
        </p>
        <div className="what-cards">
          <FadeIn className="what-card">
            <div className="card-icon">🔍</div>
            <h3>Removes Personal Information</h3>
            <p>
              Detects and replaces names, addresses, NDIS numbers, phone
              numbers, emails and dates of birth with privacy tags like [NAME]
              and [NDIS]. Clinical wording is left in place. Only the
              identifiers it finds are replaced.
            </p>
          </FadeIn>
          <FadeIn className="what-card">
            <div className="card-icon">💻</div>
            <h3>Runs on Your Computer</h3>
            <p>
              Processing runs on your computer. MedPrivacy uploads nothing.
              The AI step that follows is where data leaves your computer. No
              internet connection required during processing.
            </p>
          </FadeIn>
          <FadeIn className="what-card">
            <div className="card-icon">⚡</div>
            <h3>30 Seconds Per Document</h3>
            <p>
              Process a single report or an entire folder at once. A batch of
              four clinical reports takes under a minute. De-identified files
              are saved automatically in a separate subfolder.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
