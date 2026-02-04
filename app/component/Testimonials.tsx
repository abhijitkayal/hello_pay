'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import logo from "./download.jpg"

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
  const [cards, setCards] = useState(testimonials);

  const handleNext = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  const handlePrev = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!);
      return newArray;
    });
  };
  
  return (
    <section className="w-full bg-gray-200 mt-6 md:mt-10 px-3 sm:px-4 md:px-8 lg:px-14 py-8 md:py-16 lg:py-24">
      <div className="mx-auto -ml-0.5 grid max-w-full md:max-w-7xl grid-cols-1 items-center gap-6 md:gap-12 lg:gap-16 px-2 sm:px-4 md:px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className='text-center lg:text-left'>
          {/* Pill */}
          <span className="mb-2 md:mb-3 inline-block rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] text-yellow-300 px-3 py-1 text-[10px] sm:text-xs font-medium bg-black">
            Testimonial
          </span>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug md:leading-tight text-gray-900">
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

        {/* RIGHT CARD STACK */}
        <div className="relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[350px] w-full max-w-full sm:max-w-md mx-auto lg:max-w-none flex items-start justify-center mt-6 lg:mt-0">
          <div className="relative h-56 sm:h-64 md:h-64 w-full max-w-[280px] md:-mr-57 sm:max-w-sm">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="absolute left-0 top-0 flex h-56 sm:h-64 md:h-64 w-full flex-col justify-between rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-4 sm:p-5 shadow-xl transition-all duration-500 ease-out"
                style={{
                  transformOrigin: 'top center',
                  transform: `translateY(${index * -10}px) scale(${1 - index * 0.05})`,
                  zIndex: cards.length - index,
                  opacity: index < 3 ? 1 - index * 0.2 : 0,
                  pointerEvents: index === 0 ? 'auto' : 'none',
                }}
              >
                <div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-700">
                    <Star className="fill-yellow-400 text-yellow-400" size={14} />
                    {card.rating}/5
                  </div>

                  <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs leading-relaxed text-gray-600">
                    {card.text}
                  </p>
                </div>

                <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={36}
                    height={36}
                    className="rounded-full w-9 h-9 sm:w-11 sm:h-11"
                  />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">{card.name}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">{card.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
