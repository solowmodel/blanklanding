'use client';

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          phone: formData.phone,
        }).toString(),
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
    <main className="min-h-screen w-full bg-[#d4ff36] text-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center justify-between py-6 px-4 bg-[#d4ff36] rounded-3xl relative">
        
        {/* Back Link */}
        <div className="w-full flex justify-start mb-4 px-2">
          <Link href="/" className="text-xs font-bold text-zinc-900 hover:underline">
            ← Back to Event
          </Link>
        </div>

        {/* Form Card */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-white mb-4">
          <h2 className="text-lg font-bold mb-1">Join the Event</h2>
          <p className="text-xs text-zinc-400 mb-4">Enter your details to lock in your spot.</p>

          {submitted ? (
            <div className="py-8 text-center text-[#d4ff36] font-semibold text-sm">
              You&apos;re all set! See you there.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

      </div>
    </main>
  );
}