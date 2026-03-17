import { useEffect, useRef, useState } from 'react';
import { Code2, Cpu, Globe, Zap, Coffee, GitBranch } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Projects Built', value: '50+', color: 'text-neon-cyan' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞', color: 'text-neon-orange' },
  { icon: GitBranch, label: 'Commits', value: '3K+', color: 'text-neon-green' },
  { icon: Globe, label: 'Happy Clients', value: '30+', color: 'text-neon-purple' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-xs sm:text-sm text-neon-cyan tracking-[0.3em] uppercase">// About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Who is <span className="text-neon-cyan neon-text-cyan">Tokyo</span>?
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Terminal style info */}
          <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-xl bg-cyber-card border border-cyber-border overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-cyber-dark border-b border-cyber-border">
                <div className="w-3 h-3 rounded-full bg-neon-pink/70" />
                <div className="w-3 h-3 rounded-full bg-neon-yellow/70" />
                <div className="w-3 h-3 rounded-full bg-neon-green/70" />
                <span className="ml-3 font-mono text-xs text-cyber-muted">tokyo@dev ~ % cat about.md</span>
              </div>

              {/* Terminal content */}
              <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed space-y-4">
                <p className="text-cyber-muted">
                  <span className="text-neon-green">$</span>{' '}
                  <span className="text-white">I'm a passionate full-stack developer</span> specializing in
                  Python-powered web applications and cryptocurrency platforms.
                </p>
                <p className="text-cyber-muted">
                  <span className="text-neon-green">$</span>{' '}
                  With deep expertise in <span className="text-neon-cyan">trading systems</span>,{' '}
                  <span className="text-neon-purple">DeFi protocols</span>, and{' '}
                  <span className="text-neon-pink">blockchain integrations</span>, I build tools that
                  traders and crypto enthusiasts actually want to use.
                </p>
                <p className="text-cyber-muted">
                  <span className="text-neon-green">$</span>{' '}
                  From <span className="text-white">automated trading bots</span> to{' '}
                  <span className="text-white">real-time market dashboards</span>, I turn complex crypto
                  concepts into elegant, high-performance applications.
                </p>
                <p className="text-cyber-muted">
                  <span className="text-neon-green">$</span>{' '}
                  My code is clean, my APIs are fast, and my UIs are{' '}
                  <span className="text-neon-cyan">pixel-perfect</span>.
                </p>
                <div className="pt-2 border-t border-cyber-border/50">
                  <p className="text-neon-cyan typing-cursor">
                    Ready to build something amazing_
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual info cards */}
          <div className={`transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: 'Backend Expert', desc: 'Python, Django, FastAPI, Flask — building robust server-side solutions', color: 'neon-cyan' },
                { icon: Globe, title: 'Frontend Dev', desc: 'Tailwind, HTMX, Streamlit, Dash — crafting beautiful user interfaces', color: 'neon-purple' },
                { icon: Zap, title: 'Crypto Engineer', desc: 'Trading bots, DeFi tools, blockchain APIs, smart contracts', color: 'neon-pink' },
                { icon: Code2, title: 'API Architect', desc: 'RESTful & WebSocket APIs, real-time data feeds, microservices', color: 'neon-green' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="cyber-card rounded-xl p-4 sm:p-5 bg-cyber-card relative corner-decoration group cursor-default"
                >
                  <item.icon className={`w-7 h-7 sm:w-8 sm:h-8 text-${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{item.title}</h3>
                  <p className="text-cyber-muted text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={`mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-6 sm:py-8 rounded-xl bg-cyber-card/50 border border-cyber-border hover:border-neon-cyan/20 transition-all duration-300">
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="font-mono text-xs text-cyber-muted tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
