import { useEffect, useState } from 'react';
import { ArrowDown, Send, ChevronRight } from 'lucide-react';

const titles = [
  'Full-Stack Python Developer',
  'Crypto Platform Engineer',
  'Trading Systems Architect',
  'Web3 Solutions Builder',
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cryptoPrices] = useState([
    { symbol: 'BTC', price: '67,842.50', change: '+2.4%' },
    { symbol: 'ETH', price: '3,521.18', change: '+1.8%' },
    { symbol: 'SOL', price: '178.92', change: '+5.2%' },
    { symbol: 'BNB', price: '612.35', change: '+0.9%' },
    { symbol: 'XRP', price: '2.41', change: '+3.1%' },
    { symbol: 'ADA', price: '0.892', change: '-0.5%' },
  ]);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIndex > 0) {
        setCharIndex(c => c - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, deleting ? 30 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-neon-cyan/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Orbiting ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] rounded-full border border-neon-cyan/5 animate-spin-slow pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neon-cyan/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-neon-purple/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6 sm:mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-neon-green text-xs sm:text-sm font-mono">Available for Projects</span>
        </div>

        {/* Main heading */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-white">I'm </span>
            <span className="text-neon-cyan neon-text-cyan">Tokyo</span>
          </h1>
        </div>

        {/* Typing effect */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <span className="font-mono text-lg sm:text-xl md:text-2xl text-neon-purple neon-text-purple">
            {'> '}{titles[titleIndex].slice(0, charIndex)}
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-neon-cyan ml-0.5 align-middle" style={{ animation: 'blink 1s step-end infinite' }} />
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-cyber-muted leading-relaxed mb-8 sm:mb-10 animate-slide-up px-4" style={{ animationDelay: '0.6s' }}>
          Building high-performance trading platforms, crypto tools, and full-stack web applications
          with clean code and cutting-edge technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-white font-semibold tracking-wide hover:from-neon-cyan/30 hover:to-neon-purple/30 hover:border-neon-cyan/60 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View My Work
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://t.me/Tokyoisback"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-semibold tracking-wide hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 flex items-center justify-center gap-2 neon-text-cyan"
          >
            <Send className="w-4 h-4" />
            Hire Me on Telegram
          </a>
        </div>

        {/* Crypto ticker */}
        <div className="animate-slide-up overflow-hidden" style={{ animationDelay: '1s' }}>
          <div className="relative rounded-xl bg-cyber-card/50 border border-cyber-border overflow-hidden py-3">
            <div className="flex animate-ticker whitespace-nowrap">
              {[...cryptoPrices, ...cryptoPrices].map((coin, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 sm:px-6">
                  <span className="font-mono text-xs sm:text-sm text-white font-semibold">{coin.symbol}</span>
                  <span className="font-mono text-xs sm:text-sm text-cyber-muted">${coin.price}</span>
                  <span className={`font-mono text-xs sm:text-sm ${coin.change.startsWith('+') ? 'text-neon-green' : 'text-neon-pink'}`}>
                    {coin.change}
                  </span>
                  <span className="text-cyber-border mx-2">│</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-cyber-muted hover:text-neon-cyan transition-colors">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
