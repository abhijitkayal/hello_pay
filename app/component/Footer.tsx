'use client';

import { Mail, Instagram, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0b0b2d] via-[#06061c] to-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-12 md:py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="max-w-md lg:col-span-2">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500">
                <div className="h-3 w-3 rounded-full bg-[#0b0b2d]" />
              </div>
              Paylance
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-400">
              We make live streaming simple, engaging,
              <br />
              and growth-focused for creators
              <br />
              everywhere.
            </p>

            {/* EMAIL + SOCIAL */}
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/20 px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <Mail size={14} />
                <span className="truncate">support@streamia.co</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
                >
                  <X size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:pl-10">
            <h4 className="mb-4 text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Resources
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>Help Center</li>
              <li>Tutorials</li>
              <li>API Docs</li>
              <li>Community</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Contact
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>support@yourplatform.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
          <p>©2025, Streamia. All Rights reserved.</p>

          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms & Conditions</span>
            <span>|</span>
            <span>Help & Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
