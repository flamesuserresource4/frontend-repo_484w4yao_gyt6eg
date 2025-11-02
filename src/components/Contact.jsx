import { Mail, Github, Linkedin, Shield } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
          <Shield className="h-5 w-5 text-emerald-400" />
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Get in touch</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <h3 className="text-lg font-medium text-white">Let’s build something secure</h3>
          <p className="mt-2 text-sm text-white/70">
            Whether it’s hardening an existing product or shipping a new full‑stack app with security by design, I’d love to collaborate.
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
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <h3 className="text-lg font-medium text-white">Focus areas</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-2">
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Secure architecture & threat modeling</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">API design, auth, and observability</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Frontend performance & accessibility</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Cloud hardening & CI/CD security</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Cybersecurity & Full‑Stack Enthusiast. All rights reserved.
      </p>
    </section>
  );
}
