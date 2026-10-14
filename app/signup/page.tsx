'use client';

import Link from "next/link";
import { useState, Suspense } from "react";

function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // CRITICAL: Post to the static HTML file for Next.js Netlify deployments
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-white mb-4">
      <h2 className="text-lg font-bold mb-1">I want to be OF SERVICE!</h2>

      {submitted ? (
        <div className="py-8 text-center text-[#d4ff36] font-semibold text-sm">
          Thank you for being of service, we will reach out if we need the help!
        </div>
      ) : (
        <form onSubmit={handleSubmit} name="volunteers" className="space-y-4" data-netlify="true">
          {/* Must match the name="volunteers" on the form tag */}
          <input type="hidden" name="form-name" value="volunteers" />
          
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4ff36]"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4ff36]"
              placeholder="(555) 000-0000"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#d4ff36] text-black font-bold text-sm rounded-xl hover:bg-[#c2ef22] transition-colors mt-2 cursor-pointer touch-manipulation"
          >
            Submit & Confirm
          </button>
        </form>
      )}
    </div>
  );
}

export default function SignupPage() {
  return (
    <main className="min-h-screen w-full bg-[#d4ff36] text-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center justify-between py-6 px-4 bg-[#d4ff36] rounded-3xl relative">
        
        {/* Back Link */}
        <div className="w-full flex justify-start mb-4 px-2">
          <Link href="/" className="text-xs font-bold text-zinc-900 hover:underline">
            ← Back to Event
          </Link>
        </div>

        <Suspense fallback={<div className="w-full bg-zinc-900 rounded-2xl p-6 text-white text-center">Loading...</div>}>
          <SignupForm />
        </Suspense>

      </div>
    </main>
  );
}