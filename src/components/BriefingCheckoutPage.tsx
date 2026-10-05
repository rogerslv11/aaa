import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Shield, Lock, CreditCard, 
  Sparkles, Clock, Globe, MessageSquare, Palette, Layout, 
  Copy, Check, Zap, Phone, Mail, Building,
  Star, AlertCircle, RefreshCw, Layers,
  Gauge, CheckSquare, Search,
  Tag, ShieldCheck, CheckCheck
} from 'lucide-react';
import { BriefingData } from '../types';

interface BriefingCheckoutPageProps {
  initialPlan?: 'essential' | 'professional' | 'elite';
  onBackToHome: () => void;
}

export default function BriefingCheckoutPage({ 
  initialPlan = 'professional', 
  onBackToHome,
}: BriefingCheckoutPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Coupon state
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Initial form data with localStorage persistence
  const [formData, setFormData] = useState<BriefingData>(() => {
    const saved = localStorage.getItem('vanguard_briefing_draft');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      industry: 'Serviços Profissionais',
      cityCountry: '',
      projectType: 'full_redesign',
      currentWebsite: '',
      currentPlatform: 'WordPress / Elementor',
      currentWebsiteAge: '1 a 3 anos',

      currentPainPoints: [
        'design_outdated',
        'low_conversion',
        'slow_speed',
        'broken_mobile'
      ],
      satisfactionRating: 2,
      biggestFrustration: '',
      businessDescription: '',
      targetAudience: '',
      competitiveDifferential: '',

      assetsToKeep: [
        'domain_dns',
        'existing_logo',
        'seo_urls'
      ],
      technicalAccessStatus: 'has_all_access',
      restructuringArchitecture: 'one_page_funnel',

      redesignGoals: [
        'leads_whatsapp',
        'brand_authority',
        'speed_score95'
      ],
      brandTone: 'Moderno e Minimalista',
      colorPaletteChoice: 'dark_luxury',
      hasLogo: 'yes',
      competitorWebsites: '',
      referenceWebsites: '',

      desiredSections: [
        'Hero de Alto Impacto e Conversão',
        'Comparativo de Transformação / Casos de Sucesso',
        'Matriz de Serviços Reestruturada',
        'Sobre Nós e Autoridade de Marca',
        'Mural de Depoimentos & Avaliações Verificadas',
        'Botão Flutuante Inteligente de WhatsApp',
        'Formulário VIP de Contato e Orçamento',
        'Perguntas Frequentes (Quebra de Objeções)'
      ],
      specialIntegrations: [
        'whatsapp_floating',
        'google_analytics4',
        'meta_pixel'
      ],
      specialFeaturesNotes: '',

      selectedPlan: initialPlan,
      addons: {
        migrationSeoRedirects: true,
        seoContentPackage: true,
        speedOptimizationScore95: false,
        expressDelivery24h: false,
        monthlyMaintenance: false,
      },

      paymentMethod: 'card',
      cardDetails: {
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
      }
    };
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber] = useState(() => `VS72-${Math.floor(10000 + Math.random() * 90000)}`);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [isAnalyzingUrl, setIsAnalyzingUrl] = useState(false);
  const [urlAnalyzed, setUrlAnalyzed] = useState(false);

  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem('vanguard_briefing_draft', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    setValidationError('');
  }, [currentStep, isSubmitted]);

  // Plan pricing
  const planPrices: Record<'essential' | 'professional' | 'elite', number> = {
    essential: 425,
    professional: 785,
    elite: 1450,
  };

  const addonPrices = {
    migrationSeoRedirects: 65,
    seoContentPackage: 95,
    speedOptimizationScore95: 75,
    expressDelivery24h: 120,
    monthlyMaintenance: 45,
  };

  const calculateSubtotal = () => {
    let total = planPrices[formData.selectedPlan];
    if (formData.addons.migrationSeoRedirects) total += addonPrices.migrationSeoRedirects;
    if (formData.addons.seoContentPackage) total += addonPrices.seoContentPackage;
    if (formData.addons.speedOptimizationScore95) total += addonPrices.speedOptimizationScore95;
    if (formData.addons.expressDelivery24h) total += addonPrices.expressDelivery24h;
    if (formData.addons.monthlyMaintenance) total += addonPrices.monthlyMaintenance;
    return total;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return Math.max(0, subtotal - appliedDiscount);
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'VANGUARD50' || clean === 'DESCONTO50' || clean === 'REESTRUTURA50') {
      setAppliedDiscount(50);
      setCouponSuccess('Cupom aplicado com sucesso! Desconto de -50€ concedido.');
      setCouponError('');
    } else if (clean === 'VIP100') {
      setAppliedDiscount(100);
      setCouponSuccess('Cupom VIP aplicado! Desconto especial de -100€ concedido.');
      setCouponError('');
    } else {
      setCouponError('Código de cupom inválido ou expirado.');
      setCouponSuccess('');
    }
  };

  const handleSimulateUrlAudit = () => {
    if (!formData.currentWebsite.trim()) return;
    setIsAnalyzingUrl(true);
    setTimeout(() => {
      setIsAnalyzingUrl(false);
      setUrlAnalyzed(true);
    }, 400);
  };

  const fillExampleBusiness = () => {
    setFormData(prev => ({
      ...prev,
      businessDescription: 'Somos um estúdio de serviços especializados de alto padrão. Atendemos clientes B2B e B2C com atendimento individualizado e foco total em entregar resultados rápidos.',
      targetAudience: 'Empresários, diretores e profissionais que valorizam excelência, pontualidade e querem transmitir uma imagem de autoridade indiscutível no mercado.',
      competitiveDifferential: 'Entrega ágil em 72 horas com garantia contratual, sem intermediários, arquitetura de conversão sob medida e código de alta performance.',
      biggestFrustration: 'Nosso site atual demora mais de 4 segundos para carregar, tem um visual ultrapassado e quase nenhum visitante entra em contato pelo WhatsApp.'
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.companyName.trim()) {
        setValidationError('Por favor, informe o nome da sua empresa ou marca.');
        return;
      }
      if (!formData.contactName.trim()) {
        setValidationError('Por favor, informe o nome do responsável pelo projeto.');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setValidationError('Por favor, insira um e-mail de contato válido.');
        return;
      }
      if (!formData.phone.trim()) {
        setValidationError('Por favor, insira o número de WhatsApp para alinhamento direto.');
        return;
      }
      if (formData.projectType !== 'new_site' && !formData.currentWebsite.trim()) {
        setValidationError('Por favor, insira a URL do site atual a ser reestruturado (ou marque "Criar Site do Zero").');
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.businessDescription.trim()) {
        setValidationError('Por favor, descreva brevemente o que sua empresa oferece.');
        return;
      }
      if (formData.currentPainPoints.length === 0) {
        setValidationError('Por favor, selecione ao menos um ponto de melhoria no site atual.');
        return;
      }
    }

    setValidationError('');
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setValidationError('');
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onBackToHome();
    }
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 800);
  };

  const togglePainPoint = (point: string) => {
    setFormData(prev => ({
      ...prev,
      currentPainPoints: prev.currentPainPoints.includes(point)
        ? prev.currentPainPoints.filter(p => p !== point)
        : [...prev.currentPainPoints, point]
    }));
  };

  const toggleAssetToKeep = (asset: string) => {
    setFormData(prev => ({
      ...prev,
      assetsToKeep: prev.assetsToKeep.includes(asset)
        ? prev.assetsToKeep.filter(a => a !== asset)
        : [...prev.assetsToKeep, asset]
    }));
  };

  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      redesignGoals: prev.redesignGoals.includes(goal)
        ? prev.redesignGoals.filter(g => g !== goal)
        : [...prev.redesignGoals, goal]
    }));
  };

  const toggleSection = (sec: string) => {
    setFormData(prev => ({
      ...prev,
      desiredSections: prev.desiredSections.includes(sec)
        ? prev.desiredSections.filter(s => s !== sec)
        : [...prev.desiredSections, sec]
    }));
  };

  const toggleIntegration = (integ: string) => {
    setFormData(prev => ({
      ...prev,
      specialIntegrations: prev.specialIntegrations.includes(integ)
        ? prev.specialIntegrations.filter(i => i !== integ)
        : [...prev.specialIntegrations, integ]
    }));
  };

  const generateWhatsAppMessage = () => {
    const planName = formData.selectedPlan === 'essential' ? 'Plano Redesign Essencial (425€)' : formData.selectedPlan === 'professional' ? 'Plano Reestruturação Pro (785€)' : 'Plano Redesign Elite (1.450€)';
    
    const painPointsMap: Record<string, string> = {
      design_outdated: 'Design desatualizado e pouco profissional',
      slow_speed: 'Carregamento lento / Penalização no Google',
      low_conversion: 'Baixa conversão (poucos contatos e vendas)',
      broken_mobile: 'Experiência ruim ou desconfigurada no celular',
      confusing_structure: 'Estrutura confusa e navegação difícil',
      hard_to_edit: 'Plataforma complexa de manter ou atualizar',
      no_seo: 'Não aparece bem posicionado no Google',
      insecure: 'Instabilidade técnica ou vulnerabilidades'
    };

    const text = `💎 *SOLICITAÇÃO DE REDESIGN & BRIEFING VANGUARD STUDIO (Ref: ${orderNumber})*
    
*1. DIAGNÓSTICO & DADOS DO NEGÓCIO:*
• Empresa: ${formData.companyName}
• Responsável: ${formData.contactName}
• WhatsApp: ${formData.phone}
• E-mail: ${formData.email}
• Segmento: ${formData.industry}
• Tipo de Projeto: ${formData.projectType.toUpperCase()}
• Site Atual: ${formData.currentWebsite || 'Não possui / Criar do zero'}
• Plataforma Atual: ${formData.currentPlatform}
• Tempo de Atividade: ${formData.currentWebsiteAge}
• Nível de Satisfação Atual: ${formData.satisfactionRating}/5 ⭐

*2. PRINCIPAIS DORES E PONTOS A CORRIGIR:*
${formData.currentPainPoints.map(p => `• ${painPointsMap[p] || p}`).join('\n')}
${formData.biggestFrustration ? `• Maior Frustração: ${formData.biggestFrustration}` : ''}

*3. O QUE MANTER & ARQUITETURA:*
• Ativos a Manter: ${formData.assetsToKeep.join(', ')}
• Acessos Técnicos: ${formData.technicalAccessStatus}
• Arquitetura Desejada: ${formData.restructuringArchitecture}

*4. OBJETIVOS DO REDESIGN:*
• Metas: ${formData.redesignGoals.join(', ')}
• Tom da Marca: ${formData.brandTone}
• Paleta de Cores: ${formData.colorPaletteChoice}
• Logotipo: ${formData.hasLogo === 'yes' ? 'Pronto em alta qualidade' : formData.hasLogo === 'no' ? 'Criar novo logotipo' : 'Precisa de vetorização/ajuste'}
• Referências / Concorrentes: ${formData.competitorWebsites || formData.referenceWebsites || 'Critério técnico da agência'}

*5. PLANO SELECIONADO & INVESTIMENTO:*
• Plano: ${planName}
• Total a Pagar: ${calculateTotal()}€ ${appliedDiscount > 0 ? `(Desconto de -${appliedDiscount}€ aplicado)` : ''}
• Forma de Pagamento: ${formData.paymentMethod.toUpperCase()}

*6. SEÇÕES REESTRUTURADAS:*
${formData.desiredSections.map(s => `• ${s}`).join('\n')}

Olá equipe SitePro 72h! Concluí o preenchimento do briefing técnico para o redesign do meu site. Aguardo para iniciarmos o ciclo de desenvolvimento em 72 horas.`;

    return encodeURIComponent(text);
  };

  const copyBriefingSummaryToClipboard = () => {
    const rawText = decodeURIComponent(generateWhatsAppMessage());
    navigator.clipboard.writeText(rawText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const colorPalettes = [
    { 
      id: 'dark_luxury', 
      name: 'Dark Luxury & Carbono', 
      desc: 'Preto Profundo, Branco Puro & Grafite Refinado',
      bgClass: 'bg-zinc-950 text-white',
      accentColor: '#ffffff',
      colors: ['#09090b', '#27272a', '#ffffff'] 
    },
    { 
      id: 'tech_blue', 
      name: 'Tech Navy & Safira', 
      desc: 'Azul Corporativo de Elite & Branco Neve',
      bgClass: 'bg-slate-900 text-blue-400',
      accentColor: '#3b82f6',
      colors: ['#0f172a', '#2563eb', '#f8fafc'] 
    },
    { 
      id: 'emerald_growth', 
      name: 'Esmeralda & Ouro Imperial', 
      desc: 'Autoridade para Clínicas, Finanças & Alto Padrão',
      bgClass: 'bg-emerald-950 text-emerald-300',
      accentColor: '#10b981',
      colors: ['#064e3b', '#10b981', '#fef3c7'] 
    },
    { 
      id: 'warm_minimal', 
      name: 'Minimalista Quente & Editorial', 
      desc: 'Tons Areia, Âmbar & Tipografia Sofisticada',
      bgClass: 'bg-stone-900 text-amber-200',
      accentColor: '#d97706',
      colors: ['#1c1917', '#d97706', '#f5f5f4'] 
    }
  ];

  const currentPaletteObj = colorPalettes.find(p => p.id === formData.colorPaletteChoice) || colorPalettes[0];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200 pb-24">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Voltar para a página inicial</span>
            <span className="sm:hidden">Voltar</span>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-black font-black text-lg shadow-xs">
              S
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold tracking-tight uppercase text-lg text-white">
                SitePro
              </span>
              <span className="text-xs font-black px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                72h
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Garantia 72h Ativa</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {!isSubmitted ? (
          <div>
            {/* Header Title and Step Progress */}
            <div className="mb-8 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-3">
                <Sparkles size={13} className="text-amber-500" />
                Briefing Estratégico & Engenharia de Conversão
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight leading-tight mb-2">
                Redesign & Reestruturação em 72h
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
                Preencha o diagnóstico técnico abaixo para planejarmos a nova arquitetura do seu site.
              </p>
            </div>

            {/* Stepper Progress Bar */}
            <div className="mb-10 max-w-4xl mx-auto">
              <div className="grid grid-cols-6 gap-2 sm:gap-3 relative">
                {[
                  { step: 1, title: 'Diagnóstico Web', icon: <Globe size={15} /> },
                  { step: 2, title: 'Dores & Auditoria', icon: <AlertCircle size={15} /> },
                  { step: 3, title: 'Arquitetura', icon: <Layers size={15} /> },
                  { step: 4, title: 'Identidade & Metas', icon: <Palette size={15} /> },
                  { step: 5, title: 'Seções & Módulos', icon: <Layout size={15} /> },
                  { step: 6, title: 'Plano & Checkout', icon: <CreditCard size={15} /> }
                ].map((s) => {
                  const isDone = currentStep > s.step;
                  const isCurrent = currentStep === s.step;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => {
                        if (s.step < currentStep) setCurrentStep(s.step);
                      }}
                      disabled={s.step > currentStep}
                      className={`flex flex-col items-center text-center cursor-pointer transition-all ${
                        s.step > currentStep ? 'opacity-40 cursor-not-allowed' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm mb-1.5 transition-colors ${
                        isDone
                          ? 'bg-emerald-500 text-white'
                          : isCurrent
                          ? 'bg-black dark:bg-white text-white dark:text-black font-extrabold'
                          : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 border border-zinc-200 dark:border-zinc-800'
                      }`}>
                        {isDone ? <Check size={16} strokeWidth={3} /> : s.icon}
                      </div>
                      <span className={`text-[10px] sm:text-xs font-bold leading-tight line-clamp-1 ${
                        isCurrent ? 'text-black dark:text-white font-extrabold' : 'text-zinc-500'
                      }`}>
                        <span className="hidden sm:inline">Etapa {s.step}: </span>{s.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Progress Line */}
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div 
                  className="bg-black dark:bg-white h-full transition-all duration-200"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Validation Banner */}
            {validationError && (
              <div className="max-w-4xl mx-auto mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-300 flex items-center gap-3 text-sm font-semibold">
                <AlertCircle size={20} className="flex-shrink-0 text-rose-500" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Form Split Layout: Left Form / Right Live Preview & Cart Deck */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Multi-step Form Content */}
              <div className="lg:col-span-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                
                {/* STEP 1: Diagnóstico e Dados de Contato */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        <span>Etapa 1 de 6</span> • <span>Diagnóstico do Projeto</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                        Qual o foco do projeto e dados de contato?
                      </h2>
                      <p className="text-zinc-500 text-sm mt-1">
                        Selecione o tipo de trabalho e informe seus canais para alinhamento prioritário.
                      </p>
                    </div>

                    {/* Project Scope Selector */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Tipo de Escopo Principal *
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          { 
                            id: 'full_redesign', 
                            title: 'Redesign Completo 360°', 
                            desc: 'Modernização visual total, nova identidade, textos de vendas e alta velocidade.',
                            badge: 'Mais Escolhido',
                            icon: <Sparkles size={18} className="text-amber-500" />
                          },
                          { 
                            id: 'ux_restructure', 
                            title: 'Reestruturação de Vendas / Funil', 
                            desc: 'Reorganização estratégica de seções para multiplicar contatos e leads qualificados.',
                            badge: 'Foco em Vendas',
                            icon: <Layers size={18} className="text-blue-500" />
                          },
                          { 
                            id: 'speed_mobile_fix', 
                            title: 'Otimização Mobile & Performance', 
                            desc: 'Correção de visual quebrado no celular, carregamento ultrarrápido e SEO Google.',
                            badge: 'Velocidade Extrema',
                            icon: <Zap size={18} className="text-emerald-500" />
                          },
                          { 
                            id: 'new_site', 
                            title: 'Criar Site Novo do Zero', 
                            desc: 'Ainda não possuo site no ar e desejo lançar minha presença digital de elite em 72h.',
                            badge: 'Novo Lançamento',
                            icon: <Globe size={18} className="text-purple-500" />
                          }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: item.id as any })}
                            className={`p-4 rounded-2xl text-left border transition-colors flex flex-col justify-between cursor-pointer ${
                              formData.projectType === item.id
                                ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800'
                                : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900/50'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {item.icon}
                                <span className="font-black text-sm text-black dark:text-white">{item.title}</span>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              {item.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Current Website URL & Instant Diagnostic */}
                    {formData.projectType !== 'new_site' && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                            URL do Site Atual a ser Reformulado *
                          </label>
                          <div className="flex gap-2">
                            <div className="relative flex-1">
                              <Globe className="absolute left-3.5 top-3.5 text-zinc-400" size={18} />
                              <input
                                type="text"
                                placeholder="ex: https://meusiteantigo.com.br"
                                value={formData.currentWebsite}
                                onChange={(e) => {
                                  setFormData({ ...formData, currentWebsite: e.target.value });
                                  setUrlAnalyzed(false);
                                }}
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={handleSimulateUrlAudit}
                              disabled={!formData.currentWebsite.trim() || isAnalyzingUrl}
                              className="px-4 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold flex items-center gap-1.5 hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer flex-shrink-0"
                            >
                              {isAnalyzingUrl ? (
                                <>
                                  <RefreshCw size={14} className="animate-spin" />
                                  <span>Verificando...</span>
                                </>
                              ) : (
                                <>
                                  <Search size={14} />
                                  <span>Verificar URL</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* URL Diagnostic Feedback Box */}
                        {urlAnalyzed && (
                          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs space-y-2">
                            <div className="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
                              <span className="flex items-center gap-1.5">
                                <Gauge size={15} />
                                Diagnóstico do Site Atual:
                              </span>
                              <span className="px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-black">
                                Potencial: +180% Conversão
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center pt-1">
                              <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-amber-100 dark:border-amber-900">
                                <span className="text-zinc-400 block text-[10px]">Carregamento Atual</span>
                                <span className="font-black text-rose-500 text-xs sm:text-sm">3.8s (Lento)</span>
                              </div>
                              <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-amber-100 dark:border-amber-900">
                                <span className="text-zinc-400 block text-[10px]">Conversão Estimada</span>
                                <span className="font-black text-amber-600 text-xs sm:text-sm">&lt; 1.2%</span>
                              </div>
                              <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-amber-100 dark:border-amber-900">
                                <span className="text-zinc-400 block text-[10px]">Alvo Vanguard</span>
                                <span className="font-black text-emerald-600 text-xs sm:text-sm">0.3s & 99 Score</span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-3 pt-1">
                          <div>
                            <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1">
                              Plataforma ou CMS Atual
                            </label>
                            <select
                              value={formData.currentPlatform}
                              onChange={(e) => setFormData({ ...formData, currentPlatform: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                            >
                              <option value="WordPress / Elementor">WordPress / Elementor / Divi</option>
                              <option value="Wix / Squarespace">Wix / Squarespace / Webflow</option>
                              <option value="HTML / PHP Antigo">Código Próprio / HTML / PHP Antigo</option>
                              <option value="Shopify / Loja Integrada">Shopify / WooCommerce / E-commerce</option>
                              <option value="Outro / Não Tenho Certeza">Outro / Não tenho certeza</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1">
                              Idade do site atual
                            </label>
                            <select
                              value={formData.currentWebsiteAge}
                              onChange={(e) => setFormData({ ...formData, currentWebsiteAge: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                            >
                              <option value="Menos de 1 ano">Menos de 1 ano</option>
                              <option value="1 a 3 anos">1 a 3 anos</option>
                              <option value="3 a 6 anos">3 a 6 anos</option>
                              <option value="Mais de 6 anos">Mais de 6 anos</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contact & Business Basics */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                          Nome da Empresa ou Marca *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 text-zinc-400" size={16} />
                          <input
                            type="text"
                            placeholder="ex: Lumina Consultoria VIP"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                          Nome do Responsável *
                        </label>
                        <input
                          type="text"
                          placeholder="ex: Carlos Albuquerque"
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                          WhatsApp de Contato Direto *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 text-zinc-400" size={16} />
                          <input
                            type="tel"
                            placeholder="ex: +55 (11) 98765-4321"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                          E-mail Corporativo *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 text-zinc-400" size={16} />
                          <input
                            type="email"
                            placeholder="ex: contato@suaempresa.com.br"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                          Setor / Nicho de Atuação
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        >
                          <option value="Serviços Profissionais">Serviços Profissionais & B2B</option>
                          <option value="Clínicas, Médicos e Saúde">Clínicas, Médicos & Saúde</option>
                          <option value="Advocacia e Jurídico">Advocacia & Escritórios Jurídicos</option>
                          <option value="Imobiliárias e Corretores">Imobiliárias & Corretores</option>
                          <option value="Arquitetura e Engenharia">Arquitetura, Design & Engenharia</option>
                          <option value="Consultoria e Treinamentos">Consultoria, Cursos & Infoprodutos</option>
                          <option value="Gastronomia e Restaurantes">Gastronomia & Restaurantes</option>
                          <option value="Comércio e E-commerce">Comércio & E-commerce</option>
                          <option value="Outro Segmento">Outro Segmento</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
                          Cidade / País de Atuação
                        </label>
                        <input
                          type="text"
                          placeholder="ex: São Paulo, Brasil (ou Global)"
                          value={formData.cityCountry}
                          onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Dores, Auditoria & Posicionamento */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        <span>Etapa 2 de 6</span> • <span>Auditoria de Dores & Conteúdo</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                        O que não está funcionando no site atual?
                      </h2>
                      <p className="text-zinc-500 text-sm mt-1">
                        Mapeamos com precisão os gargalos que estão fazendo sua empresa perder vendas.
                      </p>
                    </div>

                    {/* Satisfaction Rating */}
                    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                          Nível de satisfação com o site atual:
                        </label>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800">
                          {formData.satisfactionRating} de 5 Estrelas
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData({ ...formData, satisfactionRating: star })}
                            className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-1 border transition-colors cursor-pointer ${
                              formData.satisfactionRating >= star
                                ? 'bg-amber-400/15 border-amber-400 text-amber-500 font-bold'
                                : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-400'
                            }`}
                          >
                            <Star size={16} className={formData.satisfactionRating >= star ? 'fill-amber-400 text-amber-400' : ''} />
                            <span className="text-xs font-bold">{star}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pain Points Multi-selector */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Quais os maiores problemas a corrigir? (Selecione todos que se aplicam) *
                      </label>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {[
                          { id: 'design_outdated', label: 'Visual antigo e pouco profissional', desc: 'Não reflete a qualidade real e autoridade da empresa.' },
                          { id: 'slow_speed', label: 'Carregamento lento e pesado', desc: 'Visitantes abandonam antes de ler a proposta.' },
                          { id: 'low_conversion', label: 'Baixa conversão / Poucos leads', desc: 'Recebe visitas, mas ninguém clica no WhatsApp ou compra.' },
                          { id: 'broken_mobile', label: 'Experiência desconfigurada no celular', desc: 'Botões fora de lugar e fontes desproporcionais.' },
                          { id: 'confusing_structure', label: 'Estrutura confusa e difícil navegação', desc: 'Cliente se perde e não entende os planos ou serviços.' },
                          { id: 'hard_to_edit', label: 'Plataforma difícil de atualizar', desc: 'Depende de terceiros para mudar um texto ou foto.' },
                          { id: 'no_seo', label: 'Não é encontrado no Google', desc: 'Falta de otimização estrutural para ranqueamento local.' },
                          { id: 'insecure', label: 'Instabilidade ou travamentos', desc: 'Site sai do ar com frequência ou apresenta erros.' }
                        ].map((pain) => {
                          const isSelected = formData.currentPainPoints.includes(pain.id);
                          return (
                            <button
                              key={pain.id}
                              type="button"
                              onClick={() => togglePainPoint(pain.id)}
                              className={`p-3 rounded-2xl text-left border transition-colors flex items-start gap-2.5 cursor-pointer ${
                                isSelected
                                  ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800/80 font-semibold'
                                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40'
                              }`}
                            >
                              <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'bg-black dark:bg-white text-white dark:text-black' : 'border border-zinc-300 dark:border-zinc-700'
                              }`}>
                                {isSelected && <Check size={12} strokeWidth={3} />}
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-black dark:text-white leading-tight">{pain.label}</h4>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{pain.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Business Description & Value Proposition */}
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                          Resumo dos Serviços & Proposta de Valor *
                        </label>
                        <button
                          type="button"
                          onClick={fillExampleBusiness}
                          className="text-[11px] font-bold text-zinc-500 hover:text-black dark:hover:text-white flex items-center gap-1 cursor-pointer underline"
                        >
                          <Sparkles size={12} className="text-amber-500" />
                          Preencher exemplo rápido
                        </button>
                      </div>

                      <textarea
                        rows={3}
                        placeholder="Quais serviços ou produtos principais você comercializa e qual a faixa de preço média?"
                        value={formData.businessDescription}
                        onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">
                            Público-Alvo e Perfil do Cliente Ideal
                          </label>
                          <input
                            type="text"
                            placeholder="ex: Médicos, advogados, investidores"
                            value={formData.targetAudience}
                            onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">
                            Principal Diferencial sobre Concorrentes
                          </label>
                          <input
                            type="text"
                            placeholder="ex: Atendimento no mesmo dia, 10 anos de mercado"
                            value={formData.competitiveDifferential}
                            onChange={(e) => setFormData({ ...formData, competitiveDifferential: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: O que Manter & Nova Arquitetura */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        <span>Etapa 3 de 6</span> • <span>Preservação de Ativos & Arquitetura</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                        O que devemos preservar e qual a estrutura ideal?
                      </h2>
                      <p className="text-zinc-500 text-sm mt-1">
                        Garantimos a preservação da sua autoridade de domínio, indexação no Google e elementos de marca.
                      </p>
                    </div>

                    {/* Assets to keep */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Ativos do site atual que devemos manter:
                      </label>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {[
                          { id: 'domain_dns', label: 'Domínio Atual (.com / .com.br)', desc: 'Mantemos o mesmo endereço na web sem interrupção de e-mails corporativos.' },
                          { id: 'existing_logo', label: 'Logotipo & Identidade Visual', desc: 'Preservamos a logo atual e cores da sua marca.' },
                          { id: 'seo_urls', label: 'URLs Antigas & SEO (Redirecionamento 301)', desc: 'Evita erro 404 e preserva autoridade acumulada no Google.' },
                          { id: 'existing_copy', label: 'Textos & Descrições Atuais', desc: 'Aproveitaremos os textos existentes com melhorias de copywriting.' },
                          { id: 'reviews_testimonials', label: 'Depoimentos & Avaliações Reais', desc: 'Migraremos suas provas sociais para o novo design de prestígio.' },
                          { id: 'blog_articles', label: 'Artigos / Notícias do Blog', desc: 'Migração de conteúdo editorial relevante.' }
                        ].map((asset) => {
                          const isChecked = formData.assetsToKeep.includes(asset.id);
                          return (
                            <button
                              key={asset.id}
                              type="button"
                              onClick={() => toggleAssetToKeep(asset.id)}
                              className={`p-3 rounded-2xl text-left border transition-colors flex items-start gap-2.5 cursor-pointer ${
                                isChecked
                                  ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 font-semibold'
                                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40'
                              }`}
                            >
                              <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                                isChecked ? 'bg-black dark:bg-white text-white dark:text-black' : 'border border-zinc-300 dark:border-zinc-700'
                              }`}>
                                {isChecked && <Check size={12} strokeWidth={3} />}
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-black dark:text-white leading-tight">{asset.label}</h4>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{asset.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Architecture Selection */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Formato de Arquitetura Desejado:
                      </label>
                      <div className="grid sm:grid-cols-3 gap-2.5">
                        {[
                          {
                            id: 'one_page_funnel',
                            title: 'One-Page / Funil de Conversão',
                            desc: 'Página única contínua de alta conversão, sem distrações, ideal para WhatsApp e anúncios.',
                            tag: 'Maior Conversão'
                          },
                          {
                            id: 'multi_page_corporate',
                            title: 'Site Multi-Páginas Corporativo',
                            desc: 'Início, Sobre, Serviços Detalhados, Portfólio, Depoimentos e Contato formal.',
                            tag: 'Máxima Autoridade'
                          },
                          {
                            id: 'catalog_ecommerce',
                            title: 'Catálogo / E-commerce Rápido',
                            desc: 'Vitrine de produtos com filtros instantâneos e checkout integrado.',
                            tag: 'Para Vendas Diretas'
                          }
                        ].map((arch) => (
                          <button
                            key={arch.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, restructuringArchitecture: arch.id as any })}
                            className={`p-3.5 rounded-2xl text-left border transition-colors flex flex-col justify-between cursor-pointer ${
                              formData.restructuringArchitecture === arch.id
                                ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800'
                                : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40'
                            }`}
                          >
                            <div>
                              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 inline-block mb-1.5">
                                {arch.tag}
                              </span>
                              <h4 className="text-xs font-black text-black dark:text-white leading-snug">{arch.title}</h4>
                              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">{arch.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Identidade Visual & Objetivos de Redesign */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        <span>Etapa 4 de 6</span> • <span>Estética, Paleta & Metas</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                        Qual a direção visual e objetivos principais?
                      </h2>
                      <p className="text-zinc-500 text-sm mt-1">
                        Escolha o tom da sua marca e a paleta de cores para alinhamento instantâneo.
                      </p>
                    </div>

                    {/* Redesign Goals */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Quais são os objetivos de negócios do redesign?
                      </label>
                      <div className="grid sm:grid-cols-3 gap-2">
                        {[
                          { id: 'leads_whatsapp', label: 'Multiplicar contatos no WhatsApp' },
                          { id: 'brand_authority', label: 'Transmitir autoridade e status de luxo' },
                          { id: 'speed_score95', label: 'Velocidade máxima no Google (Score 95+)' },
                          { id: 'mobile_experience', label: 'Experiência impecável no celular' },
                          { id: 'clarify_offer', label: 'Tornar os planos e preços claros' },
                          { id: 'beat_competitors', label: 'Superar o site dos principais concorrentes' }
                        ].map((goal) => {
                          const isSelected = formData.redesignGoals.includes(goal.id);
                          return (
                            <button
                              key={goal.id}
                              type="button"
                              onClick={() => toggleGoal(goal.id)}
                              className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
                                isSelected
                                  ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white'
                                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 bg-white dark:bg-zinc-900/40'
                              }`}
                            >
                              <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'bg-black dark:bg-white text-white dark:text-black' : 'border border-zinc-300 dark:border-zinc-700'
                              }`}>
                                {isSelected && <Check size={10} strokeWidth={3} />}
                              </div>
                              <span className="line-clamp-1">{goal.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Interactive Color Palette Selector */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Paleta de Cores e Estética Sugerida:
                      </label>

                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {colorPalettes.map((pal) => {
                          const isCurrent = formData.colorPaletteChoice === pal.id;
                          return (
                            <button
                              key={pal.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, colorPaletteChoice: pal.id as any })}
                              className={`p-3.5 rounded-2xl text-left border transition-colors flex flex-col justify-between cursor-pointer ${
                                isCurrent
                                  ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800'
                                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="font-bold text-xs text-black dark:text-white">{pal.name}</span>
                                <div className="flex gap-1.5 items-center">
                                  {pal.colors.map((c, i) => (
                                    <span
                                      key={i}
                                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                                      style={{ backgroundColor: c }}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{pal.desc}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tone of Brand & Logo Status */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1">
                          Tom da Comunicação & Estilo
                        </label>
                        <select
                          value={formData.brandTone}
                          onChange={(e) => setFormData({ ...formData, brandTone: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        >
                          <option value="Moderno e Minimalista">Moderno, Minimalista e Tecnológico</option>
                          <option value="Luxo e Alto Padrão">Luxo, Exclusivo e Alto Padrão</option>
                          <option value="Corporativo e Formal">Corporativo, Sólido e Institucional</option>
                          <option value="Acolhedor e Humano">Acolhedor, Empático e Humano</option>
                          <option value="Direto e Agressivo para Vendas">Direto, Assertivo e Foco em Vendas</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1">
                          Situação do seu Logotipo
                        </label>
                        <select
                          value={formData.hasLogo}
                          onChange={(e) => setFormData({ ...formData, hasLogo: e.target.value as any })}
                          className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        >
                          <option value="yes">Possuo o logotipo pronto em alta qualidade</option>
                          <option value="needs_refresh">Possuo logotipo, mas gostaria de modernizá-lo</option>
                          <option value="no">Não possuo logotipo (preciso de tipografia profissional)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Seções e Módulos Estruturados */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        <span>Etapa 5 de 6</span> • <span>Módulos & Estrutura Estratégica</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                        Quais seções farão parte do novo site?
                      </h2>
                      <p className="text-zinc-500 text-sm mt-1">
                        Selecione as seções e recursos interativos desejados para o seu projeto.
                      </p>
                    </div>

                    {/* Conversion & Authority Modules */}
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5 flex items-center gap-2">
                        <CheckSquare size={15} />
                        Seções de Alta Conversão & Autoridade
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {[
                          'Hero de Alto Impacto e Conversão',
                          'Comparativo de Transformação / Casos de Sucesso',
                          'Matriz de Serviços Reestruturada',
                          'Sobre Nós e Autoridade de Marca',
                          'Mural de Depoimentos & Avaliações Verificadas',
                          'Botão Flutuante Inteligente de WhatsApp',
                          'Formulário VIP de Contato e Orçamento',
                          'Perguntas Frequentes (Quebra de Objeções)',
                          'Galeria / Portfólio de Trabalhos Realizados',
                          'Tabela Comparativa de Planos e Preços',
                          'Calculadora Interativa de Investimento',
                          'Selos de Garantia e Certificações de Segurança'
                        ].map((sec) => {
                          const isSelected = formData.desiredSections.includes(sec);
                          return (
                            <button
                              key={sec}
                              type="button"
                              onClick={() => toggleSection(sec)}
                              className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
                                isSelected
                                  ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white'
                                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 bg-white dark:bg-zinc-900/40'
                              }`}
                            >
                              <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'bg-black dark:bg-white text-white dark:text-black' : 'border border-zinc-300 dark:border-zinc-700'
                              }`}>
                                {isSelected && <Check size={10} strokeWidth={3} />}
                              </div>
                              <span className="line-clamp-1">{sec}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Special Integrations */}
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5 flex items-center gap-2">
                        <Zap size={15} />
                        Integrações e Ferramentas Especiais
                      </h4>
                      <div className="grid sm:grid-cols-3 gap-2">
                        {[
                          { id: 'whatsapp_floating', label: 'WhatsApp Flutuante Inteligente' },
                          { id: 'google_analytics4', label: 'Google Analytics 4 & Tag Manager' },
                          { id: 'meta_pixel', label: 'Pixel Meta (Instagram/Facebook)' },
                          { id: 'calendly_booking', label: 'Agendamento Calendly / Cal.com' },
                          { id: 'stripe_gateway', label: 'Checkout Stripe / Pagamentos' },
                          { id: 'google_maps', label: 'Google Maps Interativo' }
                        ].map((integ) => {
                          const isSelected = formData.specialIntegrations.includes(integ.id);
                          return (
                            <button
                              key={integ.id}
                              type="button"
                              onClick={() => toggleIntegration(integ.id)}
                              className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
                                isSelected
                                  ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white'
                                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 bg-white dark:bg-zinc-900/40'
                              }`}
                            >
                              <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'bg-black dark:bg-white text-white dark:text-black' : 'border border-zinc-300 dark:border-zinc-700'
                              }`}>
                                {isSelected && <Check size={10} strokeWidth={3} />}
                              </div>
                              <span className="line-clamp-1">{integ.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 6: Seleção do Plano, Add-ons & Checkout */}
                {currentStep === 6 && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        <span>Etapa 6 de 6</span> • <span>Plano & Ativação Imediata</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                        Confirmação do Plano & Início em 72h
                      </h2>
                      <p className="text-zinc-500 text-sm mt-1">
                        Selecione seu plano oficial, complementos de migração e confirme sua vaga prioritária.
                      </p>
                    </div>

                    {/* Plan Cards Selector */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Escolha o Plano de Redesign:
                      </label>
                      <div className="grid sm:grid-cols-3 gap-2.5">
                        {[
                          {
                            id: 'essential',
                            name: 'Redesign Essencial',
                            price: '425€',
                            desc: 'Modernização visual completa, versão mobile impecável e entrega em 72h.',
                            badge: 'Rápido & Eficaz'
                          },
                          {
                            id: 'professional',
                            name: 'Reestruturação Pro',
                            price: '785€',
                            desc: 'Arquitetura de alta conversão, copywriting persuasivo, SEO Google e integração total.',
                            badge: 'Mais Recomendado',
                            featured: true
                          },
                          {
                            id: 'elite',
                            name: 'Redesign Elite',
                            price: '1.450€',
                            desc: 'Site completo multi-páginas, velocidade máxima e suporte prioritário VIP.',
                            badge: 'Autoridade Máxima'
                          }
                        ].map((pl) => {
                          const isSelected = formData.selectedPlan === pl.id;
                          return (
                            <button
                              key={pl.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, selectedPlan: pl.id as any })}
                              className={`p-3.5 rounded-2xl text-left border transition-colors relative flex flex-col justify-between cursor-pointer ${
                                isSelected
                                  ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 shadow-md'
                                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-300'
                              }`}
                            >
                              <div>
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full inline-block mb-1.5 ${
                                  pl.featured 
                                    ? 'bg-black dark:bg-white text-white dark:text-black font-black' 
                                    : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200'
                                }`}>
                                  {pl.badge}
                                </span>
                                <h4 className="font-extrabold text-sm text-black dark:text-white leading-tight">{pl.name}</h4>
                                <div className="text-lg font-black text-black dark:text-white my-1">{pl.price}</div>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">{pl.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Specialized Migration & SEO Addons */}
                    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-black uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Complementos Estratégicos & Migração:
                        </label>
                        <span className="text-[11px] text-zinc-400 font-bold">Opcionais</span>
                      </div>

                      <div className="space-y-1.5">
                        {[
                          {
                            key: 'migrationSeoRedirects',
                            name: 'Preservação de SEO & Redirecionamentos 301',
                            desc: 'Mapeamento de todas as URLs antigas para não perder tráfego no Google.',
                            price: '+65€'
                          },
                          {
                            key: 'seoContentPackage',
                            name: 'Copywriting Persuasivo & Otimização de Textos',
                            desc: 'Reescrita estratégica de títulos e chamadas para ação com foco em vendas.',
                            price: '+95€'
                          },
                          {
                            key: 'speedOptimizationScore95',
                            name: 'Otimização Extrema de Velocidade (Google Score 95+)',
                            desc: 'Compressão WebP, minificação e carregamento em milissegundos.',
                            price: '+75€'
                          },
                          {
                            key: 'expressDelivery24h',
                            name: 'Entrega Prioritária Flash em 24-48h',
                            desc: 'Desenvolvimento em turno exclusivo de urgência máxima.',
                            price: '+120€'
                          }
                        ].map((ad) => {
                          const isChecked = (formData.addons as any)[ad.key];
                          return (
                            <button
                              key={ad.key}
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  addons: {
                                    ...formData.addons,
                                    [ad.key]: !isChecked
                                  }
                                });
                              }}
                              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                                isChecked
                                  ? 'border-black dark:border-white bg-white dark:bg-zinc-900 font-bold'
                                  : 'border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-500'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${
                                  isChecked ? 'bg-black dark:bg-white text-white dark:text-black' : 'border border-zinc-300 dark:border-zinc-700'
                                }`}>
                                  {isChecked && <Check size={10} strokeWidth={3} />}
                                </div>
                                <div>
                                  <div className="text-xs text-black dark:text-white font-bold">{ad.name}</div>
                                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-normal">{ad.desc}</div>
                                </div>
                              </div>
                              <span className="text-xs font-black text-black dark:text-white ml-2 flex-shrink-0">
                                {ad.price}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Coupon Input Form */}
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-3 text-zinc-400" size={15} />
                        <input
                          type="text"
                          placeholder="Cupom de desconto (ex: VANGUARD50)"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs uppercase font-bold focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black text-xs font-bold hover:opacity-90 cursor-pointer"
                      >
                        Aplicar
                      </button>
                    </form>

                    {couponSuccess && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                        <CheckCheck size={15} />
                        <span>{couponSuccess}</span>
                      </div>
                    )}
                    {couponError && (
                      <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-300 text-xs font-bold flex items-center gap-2">
                        <AlertCircle size={15} />
                        <span>{couponError}</span>
                      </div>
                    )}

                    {/* Payment Method Selector */}
                    <div className="space-y-3 pt-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                        Forma de Pagamento Segura:
                      </label>

                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'card', name: 'Cartão de Crédito', icon: <CreditCard size={15} /> },
                          { id: 'bizum', name: 'Pix / Transferência', icon: <Zap size={15} /> },
                          { id: 'paypal', name: 'PayPal Express', icon: <Shield size={15} /> }
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, paymentMethod: m.id as any })}
                            className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                              formData.paymentMethod === m.id
                                ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                                : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 bg-white dark:bg-zinc-900/40'
                            }`}
                          >
                            {m.icon}
                            <span>{m.name}</span>
                          </button>
                        ))}
                      </div>

                      {/* Card Details Inputs */}
                      {formData.paymentMethod === 'card' && (
                        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                          <div>
                            <label className="block text-[11px] font-bold text-zinc-500 mb-1">Número do Cartão</label>
                            <input
                              type="text"
                              placeholder="0000 0000 0000 0000"
                              value={formData.cardDetails.cardNumber}
                              onChange={(e) => setFormData({
                                ...formData,
                                cardDetails: { ...formData.cardDetails, cardNumber: e.target.value }
                              })}
                              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="col-span-2">
                              <label className="block text-[11px] font-bold text-zinc-500 mb-1">Nome no Cartão</label>
                              <input
                                type="text"
                                placeholder="ex: CARLOS ALBUQUERQUE"
                                value={formData.cardDetails.cardHolder}
                                onChange={(e) => setFormData({
                                  ...formData,
                                  cardDetails: { ...formData.cardDetails, cardHolder: e.target.value }
                                })}
                                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-zinc-500 mb-1">Validade / CVV</label>
                              <input
                                type="text"
                                placeholder="MM/AA · CVV"
                                value={formData.cardDetails.expiryDate}
                                onChange={(e) => setFormData({
                                  ...formData,
                                  cardDetails: { ...formData.cardDetails, expiryDate: e.target.value }
                                })}
                                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 pt-1">
                            <Lock size={12} className="text-emerald-500" />
                            <span>Criptografia SSL de 256 bits com processamento blindado.</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Form Action Controls (Back / Continue Buttons) */}
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    <span>{currentStep === 1 ? 'Voltar ao Início' : 'Etapa Anterior'}</span>
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-7 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm font-black flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                    >
                      <span>Avançar para Etapa {currentStep + 1}</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleProcessPayment}
                      disabled={isProcessing}
                      className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black flex items-center gap-2 transition-colors cursor-pointer shadow-md disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          <span>Processando Briefing...</span>
                        </>
                      ) : (
                        <>
                          <Lock size={16} />
                          <span>Confirmar Briefing & Ativar 72h ({calculateTotal()}€)</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </div>

              {/* Right Column: Live Preview & Investment Summary Deck */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Dynamic Live Preview Deck */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-xs overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-zinc-500">
                        Simulação Visual Direta
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      Vanguard Engine
                    </span>
                  </div>

                  {/* Device Frame */}
                  <div className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-950 p-2">
                    <div className="flex items-center gap-1.5 pb-2 px-1 border-b border-zinc-800">
                      <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <div className="flex-1 text-center">
                        <span className="text-[9px] text-zinc-500 font-mono">
                          {formData.companyName ? `${formData.companyName.toLowerCase().replace(/\s+/g, '')}.com.br` : 'suaempresa.com.br'}
                        </span>
                      </div>
                    </div>

                    {/* Preview Screen Content */}
                    <div className={`p-4 rounded-xl mt-2 transition-colors duration-200 ${currentPaletteObj.bgClass}`}>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="font-extrabold text-[11px] tracking-tight">
                          {formData.companyName || 'Sua Marca VIP'}
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 font-bold">
                          Menu ☰
                        </span>
                      </div>

                      <div className="py-4 text-center space-y-1.5">
                        <span className="text-[8px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 inline-block">
                          {formData.industry}
                        </span>
                        <div className="text-xs font-black leading-tight tracking-tight">
                          Excelência, Autoridade & Resultados Sob Medida
                        </div>
                        <p className="text-[9px] opacity-70 line-clamp-2 px-1">
                          {formData.businessDescription || 'Apresentação profissional com design minimalista de elite e carregamento instantâneo.'}
                        </p>
                        <div className="pt-2 flex justify-center gap-1.5">
                          <span className="text-[9px] font-bold px-3 py-1 rounded-md bg-white text-black">
                            Falar no WhatsApp
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-1 text-center pt-2 border-t border-white/10 text-[9px]">
                        <div>
                          <span className="opacity-60 block text-[7px]">Google Score</span>
                          <span className="font-black text-emerald-400">99 / 100</span>
                        </div>
                        <div>
                          <span className="opacity-60 block text-[7px]">Carregamento</span>
                          <span className="font-black text-emerald-400">0.3s</span>
                        </div>
                        <div>
                          <span className="opacity-60 block text-[7px]">Mobile UX</span>
                          <span className="font-black text-emerald-400">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400 text-center flex items-center justify-center gap-1.5 font-medium">
                    <ShieldCheck size={13} className="text-emerald-500" />
                    <span>Estilo: <strong>{currentPaletteObj.name}</strong></span>
                  </div>
                </div>

                {/* Investment Breakdown Deck */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                    <h3 className="font-black text-sm text-black dark:text-white uppercase tracking-wider">
                      Resumo do Investimento
                    </h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      Vaga 72h Reservada
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between font-bold text-black dark:text-white">
                      <span>
                        {formData.selectedPlan === 'essential' ? 'Plano Redesign Essencial' : formData.selectedPlan === 'professional' ? 'Plano Reestruturação Pro' : 'Plano Redesign Elite'}
                      </span>
                      <span>{planPrices[formData.selectedPlan]}€</span>
                    </div>

                    {formData.addons.migrationSeoRedirects && (
                      <div className="flex justify-between text-zinc-500">
                        <span>Preservação de SEO & Redirecionamentos</span>
                        <span>+{addonPrices.migrationSeoRedirects}€</span>
                      </div>
                    )}
                    {formData.addons.seoContentPackage && (
                      <div className="flex justify-between text-zinc-500">
                        <span>Copywriting & Otimização de Textos</span>
                        <span>+{addonPrices.seoContentPackage}€</span>
                      </div>
                    )}
                    {formData.addons.speedOptimizationScore95 && (
                      <div className="flex justify-between text-zinc-500">
                        <span>Score 95+ de Velocidade Extrema</span>
                        <span>+{addonPrices.speedOptimizationScore95}€</span>
                      </div>
                    )}
                    {formData.addons.expressDelivery24h && (
                      <div className="flex justify-between text-zinc-500">
                        <span>Entrega Expressa Flash (24-48h)</span>
                        <span>+{addonPrices.expressDelivery24h}€</span>
                      </div>
                    )}

                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-bold pt-1">
                        <span>Desconto Cupom Aplicado</span>
                        <span>-{appliedDiscount}€</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-bold text-zinc-400 block">Total Final:</span>
                      <span className="text-[10px] text-zinc-400">Sem custos ocultos</span>
                    </div>
                    <div className="text-2xl font-black text-black dark:text-white">
                      {calculateTotal()}€
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-[10px] text-zinc-500 font-medium">
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-black dark:text-white" />
                      <span>Entrega em 72h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield size={12} className="text-black dark:text-white" />
                      <span>Garantia 100%</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* SUCCESS SCREEN AFTER SUBMISSION */
          <div className="max-w-3xl mx-auto py-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 size={36} strokeWidth={2.5} />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block">
                Briefing Registrado • Ref: {orderNumber}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tight">
                Seu novo site já está em produção!
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
                Recebemos o diagnóstico da <strong>{formData.companyName || 'sua empresa'}</strong>. O cronômetro de 72 horas para a entrega da sua presença digital foi iniciado.
              </p>
            </div>

            {/* Next Steps Card */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 text-left space-y-5 shadow-sm">
              <h3 className="text-base font-black text-black dark:text-white flex items-center gap-2">
                <Sparkles size={16} className="text-amber-500" />
                Próximos Passos Imediatos:
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-black dark:text-white block">Envio do Briefing para o WhatsApp da Equipe:</strong>
                    Clique no botão abaixo para enviar o resumo detalhado para o gestor do seu projeto.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-black dark:text-white block">Primeira Versão em até 48h:</strong>
                    Enviaremos o link de visualização interativo para seus ajustes e validação.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-black dark:text-white block">Publicação Oficial e Ativação do Domínio:</strong>
                    Após sua validação, conectamos seu domínio e publicamos o site.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/5500000000000?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>Enviar Briefing via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={copyBriefingSummaryToClipboard}
                  className="py-3.5 px-5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  {copiedSummary ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  <span>{copiedSummary ? 'Copiado!' : 'Copiar Resumo Técnico'}</span>
                </button>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onBackToHome}
                className="text-xs font-bold text-zinc-500 hover:text-black dark:hover:text-white underline cursor-pointer"
              >
                Voltar para a página inicial da Vanguard Studio
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
