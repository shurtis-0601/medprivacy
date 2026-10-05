export function ProductHero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge">
          <span>🔒</span>{", "}
          <strong>
            By CollabEdge Solutions &nbsp;·&nbsp; Built for Australian NDIS
            and Allied Health Practitioners
          </strong>
        </div>
        <h1>
          De-identify Clinical Documents<br />
          in <em>30 Seconds.</em>
          <br />
          Remove Identifiers Before You Use AI. Stay in Control of Your Data.
        </h1>
        <p className="hero-sub">
          MedPrivacy automatically removes personal information from NDIS
          clinical reports before you use ChatGPT, Claude or similar tools for
          documentation, while reducing privacy risk.
        </p>
        <p className="hero-sub-2">
          Processing runs on your computer. MedPrivacy uploads nothing. The AI
          step that follows is where data leaves your computer.
          <br />
          Always review before using AI &nbsp;&nbsp;
        </p>

        <div className="hero-btns">
          <a
            href="/founding-members"
            className="btn btn-gold"
          >
            Start Your Free 30-Day Trial
          </a>
          <a
            href="https://www.collabedgesolutions.com.au/resources/videos"
            className="btn btn-outline"
          >
            Watch How It Works
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">30s</span>
            <span className="stat-label">per document</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">✓</span>
            <span className="stat-label">Local processing</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">30</span>
            <span className="stat-label">day free trial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
