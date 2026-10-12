import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100dvh] w-full bg-[#d4ff36] text-zinc-950 flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className="w-full max-w-md h-full max-h-[720px] flex flex-col items-center justify-between pt-0 px-4 pb-4 sm:px-5 sm:pb-5 bg-[#d4ff36] rounded-3xl">
        
        {/* Top Section: Logo & Subtitle - pulled up higher */}
        <div className="w-full flex flex-col items-center -mt-2 sm:-mt-12">
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

        {/* Event Details - Aligned to the Left */}
        <div className="w-full flex flex-col items-start text-left gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-zinc-950 px-2 my-1">
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
        <div className="w-full flex flex-col items-center px-2 my-1">
          <button className="w-full bg-black text-white py-3 px-6 rounded-xl font-bold text-sm sm:text-base tracking-wide hover:bg-zinc-800 transition-colors shadow-md">
            I&apos;M IN! SIGN UP NOW
          </button>
          <p className="text-[10px] sm:text-[11px] text-zinc-800 mt-1 italic">
            *Name and phone required on next step*
          </p>
        </div>

        {/* Footer */}


      </div>
    </main>
  );
}