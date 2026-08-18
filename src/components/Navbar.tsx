import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const height = useTransform(scrollY, [0, 100], [80, 64]);
  const lightBackground = "rgba(255, 255, 255, 0.8)";
  const darkBackground = "rgba(9, 9, 11, 0.8)"; // zinc-950 with opacity

  const background = useTransform(
    scrollY, 
    [0, 100], 
    ["rgba(255, 255, 255, 0)", isDarkMode ? darkBackground : lightBackground]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Por que nós?', href: '#benefits' },
    { name: 'Como funciona', href: '#process' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav 
      style={{ height, background }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? (isDarkMode ? 'border-b border-zinc-800 shadow-2xl shadow-black/50' : 'border-b border-zinc-100') : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${isDarkMode ? 'bg-white' : 'bg-black'}`}>
              <span className={`font-bold text-xl leading-none ${isDarkMode ? 'text-black' : 'text-white'}`}>S</span>
            </div>
            <span className={`text-xl font-bold tracking-tighter uppercase transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
              SitePro<span className="text-zinc-400">48h</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-sm font-medium transition-colors ${
                  isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                isDarkMode ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <motion.a
              href="#pricing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg ${
                isDarkMode 
                ? 'bg-white text-black hover:bg-zinc-200 shadow-white/5' 
                : 'bg-black text-white hover:bg-zinc-800 shadow-black/10'
              }`}
            >
              Começar Agora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                isDarkMode ? 'bg-zinc-800 text-yellow-400' : 'bg-zinc-100 text-zinc-600'
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-50 md:hidden flex flex-col p-8 transition-colors duration-500 ${
              isDarkMode ? 'bg-zinc-950 text-white' : 'bg-white text-black'
            }`}
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 flex items-center justify-center rounded-sm ${isDarkMode ? 'bg-white' : 'bg-black'}`}>
                  <span className={`font-bold text-xl leading-none ${isDarkMode ? 'text-black' : 'text-white'}`}>S</span>
                </div>
                <span className="text-xl font-bold tracking-tighter uppercase">SitePro<span className="text-zinc-400">48h</span></span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black tracking-tighter hover:text-zinc-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <motion.a
                href="#pricing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className={`w-full py-6 rounded-2xl text-center font-black text-2xl shadow-2xl transition-all ${
                  isDarkMode 
                  ? 'bg-white text-black' 
                  : 'bg-black text-white'
                }`}
              >
                Começar Agora
              </motion.a>
              <p className="text-center mt-8 text-zinc-500 text-sm font-medium uppercase tracking-widest">
                Site pronto em até 48 horas
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
