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
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="grain" />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative z-10">
        <Hero />
        <Statistics />
        <Benefits />
        <ServicesBreakdown />
        <Process />
        <Pricing />
        <Portfolio />
        <TechStack />
        <TargetAudience isDarkMode={isDarkMode} />
        <Differentials />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <ContactCTA />
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
          <a 
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-full font-black flex items-center justify-center gap-3 shadow-2xl"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
