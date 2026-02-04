'use client';

import React, { useState } from 'react'
import logo from '../Screenshot_2026-02-02_085244-removebg-preview.png';
import logo1 from '../hellope_financial_services_private_limited_logo-modified.png'
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

      const blurStyle = {
          filter: 'blur(100px)',
          transform: 'translateZ(0)',
      };
      
        return (
         <section
  className="relative overflow-hidden h-auto md:h-[690px] w-full
  bg-gradient-to-r from-[#cfe7ff] via-[#f3f8ff] to-white"
>

            {/* Radial background glow */}
          <div className="absolute inset-0 pointer-events-none">
  
  {/* 🔵 Blue radial gradient */}
  <div
    className="
      absolute
      -top-[180px] -left-[180px]
      w-[420px] h-[420px]
      bg-[radial-gradient(circle_at_center,#5fa8ff_0%,#8cc7ff_30%,#cfe7ff_55%)]
      rounded-full blur-[70px]

      sm:-top-[220px] sm:-left-[220px]
      sm:w-[520px] sm:h-[520px]

      md:-top-[250px] md:-left-[250px]
      md:w-[700px] md:h-[700px]
      md:blur-[80px]
    "
  />

  {/* 🟡 Yellow radial gradient */}
  <div
    className="
      absolute
      -top-[160px] -right-[180px]
      w-[420px] h-[420px]
      bg-[radial-gradient(circle_at_center,#FFD233_0%,#FFD233_30%,#FFD233_55%,transparent_70%)]
      rounded-full blur-[70px]

      sm:-top-[190px] sm:-right-[220px]
      sm:w-[520px] sm:h-[520px]

      md:-top-[200px] md:-right-[250px]
      md:w-[700px] md:h-[700px]
      md:blur-[80px]
    "
  />

</div>

      
            <div className="relative z-10">
      
              {/* NAVBAR */}
              <nav className="flex justify-between items-center
                mx-4 sm:mx-8 md:mx-20 mt-4 rounded-3xl px-4 sm:px-6 h-13 
                bg-white/70 backdrop-blur-xl shadow-sm ">
      
                <div className="flex items-center md:-ml-4 gap-2">
                  <Image
                    src={logo1}
                    alt="Paylance Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                    priority
                  />
                  <h1 className="font-semibold text-slate-900">HelloPe</h1>
                </div>
      
                {/* Desktop Navigation */}
                <ol className="hidden md:flex gap-6 text-slate-700 font-medium">
                  <a href='#' className="hover:text-blue-600 transition">Home</a>
                  <a href='#features' className="hover:text-blue-600 transition">Features</a>
                  <a href='#howitworks' className="hover:text-blue-600 transition">How It Works</a>
                  <a href='#pricing' className="hover:text-blue-600 transition">Pricing</a>
                </ol>
      
                <button className="hidden md:flex items-center gap-1 rounded-full -mr-4.5
    bg-gradient-to-b from-[#484e57] via-[#2b333a] to-[#111827]
    px-2 py-2 text-sm font-medium text-gray-50
    shadow-[0_8px_20px_rgba(0,0,0,0.35)]
    transition hover:brightness-110">
                  <span className="flex h-6 w-6  items-center justify-center rounded-full text-xs">
                    ▶
                  </span>
                  Get Started
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                  onClick={toggleMenu}
                  className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </nav>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-4 right-4 z-50 rounded-xl bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200">
                  <div className="flex flex-col p-6 space-y-4">
                    <a 
                      href='#' 
                      onClick={closeMenu}
                      className="text-slate-700 font-medium hover:text-blue-600 transition py-2"
                    >
                      Home
                    </a>
                    <a 
                      href='#features' 
                      onClick={closeMenu}
                      className="text-slate-700 font-medium hover:text-blue-600 transition py-2"
                    >
                      Features
                    </a>
                    <a 
                      href='#howitworks' 
                      onClick={closeMenu}
                      className="text-slate-700 font-medium hover:text-blue-600 transition py-2"
                    >
                      How It Works
                    </a>
                    <a 
                      href='#pricing' 
                      onClick={closeMenu}
                      className="text-slate-700 font-medium hover:text-blue-600 transition py-2"
                    >
                      Pricing
                    </a>
                    <button className="
    flex items-center gap-1 rounded-full
    bg-gradient-to-b from-[#484e57] via-[#2b333a] to-[#111827]
    px-2 py-2 text-sm font-medium text-gray-50
    shadow-[0_8px_20px_rgba(0,0,0,0.35)]
    transition hover:brightness-110
  "
>
  <span className="flex h-5 w-5 items-center justify-center rounded-full text-xs">
    ▶
  </span>
  Get Started
</button>
                  </div>
                </div>
              )}
      
              {/* HERO TEXT */}
              <div className="text-center mt-0 md:mt-20 px-4">
                <h1 className="text-3xl md:text-5xl font-inter md:-mt-15 font-semibold leading-tight text-slate-900 ">
                  Send & Receive Money Instantly
                  <br /> Secure Simple Global
                </h1>
      
                <p className="mt-4 text-sm md:text-base md:mt-1 text-gray-600 px-4">
                  Manage spending, track income, and stay on top of your
                  <br className="hidden sm:block" /> finances with ease – all from one simple dashboard
                </p>
              </div>
      
              {/* EMAIL */}
              <div className="mx-auto mt-6 md:mt-4 flex w-fit items-center gap-2 rounded-full bg-white px-2 py-2 shadow-lg max-w-[90%] sm:max-w-none">
          <input
            type="email"
            placeholder="Your email address"
            className="w-32 sm:w-56 rounded-full px-4 py-2 text-sm outline-none"
          />
          <button
  className="
    flex items-center gap-1 rounded-full
    bg-gradient-to-b from-[#484e57] via-[#2b333a] to-[#111827]
    px-2 py-2 text-sm font-medium text-gray-50
    shadow-[0_8px_20px_rgba(0,0,0,0.35)]
    transition hover:brightness-110
  "
>
  <span className="flex h-5 w-5 items-center justify-center rounded-full  text-xs">
    ▶
  </span>
  Get Started
</button>

        </div>
      
              {/* IMAGE */}
              <div className="relative flex mt-10 md:mt-0 justify-center h-[200px] sm:h-[300px] md:h-[600px] max-w-6xl mx-auto pb-0 mb-0">
                <Image
                  src={logo}
                  alt="Paylance Visual"
                  className="object-contain -mt-10 sm:-mt-18 md:-mt-60"
                  priority
                />
              </div>
      
            </div>
             {/* <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0">
                      <div
                          className="absolute top-[-100px] left-[-300px] w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-blue-800 via-blue-400 to-black via-transparent to-transparent"
                          style={blurStyle}
                      />
                      <div
                          className="absolute top-[-100px] right-[-300px] w-[1200px] h-[500px] rounded-full bg-gradient-to-tl from-yellow-500 via-transparent to-transparent"
                          style={blurStyle}
                      />
                  </div> */}
          </section>

  )
}

export default Hero
