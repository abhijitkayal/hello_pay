'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import logo from "../Screenshot_2026-02-02_085244-removebg-preview.png"

const testimonials = [
  {
    id: 1,
    rating: 4.9,
    text: "Running a business means every financial decision matters. This platform gives me real-time insights into cash flow and spending, helping me plan ahead with confidence.",
    name: "Cody Lee",
    role: "Vice President, Virginie",
    image: logo
  },
  {
    id: 2,
    rating: 4.9,
    text: "The analytics tools help me understand where my money goes. I feel more in control of my expenses.",
    name: "Anika",
    role: "Agency Business",
    image: logo
  },
  {
    id: 3,
    rating: 5.0,
    text: "This app has completely transformed how I manage my finances. The interface is intuitive and the features are exactly what I needed.",
    name: "Michael Chen",
    role: "Freelance Designer",
    image: logo
  },
  {
    id: 4,
    rating: 4.8,
    text: "I love how easy it is to track my spending and set budgets. The automated insights save me so much time every month.",
    name: "Sarah Williams",
    role: "Marketing Manager",
    image: logo
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getCurrentCard = () => testimonials[currentIndex];
  const getBackgroundCard = () => testimonials[(currentIndex + 1) % testimonials.length];
  
  return (
    <section className="w-full bg-gray-200 mt-50 md:mt-10 px-4 sm:px-8 md:px-14 py-12 md:py-24 h-100 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:gap-16 px-4 sm:px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className='text-center -mt-60 lg:text-left'>
          {/* Pill */}
          <span className="mb-4 inline-block rounded-full text-gray-100 px-4 py-1 text-xs font-medium bg-gray-600">
            Testimonial
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Trusted By People <br /> Like You
          </h2>

          {/* Subtext */}
          <p className="mt-4 max-w-md mx-auto lg:mx-0 text-gray-500 text-sm sm:text-base">
            Thousands of users rely on us every day to manage their money with
            confidence and ease.
          </p>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <button 
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100 active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT TESTIMONIAL CARDS */}
        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full max-w-md mx-auto lg:max-w-none">

          {/* Background Card (Next - Behind) */}
          <div 
            key={`bg-${getBackgroundCard().id}`}
            className={`absolute left-0 top-8 w-[280px] sm:w-[320px] md:w-[380px] rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-lg opacity-80 transition-all duration-1000 ease-in-out
              ${direction === 'right' ? 'animate-[slideInRight_1s_ease-in-out]' : 'animate-[slideInLeft_1s_ease-in-out]'}
            `}
          >
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <Star className="fill-yellow-400 text-yellow-400" size={16} />
              {getBackgroundCard().rating}/5
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {getBackgroundCard().text}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Image
                src={getBackgroundCard().image}
                alt={getBackgroundCard().name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{getBackgroundCard().name}</p>
                <p className="text-xs text-gray-500">{getBackgroundCard().role}</p>
              </div>
            </div>
          </div>

          {/* Foreground Card (Active - Overlapping 30% of next card) */}
          <div 
            key={`fg-${getCurrentCard().id}`}
            className={`absolute left-[calc(280px*0.3)] sm:left-[calc(320px*0.3)] md:left-[calc(380px*0.3)] top-0 z-20 w-[300px] sm:w-[340px] md:w-[420px] rounded-2xl border-2 border-blue-100 bg-white p-5 sm:p-6 md:p-7 shadow-2xl transition-all duration-1000 ease-in-out
              ${direction === 'right' ? 'animate-[slideInFromLeft_1s_ease-in-out]' : 'animate-[slideInFromRight_1s_ease-in-out]'}
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-700">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                {getCurrentCard().rating}/5
              </div>
              <span className="text-xl sm:text-2xl text-gray-300">"</span>
            </div>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
              {getCurrentCard().text}
            </p>

            <div className="mt-4 sm:mt-6 flex items-center gap-3">
              <Image
                src={getCurrentCard().image}
                alt={getCurrentCard().name}
                width={44}
                height={44}
                className="rounded-full w-10 h-10 sm:w-11 sm:h-11"
              />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">{getCurrentCard().name}</p>
                <p className="text-xs text-gray-500">
                  {getCurrentCard().role}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
