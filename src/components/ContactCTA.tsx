import { ArrowRight, MessageCircle } from 'lucide-react';

interface ContactCTAProps {
  onOpenBriefing?: () => void;
}

export default function ContactCTA({ onOpenBriefing }: ContactCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950 text-white transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
            Ready to stop <br />
            <span className="text-zinc-500">losing valuable clients?</span>
          </h2>
          <p className="text-base sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every day with an outdated web presence is revenue left on the table for your competitors. Reserve your project slot today and have your high-converting website live in 72 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                if (onOpenBriefing) {
                  onOpenBriefing();
                } else {
                  window.location.hash = '#/briefing';
                }
              }}
              className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
            >
              <span>Launch My Website in 72 Hours</span>
              <ArrowRight size={22} />
            </button>
            
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-zinc-900 text-white border border-zinc-700 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-colors"
            >
              <MessageCircle size={22} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="mt-10 inline-block px-5 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
            <span className="text-zinc-400 font-medium text-xs sm:text-sm">Plans starting at</span>
            <span className="text-white font-bold text-xs sm:text-sm ml-2">$425</span>
          </div>
        </div>
      </div>
    </section>
  );
}
