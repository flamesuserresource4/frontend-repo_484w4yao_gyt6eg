import { Shield, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'VulnTracker — Asset & Vulnerability Dashboard',
    description:
      'Full‑stack dashboard that ingests SBOMs and scanner feeds, correlates CVEs by asset criticality, and surfaces remediation SLAs with role‑based access.',
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
      'Curated Sigma rules and Python pipelines that normalize logs and surface suspicious behavior with explainable scoring.',
    tags: ['Sigma', 'Python', 'ELK', 'Detections'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
          <Shield className="h-5 w-5 text-emerald-400" />
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Highlighted Projects</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
            <h3 className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a href={p.link} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
                <Github className="h-3.5 w-3.5" /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
