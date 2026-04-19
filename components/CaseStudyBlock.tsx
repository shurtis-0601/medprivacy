import { FadeIn } from "./FadeIn";

export function CaseStudyBlock() {
  return (
    <section className="case">
      <div className="container">
        <FadeIn className="case-inner">
          <div className="section-label">Real Results</div>
          <div className="case-quote">
            &ldquo;I had four clinical reports totalling{" "}
            <span className="case-highlight">51 pages</span>. Every page
            contained my participant&apos;s name, address, NDIS number and
            family details. I needed Claude to help me synthesise the evidence
            for a Change of Circumstances submission to NDIA, but I could not
            upload unredacted documents.
            <br />
            <br />
            MedPrivacy processed all four reports in{" "}
            <span className="case-highlight">45 seconds</span>. I uploaded the
            de-identified versions to Claude with the NDIS guidelines and a
            report template. The AI drafted a comprehensive submission in
            around ten minutes.
            <br />
            <br />
            I then spent 45 to 60 minutes verifying every citation, every
            clinical claim, and every recommendation before submitting. The AI
            got the synthesis right but{" "}
            <span className="case-highlight">
              cited incorrect clause numbers
            </span>{" "}
            in one section — exactly the kind of thing you have to check.
            Total time:{" "}
            <span className="case-highlight">
              two hours versus six to eight hours
            </span>{" "}
            the traditional way. Privacy protected throughout.&rdquo;
          </div>
          <div className="case-attribution">
            <span className="case-name">Sinclair Hurtis</span>
            <span className="case-role">
              Support Coordinator, CollabEdge Solutions · Partnering with My
              Ability Services, Melbourne
            </span>
          </div>
          <div className="case-warning">
            AI is a tool, not a replacement for professional judgment. Always
            verify AI-generated content before submitting to NDIA. You are
            professionally responsible for what you submit.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
