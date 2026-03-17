import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cyber-black cyber-grid scanline">
      {/* Matrix rain background */}
      <MatrixBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        </div>

        <AboutSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
        </div>

        <SkillsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent" />
        </div>

        <ProjectsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
        </div>

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
