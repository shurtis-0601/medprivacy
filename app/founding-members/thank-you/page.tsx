import React from 'react';
// Note: Ensure you import your SiteHeader, SiteFooter components here
// import SiteHeader from '@/components/SiteHeader';
// import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: "Check Your Inbox | MedPrivacy",
  description: "Your MedPrivacy access is on the way. Check your inbox for the download link and workflow guide.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* <SiteHeader /> */}

      <main className="flex-grow flex flex-col items-center justify-center py-20 px-4">
        
        {/* Section 1: Confirmation */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-6 font-bold">
            Check your inbox
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Your download link and the NotebookLM workflow guide are on the way. Should arrive within a minute. If you do not see it, check your spam folder or message Sinclair directly in the Facebook group.
          </p>
          <p className="text-lg font-medium text-gray-600">
            Cheers, Sinclair
          </p>
        </div>

        {/* Section 2: While you wait */}
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl text-[var(--navy)] mb-8 font-bold text-center border-t border-gray-200 pt-12">
            While you wait
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a href="https://collabedgesolutions.com.au" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <h3 className="font-bold text-lg text-[var(--navy)] mb-2 group-hover:text-[var(--gold)] transition-colors">Visit CollabEdge Solutions</h3>
              <p className="text-gray-600 text-sm">Learn about the broader work Sinclair does with NDIS providers.</p>
            </a>

            {/* Card 2 */}
            {/* REPLACE [PLACEHOLDER_LINKEDIN_URL] below */}
            <a href="[PLACEHOLDER_LINKEDIN_URL]" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <h3 className="font-bold text-lg text-[var(--navy)] mb-2 group-hover:text-[var(--gold)] transition-colors">Connect on LinkedIn</h3>
              <p className="text-gray-600 text-sm">Follow Sinclair for practitioner-led insights on NDIS operations and automation.</p>
            </a>

            {/* Card 3 */}
            <a href="https://www.collabedgesolutions.com.au/ndis/the-ethical-operators-dilemma-why-ndis-productivity-matters-more-than-ever-in-2026" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <h3 className="font-bold text-lg text-[var(--navy)] mb-2 group-hover:text-[var(--gold)] transition-colors">Read the MedPrivacy article</h3>
              <p className="text-gray-600 text-sm">How the privacy-safe AI workflow came together.</p>
            </a>
          </div>
        </div>

      </main>

      {/* <SiteFooter /> */}
    </div>
  );
}
