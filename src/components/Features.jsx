import { Code2, Zap, Shield, Layers } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Unified workspace',
    desc: 'Design, code, run and iterate without switching tools or context.'
  },
  {
    icon: Zap,
    title: 'AI-native flow',
    desc: 'Move from idea to implementation with assisted generation and edits.'
  },
  {
    icon: Shield,
    title: 'Reliable by default',
    desc: 'Typed schemas, previews and checks keep your product stable as it grows.'
  },
  {
    icon: Layers,
    title: 'Composable building blocks',
    desc: 'Ship faster with reusable primitives and production-ready templates.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">A cohesive environment with the right guardrails and the right amount of magic.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
