import { Shield, Code, Server, Lock, Cpu, Cloud, Database, Award } from 'lucide-react';

export default function AboutSkills() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Background circuit/flow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(59,130,246,0.08),transparent),radial-gradient(700px_400px_at_90%_10%,rgba(168,85,247,0.08),transparent)]" />
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0.06)_26%,transparent_27%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0.06)_26%,transparent_27%)] bg-[length:42px_42px]" />
      </div>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* About */}
        <div className="relative lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-500/10 ring-1 ring-blue-500/30">
              <Shield className="h-5 w-5 text-blue-300" />
            </span>
            <h2 className="text-xl font-semibold tracking-tight text-white">About Me</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            I’m a cybersecurity specialist and full‑stack developer focused on building resilient systems with elegant, fluid interfaces. My approach blends
            threat‑led architecture, secure defaults, and product craftsmanship. I love translating complex security into calm, intuitive user experiences.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/80">
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2 inline-flex items-center gap-2"><Lock className="h-4 w-4 text-emerald-300" /> AppSec & Threat Modeling</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2 inline-flex items-center gap-2"><Server className="h-4 w-4 text-emerald-300" /> API Design & Observability</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2 inline-flex items-center gap-2"><Code className="h-4 w-4 text-emerald-300" /> Frontend Performance</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2 inline-flex items-center gap-2"><Cpu className="h-4 w-4 text-emerald-300" /> Cloud & CI/CD Hardening</li>
          </ul>
        </div>

        {/* Skills + Certifications */}
        <div className="relative lg:col-span-3 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-violet-500/10 ring-1 ring-violet-500/30">
                <Code className="h-5 w-5 text-violet-300" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-white">Technical Skills</h2>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Skill name="Frontend (React, Vite, Tailwind)" level={90} icon={<Code className='h-4 w-4 text-emerald-300' />} />
              <Skill name="Backend (FastAPI, Node)" level={88} icon={<Server className='h-4 w-4 text-emerald-300' />} />
              <Skill name="Security (OAuth2, mTLS, IAM)" level={92} icon={<Lock className='h-4 w-4 text-emerald-300' />} />
              <Skill name="Cloud & Infra (Docker, k8s)" level={85} icon={<Cloud className='h-4 w-4 text-emerald-300' />} />
              <Skill name="Data (MongoDB, Postgres)" level={82} icon={<Database className='h-4 w-4 text-emerald-300' />} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
                <Award className="h-5 w-5 text-emerald-300" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-white">Certifications</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Cert name="CompTIA Security+" issuer="CompTIA" year="2023" />
              <Cert name="AWS Certified Cloud Practitioner" issuer="Amazon Web Services" year="2022" />
              <Cert name="Certified Kubernetes Application Developer" issuer="CNCF" year="2021" />
              <Cert name="Certified Ethical Hacker (CEH)" issuer="EC‑Council" year="2020" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ name, level, icon }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-white/80">
        <div className="inline-flex items-center gap-2">
          <span className="text-emerald-300">{icon}</span>
          <span>{name}</span>
        </div>
        <span className="text-white/60">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function Cert({ name, issuer, year }) {
  return (
    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <span className="rounded-md bg-emerald-400/20 px-2 py-0.5 text-xs text-emerald-200 ring-1 ring-emerald-400/30">{year}</span>
      </div>
      <p className="mt-1 text-xs text-white/70">{issuer}</p>
    </div>
  );
}
