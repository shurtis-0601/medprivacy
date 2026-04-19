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
            A desktop application that runs entirely on your computer. No
            cloud. No subscriptions to services that hold your data. No
            technical knowledge required.
          </p>
        </FadeIn>
        <FadeIn className="app-screenshot">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/663abc9bb2142153b3780b43/3bc2cd63-8f48-4645-81bc-56db545a6228/MedPrivacy+UI.png?format=2500w"
            alt="MedPrivacy desktop app showing the Process tab with Add Files, Run De-identification and Open Output Folder"
            width={2500}
            height={1500}
            sizes="(max-width: 860px) 100vw, 860px"
            loading="lazy"
          />
        </FadeIn>
        <p className="app-screenshot-caption">
          MedPrivacy v2.0.5 — Process tab. Add files, click Run, open your
          De-identified folder.
        </p>
        <div className="what-cards">
          <FadeIn className="what-card">
            <div className="card-icon">🔍</div>
            <h3>Removes Personal Information</h3>
            <p>
              Detects and replaces names, addresses, NDIS numbers, phone
              numbers, emails and dates of birth with privacy tags like [NAME]
              and [NDIS]. Clinical content is preserved completely.
            </p>
          </FadeIn>
          <FadeIn className="what-card">
            <div className="card-icon">💻</div>
            <h3>Runs Entirely on Your Computer</h3>
            <p>
              No cloud uploads. No third-party servers. Your documents never
              leave your machine. 100% local processing, every single time. No
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
