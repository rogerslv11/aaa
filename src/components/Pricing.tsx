import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      id: 'essencial',
      name: 'Plano Essencial',
      price: '600',
      description: 'Ideal para quem precisa de uma presença profissional simples e rápida.',
      features: [
        'Site profissional',
        'Design responsivo',
        'Até 5 seções',
        'Página inicial',
        'Seção de serviços',
        'Seção sobre a empresa',
        'Contato',
        'Botão para WhatsApp',
        'Integração com redes sociais',
        'SEO básico',
        'Otimização para celular',
        'Publicação do site',
        'Entrega em até 48 horas'
      ],
      cta: 'Quero o Plano Essencial',
      highlight: false
    },
    {
      id: 'profissional',
      name: 'Plano Profissional',
      price: '1.200',
      description: 'A solução completa com animações e recursos avançados de conversão.',
      features: [
        'Tudo do Plano Essencial',
        'Design personalizado',
        'Até 10 seções',
        'Animações profissionais',
        'Galeria de imagens',
        'Depoimentos',
        'FAQ',
        'Formulário de contato',
        'Integrações adicionais',
        'SEO avançado',
        'Otimização de performance',
        'Estrutura focada em conversão',
        'Publicação do site',
        'Entrega em até 48 horas'
      ],
      cta: 'Quero o Plano Profissional',
      highlight: true
    },
    {
      id: 'elite',
      name: 'Plano Elite',
      price: 'Sob Consulta',
      description: 'Projetos complexos e sistemas sob medida para grandes marcas.',
      features: [
        'Tudo do Plano Profissional',
        'Consultoria Estratégica',
        'Integrações via API',
        'Layout 100% Exclusivo',
        'Painel Administrativo',
        'SEO Enterprise',
        'Suporte Prioritário 24/7',
        'Gestão de Conteúdo',
        'Copywriting Profissional',
        'Treinamento de Equipe'
      ],
      cta: 'Falar com Consultor',
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6"
          >
            Tabela de Preços 2024
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-6 tracking-tighter"
          >
            Investimento <span className="text-zinc-200 dark:text-zinc-800">Sob Medida</span>
          </motion.h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Estruturas de preço transparentes projetadas para escalar com seu negócio. Sem letras miúdas, apenas resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    Escolha de Elite
                  </div>
                )}
                
                <div className="mb-14">
                  <h3 className={`text-3xl font-black mb-6 tracking-tight ${plan.highlight ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>{plan.name}</h3>
                  <p className={`text-sm mb-12 leading-relaxed opacity-70 ${plan.highlight ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500 dark:text-zinc-400'}`}>{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    {plan.price !== 'Sob Consulta' && (
                      <span className={`text-2xl font-bold ${plan.highlight ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>R$</span>
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

              <motion.a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-7 rounded-3xl font-black text-xl text-center flex items-center justify-center gap-4 transition-all shadow-xl ${
                  plan.highlight 
                  ? 'bg-white dark:bg-black text-black dark:text-white' 
                  : 'bg-black dark:bg-white text-white dark:text-black'
                }`}
              >
                {plan.cta}
                <ArrowRight size={24} strokeWidth={4} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
