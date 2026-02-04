'use client';

import Image from "next/image";
import logo from './download.jpg'

export default function Features() {
  const data = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 70 },
  { month: "Apr", value: 60 },
  { month: "May", value: 85 }, // highlighted bar
];
  return (
    <section className="relative bg-white px-2 sm:px-4 md:px-6 py-6 md:py-16" id="features">
      <div className="mx-auto max-w-full md:max-w-8xl px-1 sm:px-2 md:px-8">
        {/* Heading */}
        <div className="mb-6 md:mb-16 text-center">
          <span className="mb-2 md:mb-3 inline-block rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] text-yellow-300 px-3 py-1 text-[10px] sm:text-xs font-medium bg-black">
            Features
          </span>

          <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 lg:text-4xl">
            Powerful Features For
            <br />
            Simple Finances
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="p-3 sm:p-4 md:p-6 mx-auto max-w-md w-full">
            <div className="mb-6 flex px-6 py-7 border border-slate-200  rounded-3xl justify-center">
              <div className="relative h-40 w-72 sm:h-40 sm:w-74 md:h-44 md:w-72 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-3 sm:p-4 md:p-5 text-white shadow-lg">
                <p className="text-[10px] sm:text-xs opacity-80">Current Balance</p>
                <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">$12,345</h3>

                <div className="absolute bottom-4 left-5 text-xs opacity-80">
                  SAJIBUR RAHMAN
                </div>
                <div className="absolute bottom-4 right-5 text-xs opacity-80">
                  08/24
                </div>
                <div className="absolute bottom-1 left-5 text-xs tracking-widest opacity-80">
                  1234 1234 1234 1234
                </div>

                <div className="absolute bottom-0 right-5 h-6 w-10 rounded bg-white/20" />
              </div>
            </div>

            <h4 className="text-base sm:text-lg -mt-2 md:-mt-3 font-semibold text-slate-900">
              Multi-Currency Wallet
            </h4>
            <p className="mt-1 md:mt-2 text-xs sm:text-sm text-slate-500">
              Secure multi-currency wallet for fast, effortless payments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-3 sm:p-4 md:p-6 mx-auto max-w-md w-full">
            <div className="px-10 py-5 border border-slate-200 rounded-3xl">
            <div className="rounded-2xl p-4">
              <h5 className=" text-sm font-semibold mb-4 text-slate-700">
                Recent Activity
              </h5>

              <div className="space-y-3 ">
                {['Jane', 'Robert'].map((name, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {/* <div className="h-8 w-8 rounded-full bg-slate-300" /> */}
                     <Image
                  src={logo}
                  alt="Paylance Visual"
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-slate-300"
                  priority
                />
                    <div className="text-xs sm:text-sm">
                      <p className="font-medium text-slate-900">
                        {name} Updated account settings
                      </p>
                      <p className="text-xs text-slate-400">
                        15:0{i} am
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>

            <h4 className="text-base sm:text-lg mt-2 md:mt-3 font-semibold text-slate-900">
              Instant Activity Updates
            </h4>
            <p className="mt-1 md:mt-2 text-xs sm:text-sm text-slate-500">
              See every action—deposits, transfers, or setting changes—in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-3 sm:p-4 md:p-6 mx-auto max-w-md w-full">
            <div className="rounded-2xl md:rounded-3xl border border-slate-200 pt-4 pl-4 sm:pt-5 sm:pl-5 md:pt-7 md:pl-7">
            <div className="rounded-xl md:rounded-2xl bg-slate-50 p-3 md:p-4">
              <p className="text-[10px] sm:text-xs text-slate-500">Total Revenue</p>
              <h3 className="mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                $54,742
              </h3>
<div className="flex items-end gap-2 h-27">
      
      {/* Labels */}
      <div className="flex flex-col-reverse justify-between text-xs text-gray-400 h-full py-1">
        {data.map((item) => (
          <span key={item.month}>{item.month}</span>
        ))}
      </div>

      {/* Bars */}
      <div className="flex items-end gap-2 h-full flex-1">
        {data.map((item, index) => (
          <div
            key={item.month}
            className={`w-full rounded-lg transition-all
              ${index === data.length - 1
                ? "bg-blue-600"
                : "bg-blue-200"
              }
            `}
            style={{ height: `${item.value}%` }}
          />
        ))}
      </div>
</div>
    </div>
             
            </div>

            <h4 className="text-base sm:text-lg mt-2 font-semibold text-slate-900">
              Live Revenue Monitoring
            </h4>
            <p className="mt-1 md:mt-2 text-xs sm:text-sm text-slate-500">
              Track earnings in real time and gain insights for smarter decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
