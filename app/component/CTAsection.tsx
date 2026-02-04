'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="w-full bg-white mt-6 md:mt-0 pb-8 md:pb-10 px-3 sm:px-4 md:px-0 md:py-10">
      <div
        className="
          relative mx-auto max-w-full md:w-311 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl
          py-8 sm:py-12 md:py-16 lg:py-20 text-center
        "
      >
  {/* Base deep gradient: blue → yellow */}
{/* Base gradient: left blue → right yellow */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#0b5cff_0%,#2ea7e0_35%,#9bdaf2_55%,transparent_75%),radial-gradient(circle_at_right,#ffb703_0%,#ffd966_40%,transparent_70%)]" />

{/* Extra left blue depth */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#0b5cff_0%,transparent_80%)] opacity-70" />

{/* Extra right yellow depth */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#ffb703_0%,transparent_80%)] opacity-70" />

{/* TOP gray-100 circular softener */}
<div
  className="
    absolute -top-60 left-1/2 -translate-x-1/2
    w-[1100px] h-[600px] rounded-full
    bg-[radial-gradient(circle,#f3f4f6_0%,transparent_70%)]
  "
/>

{/* Soft vignette */}
<div className="absolute inset-0 bg-[radial-gradient(circle,#00000010_0%,transparent_55%)]" />

        {/* Content */}
        <div className="relative z-10 px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug md:leading-tight text-gray-900 lg:text-4xl">
            Experience Effortless Banking And <br className="hidden sm:block" />
            Smarter Financial Decisions.
          </h2>

          {/* Input CTA */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
            <div className="flex flex-col sm:flex-row w-full max-w-sm md:max-w-md items-stretch sm:items-center gap-3 sm:gap-0 sm:rounded-full sm:border sm:border-white sm:bg-white/80 sm:px-2 sm:py-2 sm:backdrop-blur sm:shadow-md">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  flex-1 bg-white/80 sm:bg-transparent rounded-full sm:rounded-none border border-white sm:border-0 px-4 py-3 sm:px-3 md:px-4 sm:py-0 text-xs sm:text-sm text-gray-700
                  outline-none placeholder:text-gray-400 backdrop-blur sm:backdrop-blur-none shadow-md sm:shadow-none
                "
              />
              <button className="flex items-center justify-center gap-1 rounded-full
    bg-gradient-to-b from-[#484e57] via-[#2b333a] to-[#111827]
    px-2 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-50
    shadow-[0_8px_20px_rgba(0,0,0,0.35)]
    transition hover:brightness-110">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full text-xs">
                    ▶
                  </span>
                  Get Started
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
