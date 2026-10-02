/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Benefits from './components/Benefits';
import ServicesBreakdown from './components/ServicesBreakdown';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import TargetAudience from './components/TargetAudience';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BriefingCheckoutPage from './components/BriefingCheckoutPage';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [view, setView] = useState<'home' | 'briefing'>(() => {
    return window.location.hash === '#/briefing' ? 'briefing' : 'home';
  });
  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'professional' | 'elite'>('professional');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/briefing') {
        setView('briefing');
      } else if (!window.location.hash || window.location.hash.startsWith('#')) {
        // If it's a section anchor or empty, keep in home unless explicitly #/briefing
        if (window.location.hash !== '#/briefing') {
          setView('home');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleOpenBriefing = (plan?: 'essential' | 'professional' | 'elite') => {
    if (plan) setSelectedPlan(plan);
    setView('briefing');
    window.location.hash = '#/briefing';
  };

  const handleBackToHome = () => {
    setView('home');
    window.location.hash = '';
  };

  if (view === 'briefing') {
    return (
      <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <div className="grain" />
        <BriefingCheckoutPage 
          initialPlan={selectedPlan}
          onBackToHome={handleBackToHome}
          isDarkMode={isDarkMode}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="grain" />
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onOpenBriefing={() => handleOpenBriefing()}
      />
      
      <main className="relative z-10">
        <Hero onOpenBriefing={() => handleOpenBriefing()} />
        <Statistics />
        <Benefits />
        <ServicesBreakdown />
        <Process />
        <Pricing onSelectPlan={(plan) => handleOpenBriefing(plan)} />
        <Portfolio />
        <TechStack />
        <TargetAudience isDarkMode={isDarkMode} />
        <Differentials />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <ContactCTA onOpenBriefing={() => handleOpenBriefing()} />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        <motion.div 
          initial={{ y: 100, x: '-50%' }}
          animate={{ y: 0, x: '-50%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 1 }}
          className="fixed bottom-6 left-1/2 z-40 w-[90%] md:hidden"
        >
          <button 
            type="button"
            onClick={() => handleOpenBriefing('professional')}
            className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-full font-black flex items-center justify-center gap-3 shadow-2xl cursor-pointer"
          >
            <MessageCircle size={20} />
            Crear mi Web en 72h
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
