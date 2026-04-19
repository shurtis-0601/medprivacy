export function WarningBar() {
  return (
    <div className="warning-bar">
      <div className="container">
        <div className="warning-inner">
          <div className="warning-icon">⚠️</div>
          <div className="warning-text">
            <h3>Important: Images Are Not Automatically Processed</h3>
            <p>
              MedPrivacy removes text-based personal information only. If your
              documents contain logos, signature images, or photographs, these
              are preserved as-is. After processing, open the de-identified
              file and manually remove any sensitive images before uploading
              to an AI tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
