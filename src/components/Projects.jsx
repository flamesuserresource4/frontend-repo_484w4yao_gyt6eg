import { ExternalLink, Github, TerminalSquare, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'VulnTracker — Asset & Vulnerability Dashboard',
    description:
      'Ingests SBOMs and scanner feeds, correlates CVEs by asset criticality, and surfaces remediation SLAs with role‑based access.',
    tags: ['React', 'FastAPI', 'MongoDB', 'RBAC'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Zero‑Trust Auth Gateway',
    description:
      'Edge service implementing mTLS, short‑lived tokens, and device posture checks. Hardened headers and anomaly detection baked‑in.',
    tags: ['OAuth2', 'mTLS', 'Rate‑limit', 'OpenTelemetry'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Threat Hunting Playbooks',
    description:
      'Sigma rules and Python pipelines that normalize logs and surface suspicious behavior with explainable scoring.',
    tags: ['Sigma', 'Python', 'ELK', 'Detections'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      alert('Thanks! Your message has been staged. In a real deployment this would post to an API.');
    }, 800);
  };

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
          <TerminalSquare className="h-5 w-5 text-emerald-400" />
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Cyber Terminal — Projects</h2>
      </div>

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-black/60 to-black/30 shadow-[0_0_60px_-10px_rgba(16,185,129,0.35)]"
      >
        {/* terminal chrome */}
        <div className="flex items-center justify-between border-b border-emerald-400/20 bg-black/40 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-emerald-200/80">/usr/bin/portfolio — zsh</span>
          </div>
          <div className="text-xs text-emerald-200/60">secure · interactive · fast</div>
        </div>

        {/* code-like listings */}
        <div className="relative p-4 font-mono text-sm">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_-10%,rgba(16,185,129,0.08),transparent),radial-gradient(600px_300px_at_80%_110%,rgba(59,130,246,0.08),transparent)]" />
          <pre className="whitespace-pre-wrap leading-relaxed text-emerald-200/90">
$ ls -la ./projects
{projects.map((p, idx) => `#${idx + 1} ${p.title}\n  → ${p.description}\n  tags: [${p.tags.join(', ')}]\n`).join('\n')}

$ echo "hover to inspect, click to view"
          </pre>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -4, boxShadow: '0 20px 60px -15px rgba(34,197,94,0.35)' }}
                className="group relative overflow-hidden rounded-xl border border-emerald-400/30 bg-gradient-to-b from-emerald-400/10 to-transparent p-4"
              >
                <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">{p.title}</h3>
                <p className="mt-2 text-[13px] text-emerald-100/80">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-100/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1.5 text-xs text-emerald-100 hover:bg-emerald-400/15">
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1.5 text-xs text-emerald-100 hover:bg-emerald-400/15">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute -inset-20 bg-[radial-gradient(closest-side,rgba(16,185,129,0.26),transparent)]" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact form CTA */}
      <div id="contact" className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <h3 className="text-lg font-medium text-white">Let’s collaborate</h3>
          <p className="mt-2 text-sm text-white/70">
            Tell me about your goals. I’ll respond with a secure, pragmatic plan of attack.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com?subject=Project%20Inquiry%20—%20Cyber%20%26%20Full‑Stack"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500/90"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-400/10 to-transparent p-6">
          <h3 className="text-lg font-medium text-white">Contact form</h3>
          <div className="mt-4 grid gap-4">
            <input required name="name" placeholder="Your name" className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <input required type="email" name="email" placeholder="Your email" className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <textarea required name="message" rows={4} placeholder="Project details, timeline, budget..." className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/40" />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500/90 disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
}
