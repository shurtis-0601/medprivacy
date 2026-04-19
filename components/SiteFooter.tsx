export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <p>
          MedPrivacy © {year} — A product of{" "}
          <a
            href="https://collabedgesolutions.com.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            CollabEdge Solutions
          </a>
          . Built for Australian NDIS and allied health practitioners.
        </p>
      </div>
    </div>
  );
}
