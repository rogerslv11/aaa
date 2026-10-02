import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (plan: 'essential' | 'professional' | 'elite') => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      id: 'essential',
      name: 'Plan Esencial',
      price: '425',
      description: 'Presencia digital profesional de alto impacto con entrega exprés garantizada.',
      features: [
        'Sitio Web de Alto Rendimiento',
        'Diseño 100% Adaptable a Móviles',
        'Botón Inteligente de WhatsApp',
        'Integración con Redes Sociales',
        'SEO Estructural para Google',
        'Certificado de Seguridad SSL Incluido',
        'Entrega Garantizada en 72 Horas'
      ],
      cta: 'Elegir Plan Esencial',
      highlight: false
    },
    {
      id: 'professional',
      name: 'Plan Profesional',
      price: '785',
      description: 'La solución definitiva de máxima autoridad, copywriting persuasivo y ventas continuas.',
      features: [
        'Hosting Premium Incluido (1 Año)',
        'Todo lo del Plan Esencial',
        'Diseño Exclusivo y Personalizado',
        'Copywriting Persuasivo Enfocado en Ventas',
        'Animaciones Cinemáticas y Fluidas',
        'SEO Avanzado (Top Posiciones Google)',
        'Formulario VIP de Captación de Leads',
        'Soporte Prioritario 1 a 1',
        'Entrega Garantizada en 72 Horas'
      ],
      cta: 'Quiero el Plan Profesional',
      highlight: true
    },
    {
      id: 'elite',
      name: 'Plan Elite',
      price: 'A Medida',
      description: 'Sistemas a medida, integraciones avanzadas y escala corporativa para marcas líderes.',
      features: [
        'Consultoría Estratégica VIP',
        'Todo lo del Plan Profesional',
        'Integración de APIs y Webhooks',
        'Arquitectura 100% Hecha a Medida',
        'Panel de Control / CMS Personalizado',
        'SEO Corporativo Dominante',
        'Soporte Dedicado Exclusivo 24/7',
        'Gestión Activa de Contenidos'
      ],
      cta: 'Hablar con un Asesor',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="relative py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      {/* Backdrop Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-zinc-50 dark:bg-zinc-900/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6"
          >
            Inversión y Planes
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-6 tracking-tighter"
          >
            Inversión <span className="text-zinc-200 dark:text-zinc-800">Transparente</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Estructuras de inversión transparentes diseñadas para escalar tu negocio. Sin letra pequeña ni costos ocultos, solo resultados tangibles.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className={`group relative p-10 lg:p-14 rounded-[2.5rem] border transition-all duration-700 flex flex-col justify-between ${
                plan.highlight 
                ? ( 'bg-black dark:bg-white border-transparent shadow-[0_80px_100px_-30px_rgba(0,0,0,0.5)] dark:shadow-[0_80px_100px_-30px_rgba(255,255,255,0.15)]' ) 
                : ( 'bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-950 hover:shadow-2xl' )
              }`}
            >
              {plan.highlight && (
                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                  <motion.div 
                    animate={{ 
                      x: ['-100%', '100%'],
                      opacity: [0, 0.1, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white dark:via-black to-transparent skew-x-12"
                  />
                </div>
              )}

              <div>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.2em] px-8 py-2.5 rounded-full border border-white/20 dark:border-black/20 shadow-xl">
                    Más Vendido • Élite
                  </div>
                )}
                
                <div className="mb-14">
                  <h3 className={`text-3xl font-black mb-6 tracking-tight ${plan.highlight ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>{plan.name}</h3>
                  <p className={`text-sm mb-12 leading-relaxed opacity-70 ${plan.highlight ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500 dark:text-zinc-400'}`}>{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    {plan.price !== 'A Medida' && (
                      <span className={`text-2xl font-bold ${plan.highlight ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>€</span>
                    )}
                    <span className={`text-5xl lg:text-7xl font-black tracking-tighter ${plan.highlight ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>{plan.price}</span>
                  </div>
                </div>

                <div className="space-y-5 mb-20">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center gap-5"
                    >
                      <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                        plan.highlight 
                        ? 'bg-white/10 dark:bg-black/10 border-white/20 dark:border-black/20' 
                        : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 shadow-inner'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-white dark:bg-black' : 'bg-black dark:bg-white'}`} />
                      </div>
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-zinc-300 dark:text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'}`}>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                type="button"
                onClick={() => {
                  if (onSelectPlan) {
                    onSelectPlan(plan.id as any);
                  } else {
                    window.location.hash = '#/briefing';
                  }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-7 rounded-3xl font-black text-xl text-center flex items-center justify-center gap-4 transition-all shadow-xl cursor-pointer ${
                  plan.highlight 
                  ? 'bg-white dark:bg-black text-black dark:text-white' 
                  : 'bg-black dark:bg-white text-white dark:text-black'
                }`}
              >
                {plan.cta}
                <ArrowRight size={24} strokeWidth={4} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
