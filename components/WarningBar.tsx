export function WarningBar() {
  return (
    <div className="warning-bar">
      <div className="container">
        <div className="warning-inner">
          <div className="warning-icon">⚠️</div>
          <div className="warning-text">
            <p>
              Letterhead and repeated images are removed by default. Other
              images, such as signatures, photos and charts, are kept and text
              inside them is not read. Check every output before uploading it
              to an AI tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
