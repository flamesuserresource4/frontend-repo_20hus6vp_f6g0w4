import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Decorative subtle grid */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 [background:radial-gradient(1250px_circle_at_50%_-200px,rgba(99,102,241,0.08),transparent_40%),linear-gradient(to_bottom,transparent,transparent_60%,rgba(0,0,0,0.04)_60%,rgba(0,0,0,0.04))]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="cta" className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-8 sm:p-12 shadow-sm">
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-2xl font-semibold tracking-tight">Start building today</h3>
                <p className="mt-2 text-gray-600">Create a workspace and ship something new in minutes. Free to try, no credit card required.</p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a href="#" className="inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-900">Create workspace</a>
                  <a href="#features" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.18)]">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
