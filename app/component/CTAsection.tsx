'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="w-full bg-white pb-10 px-4 sm:px-6 md:px-8 -mt-20 md:-mt-40">
      <div
        className="
          relative mx-auto max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl
          py-12 sm:py-16 md:py-20 text-center
        "
      >
       {/* Base deep gradient */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#e6f6fb_25%,#9bdaf2_45%,#2ea7e0_65%,#0b5cff_100%)]" />

{/* Bottom depth */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0b5cff_0%,transparent_60%)] opacity-80" />

{/* TOP gray-100 circular gradient */}
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
        <div className="relative z-10 px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            Experience Effortless Banking And <br className="hidden sm:block" />
            Smarter Financial Decisions.
          </h2>

          {/* Input CTA */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="flex w-full max-w-md items-center rounded-full border border-white bg-white/80 px-2 py-2 backdrop-blur shadow-md">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  flex-1 bg-transparent px-3 sm:px-4 text-xs sm:text-sm text-gray-700
                  outline-none placeholder:text-gray-400
                "
              />
              <button
                className="
                  flex items-center gap-2 rounded-full
                  bg-black px-5 py-2.5 text-sm font-medium text-white
                  shadow-md transition hover:bg-gray-900
                "
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
