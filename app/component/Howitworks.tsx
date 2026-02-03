'use client';

import { UserPlus, Wallet, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-8 md:py-10 px-4 sm:px-6" id='howitworks'>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="mb-3 inline-block rounded-full text-slate-100 px-4 py-1 text-xs font-medium bg-slate-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-0 text-2xl sm:text-3xl font-semibold text-slate-900 md:text-4xl">
            Manage Finances In
            <br />
            Just A Few Steps
          </h2>
        </div>

        {/* Steps Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y sm:grid-cols-2 md:grid-cols-3 sm:divide-x md:divide-y-0">

            {/* Step 01 */}
            <div className="relative p-6 sm:p-8 md:p-10">
              <span className="top-4 sm:top-6 text-4xl sm:text-5xl font-bold text-slate-200">
                01
              </span>

              <div className="mb-4 -mt-6 ml-1 sm:mb-6 flex h-10 w-10 items-center justify-center rounded-xl  text-black">
                <UserPlus size={20} />
              </div>

              <h3 className="mb-2 text-base sm:text-lg font-semibold text-slate-900">
                Sign Up
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Create your account in just 2 minutes with a simple, hassle-free
                signup process.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative p-6 sm:p-8 md:p-10">
              <span className=" top-4 sm:top-6 text-4xl sm:text-5xl font-bold text-slate-200">
                02
              </span>

              <div className="mb-4 sm:mb-6 flex h-10 w-10 items-center justify-center rounded-xl -mt-6 ml-1 text-black">
                <Wallet size={20} />
              </div>

              <h3 className="mb-2 text-base sm:text-lg font-semibold text-slate-900">
                Connect Bank / Wallet
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Securely link your bank or wallet in one click for safe
                transactions.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative p-6 sm:p-8 md:p-10">
              <span className=" sm:top-6 text-4xl sm:text-5xl font-bold text-slate-200">
                03
              </span>

              <div className="mb-4 sm:mb-6 flex h-10 w-10 items-center justify-center rounded-xl  text-black -mt-6 ml-1">
                <BarChart3 size={20} />
              </div>

              <h3 className="mb-2 text-base sm:text-lg font-semibold text-slate-900">
                Start Tracking & Managing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Get a clear view of all your finances in one smart, easy-to-use
                dashboard.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
