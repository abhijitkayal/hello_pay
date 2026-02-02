import React from 'react'
import logo from '../Screenshot_2026-02-02_085244-removebg-preview.png';
import Image from 'next/image';
const Hero = () => {

      const blurStyle = {
          filter: 'blur(100px)',
          transform: 'translateZ(0)',
      };
      
        return (
          <section
            className="relative min-h-screen overflow-hidden
        bg-gradient-to-r from-[#cfe7ff] via-[#f3f8ff] to-white"
          >
            {/* Radial background glow */}
           <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-[250px] -left-[250px]
            w-[700px] h-[700px] rounded-full
            bg-[radial-gradient(circle_at_center,#5fa8ff_0%,#8cc7ff_30%,#cfe7ff_55%)]
            blur-[80px]"
          />
            <div
          className="absolute -top-[200px] -right-[250px]
          w-[700px] h-[700px] rounded-full
          bg-[radial-gradient(circle_at_center,#FFD233_0%,#FFD233_30%,#FFD233_55%,transparent_70%)]
          blur-[80px]"
        />
        </div>
      
            <div className="relative z-10">
      
              {/* NAVBAR */}
              <nav className="flex justify-between items-center
                mx-10 mt-4 rounded-xl px-6 h-14 
                bg-white/70 backdrop-blur-xl shadow-sm">
      
                <div className="flex items-center gap-2">
                  <Image
                    src={logo}
                    alt="Paylance Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                    priority
                  />
                  <h1 className="font-semibold text-slate-900">Paylance</h1>
                </div>
      
                <ol className="flex gap-6 text-slate-700 font-medium">
                  {/* <li>Home</li> */}
                  <a href='#'>Home</a>
                  {/* <li>Feature</li> */}
                  <a href='#features'>Features</a>
                  {/* <li>How It Works</li> */}
                  <a href='#howitworks'>How It Works</a>
                  {/* <li>Pricing</li> */}
                  <a href='#pricing'>Pricing</a>
                </ol>
      
                <button className="bg-black text-white px-4 py-2 rounded-full">
                  Get Started
                </button>
              </nav>
      
              {/* HERO TEXT */}
              <div className="text-center mt-20">
                <h1 className="text-2xl font-semibold leading-tight text-slate-900 md:text-5xl">
                  Send & Receive Money Instantly
                  <br /> Secure Simple Global
                </h1>
      
                <p className="mt-4 text-gray-600">
                  Manage spending, track income, and stay on top of your
                  <br /> finances with ease – all from one simple dashboard
                </p>
              </div>
      
              {/* EMAIL */}
              <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-white px-2 py-2 shadow-lg">
          <input
            type="email"
            placeholder="Your email address"
            className="w-56 rounded-full px-4 py-2 text-sm outline-none"
          />
          <button className="flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm text-white shadow">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
              ▶
            </span>
            Get Started
          </button>
        </div>
      
              {/* IMAGE */}
              <div className="relative flex justify-center h-[600px] max-w-6xl mx-auto">
                <Image
                  src={logo}
                  alt="Paylance Visual"
                  className="object-contain -mt-60"
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
