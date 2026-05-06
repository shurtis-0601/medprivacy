"use client";

import React from 'react';

export default function FoundingMembersPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-500 text-blue-950 text-sm font-bold py-1 px-3 rounded-full mb-6 uppercase tracking-wider">
            FOUNDING MEMBER TRIAL
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-blue-950 mb-6 font-bold leading-tight">
            Get the Privacy-Safe AI Workflow
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Free 30-day MedPrivacy trial for the Founding 100. Your download lands in your inbox in under a minute.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This is the privacy-safe AI workflow built for NDIS and Allied Health documentation. MedPrivacy strips identifying information from your clinical documents before anything goes near AI. Everything runs on your computer. Nothing goes to the cloud.
          </p>
        </section>

        {/* Section 2: What you get & Section 3: How this works */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-blue-950 mb-6 font-bold">What lands in your inbox</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">✓</span>
                  Direct download link to MedPrivacy for Windows (the .exe installer)
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">✓</span>
                  Your database template to set up participant, carer and provider names in one go
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">✓</span>
                  Implementation support if you get stuck on installation
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 font-bold mr-3">✓</span>
                  Check-ins from Sinclair, principal consultant of CollabEdge Solutions at days 3, 14 and 28 of your trial
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-blue-950 mb-6 font-bold">How this works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-blue-950">Step 1: Drop your details below</h3>
                  <p className="text-gray-600 mt-1">Your download and database template land in your inbox within 60 seconds.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-950">Step 2: Install MedPrivacy and set up your database</h3>
                  <p className="text-gray-600 mt-1">Setup takes about 10 minutes. Add your participant, carer and provider names to the database, then drop a test document in and run it. De-identified output is ready in under a minute.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-950">Step 3: Tell me honestly what works and what does not</h3>
                  <p className="text-gray-600 mt-1">We will check in on days 3, 14 and 28. Your feedback directly shapes the product. At the end of 30 days, founding members lock in a permanent rate based on what they tell me feels fair.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The form */}
        <section className="py-20 px-4 max-w-xl mx-auto">
          <h2 className="font-serif text-3xl text-blue-950 mb-8 font-bold text-center">Get your free access</h2>
          
          <form action="https://bigin.zoho.com.au/crm/WebForm" method="POST" encType="multipart/form-data" className="space-y-6">
            <input type="hidden" name="xnQsjsdp" value="af56ed56e18ee8b54aaae9e7df449306e9b4733c2821552fa4f9eaddc679f6df" />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input type="hidden" name="xmIwtLD" value="88ea2d73d9b0be1d4f02fe0e4774fc9e8b186e15e6e7a3faa4f959ce62ab97aa43faa828243e35dbb7c6708393151b86" />
            <input type="hidden" name="actionType" value="Q29udGFjdHM=" />
            <input type="hidden" name="rmsg" id="rmsg" value="true" />
            <input type="hidden" name="returnURL" value="https://medprivacy.com.au/founding-members/thank-you" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="First Name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input required type="text" id="First Name" name="First Name" maxLength={40} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="Last Name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input required type="text" id="Last Name" name="Last Name" maxLength={80} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input required type="email" id="Email" name="Email" maxLength={100} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors" />
            </div>

            <div>
              <label htmlFor="Company" className="block text-sm font-medium text-gray-700 mb-1">Practice or Organisation Name</label>
              <input required type="text" id="Company" name="Accounts.Account Name" maxLength={200} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-none transition-colors" />
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-500 text-blue-950 font-bold text-lg py-4 px-8 rounded-md transition-all hover:bg-amber-400 focus:ring-4 focus:ring-amber-200"
            >
              Get My Free Access
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6 max-w-sm mx-auto">
            CollabEdge Solutions respects your privacy. Your details are used only to manage your MedPrivacy trial and will never be shared with third parties.
          </p>
        </section>
      </main>
    </div>
  );
}
