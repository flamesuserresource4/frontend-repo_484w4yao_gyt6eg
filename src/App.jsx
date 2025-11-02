import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      {/* Global background: layered neon gradients + vignette (non-blocking) */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(168,85,247,0.10),transparent),radial-gradient(700px_400px_at_50%_120%,rgba(16,185,129,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.6)_100%)]" />
        {/* subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_26%,transparent_27%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_26%,transparent_27%)] bg-[length:44px_44px] [animation:pulse_6s_ease-in-out_infinite]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
