import React, { useState } from 'react';
import { GrainOverlay } from './components/common/GrainOverlay';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Experience } from './components/sections/Experience';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-void text-silver-200 antialiased selection:bg-white selection:text-black font-sans">
      {/* Subtle Texture & Cursor Enhancements */}
      <GrainOverlay />
      <CustomCursor />

      {/* Floating Pill Navigation */}
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Main Portfolio Flow */}
      <main className="relative flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Experience />
        <Resume />
        <Contact />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />
    </div>
  );
};

export default App;
