'use client';

export default function Features() {
  return (
    <section className="relative bg-white py-24 px-10" id="features">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-600">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Powerful Features For
            <br />
            Simple Finances
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="mb-6 flex justify-center">
              <div className="relative h-44 w-72 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-5 text-white shadow-lg">
                <p className="text-xs opacity-80">Current Balance</p>
                <h3 className="mt-1 text-2xl font-semibold">$12,345</h3>

                <div className="absolute bottom-4 left-5 text-xs opacity-80">
                  SAJIBUR RAHMAN
                </div>
                <div className="absolute bottom-4 right-5 text-xs opacity-80">
                  08/24
                </div>
                <div className="absolute bottom-1 left-5 text-xs tracking-widest opacity-80">
                  1234 1234 1234 1234
                </div>

                <div className="absolute bottom-3 right-5 h-6 w-10 rounded bg-white/20" />
              </div>
            </div>

            <h4 className="text-lg font-semibold text-slate-900">
              Multi-Currency Wallet
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              Secure multi-currency wallet for fast, effortless payments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="mb-6 rounded-2xl bg-slate-50 p-4">
              <h5 className="mb-4 text-sm font-semibold text-slate-700">
                Recent Activity
              </h5>

              <div className="space-y-4">
                {['Jane', 'Robert'].map((name, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-300" />
                    <div className="text-sm">
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

            <h4 className="text-lg font-semibold text-slate-900">
              Instant Activity Updates
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              See every action—deposits, transfers, or setting changes—in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="mb-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Total Revenue</p>
              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                $54,742
              </h3>

              <div className="flex items-end gap-2">
                {['40%', '55%', '65%', '50%', '80%'].map((height, i) => (
                  <div
                    key={i}
                    className={`w-6 rounded-md ${
                      i === 4 ? 'bg-blue-600' : 'bg-blue-200'
                    }`}
                    style={{ height }}
                  />
                ))}
              </div>
            </div>

            <h4 className="text-lg font-semibold text-slate-900">
              Live Revenue Monitoring
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              Track earnings in real time and gain insights for smarter decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
