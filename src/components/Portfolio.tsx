import { useState } from 'react';
import { 
  ArrowRight, Sparkles, Clock, CheckCircle2, 
  Eye, X, MessageCircle
} from 'lucide-react';

import realEstateImg from '../assets/images/portfolio_real_estate_1791204403300.jpg';
import medicalImg from '../assets/images/portfolio_site_medical_1786988107523.jpg';
import corporateImg from '../assets/images/portfolio_site_corporate_1786988085665.jpg';
import ecommerceImg from '../assets/images/portfolio_ecommerce_1791204416889.jpg';
import creativeImg from '../assets/images/portfolio_site_creative_1786988096673.jpg';
import heroImg from '../assets/images/hero_mockup_modern_web_design_1786988074777.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  badge: string;
  imageUrl: string;
  description: string;
  results: {
    conversion: string;
    speed: string;
    googleScore: string;
  };
  tags: string[];
  caseStudy: {
    client: string;
    industry: string;
    before: string;
    after: string;
    deliverables: string[];
    testimonialQuote: string;
    testimonialAuthor: string;
  };
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'Todos',
    'Redesign 360°',
    'Clínicas & Saúde',
    'B2B & Corporativo',
    'Imobiliárias & Luxo',
    'E-commerce & Lojas',
    'Landing Pages'
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Aura Prime Imóveis de Alto Padrão',
      category: 'Imobiliárias & Luxo',
      categorySlug: 'real_estate',
      badge: 'Redesign 360° • 72h',
      imageUrl: realEstateImg,
      description: 'Reestruturação completa de catálogo imobiliário para público AAA com filtros rápidos e fotos em altíssima definição.',
      results: {
        conversion: '+240% Contatos no WhatsApp',
        speed: '0.28s Carregamento',
        googleScore: '99 / 100'
      },
      tags: ['Filtros Rápidos', 'Design Minimalista', 'Galeria 4K', 'SEO Local'],
      caseStudy: {
        client: 'Aura Prime Real Estate',
        industry: 'Imóveis de Luxo e Coberturas',
        before: 'Site antigo no WordPress demorava 4.5s para abrir no celular, com imagens pesadas e perda constante de clientes qualificados.',
        after: 'Arquitetura sob medida em React com fotos de alta definição com carregamento instantâneo e botão de WhatsApp direto por imóvel.',
        deliverables: ['Catálogo Interativo', 'Integração WhatsApp CRM', 'Redirecionamentos 301 SEO', 'Otimização Mobile-First'],
        testimonialQuote: 'O novo site mudou completamente a percepção de valor dos nossos empreendimentos. O retorno foi imediato.',
        testimonialAuthor: 'Henrique Valente • Diretor Comercial'
      }
    },
    {
      id: 2,
      title: 'Instituto Dermatológico BioPelle',
      category: 'Clínicas & Saúde',
      categorySlug: 'health',
      badge: 'Funil de Agendamentos VIP',
      imageUrl: medicalImg,
      description: 'Presença digital de prestígio focada em transformar visitantes em agendamentos particulares imediatos.',
      results: {
        conversion: '+185% Consultas Particulares',
        speed: '0.32s Carregamento',
        googleScore: '100 / 100'
      },
      tags: ['Agendamento WhatsApp', 'Mural de Especialidades', 'Prova Social', 'SSL Blindado'],
      caseStudy: {
        client: 'Clínica BioPelle Dermatologia',
        industry: 'Saúde, Estética Médica & Dermatologia',
        before: 'Página antiga sem foco comercial, com textos confusos e formulário longo que quase nenhum paciente preenchia no smartphone.',
        after: 'Funil elegante de 1 página com apresentação dos tratamentos, quebra de objeções e agendamento direto com a recepção.',
        deliverables: ['Apresentação de Tratamentos', 'Mural de Avaliações Google', 'SEO para Busca Local', 'Design Editorial'],
        testimonialQuote: 'Em menos de 48 horas após a entrega, já estávamos recebendo novos contatos particulares sem parar.',
        testimonialAuthor: 'Dra. Mariana Costa • Médica Titular'
      }
    },
    {
      id: 3,
      title: 'Vanguard Capital & Consultoria M&A',
      category: 'B2B & Corporativo',
      categorySlug: 'b2b',
      badge: 'Autoridade Institucional',
      imageUrl: corporateImg,
      description: 'Portal corporativo de alto escalão para atração de fundos de investimento e empresas B2B.',
      results: {
        conversion: '+310% Reuniões Qualificadas',
        speed: '0.25s Carregamento',
        googleScore: '98 / 100'
      },
      tags: ['Design Dark Luxury', 'Integração Calendly', 'Segurança Bancária', 'Multi-idioma'],
      caseStudy: {
        client: 'Vanguard M&A Advisory',
        industry: 'Fusões, Aquisições & Consultoria Financeira',
        before: 'Layout institucional genérico que não transmitia a sofisticação e segurança exigidas por diretores financeiros.',
        after: 'Identidade visual sóbria, tipografia de prestígio, cases de transações e agendamento de reuniões com 1 clique.',
        deliverables: ['Apresentação de Transações', 'Integração de Agenda Cal.com', 'Copywriting Executivo', 'Otimização Core Web Vitals'],
        testimonialQuote: 'O projeto nos posicionou no mesmo nível visual das maiores bancas globais de investimento.',
        testimonialAuthor: 'Ricardo Silveira • Sócio-Fundador'
      }
    },
    {
      id: 4,
      title: 'Maison Noir • Cosméticos & Luxo',
      category: 'E-commerce & Lojas',
      categorySlug: 'ecommerce',
      badge: 'Loja Ultrarrápida',
      imageUrl: ecommerceImg,
      description: 'Vitrine minimalista de produtos exclusivos com checkout otimizado e zero fricção de compra.',
      results: {
        conversion: '+165% Taxa de Checkout',
        speed: '0.35s Carregamento',
        googleScore: '99 / 100'
      },
      tags: ['Catálogo Rápido', 'Stripe Checkout', 'Filtros Dinâmicos', 'Mobile First'],
      caseStudy: {
        client: 'Maison Noir Parfums',
        industry: 'Perfumaria de Nicho & Cosméticos',
        before: 'Loja anterior sofria com abandono de carrinho devido a lentidão excessiva e checkout complexo no celular.',
        after: 'Design limpo, fotos com zoom instantâneo, cálculo de frete rápido e checkout simplificado em 2 etapas.',
        deliverables: ['Catálogo de Produtos', 'Checkout Sem Fricção', 'Otimização de Imagens WebP', 'Painel Simplificado'],
        testimonialQuote: 'Nossas vendas mobile dobraram na primeira semana de lançamento da nova loja.',
        testimonialAuthor: 'Camila Peixoto • Head de E-commerce'
      }
    },
    {
      id: 5,
      title: 'Nexus Growth • Agência Criativa & Tech',
      category: 'Redesign 360°',
      categorySlug: 'redesign',
      badge: 'Migração WordPress → React',
      imageUrl: creativeImg,
      description: 'Transformação completa de portal institucional para framework ultra moderno com micro-interações fluidas.',
      results: {
        conversion: '+195% Solicitações de Orçamento',
        speed: '0.22s Carregamento',
        googleScore: '100 / 100'
      },
      tags: ['React 19 & Vite', 'Micro-Interações', 'Calculadora de ROI', 'SEO Dominante'],
      caseStudy: {
        client: 'Nexus Digital Studio',
        industry: 'Tecnologia & Marketing Digital',
        before: 'Site antigo sofria com erros de plugins e demora de mais de 5 segundos no carregamento.',
        after: 'Código limpo, arquitetura moderna em React, design futurista minimalista e formulário VIP de orçamento.',
        deliverables: ['Código 100% Puro', 'Calculadora Interativa', 'Preservação de Todas as URLs', 'Entrega em 72h'],
        testimonialQuote: 'Impressionante a agilidade da equipe da SitePro. O site voa e nossos clientes elogiam diariamente.',
        testimonialAuthor: 'André Ruiz • CEO'
      }
    },
    {
      id: 6,
      title: 'Summit Horizon • Lançamento Imobiliário',
      category: 'Landing Pages',
      categorySlug: 'landing_page',
      badge: 'Landing Page de Alta Conversão',
      imageUrl: heroImg,
      description: 'Página de aterrissagem estratégica para campanhas de tráfego pago com foco em captação maciça de leads qualificados.',
      results: {
        conversion: '+275% Leads de Campanhas',
        speed: '0.26s Carregamento',
        googleScore: '99 / 100'
      },
      tags: ['Psicologia de Vendas', 'Pixel Meta / Google', 'WhatsApp Flutuante', 'Vídeo Otimizado'],
      caseStudy: {
        client: 'Horizon Empreendimentos',
        industry: 'Construção Civil & Lançamentos',
        before: 'O custo por lead em anúncios no Google e Meta estava muito alto por conta da taxa de rejeição da página antiga.',
        after: 'Landing Page de impacto imediato, com planta interativa, vídeo sem travamento e botão de agendamento de visita.',
        deliverables: ['Copywriting Persuasivo', 'Configuração de Tags & Pixels', 'Carregamento Instantâneo', 'Garantia 72h'],
        testimonialQuote: 'Reduzimos nosso custo por lead pela metade já no primeiro final de semana de campanha.',
        testimonialAuthor: 'Felipe Rocha • Diretor de Tráfego'
      }
    }
  ];

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => {
        if (activeCategory === 'Redesign 360°') return p.category === 'Redesign 360°' || p.categorySlug === 'redesign';
        if (activeCategory === 'Clínicas & Saúde') return p.category === 'Clínicas & Saúde' || p.categorySlug === 'health';
        if (activeCategory === 'B2B & Corporativo') return p.category === 'B2B & Corporativo' || p.categorySlug === 'b2b';
        if (activeCategory === 'Imobiliárias & Luxo') return p.category === 'Imobiliárias & Luxo' || p.categorySlug === 'real_estate';
        if (activeCategory === 'E-commerce & Lojas') return p.category === 'E-commerce & Lojas' || p.categorySlug === 'ecommerce';
        if (activeCategory === 'Landing Pages') return p.category === 'Landing Pages' || p.categorySlug === 'landing_page';
        return p.category === activeCategory;
      });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 sm:gap-8 pb-8 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
              <Sparkles size={12} className="text-amber-400" />
              Portfólio & Cases de Sucesso
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Projetos reais entregues em 72h. <br />
              <span className="text-zinc-500">
                Resultados que superam o mercado.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-3">
              Não entregamos apenas sites bonitos. Entregamos plataformas ultrarrápidas desenhadas para gerar autoridade imediata e retorno financeiro comprovado.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Todos os projetos entregues no prazo de 72 horas</span>
            </div>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-nowrap overflow-x-auto pb-3 mb-10 lg:flex-wrap gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl"
            >
              <div>
                {/* Image Container with Browser Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 p-2">
                  <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] truncate max-w-[140px] opacity-60">
                      {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com.br
                    </span>
                    <span className="text-[8px] font-bold text-emerald-400">0.3s</span>
                  </div>

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/10 shadow-md">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="font-bold uppercase tracking-wider">{project.category}</span>
                    <span className="flex items-center gap-1 font-semibold text-emerald-400">
                      <Clock size={12} />
                      72h
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Resultado</div>
                      <div className="text-xs sm:text-sm font-black text-emerald-400 truncate">
                        {project.results.conversion}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Google Score</div>
                      <div className="text-xs sm:text-sm font-black text-white">
                        {project.results.googleScore}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 px-4 rounded-xl bg-white text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.99] transition-all cursor-pointer shadow-xs"
                >
                  <Eye size={15} />
                  <span>Ver Estudo de Caso Completo</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Portfolio */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Gostou dos resultados? O próximo case de sucesso pode ser o da sua empresa.
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Inicie o diagnóstico do seu site hoje e tenha seu novo posicionamento de mercado entregue em até 72 horas.
            </p>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm whitespace-nowrap hover:bg-zinc-200 transition-colors shadow-md flex-shrink-0"
          >
            Começar Meu Redesign Agora
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Estudo de Caso • Entrega em 72h
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Image Preview with Device Frame */}
              <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 shadow-inner">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-xl object-cover max-h-[380px]"
                />
              </div>

              {/* Metrics Highlight */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Conversão</div>
                  <div className="text-sm sm:text-base font-black text-emerald-400">
                    {selectedProject.results.conversion}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Velocidade</div>
                  <div className="text-sm sm:text-base font-black text-white">
                    {selectedProject.results.speed}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Google Score</div>
                  <div className="text-sm sm:text-base font-black text-white">
                    {selectedProject.results.googleScore}
                  </div>
                </div>
              </div>

              {/* Before vs After Comparison */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/20 border border-rose-900/60 space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Como era o site antigo (Antes):
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.caseStudy.before}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/60 space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Transformação SitePro 72h (Depois):
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.caseStudy.after}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-3">
                  Entregas Realizadas em 72 Horas:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.caseStudy.deliverables.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white flex items-center gap-2"
                    >
                      <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <p className="text-xs sm:text-sm italic text-zinc-300 leading-relaxed">
                  "{selectedProject.caseStudy.testimonialQuote}"
                </p>
                <div className="text-xs font-bold text-white">
                  {selectedProject.caseStudy.testimonialAuthor}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 rounded-xl bg-white text-black font-black text-sm text-center flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-md"
                >
                  <Sparkles size={16} />
                  <span>Quero um Site com esse Padrão em 72h</span>
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-xl border border-zinc-800 text-zinc-300 font-bold text-sm text-center hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
