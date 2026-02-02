'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import logo from "../Screenshot_2026-02-02_085244-removebg-preview.png"

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          {/* Pill */}
          <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-1 text-xs font-medium text-gray-600">
            Testimonial
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-tight text-gray-900">
            Trusted By People <br /> Like You
          </h2>

          {/* Subtext */}
          <p className="mt-4 max-w-md text-gray-500">
            Thousands of users rely on us every day to manage their money with
            confidence and ease.
          </p>

          {/* Navigation */}
          <div className="mt-8 flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100">
              <ChevronLeft size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT TESTIMONIAL CARDS */}
        <div className="relative">

          {/* Background Card */}
          <div className="absolute right-10 top-16 w-[360px] rounded-2xl border border-gray-100 bg-white p-6 shadow-xl opacity-90">
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Star className="fill-yellow-400 text-yellow-400" size={16} />
              4.9/5
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              The analytics tools help me understand where my money goes. I feel
              more in control of my expenses.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Image
                src={logo}
                alt="Anika"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Anika</p>
                <p className="text-xs text-gray-500">Agency Business</p>
              </div>
            </div>
          </div>

          {/* Foreground Card */}
          <div className="relative z-10 w-[400px] rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                4.9/5
              </div>
              <span className="text-2xl text-gray-300">“</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Running a business means every financial decision matters. This
              platform gives me real-time insights into cash flow and spending,
              helping me plan ahead with confidence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Image
                src={logo}
                alt="Cody Lee"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Cody Lee</p>
                <p className="text-xs text-gray-500">
                  Vice President, Virginie
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
