/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
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
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Hi!%20I%20want%20to%20launch%20my%20website%20in%2072h.';

export default function App() {
  // Enforce permanent sleek dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <div className="grain" />
      <Navbar onOpenBriefing={openWhatsApp} />

      <main className="relative z-10">
        <Hero onOpenBriefing={openWhatsApp} />
        <Statistics />
        <Benefits />
        <ServicesBreakdown />
        <Process />
        <Pricing onSelectPlan={openWhatsApp} />
        <Portfolio />
        <TechStack />
        <TargetAudience />
        <Differentials />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <ContactCTA onOpenBriefing={openWhatsApp} />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm md:hidden">
        <button
          type="button"
          onClick={openWhatsApp}
          className="w-full bg-white text-black px-6 py-4 rounded-full font-black flex items-center justify-center gap-3 shadow-2xl cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all"
        >
          <MessageCircle size={20} />
          Launch My Website in 72h
        </button>
      </div>
    </div>
  );
}