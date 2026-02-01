export default function Home() {
  return (
    <section>
      <nav className="flex justify-between items-center bg-blue-500 ml-10 rounded-xl w-300 h-10">
        <div>
          <h1>paylance</h1>
        </div>
        <div >
          <ol className="flex justify-between gap-5  ">
            <li className="">HOME</li>
            <li className="">FEATURE</li>
            <li className="">How It Works</li>
            <li className="">Pricing</li>
            </ol>
        </div>
        <div>
          <button>Get Started</button>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="text-2xl font-semibold leading-tight text-slate-900 md:text-5xl">Send & Receive Money Instantly<br/> Secure Simple Global</h1>
        <p className="text-gray-600">Manage spending, track income, and stay on top of your <br/>finances with ease - all from one simple dashboard</p>
      </div>
      <div className="flex items-center justify-center rounded-xl">
        <input type="email" placeholder="Enter Your Email" className="border"/>
        <button>Get Started</button>
      </div>
      <div className="relative mx-auto mt-0 h-[600px] max-w-6xl">

      {/* ================= PHONE ================= */}
      <div className="absolute left-1/2 top-1/2 z-20 h-[560px] w-[280px] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-full w-full rounded-[48px] border-[6px] border-slate-900 bg-black shadow-2xl">

          {/* Notch */}
          <div className="absolute left-1/2 top-1 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="absolute inset-2 rounded-[40px] bg-white">

            {/* Header */}
            <div className="flex items-center justify-between text-sm font-medium text-slate-700">
              <span>←</span>
              <span className="font-semibold text-slate-900">Activity</span>
              <span>⋯</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              <button className="rounded-full bg-slate-900 px-4 py-1.5 text-xs text-white">
                Daily
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-1.5 text-xs text-slate-600">
                Weekly
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-1.5 text-xs text-slate-600">
                Monthly
              </button>
            </div>

            {/* Bars */}
            <div className="flex h-60 items-end gap-0">
              {["55%", "40%", "75%", "45%", "50%"].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 ${
                    i === 2 ? "bg-blue-500" : "bg-slate-200"
                  }`}
                  style={{ height: h }}
                />
              ))}
            </div>
            
            {/* Days */}
            <div className="flex justify-between text-xs text-slate-500">
              <p>Sun</p>
              <p>Mon</p>
              <p>Tue</p>
              <p>Wed</p>
              <p>Thu</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LEFT CARD (CHART) ================= */}
      <div className="absolute right-[calc(50%+90px)] top-1/2 -translate-y-1/2 z-30 w-72 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
          <span>Day</span>
          <span>Week</span>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-white">
            Month
          </span>
          <span>Year</span>
        </div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">+10.6K$</h3>

        <svg viewBox="0 0 280 90" className="h-24 w-full">
          <defs>
            <linearGradient id="chart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 Q 40 50 80 55 T 160 40 T 240 30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          <path
            d="M0 60 Q 40 50 80 55 T 160 40 T 240 30 L240 90 L0 90 Z"
            fill="url(#chart)"
          />
        </svg>

        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>

      {/* ================= RIGHT CARD (ACCOUNTS) ================= */}
      <div className="absolute left-[calc(52%+90px)] top-1/2 -translate-y-1/2 z-30 w-72 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
        {/* <h4 className="mb-4 font-semibold text-slate-900">
          All Credit Cards
        </h4> */}

        <div className="space-y-2">
          {[
            ["New Account", "$845.00", "bg-blue-500"],
            ["Current Account", "$250.00", "bg-purple-500"],
            ["Savings Account", "$220.00", "bg-green-400"],
          ].map(([name, value, color], i) => (
            <div key={i} className="flex items-center justify-between -ml-4">
              <div className="flex items-center gap-1">
                <div className={`h-9 w-9 rounded-full ${color}`} />
                <span className="text-sm text-slate-900 whitespace-nowrap">
                  {name}
                </span>
              </div>
              <span className="text-sm font-semibold text-slate-900">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}