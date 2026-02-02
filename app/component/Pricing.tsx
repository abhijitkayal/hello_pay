'use client';

import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="bg-white py-24" id='pricing'>
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-600">
            Pricing
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Pick A Plan To Manage
            <br />
            Your Money Smarter
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Starter Plan */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Starter Plan
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Perfect for personal use.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold text-slate-900">$0</span>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {[
                'Up to 100 transactions/month',
                'Basic security protection',
                'Email support',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full bg-black py-3 text-sm font-medium text-white shadow">
              Get Starter Plan
            </button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 p-8 text-white shadow-xl">
            <h3 className="text-lg font-semibold">
              Pro Plan
            </h3>
            <p className="mt-1 text-sm text-white/80">
              For growing users and advanced needs.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold">$19</span>
              <span className="text-sm opacity-80">/ month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                'Up to 500 transactions/month',
                'Enhanced security',
                'Detailed transaction reports',
                'Priority email & chat support',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-blue-600">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full bg-white py-3 text-sm font-medium text-slate-900 shadow">
              Get Pro Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Enterprise Plan
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              For high-volume business operations.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold text-slate-900">$29</span>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {[
                'Unlimited transactions',
                'Premium security & fraud protection',
                'Advanced transaction analytics',
                'Priority email & chat support',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full bg-black py-3 text-sm font-medium text-white shadow">
              Get Enterprise Plan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
