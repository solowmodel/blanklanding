'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get('success') === 'true';

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
          <p className="text-xs text-zinc-400 mb-4">Enter your details and we will let you know if we need help.</p>

          {submitted ? (
            <div className="py-8 text-center text-[#d4ff36] font-semibold text-sm">
              Thank you for being of service, we will reach out if we need the help!
            </div>
          ) : (
            /* Native Netlify Form: Netlify edge intercepts method="POST" automatically */
            <form 
              name="contact" 
              method="POST" 
              action="/signup?success=true" 
              className="space-y-4"
            >
              {/* Hidden field required for Netlify multi-page detection */}
              <input type="hidden" name="form-name" value="contact" />
              
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

      </div>
    </main>
  );
}