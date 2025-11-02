import Spline from '@splinetool/react-spline';
import { Shield, Lock, Code, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative isolate pt-24">
      {/* Ambient liquid glow and HUD grid (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[900px] w-[1400px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-[700px] w-[900px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%)] bg-[length:40px_40px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          className="relative z-10 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <Shield className="h-3.5 w-3.5" />
            Cybersecurity • Full‑Stack
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Liquid‑smooth experiences with security at the core
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            I design and build immersive interfaces and resilient backends. From threat‑led architecture to pixel‑perfect UI, my work blends security and craft.
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
        </motion.div>

        {/* Liquid orb + HUD container */}
        <motion.div
          className="relative h-[560px] w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-[0_30px_120px_-20px_rgba(16,185,129,0.25)]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          {/* 3D liquid orb */}
          <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* HUD rings and gloss overlays (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -left-1/3 -top-1/3 h-[480px] w-[480px] rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute -right-1/4 -bottom-1/4 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]">
              <div className="absolute -inset-1 rounded-full border border-white/10" />
              <div className="absolute inset-10 rounded-full border border-white/10" />
              <div className="absolute inset-20 rounded-full border border-white/10" />
            </div>
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-30" />
          </div>
        </motion.div>
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
