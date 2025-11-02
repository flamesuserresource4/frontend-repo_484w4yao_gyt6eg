import Spline from '@splinetool/react-spline';
import { Shield, Lock, Code, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10 py-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <Shield className="h-3.5 w-3.5" />
            Cybersecurity • Full‑Stack
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building secure, modern, and scalable web experiences
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            I’m a cybersecurity and full‑stack enthusiast focused on crafting resilient systems and elegant UIs. I combine offensive/defensive security insights with end‑to‑end development to ship products you can trust.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500/90">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
              Contact Me
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:max-w-lg">
            <Feature icon={<Lock className="h-4 w-4" />} title="AppSec mindset" desc="Threat‑led architecture & secure defaults" />
            <Feature icon={<Server className="h-4 w-4" />} title="API first" desc="Robust backends with clean contracts" />
            <Feature icon={<Code className="h-4 w-4" />} title="Front‑end polish" desc="Fast, accessible, responsive UI" />
            <Feature icon={<Shield className="h-4 w-4" />} title="Blue/Red blend" desc="Security across the SDLC" />
          </dl>
        </div>

        <div className="relative h-[520px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
      <div className="mt-0.5 text-emerald-300">{icon}</div>
      <div>
        <dt className="text-sm font-medium text-white">{title}</dt>
        <dd className="text-xs text-white/60">{desc}</dd>
      </div>
    </div>
  );
}
