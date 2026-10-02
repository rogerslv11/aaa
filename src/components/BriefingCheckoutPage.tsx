import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Shield, Lock, CreditCard, 
  Sparkles, Clock, Globe, MessageSquare, Palette, Layout, 
  HelpCircle, Copy, Check, ExternalLink, Zap, Phone, Mail, Building,
  Star, ChevronRight, AlertCircle, ShoppingBag, RefreshCw, Layers,
  Server, Smartphone, Gauge, Sliders, CheckSquare, Search, FileText,
  Tag, Award, Eye, Flame, ShieldCheck, CheckCheck, RefreshCcw, Download
} from 'lucide-react';
import { BriefingData } from '../types';

interface BriefingCheckoutPageProps {
  initialPlan?: 'essential' | 'professional' | 'elite';
  onBackToHome: () => void;
  isDarkMode: boolean;
}

export default function BriefingCheckoutPage({ 
  initialPlan = 'professional', 
  onBackToHome,
  isDarkMode 
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
      industry: 'Servicios Profesionales',
      cityCountry: '',
      projectType: 'full_redesign',
      currentWebsite: '',
      currentPlatform: 'WordPress / Elementor',
      currentWebsiteAge: '1 a 3 años',

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
      brandTone: 'Moderno y Minimalista',
      colorPaletteChoice: 'dark_luxury',
      hasLogo: 'yes',
      competitorWebsites: '',
      referenceWebsites: '',

      desiredSections: [
        'Portada Hero Rediseñada de Alto Impacto',
        'Comparativa de Transformación / Casos de Éxito',
        'Matriz de Servicios Reestructurada',
        'Sobre Nosotros y Autoridad de Marca',
        'Muro de Testimonios y Reseñas Verificadas',
        'Botón Flotante Inteligente de WhatsApp',
        'Formulario VIP de Presupuesto Directo',
        'Preguntas Frecuentes (FAQ Derribo de Objeciones)'
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
  const [copiedBizum, setCopiedBizum] = useState(false);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    if (clean === 'VANGUARD50' || clean === 'DESCONTO50' || clean === 'REESTRUCTURA50') {
      setAppliedDiscount(50);
      setCouponSuccess('¡Cupón aplicado con éxito! -50€ de descuento.');
      setCouponError('');
    } else if (clean === 'VIP100') {
      setAppliedDiscount(100);
      setCouponSuccess('¡Cupón VIP aplicado! -100€ de descuento.');
      setCouponError('');
    } else {
      setCouponError('Código de cupón inválido o expirado.');
      setCouponSuccess('');
    }
  };

  const handleSimulateUrlAudit = () => {
    if (!formData.currentWebsite.trim()) return;
    setIsAnalyzingUrl(true);
    setTimeout(() => {
      setIsAnalyzingUrl(false);
      setUrlAnalyzed(true);
    }, 900);
  };

  const fillExampleBusiness = () => {
    setFormData(prev => ({
      ...prev,
      businessDescription: 'Somos un estudio boutique de servicios premium. Ofrecemos 3 paquetes principales de alto valor con atención personalizada.',
      targetAudience: 'Empresarios y directores que valoran la excelencia, rapidez y quieren proyectar estatus de líder.',
      competitiveDifferential: 'Entrega garantizada en 72h, trato 1 a 1 directo sin intermediarios y código a medida ultra optimizado.',
      biggestFrustration: 'Nuestra web actual tarda 5 segundos en cargar, el diseño se ve anticuado y los clientes nos piden rebajas porque no transmite autoridad.'
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.companyName.trim()) {
        setValidationError('Por favor, indica el nombre de tu empresa o marca.');
        return;
      }
      if (!formData.contactName.trim()) {
        setValidationError('Por favor, indica el nombre de la persona responsable del proyecto.');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setValidationError('Por favor, introduce un correo electrónico válido.');
        return;
      }
      if (!formData.phone.trim()) {
        setValidationError('Por favor, introduce tu número de WhatsApp para contacto directo.');
        return;
      }
      if (formData.projectType !== 'new_site' && !formData.currentWebsite.trim()) {
        setValidationError('Por favor, introduce la URL de tu sitio web actual a rediseñar (o selecciona "Crear Web Desde Cero").');
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.businessDescription.trim()) {
        setValidationError('Por favor, describe brevemente qué servicios o productos ofreces.');
        return;
      }
      if (formData.currentPainPoints.length === 0) {
        setValidationError('Por favor, selecciona al menos un problema o frustración de tu web actual.');
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
    }, 1400);
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
    const planName = formData.selectedPlan === 'essential' ? 'Plan Rediseño Esencial (425€)' : formData.selectedPlan === 'professional' ? 'Plan Reestructuración Pro (785€)' : 'Plan Rediseño Elite (1.450€)';
    
    const painPointsMap: Record<string, string> = {
      design_outdated: 'Diseño anticuado y poco profesional',
      slow_speed: 'Carga muy lenta / Penalización en Google',
      low_conversion: 'Baja conversión (pocas ventas/contactos)',
      broken_mobile: 'Mala experiencia o rota en móviles',
      confusing_structure: 'Estructura caótica y navegación confusa',
      hard_to_edit: 'Plataforma difícil de mantener o actualizar',
      no_seo: 'No aparece en Google / SEO nulo',
      insecure: 'Caídas constantes o problemas técnicos'
    };

    const text = `💎 *SOLICITUD DE REDISEÑO & BRIEFING VANGUARD STUDIO (Ref: ${orderNumber})*
    
*1. DIAGNÓSTICO & DATOS DE LA WEB:*
• Empresa: ${formData.companyName}
• Responsable: ${formData.contactName}
• WhatsApp: ${formData.phone}
• Email: ${formData.email}
• Sector: ${formData.industry}
• Tipo de Proyecto: ${formData.projectType.toUpperCase()}
• Web Actual: ${formData.currentWebsite || 'No tiene / Crear desde cero'}
• CMS Actual: ${formData.currentPlatform}
• Antigüedad: ${formData.currentWebsiteAge}
• Satisfacción actual: ${formData.satisfactionRating}/5 ⭐

*2. PRINCIPALES PROBLEMAS A CORREGIR:*
${formData.currentPainPoints.map(p => `• ${painPointsMap[p] || p}`).join('\n')}
${formData.biggestFrustration ? `• Mayor Frustración: ${formData.biggestFrustration}` : ''}

*3. QUÉ MANTENER & REESTRUCTURACIÓN:*
• Conservar: ${formData.assetsToKeep.join(', ')}
• Accesos Técnicos: ${formData.technicalAccessStatus}
• Arquitectura Deseada: ${formData.restructuringArchitecture}

*4. OBJETIVOS DEL REDISEÑO:*
• Metas: ${formData.redesignGoals.join(', ')}
• Tono de Marca: ${formData.brandTone}
• Paleta de Color: ${formData.colorPaletteChoice}
• Logotipo: ${formData.hasLogo === 'yes' ? 'Listo en alta calidad' : formData.hasLogo === 'no' ? 'Crear logotipo nuevo' : 'Requiere rediseño'}
• Referencias / Competencia: ${formData.competitorWebsites || formData.referenceWebsites || 'Criterio técnico de la agencia'}

*5. PLAN SELECCIONADO & INVERSIÓN:*
• Plan: ${planName}
• Total a Pagar: ${calculateTotal()}€ ${appliedDiscount > 0 ? `(Descuento de -${appliedDiscount}€ aplicado)` : ''}
• Método de Pago: ${formData.paymentMethod.toUpperCase()}

*6. SECCIONES REESTRUCTURADAS:*
${formData.desiredSections.map(s => `• ${s}`).join('\n')}

¡Hola equipo Vanguard Studio! Acabo de completar el briefing técnico para el rediseño de mi sitio web. Quedo a la espera para iniciar el desarrollo prioritario en 72 horas.`;

    return encodeURIComponent(text);
  };

  const copyBriefingSummaryToClipboard = () => {
    const rawText = decodeURIComponent(generateWhatsAppMessage());
    navigator.clipboard.writeText(rawText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const colorPalettes = [
    { 
      id: 'dark_luxury', 
      name: 'Dark Luxury & Carbón', 
      desc: 'Negro Profundo, Blanco Puro & Acentos Grafito',
      bgClass: 'bg-zinc-950 text-white',
      accentColor: '#ffffff',
      colors: ['#09090b', '#27272a', '#ffffff'] 
    },
    { 
      id: 'tech_blue', 
      name: 'Tech Navy & Zafiro', 
      desc: 'Azul Élite Corporativo & Blanco Nieve',
      bgClass: 'bg-slate-900 text-blue-400',
      accentColor: '#3b82f6',
      colors: ['#0f172a', '#2563eb', '#f8fafc'] 
    },
    { 
      id: 'emerald_growth', 
      name: 'Esmeralda & Oro Imperial', 
      desc: 'Finanzas, Salud, Estética & Estatus',
      bgClass: 'bg-emerald-950 text-emerald-300',
      accentColor: '#10b981',
      colors: ['#064e3b', '#10b981', '#fef3c7'] 
    },
    { 
      id: 'warm_minimal', 
      name: 'Minimal Cálido & Editorial', 
      desc: 'Arena Suizo, Terracota & Ébano',
      bgClass: 'bg-stone-900 text-amber-200',
      accentColor: '#d97706',
      colors: ['#1c1917', '#d97706', '#f5f5f4'] 
    }
  ];

  const currentPaletteObj = colorPalettes.find(p => p.id === formData.colorPaletteChoice) || colorPalettes[0];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 pb-24">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Volver a la página principal</span>
            <span className="sm:hidden">Volver</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-black dark:bg-white text-white dark:text-black font-bold text-lg shadow-sm">
              V
            </div>
            <span className="font-extrabold tracking-tighter uppercase text-lg">
              Vanguard<span className="text-zinc-400">Studio</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Garantía 72h Activa</span>
            </div>
            <div className="text-xs font-bold text-zinc-400 hidden sm:block">
              Auto-guardado ✓
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
        {!isSubmitted ? (
          <div>
            {/* Stepper Header Navigation */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-black uppercase tracking-wider mb-2 border border-zinc-200 dark:border-zinc-800">
                    <RefreshCw size={13} className="animate-spin-slow text-black dark:text-white" />
                    <span>Briefing Técnico de Rediseño & Reestructuración</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-black dark:text-white">
                    {currentStep === 1 && '1. Diagnóstico del Sitio Web & Contacto'}
                    {currentStep === 2 && '2. Auditoría de Frustraciones & Problemas'}
                    {currentStep === 3 && '3. Alcance, Preservación & Arquitectura'}
                    {currentStep === 4 && '4. Identidad Visual & Referencias Top'}
                    {currentStep === 5 && '5. Secciones & Módulos de Conversión'}
                    {currentStep === 6 && '6. Plan de Rediseño & Checkout Seguro'}
                  </h1>
                </div>

                {/* Progress quick indicator */}
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 self-start md:self-auto">
                  <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Paso actual</div>
                    <div className="text-sm font-black text-black dark:text-white">{currentStep} de {totalSteps}</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-sm shadow-md">
                    {Math.round((currentStep / totalSteps) * 100)}%
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-zinc-100 dark:bg-zinc-900 h-2 rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-black dark:bg-white rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>

              {/* Interactive Step Pills */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs font-bold text-center">
                {[
                  { step: 1, name: 'Diagnóstico' },
                  { step: 2, name: 'Auditoría' },
                  { step: 3, name: 'Alcance' },
                  { step: 4, name: 'Estilo' },
                  { step: 5, name: 'Módulos' },
                  { step: 6, name: 'Checkout' }
                ].map(item => (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => {
                      if (item.step < currentStep) setCurrentStep(item.step);
                    }}
                    disabled={item.step > currentStep}
                    className={`py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      currentStep === item.step
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-md font-black'
                        : item.step < currentStep
                        ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200'
                        : 'bg-transparent text-zinc-400 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    {item.step < currentStep ? (
                      <Check size={12} strokeWidth={3} className="text-emerald-500" />
                    ) : (
                      <span className="text-[10px] opacity-70">{item.step}.</span>
                    )}
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error banner */}
            <AnimatePresence>
              {validationError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400 text-sm font-semibold"
                >
                  <AlertCircle size={20} className="shrink-0" />
                  <span>{validationError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form & Live Summary Grid Layout */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Column (Left: 8 cols) */}
              <div className="lg:col-span-8 space-y-6">

                {/* STEP 1: Diagnóstico de la Web Actual & Contacto */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
                      
                      {/* Tipo de Proyecto */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                            Tipo de Proyecto de Rediseño *
                          </label>
                          <span className="text-[11px] text-zinc-400">Selecciona el enfoque principal</span>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            { 
                              id: 'full_redesign', 
                              title: 'Rediseño Completo 360°', 
                              desc: 'Nueva estética premium, código React 19 ultrarrápido y textos de venta.',
                              badge: 'Más Solicitado'
                            },
                            { 
                              id: 'ux_restructuring', 
                              title: 'Reestructuración UX & Embudo', 
                              desc: 'Optimización de navegación, simplificación de menús y subida de conversiones.',
                              badge: 'Alto ROI'
                            },
                            { 
                              id: 'mobile_speed_upgrade', 
                              title: 'Velocidad Extrema & Móvil', 
                              desc: 'Migrar de web lenta a tecnología instantánea (< 0.8s en móviles).',
                              badge: 'Core Web Vitals'
                            },
                            { 
                              id: 'cms_migration', 
                              title: 'Migración WordPress/Wix', 
                              desc: 'Dejar plugins pesados y pasar a arquitectura moderna sin caídas.',
                              badge: 'Cero Mantenimiento'
                            },
                            { 
                              id: 'new_site', 
                              title: 'Crear Web Desde Cero', 
                              desc: 'No tengo sitio web previo o deseo partir de una hoja en blanco.',
                              badge: 'Lanzamiento 72h'
                            }
                          ].map(type => (
                            <div
                              key={type.id}
                              onClick={() => setFormData({ ...formData, projectType: type.id as any })}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer select-none relative ${
                                formData.projectType === type.id
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-lg scale-[1.01]'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <div className="font-black text-xs">{type.title}</div>
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                                  formData.projectType === type.id
                                    ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black'
                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                                }`}>
                                  {type.badge}
                                </span>
                              </div>
                              <div className={`text-[11px] leading-tight ${formData.projectType === type.id ? 'text-zinc-200 dark:text-zinc-700' : 'text-zinc-500'}`}>
                                {type.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* URL Web Actual con Auto-Diagnóstico */}
                      <div className="pt-2">
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                          URL de tu Sitio Web Actual a Rediseñar *
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <div className="relative flex-1">
                            <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                            <input 
                              type="url"
                              placeholder="https://tuwebactual.com"
                              value={formData.currentWebsite}
                              onChange={e => {
                                setFormData({ ...formData, currentWebsite: e.target.value });
                                setUrlAnalyzed(false);
                              }}
                              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={handleSimulateUrlAudit}
                            disabled={!formData.currentWebsite.trim() || isAnalyzingUrl}
                            className="px-5 py-4 rounded-2xl bg-zinc-200 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-black uppercase tracking-wider transition-all disabled:opacity-40 cursor-pointer flex items-center justify-center gap-2"
                          >
                            {isAnalyzingUrl ? <RefreshCw size={14} className="animate-spin" /> : <Gauge size={14} />}
                            <span>{isAnalyzingUrl ? 'Analizando...' : 'Verificar'}</span>
                          </button>
                        </div>

                        {urlAnalyzed && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-3 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300"
                          >
                            <div className="flex items-center gap-2 font-bold">
                              <CheckCircle2 size={16} className="text-emerald-600" />
                              <span>Sitio detectado correctamente para análisis de arquitectura</span>
                            </div>
                            <span className="font-mono text-[11px] bg-emerald-200/60 dark:bg-emerald-800/60 px-2 py-0.5 rounded font-bold">
                              Auditoría 72h Lista
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* CMS Actual y Antigüedad */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Plataforma / CMS Actual
                          </label>
                          <select 
                            value={formData.currentPlatform}
                            onChange={e => setFormData({ ...formData, currentPlatform: e.target.value })}
                            className="w-full px-4 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium cursor-pointer"
                          >
                            <option value="WordPress / Elementor">WordPress / Elementor</option>
                            <option value="Wix / Squarespace">Wix / Squarespace</option>
                            <option value="Shopify / Tienda Online">Shopify / Tienda Online</option>
                            <option value="Webflow">Webflow</option>
                            <option value="HTML / PHP Antiguo">HTML / PHP Antiguo</option>
                            <option value="No lo sé / Hecho a medida">No lo sé / Hecho a medida</option>
                            <option value="No tengo web actual">No tengo web actual</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Antigüedad del Sitio Actual
                          </label>
                          <select 
                            value={formData.currentWebsiteAge}
                            onChange={e => setFormData({ ...formData, currentWebsiteAge: e.target.value })}
                            className="w-full px-4 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium cursor-pointer"
                          >
                            <option value="Menos de 1 año">Menos de 1 año</option>
                            <option value="1 a 3 años">1 a 3 años</option>
                            <option value="3 a 5 años">3 a 5 años</option>
                            <option value="Más de 5 años">Más de 5 años (Muy Desactualizada)</option>
                          </select>
                        </div>
                      </div>

                      {/* Datos del Cliente y Empresa */}
                      <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Nombre de la Empresa / Marca *
                          </label>
                          <input 
                            type="text"
                            placeholder="Ej: Estudio Jurídico Morales & Asoc."
                            value={formData.companyName}
                            onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Persona Responsable / Contacto *
                          </label>
                          <input 
                            type="text"
                            placeholder="Ej: Laura Morales"
                            value={formData.contactName}
                            onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Email Corporativo *
                          </label>
                          <input 
                            type="email"
                            placeholder="laura@empresa.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            WhatsApp Directo *
                          </label>
                          <input 
                            type="tel"
                            placeholder="+34 600 000 000"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Sector / Nicho
                          </label>
                          <select 
                            value={formData.industry}
                            onChange={e => setFormData({ ...formData, industry: e.target.value })}
                            className="w-full px-4 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium cursor-pointer"
                          >
                            <option value="Servicios Profesionales">Servicios Profesionales</option>
                            <option value="Salud y Clínicas">Salud, Estética y Clínicas</option>
                            <option value="Inmobiliaria y Arquitectura">Inmobiliaria y Arquitectura</option>
                            <option value="Abogados y Asesorías">Abogados y Asesorías</option>
                            <option value="Restaurantes y Gastronomía">Restaurantes y Gastronomía</option>
                            <option value="E-commerce y Retail">E-commerce y Retail</option>
                            <option value="Fitness y Gimnasios">Fitness y Gimnasios</option>
                            <option value="Consultoría e Infoproductos">Consultoría e Infoproductos</option>
                            <option value="Tecnología y B2B">Tecnología y B2B</option>
                            <option value="Otro Sector">Otro Sector</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Auditoría de Problemas & Frustraciones */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
                      
                      {/* Calificación interactiva de satisfacción */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                            Nivel de Satisfacción con tu Web Actual *
                          </label>
                          <span className="text-xs font-bold text-amber-500">
                            {formData.satisfactionRating === 1 && '🚨 Urgencia Crítica (Pierde Ventas)'}
                            {formData.satisfactionRating === 2 && '⚠️ Mala Imagen / Desactualizada'}
                            {formData.satisfactionRating === 3 && '⚡ Necesita Reestructuración Urgente'}
                            {formData.satisfactionRating === 4 && '👍 Aceptable pero sin ventas'}
                            {formData.satisfactionRating === 5 && '🌟 Buena pero requiere modernización'}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-5 gap-2">
                          {[1, 2, 3, 4, 5].map(rating => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setFormData({ ...formData, satisfactionRating: rating })}
                              className={`py-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                                formData.satisfactionRating === rating
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-lg scale-105 font-black'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-400'
                              }`}
                            >
                              <div className="flex items-center">
                                <Star size={16} fill={formData.satisfactionRating >= rating ? 'currentColor' : 'none'} />
                              </div>
                              <span className="text-[11px] font-bold">{rating} ⭐</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Problemas detectados */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">
                          ¿Qué problemas críticos presenta tu web actual? (Selecciona los que apliquen) *
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            { 
                              id: 'design_outdated', 
                              label: 'Diseño anticuado y poco profesional', 
                              desc: 'Da mala impresión y no refleja la calidad real de mis servicios.',
                              icon: <Palette size={18} />
                            },
                            { 
                              id: 'slow_speed', 
                              label: 'Carga extremadamente lenta (> 4s)', 
                              desc: 'Los clientes se cansan de esperar y se van a la competencia.',
                              icon: <Gauge size={18} />
                            },
                            { 
                              id: 'low_conversion', 
                              label: 'Baja conversión (Nadie escribe al WhatsApp)', 
                              desc: 'Recibe visitas pero no genera llamadas, citas ni ventas.',
                              icon: <MessageSquare size={18} />
                            },
                            { 
                              id: 'broken_mobile', 
                              label: 'Mala experiencia en teléfonos móviles', 
                              desc: 'Diseño desalineado, botones difíciles de pulsar y textos cortados.',
                              icon: <Smartphone size={18} />
                            },
                            { 
                              id: 'confusing_structure', 
                              label: 'Estructura caótica y navegación confusa', 
                              desc: 'El usuario no comprende en 5 segundos qué vendemos.',
                              icon: <Layout size={18} />
                            },
                            { 
                              id: 'hard_to_edit', 
                              label: 'Plataforma difícil o costosa de mantener', 
                              desc: 'Dependencia de programadores lentos o plugins que se rompen.',
                              icon: <Sliders size={18} />
                            },
                            { 
                              id: 'no_seo', 
                              label: 'Invisible en Google (Cero posicionamiento SEO)', 
                              desc: 'No aparecemos cuando buscan nuestros servicios en la ciudad.',
                              icon: <Search size={18} />
                            },
                            { 
                              id: 'insecure', 
                              label: 'Caídas del servidor o problemas de seguridad', 
                              desc: 'Web caída frecuentemente o advertencias de seguridad SSL.',
                              icon: <Server size={18} />
                            }
                          ].map(point => (
                            <div
                              key={point.id}
                              onClick={() => togglePainPoint(point.id)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-3 ${
                                formData.currentPainPoints.includes(point.id)
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-md'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                              }`}
                            >
                              <div className={`mt-0.5 shrink-0 ${formData.currentPainPoints.includes(point.id) ? 'text-white dark:text-black' : 'text-zinc-400'}`}>
                                {point.icon}
                              </div>
                              <div>
                                <div className="text-xs font-black leading-snug">{point.label}</div>
                                <div className={`text-[11px] mt-0.5 ${formData.currentPainPoints.includes(point.id) ? 'text-zinc-200 dark:text-zinc-700' : 'text-zinc-500'}`}>
                                  {point.desc}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mayor Frustración con botón de ejemplo */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                            ¿Qué es lo que MÁS te frustra hoy al mostrar tu web a clientes?
                          </label>
                          <button
                            type="button"
                            onClick={fillExampleBusiness}
                            className="text-[11px] font-bold text-zinc-500 hover:text-black dark:hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            <Sparkles size={12} />
                            <span>Inspirarme con ejemplo</span>
                          </button>
                        </div>
                        <textarea 
                          rows={2}
                          placeholder="Ej: Nos da vergüenza enviarle el link a clientes importantes porque parece un negocio aficionado y nos regatean presupuestos..."
                          value={formData.biggestFrustration}
                          onChange={e => setFormData({ ...formData, biggestFrustration: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                        />
                      </div>

                      {/* Servicios y Propuesta */}
                      <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            ¿Qué servicios o productos vendes exactamente? *
                          </label>
                          <textarea 
                            rows={3}
                            placeholder="Detalla tus servicios estrella, paquetes o soluciones que deben brillar en la nueva versión."
                            value={formData.businessDescription}
                            onChange={e => setFormData({ ...formData, businessDescription: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Cliente Ideal & Diferencial Competitivo
                          </label>
                          <textarea 
                            rows={3}
                            placeholder="Ej: Directores y clientes de alto poder adquisitivo. Nuestro diferencial es atención inmediata y 15 años de liderazgo."
                            value={formData.targetAudience}
                            onChange={e => setFormData({ ...formData, targetAudience: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Qué Mantener vs Reestructurar & Accesos */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
                      
                      {/* Qué conservar */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">
                          ¿Qué elementos de tu web actual quieres CONSERVAR?
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            { id: 'domain_dns', label: 'Conservar mi dominio actual (.com / .es / .co)' },
                            { id: 'existing_logo', label: 'Conservar mi logotipo actual tal cual está' },
                            { id: 'seo_urls', label: 'Preservar posicionamiento SEO & URLs indexadas' },
                            { id: 'current_copy', label: 'Mantener parte de los textos existentes' },
                            { id: 'media_photos', label: 'Conservar fotos y vídeos de la empresa' },
                            { id: 'start_fresh', label: 'Reestructuración 100% radical desde cero' }
                          ].map(item => (
                            <div
                              key={item.id}
                              onClick={() => toggleAssetToKeep(item.id)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                                formData.assetsToKeep.includes(item.id)
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-sm'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                              }`}
                            >
                              <span className="text-xs font-bold">{item.label}</span>
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                formData.assetsToKeep.includes(item.id)
                                  ? 'bg-white dark:bg-black text-black dark:text-white'
                                  : 'border border-zinc-300 dark:border-zinc-700'
                              }`}>
                                {formData.assetsToKeep.includes(item.id) && <Check size={12} strokeWidth={3} />}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Accesos Técnicos */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">
                          Estado de los Accesos Técnicos (Dominio / Hosting)
                        </label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {[
                            { 
                              id: 'has_all_access', 
                              label: 'Tengo todos los accesos', 
                              desc: 'Facilitaré DNS o cPanel para apuntar la nueva web.' 
                            },
                            { 
                              id: 'needs_migration_help', 
                              label: 'Necesito ayuda técnica', 
                              desc: 'Vuestro equipo me asistirá paso a paso para la migración.' 
                            },
                            { 
                              id: 'start_from_scratch', 
                              label: 'Quiero servidor nuevo', 
                              desc: 'Prefiero que registréis y configuréis toda la infraestructura.' 
                            }
                          ].map(acc => (
                            <div
                              key={acc.id}
                              onClick={() => setFormData({ ...formData, technicalAccessStatus: acc.id as any })}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                                formData.technicalAccessStatus === acc.id
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-md'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                              }`}
                            >
                              <div className="text-xs font-black mb-1">{acc.label}</div>
                              <div className={`text-[11px] leading-tight ${formData.technicalAccessStatus === acc.id ? 'text-zinc-200 dark:text-zinc-700' : 'text-zinc-500'}`}>
                                {acc.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Formato de Arquitectura */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">
                          Arquitectura de Navegación Recomendada
                        </label>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            {
                              id: 'one_page_funnel',
                              title: 'One-Page de Máxima Conversión (Top ROI)',
                              desc: 'Experiencia ultra fluida en una sola página: Hero, Servicios, Casos de Éxito, Testimonios y Cierre WhatsApp.'
                            },
                            {
                              id: 'multi_page_corporate',
                              title: 'Multi-Página Corporativa Estructurada',
                              desc: 'Páginas dedicadas: Inicio, Nosotros, Catálogo de Servicios, Casos de Estudio y Contacto VIP.'
                            },
                            {
                              id: 'lead_generation',
                              title: 'Embudo para Anuncios (Google/Meta Ads)',
                              desc: 'Página quirúrgica sin puntos de fuga, enfocada 100% en captar leads y citas directas.'
                            },
                            {
                              id: 'catalog_ecommerce',
                              title: 'Catálogo Interactivo de Productos',
                              desc: 'Listado con filtros, fichas detalladas y botón de pedido o contratación directa.'
                            }
                          ].map(arch => (
                            <div
                              key={arch.id}
                              onClick={() => setFormData({ ...formData, restructuringArchitecture: arch.id as any })}
                              className={`p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                                formData.restructuringArchitecture === arch.id
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-lg'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                              }`}
                            >
                              <div className="text-xs font-black mb-1">{arch.title}</div>
                              <div className={`text-[11px] leading-snug ${formData.restructuringArchitecture === arch.id ? 'text-zinc-200 dark:text-zinc-700' : 'text-zinc-500'}`}>
                                {arch.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Objetivos del Rediseño, Identidad & Estilo */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
                      
                      {/* Metas del Rediseño */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">
                          Objetivos que DEBE Conseguir la Nueva Web:
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            { id: 'leads_whatsapp', label: 'Multiplicar contactos y ventas por WhatsApp (+300%)', icon: <MessageSquare size={18} /> },
                            { id: 'brand_authority', label: 'Transmitir máxima autoridad y estatus de élite', icon: <Shield size={18} /> },
                            { id: 'speed_score95', label: 'Carga instantánea < 1s (Google PageSpeed 95+)', icon: <Zap size={18} /> },
                            { id: 'booking_calendar', label: 'Agendamiento automático de citas o llamadas', icon: <Clock size={18} /> },
                            { id: 'google_seo', label: 'Dominar primeras posiciones de Google orgánico', icon: <Globe size={18} /> },
                            { id: 'easy_sales', label: 'Contratación directa de servicios online', icon: <ShoppingBag size={18} /> }
                          ].map(goal => (
                            <div
                              key={goal.id}
                              onClick={() => toggleGoal(goal.id)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 select-none ${
                                formData.redesignGoals.includes(goal.id)
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-md'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
                              }`}
                            >
                              <div className={formData.redesignGoals.includes(goal.id) ? 'text-white dark:text-black' : 'text-zinc-400'}>
                                {goal.icon}
                              </div>
                              <span className="text-xs font-bold leading-tight">{goal.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Paletas de Color con Live Feedback */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                            Paleta de Color & Dirección Visual Sugerida
                          </label>
                          <span className="text-[11px] text-zinc-400">Se actualiza en la vista previa ➜</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {colorPalettes.map(palette => (
                            <div
                              key={palette.id}
                              onClick={() => setFormData({ ...formData, colorPaletteChoice: palette.id })}
                              className={`p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                                formData.colorPaletteChoice === palette.id
                                  ? 'border-black dark:border-white bg-white dark:bg-zinc-950 shadow-lg ring-2 ring-black dark:ring-white'
                                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-black">{palette.name}</span>
                                {formData.colorPaletteChoice === palette.id && (
                                  <CheckCircle2 size={16} className="text-black dark:text-white" />
                                )}
                              </div>
                              <p className="text-[11px] text-zinc-500 mb-3 leading-tight">{palette.desc}</p>
                              <div className="flex gap-2">
                                {palette.colors.map((c, i) => (
                                  <div 
                                    key={i} 
                                    className="h-5 flex-1 rounded-md border border-zinc-200 dark:border-zinc-700 shadow-inner"
                                    style={{ backgroundColor: c }}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Logotipo & Tono */}
                      <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Estado del Logotipo
                          </label>
                          <select 
                            value={formData.hasLogo}
                            onChange={e => setFormData({ ...formData, hasLogo: e.target.value as any })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium cursor-pointer"
                          >
                            <option value="yes">Tengo logotipo listo en buena calidad (Vector / PNG transparente)</option>
                            <option value="needs_redesign">Tengo logotipo pero me gustaría modernizarlo</option>
                            <option value="no">No tengo logotipo (crear logotipo tipográfico limpio)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Tono de Comunicación
                          </label>
                          <select 
                            value={formData.brandTone}
                            onChange={e => setFormData({ ...formData, brandTone: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium cursor-pointer"
                          >
                            <option value="Moderno y Minimalista">Moderno, Minimalista & Sofisticado</option>
                            <option value="Corporativo y Elegante">Corporativo, Institucional & Seguro</option>
                            <option value="Directo y Enfocado en Ventas">Directo, Persuasivo & Alto Cierre</option>
                            <option value="Cercano y Humano">Cercano, Cálido & Empático</option>
                            <option value="Tecnológico y Futurista">Tecnológico, Vanguardista & Cyber</option>
                          </select>
                        </div>
                      </div>

                      {/* Competencia & Referencias */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Webs de Competidores que quieras Superar (URLs)
                          </label>
                          <input 
                            type="text"
                            placeholder="Ej: competidor1.com, rival2.es"
                            value={formData.competitorWebsites}
                            onChange={e => setFormData({ ...formData, competitorWebsites: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                            Webs de Referencia de Diseño que te Encanten (URLs)
                          </label>
                          <input 
                            type="text"
                            placeholder="Ej: apple.com, stripe.com, linares.co"
                            value={formData.referenceWebsites}
                            onChange={e => setFormData({ ...formData, referenceWebsites: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Secciones & Módulos de Conversión */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
                      
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                            Secciones Reestructuradas a Medida
                          </label>
                          <span className="text-xs font-bold text-zinc-500">
                            {formData.desiredSections.length} seleccionadas
                          </span>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            'Portada Hero Rediseñada de Alto Impacto',
                            'Comparativa de Transformación / Casos de Éxito',
                            'Matriz de Servicios Reestructurada',
                            'Sobre Nosotros y Autoridad de Marca',
                            'Muro de Testimonios y Reseñas Verificadas',
                            'Botón Flotante Inteligente de WhatsApp',
                            'Formulario VIP de Presupuesto Directo',
                            'Tabla de Precios y Paquetes de Servicios',
                            'Preguntas Frecuentes (FAQ Derribo de Objeciones)',
                            'Sellos de Garantía Blindada y Confianza',
                            'Mapa, Sede Física y Cobertura Geográfica',
                            'Integración con Calendly para Reservas'
                          ].map(section => (
                            <div
                              key={section}
                              onClick={() => toggleSection(section)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                                formData.desiredSections.includes(section)
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-sm'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                              }`}
                            >
                              <span className="text-xs font-bold">{section}</span>
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                formData.desiredSections.includes(section)
                                  ? 'bg-white dark:bg-black text-black dark:text-white'
                                  : 'border border-zinc-300 dark:border-zinc-700'
                              }`}>
                                {formData.desiredSections.includes(section) && <Check size={12} strokeWidth={3} />}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Integraciones */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">
                          Integraciones Técnicas & Analítica
                        </label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {[
                            { id: 'whatsapp_floating', label: 'WhatsApp CRM Directo' },
                            { id: 'google_analytics4', label: 'Google Analytics 4' },
                            { id: 'meta_pixel', label: 'Píxel Meta Ads (FB/IG)' },
                            { id: 'calendly_booking', label: 'Agenda Calendly' },
                            { id: 'stripe_checkout', label: 'Pasarela Stripe' },
                            { id: 'multilanguage_es_en', label: 'Multidioma (ES / EN)' }
                          ].map(integ => (
                            <div
                              key={integ.id}
                              onClick={() => toggleIntegration(integ.id)}
                              className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer select-none ${
                                formData.specialIntegrations.includes(integ.id)
                                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent font-bold shadow-md'
                                  : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                              }`}
                            >
                              <span className="text-xs">{integ.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requerimientos específicos */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
                          ¿Algún requerimiento especial o detalle adicional para la reestructuración? (Opcional)
                        </label>
                        <textarea 
                          rows={3}
                          placeholder="Ej: Destacar un vídeo de presentación corporativa en la cabecera, añadir un calculador de precios interactivo..."
                          value={formData.specialFeaturesNotes}
                          onChange={e => setFormData({ ...formData, specialFeaturesNotes: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm font-medium"
                        />
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* STEP 6: Plan de Rediseño, Add-ons & Checkout */}
                {currentStep === 6 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {/* Plan Cards */}
                    <div className="grid md:grid-cols-3 gap-5">
                      {/* Essential */}
                      <div
                        onClick={() => setFormData({ ...formData, selectedPlan: 'essential' })}
                        className={`p-6 rounded-[2rem] border transition-all cursor-pointer relative flex flex-col justify-between ${
                          formData.selectedPlan === 'essential'
                            ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 ring-2 ring-black dark:ring-white shadow-xl'
                            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div>
                          <h3 className="text-lg font-black mb-1">Rediseño Esencial</h3>
                          <p className="text-xs text-zinc-500 mb-4">Modernización visual rápida.</p>
                          <div className="text-3xl font-black mb-4">425€</div>
                          <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-center gap-2"><Check size={13} /> Rediseño Visual 100%</li>
                            <li className="flex items-center gap-2"><Check size={13} /> Móvil Responsivo</li>
                            <li className="flex items-center gap-2"><Check size={13} /> Botón WhatsApp Directo</li>
                            <li className="flex items-center gap-2"><Check size={13} /> Carga Rápida Optimizada</li>
                            <li className="flex items-center gap-2 font-bold text-black dark:text-white"><Check size={13} /> Entrega en 72 Horas</li>
                          </ul>
                        </div>
                      </div>

                      {/* Professional (Featured) */}
                      <div
                        onClick={() => setFormData({ ...formData, selectedPlan: 'professional' })}
                        className={`p-6 rounded-[2rem] border transition-all cursor-pointer relative flex flex-col justify-between ${
                          formData.selectedPlan === 'professional'
                            ? 'bg-black dark:bg-white text-white dark:text-black border-transparent shadow-2xl scale-[1.03] ring-2 ring-black dark:ring-white'
                            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 opacity-90 hover:opacity-100'
                        }`}
                      >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-white dark:bg-black text-black dark:text-white border shadow">
                          Recomendado
                        </div>
                        <div>
                          <h3 className="text-lg font-black mb-1">Reestructuración Pro</h3>
                          <p className={`text-xs mb-4 ${formData.selectedPlan === 'professional' ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-500'}`}>
                            UX/UI, ventas y máxima autoridad.
                          </p>
                          <div className="text-3xl font-black mb-4">785€</div>
                          <ul className={`space-y-1.5 text-xs ${formData.selectedPlan === 'professional' ? 'text-zinc-200 dark:text-zinc-800' : 'text-zinc-600 dark:text-zinc-400'}`}>
                            <li className="flex items-center gap-2 font-bold"><Check size={13} /> Hosting Premium (1 Año)</li>
                            <li className="flex items-center gap-2"><Check size={13} /> Todo el Plan Esencial</li>
                            <li className="flex items-center gap-2"><Check size={13} /> Copywriting de Conversión</li>
                            <li className="flex items-center gap-2"><Check size={13} /> Animaciones Fluidas</li>
                            <li className="flex items-center gap-2"><Check size={13} /> SEO Avanzado & Migración</li>
                            <li className="flex items-center gap-2 font-bold"><Check size={13} /> Entrega en 72 Horas</li>
                          </ul>
                        </div>
                      </div>

                      {/* Elite */}
                      <div
                        onClick={() => setFormData({ ...formData, selectedPlan: 'elite' })}
                        className={`p-6 rounded-[2rem] border transition-all cursor-pointer relative flex flex-col justify-between ${
                          formData.selectedPlan === 'elite'
                            ? 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 ring-2 ring-black dark:ring-white shadow-xl'
                            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div>
                          <h3 className="text-lg font-black mb-1">Rediseño Elite</h3>
                          <p className="text-xs text-zinc-500 mb-4">Reingeniería integral a medida.</p>
                          <div className="text-3xl font-black mb-4">1.450€</div>
                          <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-center gap-2 font-bold"><Check size={13} /> Consultoría VIP</li>
                            <li className="flex items-center gap-2"><Check size={13} /> APIs & Webhooks</li>
                            <li className="flex items-center gap-2"><Check size={13} /> CMS a Medida</li>
                            <li className="flex items-center gap-2"><Check size={13} /> Soporte Dedicado 24/7</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Add-ons Section */}
                    <div className="bg-zinc-50 dark:bg-zinc-900/60 p-6 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-wider text-black dark:text-white mb-2">
                        Complementos de Alto Rendimiento para tu Rediseño
                      </h4>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          { 
                            key: 'migrationSeoRedirects', 
                            title: 'Migración Segura & Redirecciones 301', 
                            desc: 'Protege tu posicionamiento SEO actual y enlaces indexados.', 
                            price: '+65€' 
                          },
                          { 
                            key: 'seoContentPackage', 
                            title: 'Pack Copywriting & Reescritura Persuasiva', 
                            desc: 'Reescribimos los textos para multiplicar el cierre de llamadas.', 
                            price: '+95€' 
                          },
                          { 
                            key: 'speedOptimizationScore95', 
                            title: 'Optimización de Velocidad Score 95+', 
                            desc: 'Carga instantánea < 0.8s en Google PageSpeed Insights.', 
                            price: '+75€' 
                          },
                          { 
                            key: 'expressDelivery24h', 
                            title: 'Entrega Prioritaria Ultrarrápida en 24-48h', 
                            desc: 'Prioridad absoluta de desarrollo con entrega récord.', 
                            price: '+120€' 
                          },
                          { 
                            key: 'monthlyMaintenance', 
                            title: 'Mantenimiento & Soporte VIP Mensual', 
                            desc: 'Copias de seguridad semanales, actualizaciones y soporte continuo.', 
                            price: '+45€/mes' 
                          },
                        ].map(addon => {
                          const isSelected = formData.addons[addon.key as keyof typeof formData.addons];
                          return (
                            <div
                              key={addon.key}
                              onClick={() => setFormData({
                                ...formData,
                                addons: {
                                  ...formData.addons,
                                  [addon.key]: !isSelected
                                }
                              })}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                                isSelected
                                  ? 'bg-white dark:bg-zinc-950 border-black dark:border-white shadow-md'
                                  : 'bg-white/60 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
                              }`}
                            >
                              <div className="pr-3">
                                <div className="text-xs font-black text-black dark:text-white">{addon.title}</div>
                                <div className="text-[11px] text-zinc-500 leading-tight mt-0.5">{addon.desc}</div>
                              </div>
                              <div className="text-right shrink-0">
                                <span className="text-xs font-black text-black dark:text-white block">{addon.price}</span>
                                <div className={`mt-1 inline-flex w-4 h-4 rounded-full items-center justify-center ${
                                  isSelected ? 'bg-black dark:bg-white text-white dark:text-black' : 'border border-zinc-300 dark:border-zinc-700'
                                }`}>
                                  {isSelected && <Check size={10} strokeWidth={3} />}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Payment Method Selector & Form */}
                    <div className="bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-black text-black dark:text-white">
                          Método de Pago Seguro
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-bold">
                          <Lock size={14} className="text-emerald-500" />
                          <span>Cifrado SSL 256-bit</span>
                        </div>
                      </div>

                      {/* Payment Method Buttons */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: 'card', label: 'Tarjeta Bancaria', icon: <CreditCard size={18} /> },
                          { id: 'bizum', label: 'Bizum / Transf.', icon: <Zap size={18} /> },
                          { id: 'paypal', label: 'PayPal', icon: <Globe size={18} /> },
                          { id: 'whatsapp', label: 'WhatsApp Direct', icon: <MessageSquare size={18} /> },
                        ].map(method => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, paymentMethod: method.id as any })}
                            className={`p-3.5 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                              formData.paymentMethod === method.id
                                ? 'bg-black dark:bg-white text-white dark:text-black border-transparent font-bold shadow-md'
                                : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                            }`}
                          >
                            {method.icon}
                            <span className="text-[11px] font-bold">{method.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Card Form */}
                      {formData.paymentMethod === 'card' && (
                        <form onSubmit={handleProcessPayment} className="space-y-4 pt-2">
                          <div>
                            <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-1.5">
                              Número de Tarjeta
                            </label>
                            <div className="relative">
                              <input 
                                type="text"
                                placeholder="4532 •••• •••• 8924"
                                maxLength={19}
                                value={formData.cardDetails.cardNumber}
                                onChange={e => setFormData({
                                  ...formData,
                                  cardDetails: { ...formData.cardDetails, cardNumber: e.target.value }
                                })}
                                className="w-full px-5 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                                required
                              />
                              <Lock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-1.5">
                                Titular de la Tarjeta
                              </label>
                              <input 
                                type="text"
                                placeholder="Nombre completo"
                                value={formData.cardDetails.cardHolder}
                                onChange={e => setFormData({
                                  ...formData,
                                  cardDetails: { ...formData.cardDetails, cardHolder: e.target.value }
                                })}
                                className="w-full px-5 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                                required
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-1.5">
                                  Caducidad
                                </label>
                                <input 
                                  type="text"
                                  placeholder="MM/AA"
                                  maxLength={5}
                                  value={formData.cardDetails.expiryDate}
                                  onChange={e => setFormData({
                                    ...formData,
                                    cardDetails: { ...formData.cardDetails, expiryDate: e.target.value }
                                  })}
                                  className="w-full px-3 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white text-sm font-medium text-center focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                                  required
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-1.5">
                                  CVC
                                </label>
                                <input 
                                  type="password"
                                  placeholder="123"
                                  maxLength={4}
                                  value={formData.cardDetails.cvv}
                                  onChange={e => setFormData({
                                    ...formData,
                                    cardDetails: { ...formData.cardDetails, cvv: e.target.value }
                                  })}
                                  className="w-full px-3 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white text-sm font-medium text-center focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={isProcessing}
                              className="w-full py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                            >
                              {isProcessing ? (
                                <span>Procesando pago seguro...</span>
                              ) : (
                                <>
                                  <Lock size={18} />
                                  <span>Pagar {calculateTotal()}€ & Comenzar Rediseño 72h</span>
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Bizum */}
                      {formData.paymentMethod === 'bizum' && (
                        <div className="space-y-4 pt-2">
                          <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
                            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-black text-sm">
                              <Zap size={18} />
                              <span>Pago Instantáneo con Bizum / Transferencia Directa</span>
                            </div>
                            <p className="text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">
                              Realiza el pago de <strong>{calculateTotal()}€</strong> mediante Bizum al número oficial de Vanguard Studio con el concepto <strong>{orderNumber}</strong>.
                            </p>
                            <div className="flex items-center justify-between p-3.5 bg-white dark:bg-zinc-900 rounded-xl border border-emerald-300 dark:border-emerald-800">
                              <span className="font-mono font-bold text-sm text-black dark:text-white">+34 600 720 000</span>
                              <button 
                                type="button"
                                onClick={() => {
                                  navigator.clipboard.writeText('+34600720000');
                                  setCopiedBizum(true);
                                  setTimeout(() => setCopiedBizum(false), 2000);
                                }}
                                className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                              >
                                {copiedBizum ? <Check size={12} /> : <Copy size={12} />}
                                {copiedBizum ? 'Copiado' : 'Copiar'}
                              </button>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setIsSubmitted(true)}
                            className="w-full py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                          >
                            <CheckCircle2 size={18} />
                            <span>Confirmar Pago & Enviar Briefing a los Diseñadores</span>
                          </button>
                        </div>
                      )}

                      {/* PayPal */}
                      {formData.paymentMethod === 'paypal' && (
                        <div className="space-y-4 pt-2">
                          <p className="text-xs text-zinc-500 leading-relaxed">
                            Serás redirigido de forma cifrada a PayPal para completar tu inversión de <strong>{calculateTotal()}€</strong> con protección al comprador.
                          </p>
                          <button
                            type="button"
                            onClick={() => setIsSubmitted(true)}
                            className="w-full py-5 rounded-2xl bg-[#0070ba] text-white font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:opacity-90 transition-all cursor-pointer"
                          >
                            <span>Pagar con PayPal ({calculateTotal()}€)</span>
                            <ExternalLink size={18} />
                          </button>
                        </div>
                      )}

                      {/* WhatsApp Direct */}
                      {formData.paymentMethod === 'whatsapp' && (
                        <div className="space-y-4 pt-2">
                          <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 space-y-2">
                            <h4 className="text-xs font-black text-black dark:text-white uppercase">
                              Contacto Directo por WhatsApp con el Director Técnico
                            </h4>
                            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                              Te pondremos en contacto prioritario por WhatsApp con nuestro especialista técnico para enviar tu diagnóstico completo, emitir factura y dar comienzo al temporizador de 72h.
                            </p>
                          </div>
                          <a
                            href={`https://wa.me/5500000000000?text=${generateWhatsAppMessage()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsSubmitted(true)}
                            className="w-full py-5 rounded-2xl bg-[#25D366] text-white font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                          >
                            <MessageSquare size={20} />
                            <span>Enviar Briefing de Rediseño por WhatsApp</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Bottom Navigation Buttons */}
                {currentStep < 6 && (
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft size={16} />
                      <span>{currentStep === 1 ? 'Volver a la Web' : 'Paso Anterior'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Continuar al Paso {currentStep + 1}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar: Live Simulated Mockup & Investment Summary (Right: 4 cols) */}
              <div className="lg:col-span-4 space-y-6 sticky top-24">
                
                {/* Live Simulated Mockup Card */}
                <div className="p-6 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Eye size={15} className="text-zinc-400" />
                      <span className="text-xs font-black uppercase tracking-wider text-black dark:text-white">
                        Simulación de tu Nueva Web
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                      En Vivo
                    </span>
                  </div>

                  {/* Dynamic mini viewport */}
                  <div className={`p-4 rounded-2xl border border-zinc-700/30 transition-all duration-500 overflow-hidden ${currentPaletteObj.bgClass}`}>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[9px] font-mono opacity-60 truncate max-w-[140px]">
                        {formData.companyName || 'tuempresa'}.com
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="inline-block px-2 py-0.5 rounded bg-white/10 text-[8px] font-black uppercase tracking-widest">
                        {formData.industry}
                      </div>
                      <div className="text-sm font-black leading-tight text-white">
                        {formData.companyName ? `${formData.companyName} | Élite` : 'Tu Marca Rediseñada'}
                      </div>
                      <p className="text-[9px] opacity-70 line-clamp-2 leading-relaxed text-zinc-300">
                        {formData.businessDescription || 'Ecosistema web de alta conversión listo para multiplicar ventas y proyectar autoridad.'}
                      </p>
                      
                      <div className="pt-2 flex items-center justify-between">
                        <div 
                          className="px-3 py-1 rounded text-[9px] font-black text-black"
                          style={{ backgroundColor: currentPaletteObj.accentColor }}
                        >
                          Hablar por WhatsApp
                        </div>
                        <div className="text-[9px] opacity-60 font-mono">
                          Score 99/100 ⚡
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Audit Score Meter */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[10px] font-black uppercase text-zinc-400">Score Proyectado</div>
                      <div className="font-bold text-black dark:text-white">Google PageSpeed</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-black text-sm">
                      <Gauge size={18} />
                      <span>99 / 100</span>
                    </div>
                  </div>

                  {/* Investment Breakdown */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-200 dark:border-zinc-800 text-xs">
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Plan: {formData.selectedPlan === 'essential' ? 'Esencial (425€)' : formData.selectedPlan === 'professional' ? 'Reestructuración Pro (785€)' : 'Elite (1.450€)'}</span>
                      <span className="font-bold text-black dark:text-white">{planPrices[formData.selectedPlan]}€</span>
                    </div>

                    {formData.addons.migrationSeoRedirects && (
                      <div className="flex justify-between text-zinc-500 text-[11px]">
                        <span>Migración Segura 301</span>
                        <span>+65€</span>
                      </div>
                    )}
                    {formData.addons.seoContentPackage && (
                      <div className="flex justify-between text-zinc-500 text-[11px]">
                        <span>Pack Copywriting Pro</span>
                        <span>+95€</span>
                      </div>
                    )}
                    {formData.addons.speedOptimizationScore95 && (
                      <div className="flex justify-between text-zinc-500 text-[11px]">
                        <span>Velocidad Score 95+</span>
                        <span>+75€</span>
                      </div>
                    )}
                    {formData.addons.expressDelivery24h && (
                      <div className="flex justify-between text-zinc-500 text-[11px]">
                        <span>Entrega 24-48h</span>
                        <span>+120€</span>
                      </div>
                    )}
                    {formData.addons.monthlyMaintenance && (
                      <div className="flex justify-between text-zinc-500 text-[11px]">
                        <span>Mantenimiento VIP</span>
                        <span>+45€/mes</span>
                      </div>
                    )}

                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                        <span>Descuento de Cupón</span>
                        <span>-{appliedDiscount}€</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-baseline justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Total a Invertir</div>
                        <div className="text-[9px] text-zinc-400">IVA incluido</div>
                      </div>
                      <div className="text-2xl font-black text-black dark:text-white">
                        {calculateTotal()}€
                      </div>
                    </div>
                  </div>

                  {/* Coupon Form in Sidebar */}
                  <form onSubmit={handleApplyCoupon} className="pt-2">
                    <div className="flex gap-1.5">
                      <input 
                        type="text"
                        placeholder="Cupón (ej: VANGUARD50)"
                        value={couponCode}
                        onChange={e => setCouponCode(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-black dark:text-white uppercase font-bold focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold shrink-0 cursor-pointer"
                      >
                        Aplicar
                      </button>
                    </div>
                    {couponSuccess && <p className="text-[10px] text-emerald-600 font-bold mt-1">{couponSuccess}</p>}
                    {couponError && <p className="text-[10px] text-red-500 font-bold mt-1">{couponError}</p>}
                  </form>

                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800/60 rounded-xl space-y-1 text-[10px] text-zinc-500">
                    <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
                      <ShieldCheck size={13} className="text-emerald-500" />
                      <span>Garantía de Satisfacción 100%</span>
                    </div>
                    <p>Revisión y pulido incluido antes del lanzamiento definitivo.</p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        ) : (
          /* Step 7: Confirmation & 72h Countdown Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-8 max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 size={48} strokeWidth={2.5} />
            </div>

            <div className="space-y-3">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-black uppercase tracking-widest">
                ¡Briefing de Rediseño Recibido con Éxito!
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">
                La reestructuración de tu web está en marcha.
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Referencia de Proyecto: <strong className="text-black dark:text-white font-mono">{orderNumber}</strong>. Nuestro equipo de ingenieros de software y diseñadores en <strong>Vanguard Studio</strong> ya está procesando las directrices de tu empresa ({formData.companyName || 'Proyecto de Rediseño'}).
              </p>
            </div>

            {/* Countdown Widget */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-lg">
              <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400">
                <Clock size={16} className="text-black dark:text-white animate-spin" />
                <span>Tiempo Máximo Garantizado</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-black dark:text-white font-mono tracking-tighter">
                71:59:45
              </div>
              <p className="text-[11px] text-zinc-500">
                Garantía Blindada: entrega de la web reestructurada lista para facturar en 72h.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/5500000000000?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#25D366] text-white font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                <MessageSquare size={20} />
                <span>Enviar Copia por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={copyBriefingSummaryToClipboard}
                className="w-full sm:w-auto px-6 py-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-bold text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedSummary ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                <span>{copiedSummary ? '¡Copiado al Portapapeles!' : 'Copiar Resumen'}</span>
              </button>

              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto px-6 py-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white font-bold text-sm transition-all cursor-pointer"
              >
                Volver al Inicio
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
