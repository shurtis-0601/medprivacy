"use client";

import React from 'react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans px-4">
      <div className="max-w-xl w-full bg-white p-10 rounded-xl shadow-lg text-center border border-gray-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-blue-950 mb-4">You are on the list!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your free MedPrivacy trial and NotebookLM workflow guide are on their way to your inbox now.
        </p>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 text-left">
          <h2 className="font-bold text-blue-950 mb-2">Next Steps:</h2>
          <p className="text-gray-700">
            While you wait for the email to arrive, follow the CollabEdge Solutions page for more AI workflows and NDIS compliance strategies.
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
      </div>
    </div>
  );
}
