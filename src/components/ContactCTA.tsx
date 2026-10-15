import { ArrowRight, MessageCircle } from 'lucide-react';

interface ContactCTAProps {
  onOpenBriefing?: () => void;
}

export default function ContactCTA({ onOpenBriefing }: ContactCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950 text-white transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[0.95]">
            Pronto para parar de <br />
            <span className="text-zinc-500">perder clientes valiosos?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada dia com um site desatualizado é faturamento deixado na mesa para a concorrência. Garanta sua vaga hoje e tenha sua presença digital de alto padrão no ar em até 72 horas.
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
              className="w-full sm:w-auto bg-white text-black px-9 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
            >
              <span>Lançar Meu Site em 72h</span>
              <ArrowRight size={20} />
            </button>
            
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20lan%C3%A7ar%20meu%20site%20em%2072h."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-zinc-900 text-white border border-zinc-700 px-9 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-colors"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          <div className="mt-10 inline-block px-5 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
            <span className="text-zinc-400 font-medium text-xs sm:text-sm">Planos a partir de</span>
            <span className="text-white font-bold text-xs sm:text-sm ml-2">R$ 600</span>
          </div>
        </div>
      </div>
    </section>
  );
}
