import { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, Zap, Clock, Shield } from 'lucide-react';

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-xs sm:text-sm text-neon-green tracking-[0.3em] uppercase">// Get in Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Let's <span className="text-neon-green" style={{ textShadow: '0 0 7px #39ff14, 0 0 20px #39ff1444' }}>Connect</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-6" />
          <p className="text-cyber-muted max-w-xl mx-auto text-sm sm:text-base">
            Have a project idea? Need a trading bot? Want a custom crypto platform?
            Let's talk and bring your vision to life.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className={`gradient-border mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-6 sm:p-10 text-center rounded-xl bg-cyber-card">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 sm:w-10 sm:h-10 text-neon-cyan" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Message me on Telegram</h3>
            <p className="text-cyber-muted text-sm sm:text-base mb-6 max-w-md mx-auto">
              The fastest way to reach me. I typically respond within a few hours. Let's discuss your next big project!
            </p>

            <a
              href="https://t.me/Tokyoisback"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-cyan/80 text-cyber-black font-bold text-base sm:text-lg tracking-wide hover:shadow-[0_0_30px_#00f0ff44] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              @Tokyoisback
              <span className="w-2 h-2 rounded-full bg-cyber-black/30 group-hover:bg-cyber-black/50 transition-colors" />
            </a>

            <p className="mt-4 text-xs font-mono text-cyber-muted">
              https://t.me/Tokyoisback
            </p>
          </div>
        </div>

        {/* Features */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround on all projects with clean, production-ready code', color: 'neon-cyan' },
            { icon: Clock, title: 'Available 24/7', desc: 'Flexible schedule to work across any timezone', color: 'neon-purple' },
            { icon: Shield, title: 'Secure & Reliable', desc: 'Security-first approach for all crypto and financial applications', color: 'neon-green' },
          ].map((item, i) => (
            <div key={i} className="cyber-card rounded-xl p-5 sm:p-6 bg-cyber-card text-center">
              <item.icon className={`w-7 h-7 text-${item.color} mx-auto mb-3`} />
              <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-cyber-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Services list */}
        <div className={`mt-10 sm:mt-12 rounded-xl bg-cyber-card/50 border border-cyber-border p-6 sm:p-8 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-mono text-sm text-neon-cyan mb-4 tracking-wider">{'>'} SERVICES I OFFER</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Custom Trading Platforms',
              'Crypto Trading Bots',
              'DeFi Applications',
              'Token Launch Platforms',
              'Portfolio Dashboards',
              'API Development',
              'Blockchain Integration',
              'Full-Stack Web Apps',
            ].map((service) => (
              <div key={service} className="flex items-center gap-2 text-sm text-cyber-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
