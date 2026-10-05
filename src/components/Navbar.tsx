import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBriefing?: () => void;
}

export default function Navbar({ onOpenBriefing }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Us?', href: '#benefits' },
    { name: 'How It Works', href: '#process' },
    { name: 'Plans & Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-20 ${
        scrolled 
        ? 'bg-zinc-950/90 border-b border-zinc-800 backdrop-blur-md shadow-md'
        : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-black font-black text-lg shadow-sm">
              S
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black tracking-tight text-white uppercase">
                SitePro
              </span>
              <span className="text-xs font-black px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-widest">
                72h
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button
              type="button"
              onClick={() => {
                if (onOpenBriefing) {
                  onOpenBriefing();
                } else {
                  window.location.hash = '#/briefing';
                }
              }}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-black transition-opacity hover:opacity-90 cursor-pointer shadow-md"
            >
              Get Started Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white"
              aria-label="Open menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col p-6 bg-zinc-950 text-white overflow-y-auto h-dvh">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-black font-black text-lg">
                S
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black tracking-tight uppercase">SitePro</span>
                <span className="text-xs font-black px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">72h</span>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black tracking-tight hover:text-zinc-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                if (onOpenBriefing) {
                  onOpenBriefing();
                } else {
                  window.location.hash = '#/briefing';
                }
              }}
              className="w-full py-5 rounded-2xl text-center font-black text-xl shadow-lg cursor-pointer bg-white text-black"
            >
              Get Started Now
            </button>
            <p className="text-center mt-4 text-zinc-500 text-xs font-medium uppercase tracking-widest">
              Your website ready in up to 72 hours
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
