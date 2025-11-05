import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">Emergent</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition">Features</a>
            <a href="#showcase" className="text-gray-700 hover:text-gray-900 transition">Showcase</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900">Get started</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-gray-100">Features</a>
              <a href="#showcase" className="rounded-md px-3 py-2 hover:bg-gray-100">Showcase</a>
              <a href="#pricing" className="rounded-md px-3 py-2 hover:bg-gray-100">Pricing</a>
              <div className="pt-2 flex items-center gap-3">
                <a href="#" className="text-gray-700">Sign in</a>
                <a href="#cta" className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900">Get started</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
