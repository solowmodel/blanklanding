import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#d4ff36] text-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center justify-between py-6 px-4 bg-[#d4ff36] rounded-3xl">
        
        {/* Top Section: Logo */}
        <div className="w-full flex flex-col items-center mb-6">
          <div className="w-full flex justify-center">
            <Image
              src="/fs.png"
              alt="Fresh Start Logo"
              width={500}
              height={150}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="w-full flex flex-col items-start text-left gap-2 text-sm font-bold text-zinc-950 px-2 mb-8">
          <p>
            <span className="font-normal text-zinc-800">WHEN:</span> OCT 18 | 2:30pm - 5pm
          </p>
          <p>
            <span className="font-normal text-zinc-800">WHERE:</span> Six Step House
          </p>
          <p>
            <span className="font-normal text-zinc-800">WHAT:</span> Pizza & Snacks Provided
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="w-full flex flex-col items-center px-2 mb-4">
          <Link 
            href="/signup"
            className="w-full text-center bg-black text-white py-4 px-6 rounded-xl font-bold text-base tracking-wide active:scale-95 transition-transform shadow-lg cursor-pointer touch-manipulation"
          >
            I&apos;M IN! SIGN UP NOW
          </Link>
          <p className="text-xs text-zinc-800 mt-2 italic">
            *Name and phone required on next step*
          </p>
        </div>

      </div>
    </main>
  );
}