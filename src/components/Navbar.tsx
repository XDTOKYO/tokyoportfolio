import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cyber-black/90 backdrop-blur-xl border-b border-cyber-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-all duration-300">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-neon-cyan" />
            </div>
            <span className="font-display text-base sm:text-lg font-bold tracking-wider text-white">
              TOKYO<span className="text-neon-cyan">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-mono tracking-wide transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-neon-cyan bg-neon-cyan/10 neon-text-cyan'
                    : 'text-cyber-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/Tokyoisback"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 rounded-lg bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-mono text-sm tracking-wide hover:bg-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 neon-text-cyan"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-cyber-muted hover:text-white hover:bg-white/5 transition-all"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cyber-dark/98 backdrop-blur-xl border-b border-cyber-border animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-mono tracking-wide transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-neon-cyan bg-neon-cyan/10'
                    : 'text-cyber-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/Tokyoisback"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-mono text-sm text-center tracking-wide"
            >
              Contact on Telegram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
