import { motion } from 'motion/react';
import { Shield, TrendingUp, Zap, Globe } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'Mais credibilidade',
      description: 'Passe mais confiança para seus clientes com um site profissional de alto nível.',
      icon: <Shield size={32} />
    },
    {
      title: 'Mais oportunidades',
      description: 'Esteja disponível para seus clientes 24 horas por dia em qualquer lugar do mundo.',
      icon: <Globe size={32} />
    },
    {
      title: 'Mais autoridade',
      description: 'Apresente seus serviços, produtos e diferenciais de forma organizada e profissional.',
      icon: <Zap size={32} />
    },
    {
      title: 'Mais vendas',
      description: 'Transforme visitantes em clientes através de uma estrutura pensada para conversão.',
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-4 tracking-tight"
          >
            Seu negócio merece uma presença profissional.
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-black dark:bg-white mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
