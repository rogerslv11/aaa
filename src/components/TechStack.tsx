import { 
  Wind, Code2, Cloud, Zap, ShieldCheck, Search, CheckCircle2, 
  Cpu, Activity, Layers, Sparkles
} from 'lucide-react';

export default function TechStack() {
  const techStackItems = [
    {
      name: 'React 19 Core',
      category: 'Frontend Moderno',
      icon: <Code2 size={24} className="text-blue-400" />,
      tag: '0.0s Atraso',
      description: 'Arquitetura de componentes reativos ultrarrápidos com transições fluidas e zero recarregamento lento de tela.',
      metrics: 'DOM Instantâneo'
    },
    {
      name: 'Vite & Turbo Engine',
      category: 'Build em Milissegundos',
      icon: <Zap size={24} className="text-amber-400" />,
      tag: 'Carregamento Flash',
      description: 'Minificação cirúrgica de código com tree-shaking moderno para carregar apenas os recursos que o visitante utiliza.',
      metrics: '0.28s Inicial'
    },
    {
      name: 'Tailwind CSS Engine',
      category: 'Design Atômico',
      icon: <Wind size={24} className="text-cyan-400" />,
      tag: '100% Fluido',
      description: 'Zero folhas de estilo pesadas. Design responsivo de elite que se adapta perfeitamente a qualquer celular ou desktop.',
      metrics: 'Zero Bloat'
    },
    {
      name: 'Edge CDN Global',
      category: 'Infraestrutura em Nuvem',
      icon: <Cloud size={24} className="text-purple-400" />,
      tag: '300+ Servidores',
      description: 'Distribuição em nuvem de alta disponibilidade com CDN ultrarrápida e 99.99% de tempo online garantido.',
      metrics: '99.99% Uptime'
    },
    {
      name: 'SEO Estrutural & Schema',
      category: 'Domínio no Google',
      icon: <Search size={24} className="text-emerald-400" />,
      tag: 'Top Ranking',
      description: 'Metadados OpenGraph, dados estruturados Schema.org e semântica pura para indexação prioritária nas buscas do Google.',
      metrics: 'Google Ready'
    },
    {
      name: 'Segurança Blindada SSL',
      category: 'Proteção de Dados',
      icon: <ShieldCheck size={24} className="text-rose-400" />,
      tag: 'Certificado A+',
      description: 'Criptografia HTTPS de 256 bits, headers de segurança modernos e proteção nativa contra invasões e robôs.',
      metrics: '256-Bit SSL'
    }
  ];

  return (
    <section id="tecnologia" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
            <Sparkles size={12} className="text-amber-400" />
            Engenharia & Performance Extrema
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Tecnologia de ponta para <br className="hidden sm:inline" />
            <span className="text-zinc-500">desempenho comercial superior.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Não usamos construtores lentos nem pilhas infladas de plugins. Desenvolvemos com a mesma arquitetura moderna utilizada pelas maiores empresas de tecnologia do mundo para garantir carregamento instantâneo.
          </p>
        </div>

        {/* Benchmark Comparative Matrix Card */}
        <div className="mb-16 bg-zinc-900/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-zinc-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Comparativo Direto de Desempenho</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                SitePro 72h vs. Agências Tradicionais (WordPress, Wix e Elementor)
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-bold self-start md:self-auto">
              <Activity size={14} className="text-emerald-400" />
              <span>Core Web Vitals Aprovado</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-6">
            {/* SitePro Side */}
            <div className="p-6 rounded-2xl bg-zinc-950 text-white border border-zinc-800 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs">
                      S
                    </div>
                    <span className="font-extrabold text-sm uppercase tracking-wider">SitePro Engine</span>
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Padrão de Elite
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">Velocidade</span>
                    <span className="text-lg sm:text-xl font-black text-emerald-400">0.28s</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">Google Score</span>
                    <span className="text-lg sm:text-xl font-black text-emerald-400">99-100</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">Conversão</span>
                    <span className="text-lg sm:text-xl font-black text-emerald-400">+240%</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-zinc-300 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>Código 100% puro e otimizado para as primeiras posições do Google</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>Carregamento instantâneo mesmo no 4G/5G mobile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>Zero vulnerabilidade de plugins desatualizados de terceiros</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Traditional Sites Side */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm uppercase tracking-wider text-zinc-400">
                    Sites Antigos / WordPress & Elementor
                  </span>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-950/60 text-rose-400 border border-rose-900">
                    Gargalo Crítico
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Velocidade</span>
                    <span className="text-lg sm:text-xl font-black text-rose-400">4.5s+</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Google Score</span>
                    <span className="text-lg sm:text-xl font-black text-amber-400">30-55</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Rejeição</span>
                    <span className="text-lg sm:text-xl font-black text-rose-400">&gt; 68%</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-zinc-400 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                    <span>Dezenas de plugins pesados gerando atrasos acumulados de carregamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                    <span>Travamentos frequentes e layouts quebrados após atualizações de tema</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                    <span>Penalização pesada no ranking de busca orgânica do Google</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Pillar Technology Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackItems.map((tech) => (
            <div
              key={tech.name}
              className="p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {tech.tag}
                  </span>
                </div>

                <div className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 mb-1">
                  {tech.category}
                </div>

                <h3 className="text-xl font-black text-white mb-2.5 tracking-tight">
                  {tech.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-zinc-400">
                <span>Padrão de Performance:</span>
                <span className="text-white font-mono">{tech.metrics}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
