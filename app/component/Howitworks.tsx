'use client';

import { UserPlus, Wallet, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-24" id='howitworks'>
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Manage Finances In
            <br />
            Just A Few Steps
          </h2>
        </div>

        {/* Steps Container */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">

            {/* Step 01 */}
            <div className="relative p-10">
              <span className="absolute right-6 top-6 text-5xl font-bold text-slate-200">
                01
              </span>

              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <UserPlus size={20} />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Sign Up
              </h3>
              <p className="text-sm text-slate-500">
                Create your account in just 2 minutes with a simple, hassle-free
                signup process.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative p-10">
              <span className="absolute right-6 top-6 text-5xl font-bold text-slate-200">
                02
              </span>

              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Wallet size={20} />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Connect Bank / Wallet
              </h3>
              <p className="text-sm text-slate-500">
                Securely link your bank or wallet in one click for safe
                transactions.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative p-10">
              <span className="absolute right-6 top-6 text-5xl font-bold text-slate-200">
                03
              </span>

              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BarChart3 size={20} />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Start Tracking & Managing
              </h3>
              <p className="text-sm text-slate-500">
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
