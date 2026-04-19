export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is MedPrivacy compliant with the Privacy Act 1988?",
    answer:
      "MedPrivacy performs de-identification by removing direct personal identifiers from documents and processes everything locally on your computer with no cloud uploads. Users remain responsible for assessing whether de-identified documents meet their specific privacy, ethics, and regulatory requirements. For research purposes, consult your ethics committee. For clinical purposes, follow your organisation's privacy policies.",
  },
  {
    question: "Does MedPrivacy upload my documents to the cloud?",
    answer:
      "No. MedPrivacy runs entirely on your local computer. Documents are never uploaded to any server. All processing happens on your machine and your machine only. No internet connection is required during document processing.",
  },
  {
    question: "What file formats does MedPrivacy support?",
    answer:
      "MedPrivacy supports PDF, Word documents (.docx), and plain text files (.txt). For best results with PDFs, ensure the text is extractable rather than a scanned image. If your PDF is scanned, run it through OCR software first.",
  },
  {
    question: "Why do carer and parent names need to be in the database?",
    answer:
      "NDIS reports frequently mention parents and family members by name throughout the document body, not just in the header. MedPrivacy includes Carer as a specific entry type in the database, so parent and guardian names are detected and redacted alongside participant and provider names. This was a deliberate design decision based on real-world NDIS documentation patterns.",
  },
  {
    question: "Can I import my existing client list?",
    answer:
      "Yes. Export your client list from your practice management software or CRM as a CSV file and import it into MedPrivacy in one click. The CSV requires two columns: Type (Participant, Carer, Provider, Organization, or Location) and Name. This makes initial setup very fast for practices with existing client databases.",
  },
  {
    question: "What is the difference between de-identification and anonymisation?",
    answer:
      "De-identification removes direct personal identifiers such as names, contact details, and ID numbers. Anonymisation is a higher standard that also addresses indirect identifiers and statistical re-identification risk. MedPrivacy performs de-identification, which is suitable for clinical supervision, professional development, case discussions, and AI-assisted documentation workflows. For research requiring full anonymisation, additional measures and ethics approval may be required.",
  },
  {
    question: "Do I still need to check the output after processing?",
    answer:
      "Yes, always. De-identification significantly reduces the risk of inadvertent disclosure but verification remains your professional responsibility. In practice, this means opening the de-identified file, scanning for any missed names or identifiers, and checking that the clinical content reads correctly before uploading to any AI tool. AI tools can also introduce errors in their outputs — always verify AI-generated content before submitting to NDIA or sharing externally.",
  },
  {
    question: "Is MedPrivacy suitable for large health organisations?",
    answer:
      "MedPrivacy is designed for individual allied health practitioners and small to medium practices in the Australian NDIS sector. Enterprise environments with complex governance requirements, data pipelines, or audit trail obligations should contact CollabEdge Solutions to discuss a tailored solution.",
  },
];
