'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div
        className="
          relative mx-auto max-w-6xl overflow-hidden rounded-3xl
          bg-gradient-to-br from-[#eef5f7] via-[#d7eef7] to-[#0b5cff]
          px-8 py-20 text-center
        "
      >
        {/* Soft bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/90 to-transparent" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            Experience Effortless Banking And <br />
            Smarter Financial Decisions.
          </h2>

          {/* Input CTA */}
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-md items-center rounded-full border border-white bg-white/80 px-2 py-2 backdrop-blur shadow-md">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  flex-1 bg-transparent px-4 text-sm text-gray-700
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
