import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(59,130,246,0.12),transparent)] bg-black text-white selection:bg-emerald-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
