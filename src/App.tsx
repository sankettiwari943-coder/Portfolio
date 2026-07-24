import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Background3D } from './components/Background3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Below-the-fold component lazy loading for faster initial rendering
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Education = lazy(() => import('./components/Education').then(m => ({ default: m.Education })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const AiAssistant = lazy(() => import('./components/AiAssistant').then(m => ({ default: m.AiAssistant })));

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [aiGuideTrigger, setAiGuideTrigger] = useState(0);

  // Initialize Lenis Smooth Scroll with proper RAF cancellation
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleAiTrigger = useCallback(() => {
    setAiGuideTrigger((prev) => prev + 1);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Loading Screen Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#00E5FF] selection:text-black">
          {/* Custom Code Particle Cursor */}
          <CustomCursor />

          {/* Fixed 100vw x 100vh 3D Spline Canvas Background */}
          <Background3D splineSceneUrl="https://prod.spline.design/p5CnNr7Zn1y5xafo/scene.splinecode" />

          {/* Floating Dock Navbar */}
          <Navbar onOpenAiGuide={handleAiTrigger} />

          {/* Main Portfolio Sections */}
          <main className="relative z-10 space-y-12">
            <Hero />
            <Suspense fallback={null}>
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Education />
              <Contact />
            </Suspense>
          </main>

          {/* Minimalist Footer */}
          <Suspense fallback={null}>
            <Footer />
            <AiAssistant key={aiGuideTrigger} />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default App;
