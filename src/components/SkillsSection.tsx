import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 97, color: '#00f0ff', category: 'Backend' },
  { name: 'Django / FastAPI', level: 93, color: '#00f0ff', category: 'Backend' },
  { name: 'Flask', level: 90, color: '#00f0ff', category: 'Backend' },
  { name: 'PostgreSQL / MongoDB', level: 88, color: '#00f0ff', category: 'Backend' },
  { name: 'REST & WebSocket APIs', level: 92, color: '#00f0ff', category: 'Backend' },
  { name: 'HTML / CSS / Tailwind', level: 90, color: '#b026ff', category: 'Frontend' },
  { name: 'Jinja2 / HTMX', level: 88, color: '#b026ff', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, color: '#b026ff', category: 'Frontend' },
  { name: 'HTML5 / CSS3', level: 92, color: '#b026ff', category: 'Frontend' },
  { name: 'Crypto Trading Bots', level: 95, color: '#ff2d95', category: 'Crypto' },
  { name: 'Blockchain APIs', level: 91, color: '#ff2d95', category: 'Crypto' },
  { name: 'DeFi Protocols', level: 87, color: '#ff2d95', category: 'Crypto' },
  { name: 'Smart Contracts', level: 82, color: '#ff2d95', category: 'Crypto' },
  { name: 'Docker / CI/CD', level: 85, color: '#39ff14', category: 'DevOps' },
  { name: 'Linux / Server Admin', level: 88, color: '#39ff14', category: 'DevOps' },
  { name: 'Git / GitHub', level: 93, color: '#39ff14', category: 'DevOps' },
];

const categories = ['All', 'Backend', 'Frontend', 'Crypto', 'DevOps'];

const techStack = [
  'Python', 'Django', 'FastAPI', 'Flask', 'Jinja2', 'HTMX', 'Streamlit',
  'Dash', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Nginx',
  'Web3.py', 'Solidity', 'TradingView', 'Binance API', 'CCXT',
  'Celery', 'RabbitMQ', 'GraphQL', 'Pandas', 'NumPy', 'Tailwind',
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-xs sm:text-sm text-neon-purple tracking-[0.3em] uppercase">// Tech Stack</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Skills & <span className="text-neon-purple neon-text-purple">Expertise</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto" />
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-lg font-mono text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-neon-cyan/20 border border-neon-cyan/40 text-neon-cyan neon-text-cyan'
                  : 'bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className={`grid md:grid-cols-2 gap-3 sm:gap-4 mb-16 sm:mb-20 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="group p-4 rounded-xl bg-cyber-card/50 border border-cyber-border hover:border-opacity-50 transition-all duration-300"
              style={{ borderColor: visible ? `${skill.color}22` : undefined }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm text-white group-hover:text-neon-cyan transition-colors">{skill.name}</span>
                <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-cyber-dark overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, ${skill.color}44, ${skill.color})`,
                    boxShadow: `0 0 10px ${skill.color}44`,
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className={`transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-mono text-sm text-cyber-muted text-center mb-6 tracking-wider">
            {'<'} TECHNOLOGIES I WORK WITH {'/>'} 
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-cyber-card border border-cyber-border text-xs sm:text-sm font-mono text-cyber-muted hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
