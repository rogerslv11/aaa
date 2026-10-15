import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Clock, Star } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (plan: 'essential' | 'professional' | 'elite') => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      id: 'essential',
      name: 'Essencial',
      badge: 'Entrada Rápida',
      price: '600',
      period: 'Pagamento único • Sem mensalidades',
      description: 'Presença digital profissional e veloz para autônomos, consultores e serviços locais.',
      features: [
        'Entrega garantida em 72h em contrato',
        'Design 100% responsivo para celulares',
        'Botão flutuante direto de WhatsApp',
        'Otimização estrutural para o Google (SEO)',
        'Certificado de segurança SSL incluso',
        'Código puro sem plugins pesados'
      ],
      cta: 'Escolher Essencial',
      highlight: false
    },
    {
      id: 'professional',
      name: 'Profissional',
      badge: 'Mais Escolhido',
      price: '1.200',
      period: 'Pagamento único • Sem mensalidades',
      description: 'A solução definitiva de vendas e autoridade para negócios que buscam faturar mais.',
      features: [
        'Tudo incluso do Plano Essencial',
        'Design sob medida exclusivo (sem templates)',
        '1 ano de hospedagem cloud inclusa',
        'Copywriting comercial persuasivo',
        'Google PageSpeed 99+ (0.28s de velocidade)',
        'Revisões ilimitadas até aprovação formal'
      ],
      cta: 'Escolher Profissional',
      highlight: true
    },
    {
      id: 'elite',
      name: 'Corporativo',
      badge: 'Sob Medida',
      price: 'Sob Medida',
      period: 'Proposta personalizada',
      description: 'Engenharia dedicada para empresas consolidadas com sistemas integrados e alto fluxo.',
      features: [
        'Tudo incluso do Plano Profissional',
        'Integrações com APIs, CRMs e webhooks',
        'Estrutura para múltiplas unidades ou idiomas',
        'Painel administrativo sob demanda',
        'Suporte técnico VIP prioritário 24/7',
        'Arquitetura escalável de alta demanda'
      ],
      cta: 'Solicitar Proposta',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 overflow-hidden">
      {/* Subtle Luxury Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-zinc-900/60 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 border border-zinc-800 shadow-xs">
            <Sparkles size={12} className="text-amber-400" />
            Planos Transparentes • Sem Mensalidades Ocultas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            Planos transparentes com <br className="hidden sm:inline" />
            <span className="text-zinc-500">retorno real sobre o seu investimento.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Sem mensalidades surpresa nem fidelidade contratual. Você investe uma única vez e o site se torna patrimônio vitalício da sua empresa.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-bold text-zinc-300 shadow-sm">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 size={14} /> Pagamento Único
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-white">
              <Clock size={14} className="text-amber-400" /> Entrega em 72 Horas
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck size={14} className="text-blue-400" /> Garantia em Contrato
            </span>
          </div>
        </div>

        {/* Simplified 3 Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-7 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                plan.highlight 
                ? 'bg-zinc-900/90 border-zinc-600 shadow-2xl lg:-translate-y-2 ring-1 ring-white/10' 
                : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 shadow-sm'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                    plan.highlight
                      ? 'bg-white text-black font-extrabold shadow-sm'
                      : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                  }`}>
                    {plan.badge}
                  </span>

                  {plan.highlight && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800">
                      <Star size={11} className="fill-current" />
                      Recomendado
                    </span>
                  )}
                </div>
                
                {/* Plan Title & Description */}
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="py-4 border-y border-zinc-800/80 mb-6">
                  <div className="flex items-baseline gap-1.5">
                    {plan.price !== 'Sob Medida' && (
                      <span className="text-xl font-bold text-zinc-400">R$</span>
                    )}
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-400 block mt-1">
                    {plan.period}
                  </span>
                </div>

                {/* Simplified Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                      <CheckCircle2 
                        size={16} 
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlight ? 'text-emerald-400' : 'text-zinc-400'
                        }`} 
                      />
                      <span className={plan.highlight && i === 1 ? 'text-white font-semibold' : 'text-zinc-300'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                type="button"
                onClick={() => {
                  if (onSelectPlan) {
                    onSelectPlan(plan.id as any);
                  } else {
                    window.location.hash = '#/briefing';
                  }
                }}
                className={`w-full py-4 px-6 rounded-2xl font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] cursor-pointer shadow-md ${
                  plan.highlight 
                  ? 'bg-white text-black hover:bg-zinc-200' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700/60'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Security & Payment Methods */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Processamento criptografado de 256 bits • Emissão de Nota Fiscal e Contrato com Garantia</span>
          </div>
          <div className="flex items-center gap-4 font-bold text-zinc-300">
            <span>Cartões em até 12x</span>
            <span>•</span>
            <span>Pix à vista</span>
            <span>•</span>
            <span>Transferência</span>
          </div>
        </div>

      </div>
    </section>
  );
}
