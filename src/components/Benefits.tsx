import { Shield, TrendingUp, Zap, Globe, ArrowRight, Sparkles, CheckCircle2, BarChart3 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'Domínio de Mercado',
      badge: 'Posicionamento AAA',
      description: "Não seja apenas mais uma opção no Google. Construa uma presença digital imponente que se destaque da concorrência e atraia clientes de alto ticket.",
      icon: <Shield size={24} className="text-amber-400" />,
      stat: '94%',
      statDesc: 'Dos clientes julgam a credibilidade pelo design'
    },
    {
      title: 'Máquina de Vendas 24/7',
      badge: 'Funil Automatizado',
      description: 'Seu site capta e qualifica oportunidades ininterruptamente. Estrutura desenhada para direcionar contatos prontos para fechar no WhatsApp.',
      icon: <Globe size={24} className="text-emerald-400" />,
      stat: '100%',
      statDesc: 'Presença comercial ininterrupta'
    },
    {
      title: 'Autoridade Instantânea',
      badge: 'Impacto Psicológico',
      description: 'Passe de desconhecido a referência do seu nicho. O design de alto padrão comunica prestígio, solidez e valor antes mesmo da leitura da primeira linha.',
      icon: <Zap size={24} className="text-blue-400" />,
      stat: '0.05s',
      statDesc: 'Para o visitante decidir se confia na sua marca'
    },
    {
      title: 'Retorno Acelerado (ROI)',
      badge: 'Multiplicador de Leads',
      description: 'Velocidade extrema em 0.28s e arquitetura cirúrgica que reduzem o custo por clique dos seus anúncios e multiplicam as conversões em vendas.',
      icon: <TrendingUp size={24} className="text-purple-400" />,
      stat: '3x',
      statDesc: 'Mais chances de fechar contratos de alto valor'
    }
  ];

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-black text-white transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-zinc-900/50 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-16 lg:mb-20 pb-10 border-b border-zinc-800">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 border border-zinc-800 shadow-xs">
              <Sparkles size={12} className="text-amber-400" />
              Vantagem Competitiva • Autoridade Digital
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Design de alto padrão que <br className="hidden sm:inline" />
              <span className="text-zinc-500">multiplica suas vendas e credibilidade.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              No mercado atual, sites lentos e genéricos são praticamente invisíveis. Garantimos que sua empresa seja a escolha óbvia e mais respeitada do seu setor.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Engenharia focada em retorno financeiro comprovado</span>
            </div>
          </div>
        </div>

        {/* 4 Core Value Proposition Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-zinc-900/40 p-7 sm:p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/70 transition-all flex flex-col justify-between shadow-xs hover:shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {benefit.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3 tracking-tight leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 border-t border-zinc-800 space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                  <span>{benefit.stat}</span>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Impacto</span>
                </div>
                <div className="text-[11px] font-medium text-zinc-400 leading-snug">
                  {benefit.statDesc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Quote Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold flex-shrink-0">
              <BarChart3 size={22} />
            </div>
            <div>
              <h4 className="text-base font-black text-white">
                Empresas com sites ultrarrápidos faturam até 240% mais com o mesmo tráfego.
              </h4>
              <p className="text-xs text-zinc-400">
                Otimização completa de ponta a ponta entregue no prazo inegociável de 72 horas.
              </p>
            </div>
          </div>
          <a
            href="#/briefing"
            className="px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs whitespace-nowrap hover:bg-zinc-200 transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Iniciar Diagnóstico Gratuito</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
