"use client";

import React from 'react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans px-4">
      <div className="max-w-xl w-full bg-white p-10 rounded-xl shadow-lg text-center border border-gray-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-blue-950 mb-4">Check your inbox</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your MedPrivacy download and database template are in your inbox now. If you do not see the email within a minute, please check your spam folder.
        </p>

        <div className="space-y-3 mb-3">
          <a
            href="https://github.com/shurtis-0601/medprivacy/releases/download/v1.0.0/MedPrivacy.exe"
            className="inline-block w-full bg-amber-500 text-blue-950 font-bold text-lg py-4 px-8 rounded-md hover:bg-amber-400 transition-colors"
          >
            Download MedPrivacy for Windows
          </a>
          <a
            href="https://github.com/shurtis-0601/medprivacy/releases/download/v1.0.0/MedPrivacy-Mac.zip"
            className="inline-block w-full bg-amber-500 text-blue-950 font-bold text-lg py-4 px-8 rounded-md hover:bg-amber-400 transition-colors"
          >
            Download MedPrivacy for Mac (Beta)
          </a>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Windows: If a security prompt appears, click More info then Run anyway.
          Mac: Unzip the file, drag MedPrivacy to Applications, then open it. If blocked, go to System Settings then Privacy and Security and click Open Anyway.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6 text-left">
          <h2 className="font-bold text-blue-950 mb-2">While you wait</h2>
          <p className="text-gray-700">
            Follow the CollabEdge Solutions Facebook page for AI workflows, NDIS compliance strategies, and updates on the Founding 100 waitlist.
          </p>
        </div>

        <a
          href="https://www.facebook.com/collabedge/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-blue-950 text-white font-bold text-lg py-4 px-8 rounded-md hover:bg-blue-900 transition-colors"
        >
          Follow CollabEdge on Facebook
        </a>

        <p className="text-sm text-gray-500 mt-6">
          Cheers, Sinclair
        </p>
      </div>
    </div>
  );
}
