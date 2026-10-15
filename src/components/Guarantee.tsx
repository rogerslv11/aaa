import { 
  ShieldCheck, Headphones, ThumbsUp,
  Clock, Lock, CheckCircle2, Award, ArrowRight
} from 'lucide-react';

export default function Guarantee() {
  const points = [
    {
      title: 'Entrega em 72h ou 100% Grátis',
      badge: 'SLA Contratual',
      description: 'Nosso prazo de 72 horas é inegociável. Se não entregarmos no prazo após o recebimento das suas informações, você recebe reembolso integral de 100% imediatamente.',
      icon: <Clock size={26} className="text-amber-400" />
    },
    {
      title: 'Garantia de Revisões Ilimitadas',
      badge: 'Risco Zero',
      description: 'Apresentamos a versão inicial e refinamos layout, fotos e textos até que o resultado final atenda com perfeição ao seu padrão de excelência.',
      icon: <ThumbsUp size={26} className="text-emerald-400" />
    },
    {
      title: 'Suporte VIP Direto no WhatsApp',
      badge: 'Desenvolvedor Direto',
      description: 'Zero robôs ou filas de chamados demoradas. Você fala diretamente no WhatsApp com os engenheiros que estão desenvolvendo seu site.',
      icon: <Headphones size={26} className="text-blue-400" />
    },
    {
      title: 'Patrimônio 100% da sua Empresa',
      badge: 'Sem Mensalidades',
      description: 'O código, arquivos e domínio pertencem 100% a você. Não cobramos mensalidades obrigatórias de manutenção nem retemos seus ativos.',
      icon: <Lock size={26} className="text-purple-400" />
    }
  ];

  return (
    <section id="garantia" className="py-20 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/40 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-4 shadow-xs">
            <ShieldCheck size={14} className="text-emerald-400" />
            Tranquilidade Total & Garantia em Contrato
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            Nosso compromisso formal com <br className="hidden sm:inline" />
            <span className="text-zinc-500">o seu retorno financeiro.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Eliminamos todo o risco financeiro do seu investimento. Você contrata com segurança jurídica e garantia formal de satisfação.
          </p>
        </div>

        {/* 4 Core Guarantee Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {point.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {point.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white mb-2.5 tracking-tight leading-snug">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                <CheckCircle2 size={13} />
                <span>Garantia Contratual Ativa</span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Trust SLA Banner */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-xl flex-shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-white">Pronto para lançar seu site profissional em até 72 horas?</h4>
              <p className="text-xs sm:text-sm text-zinc-400">Comece hoje com risco zero, respaldo jurídico e suporte VIP prioritário.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20para%20o%20site%20em%2072h."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black font-black text-xs sm:text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap flex items-center justify-center gap-2 shadow-lg flex-shrink-0"
          >
            <span>Garantir Minha Vaga de 72h</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
