import { Star, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const testimonialsRow1 = [
    {
      id: 1,
      name: 'Ricardo Santos',
      role: 'Sócio-Fundador & Diretor',
      company: 'RS Capital Advisory',
      badge: 'Redesign 360° em 72h',
      metric: 'ROI na 1ª Semana',
      content: 'Precisávamos de um site institucional de alto nível para o lançamento do nosso fundo. A entrega foi impecável e exatamente em 72 horas. A credibilidade perante nossos investidores aumentou imediatamente.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=ricardo'
    },
    {
      id: 2,
      name: 'Dra. Mariana Costa',
      role: 'Dermatologista & Diretora Clínica',
      company: 'BioPelle Clínica Médica',
      badge: 'Funil no WhatsApp • 48h',
      metric: '+185% Consultas Particulares',
      content: 'O processo foi cirúrgico e sem enrolação. Enviei as fotos e informações e, antes do prazo, a clínica já tinha um site sofisticado recebendo pacientes particulares todos os dias pelo WhatsApp.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=mariana'
    },
    {
      id: 3,
      name: 'André Ruiz',
      role: 'CEO & Head de Operações',
      company: 'TechFlow Solutions',
      badge: 'Migração WordPress → React',
      metric: '0.22s de Velocidade',
      content: 'Nossa landing page antiga demorava mais de 4 segundos para abrir no celular e desperdiçava metade do nosso tráfego pago. O novo site abre instantaneamente e nosso custo por lead caiu quase pela metade.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=andre'
    },
    {
      id: 4,
      name: 'Carla Dias',
      role: 'Arquiteta Titular',
      company: 'Studio Arq Contemporânea',
      badge: 'Portfólio de Luxo',
      metric: '3x Mais Propostas Fechadas',
      content: 'A estética visual é determinante no mercado de alto padrão. O site transmite com perfeição o luxo e a atenção aos detalhes que meus clientes mais exigentes buscam.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=carla'
    }
  ];

  const testimonialsRow2 = [
    {
      id: 5,
      name: 'Felipe Rocha',
      role: 'Diretor Comercial',
      company: 'Rocha Prime Imóveis',
      badge: 'Catálogo Rápido • 72h',
      metric: '+240% Contatos no WhatsApp',
      content: 'Estávamos perdendo oportunidades porque o site anterior travava em celulares. Em 72 horas, a equipe da SitePro entregou um portal moderno, rápido e com fotos em 4K. O resultado foi imediato.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=felipe'
    },
    {
      id: 6,
      name: 'Juliana Morales',
      role: 'Nutricionista & Fundadora',
      company: 'Instituto Vida & Saúde',
      badge: 'Página de Autoridade',
      metric: '+40% Consultas no 1º Mês',
      content: 'Atendimento humano excepcional direto pelo WhatsApp. O botão inteligente e a velocidade de carregamento aumentaram meus agendamentos de consulta em mais de 40% já no primeiro mês.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=juliana'
    },
    {
      id: 7,
      name: 'Dr. Leonardo Vasconcelos',
      role: 'Cirurgião Plástico',
      company: 'Vasconcelos Medical',
      badge: 'Presença Premium',
      metric: 'Agenda Cheia',
      content: 'A autoridade visual que o site proporciona elevou o valor percebido das nossas consultas. Pacientes de outras cidades agora entram em contato com total segurança e confiança.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=doc1'
    },
    {
      id: 8,
      name: 'Patrícia Mendonça',
      role: 'Sócia de Consultoria',
      company: 'Apex B2B Partners',
      badge: 'B2B de Alta Conversão',
      metric: '2.8x Reuniões Agendadas',
      content: 'A clareza dos textos, o design elegante e a pontualidade rigorosa de 72 horas superaram qualquer agência tradicional que já contratamos.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=exec2'
    }
  ];

  const renderCard = (t: typeof testimonialsRow1[0]) => (
    <div
      key={t.id}
      className="w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 bg-zinc-900/60 p-6 sm:p-7 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between group select-none"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-300 text-[10px] font-bold border border-emerald-800">
            <CheckCircle2 size={11} className="text-emerald-400" />
            <span>{t.badge}</span>
          </div>

          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
            {t.metric}
          </span>
        </div>

        <div className="flex gap-1 mb-3">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
          "{t.content}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
        <img 
          src={t.avatar} 
          alt={t.name} 
          className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all border border-zinc-700 flex-shrink-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="min-w-0">
          <h4 className="font-extrabold text-sm text-white leading-tight truncate">{t.name}</h4>
          <p className="text-[11px] text-zinc-400 font-medium truncate">{t.role}</p>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider truncate">{t.company}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
              <Sparkles size={12} className="text-amber-400" />
              Depoimentos Reais • Avaliações Verificadas
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              O que dizem os líderes <br className="hidden sm:inline" />
              <span className="text-zinc-500">que escalaram seus negócios conosco.</span>
            </h2>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 lg:max-w-sm flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-black text-lg flex-shrink-0">
              4.98
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-white">
                4.98/5 Avaliação Média • 250+ Projetos em 72h
              </p>
              <p className="text-[10px] text-zinc-400">Feedback verificado de clientes reais</p>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden group py-2">
        {/* Left & Right Gradient Shadows for seamless edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-20" />

        {/* Marquee Row 1 (gliding to left) */}
        <div className="flex gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused] mb-4 sm:mb-6">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, idx) => (
            <div key={`row1-${t.id}-${idx}`}>
              {renderCard(t)}
            </div>
          ))}
        </div>

        {/* Marquee Row 2 (gliding to right) */}
        <div className="flex gap-4 sm:gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, idx) => (
            <div key={`row2-${t.id}-${idx}`}>
              {renderCard(t)}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Verification Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14">
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Todos os depoimentos foram coletados após a entrega oficial dos projetos em até 72 horas</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <span>• 100% de Satisfação em Contrato</span>
            <span>• Suporte Técnico Vitalício Ativo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
