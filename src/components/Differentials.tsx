import { 
  Clock, ShieldCheck, Zap, Sparkles, CheckCircle2, 
  Smartphone, Eye, Layers, Award, BarChart3, Lock,
  Cpu, HeartHandshake, FileCheck, Headphones
} from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      title: 'Entrega em 72h com SLA Garantido',
      badge: 'Sem Atrasos',
      highlight: 'Formal em Contrato',
      description: 'Seu projeto entra no ar em até 72 horas após o envio do briefing, ou você recebe 100% do seu investimento de volta.',
      icon: <Clock size={24} className="text-amber-400" />
    },
    {
      title: 'Design de Alto Padrão Sob Medida',
      badge: 'Design Exclusivo',
      highlight: 'Zero Templates Prontos',
      description: 'Cada layout é desenhado do zero com psicologia de vendas e hierarquia visual projetada para o seu posicionamento.',
      icon: <Eye size={24} className="text-blue-400" />
    },
    {
      title: 'Velocidade Instantânea em 0.28s',
      badge: '100% Fluido',
      highlight: 'React 19 & Vite Engine',
      description: 'Carregamento instantâneo no celular 4G/5G e no computador, reduzindo drasticamente a taxa de rejeição de visitantes.',
      icon: <Zap size={24} className="text-emerald-400" />
    },
    {
      title: 'Google PageSpeed 99-100 Ready',
      badge: 'Core Vitals Aprovado',
      highlight: 'Topo do Google',
      description: 'Totalmente otimizado para os algoritmos de busca com código limpo, meta tags completas e dados estruturados Schema.org.',
      icon: <BarChart3 size={24} className="text-purple-400" />
    },
    {
      title: 'Copywriting com Psicologia de Conversão',
      badge: 'Foco em Vendas',
      highlight: 'Gatilhos de Decisão',
      description: 'Títulos e textos persuasivos redigidos para conduzir o visitante de forma direta até o contato no WhatsApp.',
      icon: <Sparkles size={24} className="text-pink-400" />
    },
    {
      title: 'Suporte VIP Direto no WhatsApp',
      badge: '100% Humano',
      highlight: 'Sem Robôs ou Fila',
      description: 'Comunicação direta com os desenvolvedores responsáveis pelo seu projeto, sem chamados burocráticos ou esperas.',
      icon: <Headphones size={24} className="text-cyan-400" />
    },
    {
      title: 'Patrimônio 100% Seu Sem Mensalidades',
      badge: 'Controle Total',
      highlight: 'Sem Taxas Ocultas',
      description: 'O site e o domínio pertencem integralmente à sua empresa, sem custos recorrentes obrigatórios para manter no ar.',
      icon: <Lock size={24} className="text-teal-400" />
    },
    {
      title: 'Contrato Formal com Garantia de Satisfação',
      badge: 'Risco Zero',
      highlight: 'Segurança Jurídica',
      description: 'Contrato com termos claros de prazos de entrega e compromisso formal de satisfação e revisões ilimitadas.',
      icon: <FileCheck size={24} className="text-indigo-400" />
    }
  ];

  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/40 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
              <Award size={12} className="text-amber-400" />
              Diferenciais Exclusivos • Padrão SitePro 72h
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Por que escolher <br className="hidden sm:inline" />
              <span className="text-zinc-500">o nosso estúdio?</span>
            </h2>
          </div>

          <div className="lg:max-w-sm space-y-3">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Unimos velocidade recorde, estética de luxo e engenharia de conversão para transformar seu site em uma máquina de vendas contínua.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 size={15} />
              <span>Garantia contratual de entrega em até 72 horas</span>
            </div>
          </div>
        </div>

        {/* 8 Differentials Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-600 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/90 border border-zinc-700/80 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 mb-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item.highlight}
                </div>

                <h3 className="text-lg font-black text-white mb-2.5 tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-semibold">
                <span>Padrão SitePro 72h</span>
                <span className="text-zinc-300 font-bold">100% Incluso</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Panel */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">250+</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Sites Entregues</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">72 Horas</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Prazo de Lançamento</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">4.98 / 5</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Avaliação dos Clientes</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Garantia Contratual</div>
          </div>
        </div>

      </div>
    </section>
  );
}
