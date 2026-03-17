import { useEffect, useRef, useState } from 'react';
import { ExternalLink, TrendingUp, Bot, BarChart3, Wallet, Shield, Layers } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: typeof TrendingUp;
  gradient: string;
  borderColor: string;
  accentColor: string;
  features: string[];
  mockupType: 'trading' | 'bot' | 'dashboard' | 'wallet' | 'defi' | 'analytics';
}

const projects: Project[] = [
  {
    title: 'CryptoTrader Pro',
    subtitle: 'Advanced Trading Platform',
    description: 'A real-time cryptocurrency trading platform with advanced charting, automated strategies, and multi-exchange support.',
    tags: ['Python', 'FastAPI', 'HTMX', 'WebSocket', 'CCXT'],
    icon: TrendingUp,
    gradient: 'from-neon-cyan/20 to-neon-cyan/5',
    borderColor: 'border-neon-cyan/30',
    accentColor: '#00f0ff',
    features: ['Real-time price feeds', 'Multi-exchange trading', 'Custom indicators'],
    mockupType: 'trading',
  },
  {
    title: 'ArbitrageBot X',
    subtitle: 'Automated Trading Bot',
    description: 'High-frequency arbitrage bot detecting price discrepancies across exchanges in milliseconds.',
    tags: ['Python', 'asyncio', 'Redis', 'Binance API', 'Docker'],
    icon: Bot,
    gradient: 'from-neon-purple/20 to-neon-purple/5',
    borderColor: 'border-neon-purple/30',
    accentColor: '#b026ff',
    features: ['Sub-second execution', 'Multi-pair scanning', 'Risk management'],
    mockupType: 'bot',
  },
  {
    title: 'DeFi Dashboard',
    subtitle: 'Portfolio Analytics Tool',
    description: 'Comprehensive DeFi portfolio tracker with yield farming analytics, impermanent loss calculator, and gas optimization.',
    tags: ['Django', 'Web3.py', 'Tailwind', 'PostgreSQL'],
    icon: BarChart3,
    gradient: 'from-neon-pink/20 to-neon-pink/5',
    borderColor: 'border-neon-pink/30',
    accentColor: '#ff2d95',
    features: ['Multi-chain support', 'Yield tracking', 'Gas optimization'],
    mockupType: 'dashboard',
  },
  {
    title: 'CryptoVault',
    subtitle: 'Secure Wallet Manager',
    description: 'Enterprise-grade multi-signature wallet management system with cold storage integration and transaction monitoring.',
    tags: ['Django', 'HTMX', 'Blockchain', 'PostgreSQL', 'Celery'],
    icon: Wallet,
    gradient: 'from-neon-green/20 to-neon-green/5',
    borderColor: 'border-neon-green/30',
    accentColor: '#39ff14',
    features: ['Multi-sig support', 'Cold storage', 'Audit logs'],
    mockupType: 'wallet',
  },
  {
    title: 'TokenLaunch',
    subtitle: 'Token Launch Platform',
    description: 'End-to-end token launch platform with fair launch mechanisms, liquidity lock, and anti-bot protection.',
    tags: ['Python', 'Solidity', 'Web3.py', 'Flask', 'Smart Contracts'],
    icon: Shield,
    gradient: 'from-neon-orange/20 to-neon-orange/5',
    borderColor: 'border-neon-orange/30',
    accentColor: '#ff6b00',
    features: ['Fair launch', 'Liquidity lock', 'Anti-bot measures'],
    mockupType: 'defi',
  },
  {
    title: 'MarketPulse',
    subtitle: 'Market Intelligence',
    description: 'Real-time market sentiment analysis platform aggregating social signals, whale movements, and on-chain data.',
    tags: ['Python', 'NLP', 'FastAPI', 'Streamlit', 'WebSocket'],
    icon: Layers,
    gradient: 'from-neon-yellow/20 to-neon-yellow/5',
    borderColor: 'border-neon-yellow/30',
    accentColor: '#f0ff00',
    features: ['Sentiment analysis', 'Whale tracking', 'On-chain data'],
    mockupType: 'analytics',
  },
];

