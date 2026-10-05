/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
  const [view, setView] = useState<'home' | 'briefing'>(() => {
    return window.location.hash === '#/briefing' ? 'briefing' : 'home';
  });
  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'professional' | 'elite'>('professional');

  // Enforce permanent sleek dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/briefing') {
        setView('briefing');
      } else if (!window.location.hash || window.location.hash.startsWith('#')) {
        if (window.location.hash !== '#/briefing') {
          setView('home');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
      <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
        <div className="grain" />
        <BriefingCheckoutPage 
          initialPlan={selectedPlan}
          onBackToHome={handleBackToHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <div className="grain" />
      <Navbar 
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
        <TargetAudience />
        <Differentials />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <ContactCTA onOpenBriefing={() => handleOpenBriefing()} />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm md:hidden">
        <button 
          type="button"
          onClick={() => handleOpenBriefing('professional')}
          className="w-full bg-white text-black px-6 py-4 rounded-full font-black flex items-center justify-center gap-3 shadow-2xl cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all"
        >
          <MessageCircle size={20} />
          Launch My Website in 72h
        </button>
      </div>
    </div>
  );
}
