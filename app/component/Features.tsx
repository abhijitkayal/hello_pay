'use client';

export default function Features() {
  const data = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 70 },
  { month: "Apr", value: 60 },
  { month: "May", value: 85 }, // highlighted bar
];
  return (
    <section className="relative bg-white px-4 sm:px-6 md:px-10 py-12 md:py-16" id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-600">
            Features
          </span>

          <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-slate-900 md:text-4xl">
            Powerful Features For
            <br />
            Simple Finances
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="p-6">
            <div className="mb-6 flex px-4 py-7 border border-slate-200  rounded-3xl justify-center">
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

                <div className="absolute bottom-0 right-5 h-6 w-10 rounded bg-white/20" />
              </div>
            </div>

            <h4 className="text-lg -mt-3 font-semibold text-slate-900">
              Multi-Currency Wallet
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              Secure multi-currency wallet for fast, effortless payments.
            </p>
          </div>

          {/* Card 2 */}
          <div className=" p-6">
            <div className="px-4 py-7 border border-slate-200 rounded-3xl">
            <div className="rounded-2xl p-4">
              <h5 className=" text-sm font-semibold text-slate-700">
                Recent Activity
              </h5>

              <div className="space-y-3 ">
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
            </div>

            <h4 className="text-lg mt-3 font-semibold text-slate-900">
              Instant Activity Updates
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              See every action—deposits, transfers, or setting changes—in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6">
            <div className="rounded-3xl border border-slate-200 pt-7 pl-7">
            <div className=" rounded-2xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Total Revenue</p>
              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
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

            <h4 className="text-lg  mt-2 font-semibold text-slate-900">
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
