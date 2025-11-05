import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
              <Sparkles size={14} className="text-fuchsia-600" />
              <span>Next‑gen AI coding workspace</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Build software at the speed of thought
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-gray-600">
              An intelligent environment that turns ideas into running products. Design, code and ship in one place with realtime previews and AI assistance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-900">
                Start free
                <ArrowRight size={16} />
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.18)]">
                View showcase
              </a>
            </div>
            <div className="mt-6 text-xs text-gray-500">No credit card required</div>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
              {/* Simulated editor preview */}
              <div className="flex h-10 items-center gap-2 border-b border-black/5 bg-gray-50 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-gray-500">/src/App.jsx</span>
              </div>
              <div className="grid grid-cols-12 h-[calc(100%-40px)]">
                <div className="col-span-5 hidden md:block border-r border-black/5 bg-gray-50 p-4">
                  <div className="mb-2 h-3 w-24 rounded bg-gray-200" />
                  <div className="mb-4 h-3 w-40 rounded bg-gray-200" />
                  <div className="space-y-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="h-2.5 w-full rounded bg-gray-200" />
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7 p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                    <p className="mt-4 text-sm text-gray-600">Live preview updates as you type</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
