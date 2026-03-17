import { Terminal, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyber-border bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-neon-cyan" />
            </div>
            <div>
              <span className="font-display text-base font-bold tracking-wider text-white">
                TOKYO<span className="text-neon-cyan">.</span>
              </span>
              <p className="text-xs text-cyber-muted">Full-Stack Developer & Crypto Engineer</p>
            </div>
          </div>

          {/* Center */}
          <div className="flex items-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-mono text-cyber-muted hover:text-neon-cyan transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right */}
          <a
            href="https://t.me/Tokyoisback"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono hover:bg-neon-cyan/20 transition-all"
          >
            <Send className="w-3 h-3" />
            @Tokyoisback
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-cyber-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono text-cyber-muted">
            © {new Date().getFullYear()} Tokyo. All systems operational.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs font-mono text-neon-green">System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