function MockupScreen({ type, color }: { type: string; color: string }) {
  return (
    <div className="w-full h-full bg-cyber-dark rounded-lg overflow-hidden relative">
      {/* Fake browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-cyber-black/60 border-b border-cyber-border/50">
        <div className="w-2 h-2 rounded-full bg-neon-pink/50" />
        <div className="w-2 h-2 rounded-full bg-neon-yellow/50" />
        <div className="w-2 h-2 rounded-full bg-neon-green/50" />
        <div className="ml-2 flex-1 h-4 rounded bg-cyber-border/30" />
      </div>

      <div className="p-3 space-y-2">
        {type === 'trading' && (
          <>
            <div className="flex gap-2 mb-3">
              <div className="h-4 w-16 rounded bg-neon-cyan/20" />
              <div className="h-4 w-12 rounded bg-cyber-border/30" />
              <div className="h-4 w-14 rounded bg-cyber-border/30" />
            </div>
            {/* Candlestick chart mockup */}
            <div className="flex items-end gap-0.5 h-20">
              {[40,55,45,65,50,70,60,75,55,80,65,85,70,60,75,68,82,72,90,78,85,92,80,88].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-px bg-white/10" style={{ height: `${Math.random() * 10 + 5}px` }} />
                  <div
                    className="w-full rounded-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i % 3 === 0 ? '#ff2d9566' : `${color}66`,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex-1 h-6 rounded bg-neon-green/20 flex items-center justify-center">
                <span className="text-[8px] font-mono text-neon-green">BUY</span>
              </div>
              <div className="flex-1 h-6 rounded bg-neon-pink/20 flex items-center justify-center">
                <span className="text-[8px] font-mono text-neon-pink">SELL</span>
              </div>
            </div>
          </>
        )}
        {type === 'bot' && (
          <>
            <div className="space-y-1.5">
              {['[OK] Scanning 24 pairs...', '[>>] BTC/USDT spread: 0.12%', '[OK] ETH/USDT: Executing...', '[$$] Profit: +$42.80', '[OK] Scanning next cycle...'].map((line, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className={`text-[8px] font-mono ${i === 3 ? 'text-neon-green' : i === 2 ? 'text-neon-yellow' : 'text-cyber-muted'}`}>{line}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <div className="p-1.5 rounded bg-neon-green/10 text-center">
                <div className="text-[7px] text-cyber-muted">Profit</div>
                <div className="text-[9px] font-mono text-neon-green">+$1,247</div>
              </div>
              <div className="p-1.5 rounded bg-neon-cyan/10 text-center">
                <div className="text-[7px] text-cyber-muted">Trades</div>
                <div className="text-[9px] font-mono text-neon-cyan">2,841</div>
              </div>
              <div className="p-1.5 rounded bg-neon-purple/10 text-center">
                <div className="text-[7px] text-cyber-muted">Win Rate</div>
                <div className="text-[9px] font-mono text-neon-purple">94.2%</div>
              </div>
            </div>
          </>
        )}
        {type === 'dashboard' && (
          <>
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              <div className="p-1.5 rounded bg-neon-pink/10">
                <div className="text-[7px] text-cyber-muted">Total Value</div>
                <div className="text-[9px] font-mono text-white">$124,589</div>
              </div>
              <div className="p-1.5 rounded bg-neon-green/10">
                <div className="text-[7px] text-cyber-muted">24h P&L</div>
                <div className="text-[9px] font-mono text-neon-green">+$2,341</div>
              </div>
            </div>
            <div className="space-y-1">
              {[['ETH', 45, '#b026ff'], ['BTC', 30, '#00f0ff'], ['SOL', 15, '#39ff14'], ['Other', 10, '#ff6b00']].map(([name, w, c]) => (
                <div key={name as string} className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-cyber-muted w-8">{name as string}</span>
                  <div className="flex-1 h-2 rounded-full bg-cyber-border/30 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${w}%`, backgroundColor: c as string }} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {type === 'wallet' && (
          <>
            <div className="p-2 rounded bg-neon-green/5 border border-neon-green/10 mb-2">
              <div className="text-[7px] text-cyber-muted mb-1">Vault Balance</div>
              <div className="text-[11px] font-mono text-white font-bold">₿ 12.4582</div>
              <div className="text-[8px] font-mono text-neon-green">≈ $845,291.42</div>
            </div>
            <div className="space-y-1">
              {['Pending: 2 signatures needed', 'Last tx: 0x7f2a...3b1c', 'Cold storage: Active'].map((line, i) => (
                <div key={i} className="text-[8px] font-mono text-cyber-muted flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green/50" />
                  {line}
                </div>
              ))}
            </div>
          </>
        )}
        {type === 'defi' && (
          <>
            <div className="text-center p-2 rounded bg-neon-orange/5 border border-neon-orange/10 mb-2">
              <div className="text-[8px] text-cyber-muted">Token Launch In</div>
              <div className="text-[11px] font-mono text-neon-orange font-bold">02:14:38</div>
            </div>
            <div className="h-2 rounded-full bg-cyber-border/30 overflow-hidden mb-2">
              <div className="h-full rounded-full bg-gradient-to-r from-neon-orange to-neon-yellow" style={{ width: '72%' }} />
            </div>
            <div className="text-[8px] font-mono text-cyber-muted text-center">72% filled • 180 BNB raised</div>
          </>
        )}
        {type === 'analytics' && (
          <>
            <div className="flex gap-1.5 mb-2">
              <div className="flex-1 p-1.5 rounded bg-neon-green/10 text-center">
                <div className="text-[7px] text-cyber-muted">Bullish</div>
                <div className="text-[9px] font-mono text-neon-green">68%</div>
              </div>
              <div className="flex-1 p-1.5 rounded bg-neon-pink/10 text-center">
                <div className="text-[7px] text-cyber-muted">Bearish</div>
                <div className="text-[9px] font-mono text-neon-pink">32%</div>
              </div>
            </div>
            <div className="flex items-end gap-0.5 h-12">
              {Array.from({ length: 20 }).map((_, i) => {
                const h = 30 + Math.sin(i * 0.5) * 25 + Math.random() * 20;
                return (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: h > 55 ? '#39ff1466' : '#ff2d9566' }} />
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Subtle overlay shimmer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-xs sm:text-sm text-neon-pink tracking-[0.3em] uppercase">// Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Featured <span className="text-neon-pink neon-text-pink">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto mb-4" />
          <p className="text-cyber-muted max-w-xl mx-auto text-sm sm:text-base">
            A selection of crypto platforms, trading tools, and web applications I've engineered.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group rounded-xl bg-cyber-card border ${project.borderColor} overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Mockup preview */}
              <div className={`relative h-44 sm:h-48 bg-gradient-to-br ${project.gradient} p-3 sm:p-4`}>
                <MockupScreen type={project.mockupType} color={project.accentColor} />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyber-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://t.me/Tokyoisback"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg border text-sm font-mono flex items-center gap-2 hover:bg-white/10 transition-colors"
                    style={{ borderColor: project.accentColor, color: project.accentColor }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Request Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <project.icon className="w-4 h-4" style={{ color: project.accentColor }} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyber-muted">{project.subtitle}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <p className="text-cyber-muted text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map(f => (
                    <span key={f} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-cyber-muted">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{ borderColor: `${project.accentColor}33`, color: project.accentColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cyber-muted text-sm mb-4 font-mono">Want to see more or discuss a custom project?</p>
          <a
            href="https://t.me/Tokyoisback"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-pink/40 text-white font-semibold tracking-wide hover:from-neon-pink/30 hover:to-neon-purple/30 hover:border-neon-pink/60 transition-all duration-300"
          >
            Let's Build Together
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
