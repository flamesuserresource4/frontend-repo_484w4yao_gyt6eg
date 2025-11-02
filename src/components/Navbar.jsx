import { useState } from 'react';
import { Shield, Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
              <Shield className="h-5 w-5 text-emerald-400" />
            </span>
            <span className="font-semibold tracking-tight text-white">Cyber & Full‑Stack</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="ml-2 inline-flex items-center gap-2 rounded-md bg-emerald-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500"
              >
                View Work
              </a>
            </div>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="space-y-2 pb-4 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-3 pt-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
