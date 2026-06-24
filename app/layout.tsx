import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { FAQ_ITEMS } from "@/lib/faqs";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-GGQGJH89RR";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://medprivacy.com.au";
const DESCRIPTION =
  "De-identify NDIS documents before using AI tools. MedPrivacy removes names, addresses, and personal identifiers from PDF, Word, and text files. Runs locally on your computer with no cloud uploads. 30-day free trial for NDIS and allied health practitioners in Australia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "MedPrivacy | NDIS Document De-identification Software for Australian Practitioners",
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      "MedPrivacy | NDIS Document De-identification Software for Australian Practitioners",
    description: DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_AU",
    siteName: "MedPrivacy",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MedPrivacy",
  applicationCategory: "HealthApplication",
  operatingSystem: "Windows",
  description: DESCRIPTION,
  offers: {
    "@type": "Offer",
    priceCurrency: "AUD",
    description: "Early adopter pricing. 30-day free trial included.",
  },
  provider: {
    "@type": "Organization",
    name: "CollabEdge Solutions",
    url: "https://collabedgesolutions.com.au",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      </head>
      <body className="js-enabled">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
