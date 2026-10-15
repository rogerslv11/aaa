import { useState } from 'react';
import { 
  Briefcase, Stethoscope, Home, Utensils, GraduationCap, 
  Gavel, Camera, ShoppingBag, 
  Sparkles, ArrowRight, CheckCircle2
} from 'lucide-react';

export default function TargetAudience() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const niches = [
    {
      id: 'health',
      name: 'Clínicas, Médicos & Saúde',
      category: 'health',
      icon: <Stethoscope size={24} className="text-emerald-400" />,
      tag: 'Alta Procura Particular',
      metric: '+185% Consultas no WhatsApp',
      focus: 'Funis diretos de agendamento, vitrine de especialidades médicas e autoridade clínica inquestionável.',
      features: ['Catálogo de Procedimentos', 'Mural de Avaliações Google', 'Agendamento Direto no WhatsApp']
    },
    {
      id: 'real_estate',
      name: 'Imobiliárias & Corretores',
      category: 'real_estate',
      icon: <Home size={24} className="text-amber-400" />,
      tag: 'Portfólio de Luxo',
      metric: '+240% Contatos por Imóvel',
      focus: 'Apresentação imersiva com fotos em 4K, filtros dinâmicos de busca e captação de compradores qualificados.',
      features: ['Filtros por Bairro e Valor', 'Galeria de Mídia em Alta Resolução', 'Botão de Contato Direto por Imóvel']
    },
    {
      id: 'legal',
      name: 'Advogados & Escritórios Jurídicos',
      category: 'b2b',
      icon: <Gavel size={24} className="text-blue-400" />,
      tag: 'Prestígio & Solidez',
      metric: '+190% Consultas VIP',
      focus: 'Posicionamento institucional imponente que transmite discrição, segurança jurídica e excelência técnica.',
      features: ['Áreas de Atuação Detalhadas', 'Criptografia e SSL Bancário', 'Canal Reservado de Contato']
    },
    {
      id: 'b2b',
      name: 'Consultorias & Serviços B2B',
      category: 'b2b',
      icon: <Briefcase size={24} className="text-purple-400" />,
      tag: 'Contratos Corporativos',
      metric: '3x Mais Reuniões Fechadas',
      focus: 'Apresentação de cases de sucesso, agendamento de reuniões executivas e propostas comerciais sob medida.',
      features: ['Integração Calendly / Cal.com', 'Estudos de Caso com Métricas', 'Estrutura Institucional de Prestígio']
    },
    {
      id: 'restaurants',
      name: 'Gastronomia & Restaurantes',
      category: 'commerce',
      icon: <Utensils size={24} className="text-rose-400" />,
      tag: 'Cardápio Digital & Reservas',
      metric: '+210% Reservas Diretas',
      focus: 'Cardápios digitais interativos ultrarrápidos, localização no Google Maps e reserva de mesas sem comissões.',
      features: ['Cardápio Mobile Ultrarrápido', 'Integração Google Maps', 'Funil Direto de Reservas']
    },
    {
      id: 'education',
      name: 'Cursos & Infoprodutos',
      category: 'education',
      icon: <GraduationCap size={24} className="text-indigo-400" />,
      tag: 'Lançamentos de Sucesso',
      metric: '+320% Conversão de Checkout',
      focus: 'Landing pages de vendas para infoprodutos e mentorias com alta persuasão, vídeos rápidos e checkout direto.',
      features: ['Carregamento de Vídeo Flash', 'Integração Checkout Direto', 'Gatilhos de Decisão Imediata']
    },
    {
      id: 'photography',
      name: 'Arquitetos & Estúdios Criativos',
      category: 'commerce',
      icon: <Camera size={24} className="text-cyan-400" />,
      tag: 'Portfólio Visual',
      metric: '+175% Solicitações de Projeto',
      focus: 'Galerias editoriais refinadas que valorizam o acabamento dos projetos e o olhar autoral do escritório.',
      features: ['Visualizador em Tela Cheia', 'Compressão Sem Perda de Nitidez', 'Solicitação Direta de Orçamento']
    },
    {
      id: 'stores',
      name: 'Lojas & Boutiques Exclusivas',
      category: 'commerce',
      icon: <ShoppingBag size={24} className="text-teal-400" />,
      tag: 'E-commerce Veloz',
      metric: '+150% Vendas Recorrentes',
      focus: 'Vitrines modernas de produtos com carregamento instantâneo e checkout ágil sem fricção.',
      features: ['Grade de Produtos Rápida', 'Pedido Direto com 1 Clique', 'Disponibilidade Atualizada']
    }
  ];

  const filteredNiches = activeCategory === 'all'
    ? niches
    : niches.filter(n => n.category === activeCategory);

  return (
    <section id="segmentos" className="py-20 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
              <Sparkles size={12} className="text-amber-400" />
              Soluções Especializadas por Setor
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Arquitetura sob medida para <br className="hidden sm:inline" />
              <span className="text-zinc-500">o seu segmento de atuação.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm space-y-3">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Compreendemos a fundo a jornada de decisão do cliente em cada setor para criar páginas que atraem, convencem e convertem.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-nowrap overflow-x-auto pb-3 mb-10 gap-2 no-scrollbar">
          {[
            { id: 'all', label: 'Todos os Setores' },
            { id: 'health', label: 'Saúde & Clínicas' },
            { id: 'real_estate', label: 'Imobiliárias & Luxo' },
            { id: 'b2b', label: 'B2B & Corporativo' },
            { id: 'commerce', label: 'Comércio & Gastronomia' },
            { id: 'education', label: 'Educação & Cursos' }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8 Niches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNiches.map((niche) => (
            <div
              key={niche.id}
              className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/90 border border-zinc-700/80 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {niche.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {niche.tag}
                  </span>
                </div>

                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">
                  {niche.metric}
                </div>

                <h3 className="text-lg font-black text-white mb-2.5 tracking-tight leading-snug">
                  {niche.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {niche.focus}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                  {niche.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-white">
                <a 
                  href="#pricing"
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <span>Ver Planos para este Nicho</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
