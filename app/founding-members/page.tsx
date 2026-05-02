"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// Note: Ensure you import your SiteHeader, SiteFooter, and FadeIn components here
// import SiteHeader from '@/components/SiteHeader';
// import SiteFooter from '@/components/SiteFooter';
// import FadeIn from '@/components/FadeIn';

export default function FoundingMembersPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://bigin.zoho.com.au/crm/WebForm', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        router.push('/founding-members/thank-you');
      } else {
        setError('There was a problem submitting your details. Please try again.');
        setIsSubmitting(false);
      }
   } catch (err) { console.error(err);
      setError('A network error occurred. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* <SiteHeader /> */}

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          {/* <FadeIn> */}
          <div className="inline-block bg-[var(--gold)] text-[var(--navy)] text-sm font-bold py-1 px-3 rounded-full mb-6 uppercase tracking-wider">
            FOUNDING MEMBER TRIAL
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] mb-6 font-bold leading-tight">
            Get the Privacy-Safe AI Workflow
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Free 30-day MedPrivacy trial for the Founding 100. Your download lands in your inbox in under a minute.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As promised in the group, this is the privacy-safe AI workflow for your NDIS documentation. MedPrivacy strips identifying information from your clinical documents before anything goes near AI. Pair it with NotebookLM and you have a fully defensible, citation-backed drafting workflow. Drop your details below and the download link plus the full workflow guide land in your inbox straight away.
          </p>
          {/* </FadeIn> */}
        </section>

        {/* Section 2: What you get & Section 3: How this works */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* <FadeIn> */}
            <div>
              <h2 className="font-serif text-3xl text-[var(--navy)] mb-6 font-bold">What lands in your inbox</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3">✓</span>
                  Direct download link to MedPrivacy for Windows (the .exe installer)
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3">✓</span>
                  Step-by-step NotebookLM workflow guide for Change of Circumstances and other clinical reports
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3">✓</span>
                  Implementation support if you get stuck on installation
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-3">✓</span>
                  Check-ins from Sinclair at days 3, 14 and 28 of your trial
                </li>
              </ul>
            </div>
            {/* </FadeIn> */}

            {/* <FadeIn delay={200}> */}
            <div>
              <h2 className="font-serif text-3xl text-[var(--navy)] mb-6 font-bold">How this works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[var(--navy)]">Step 1: Drop your details below</h3>
                  <p className="text-gray-600 mt-1">Your download link and workflow guide land in your inbox within 60 seconds.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--navy)]">Step 2: Install MedPrivacy and follow the workflow guide</h3>
                  <p className="text-gray-600 mt-1">Setup takes about 10 minutes. De-identify your documents with MedPrivacy, then process them through NotebookLM. Two hours instead of eight on complex reports.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--navy)]">Step 3: Tell me honestly what works and what does not</h3>
                  <p className="text-gray-600 mt-1">I will check in on days 3, 14 and 28. Your feedback directly shapes the product. At the end of 30 days, founding members lock in a permanent rate based on what they tell me feels fair.</p>
                </div>
              </div>
            </div>
            {/* </FadeIn> */}
          </div>
        </section>

        {/* Section 4: The form */}
        <section className="py-20 px-4 max-w-xl mx-auto">
          {/* <FadeIn> */}
          <h2 className="font-serif text-3xl text-[var(--navy)] mb-8 font-bold text-center">Get your free access</h2>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden security fields required by Zoho Bigin */}
            <input type="hidden" name="xnQsjsdp" value="5d8eae7af94f7e88422b898b015267682c4f5957b0395a7844425b495aed0c3e" />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input type="hidden" name="xmIwtLD" value="a8040ccffb121eaa4e17f7e1641caa4a88b988555859ff674eff50c03cbef3b18aefb117e9a221a4feef4ef9b6644579" />
            <input type="hidden" name="actionType" value="Q29udGFjdHM=" />
            <input type="hidden" name="rmsg" id="rmsg" value="true" />
            <input type="hidden" name="returnURL" value="https://medprivacy.com.au/founding-members/thank-you" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input required type="text" id="FirstName" name="First Name" maxLength={40} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--navy)] focus:border-[var(--navy)] outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input required type="text" id="LastName" name="Last Name" maxLength={80} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--navy)] focus:border-[var(--navy)] outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input required type="email" id="Email" name="Email" maxLength={100} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--navy)] focus:border-[var(--navy)] outline-none transition-colors" />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-[var(--gold)] text-[var(--navy)] font-bold text-lg py-4 px-8 rounded-md transition-all hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Get My Free Access'}
            </button>
          </form>

          {/* Section 5: Privacy note */}
          <p className="text-center text-sm text-gray-500 mt-6 max-w-sm mx-auto">
            Your details are private. Only Sinclair Hurtis sees what you submit. We do not share your contact details with third parties.
          </p>
          {/* </FadeIn> */}
        </section>
      </main>

      {/* <SiteFooter /> */}
    </div>
  );
}
