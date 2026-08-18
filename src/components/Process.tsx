import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Você escolhe o plano',
      description: 'Escolha a opção que melhor atende seu negócio e objetivos atuais.'
    },
    {
      number: '02',
      title: 'Envie suas informações',
      description: 'Envie logo, textos, imagens, contatos e informações chave do seu negócio.'
    },
    {
      number: '03',
      title: 'Desenvolvemos seu site',
      description: 'Nossa equipe cria o layout e desenvolve o projeto com foco em performance.'
    },
    {
      number: '04',
      title: 'Site publicado',
      description: 'Em até 48 horas seu site estará pronto para receber visitantes e gerar vendas.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black text-black dark:text-white tracking-tight"
            >
              Como <span className="text-zinc-300 dark:text-zinc-700">funciona</span>
            </motion.h2>
          </div>
          <div className="lg:mb-3">
            <p className="text-zinc-500 dark:text-zinc-400 font-medium max-w-sm">
              Um processo simplificado para colocar seu negócio no mapa digital em tempo recorde.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-zinc-100 dark:bg-zinc-900 -z-10"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full flex items-center justify-center text-2xl font-black text-black dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
