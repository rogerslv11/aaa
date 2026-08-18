import { motion } from 'motion/react';
import { Zap, Palette, Smartphone, Rocket, Search, MessageSquare, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Differentials() {
  const items = [
    { title: 'Entrega em até 48 horas', icon: <Zap size={24} />, description: 'Processo ágil para você não perder tempo.' },
    { title: 'Design moderno', icon: <Palette size={24} />, description: 'Estética premium que valoriza sua marca.' },
    { title: '100% responsivo', icon: <Smartphone size={24} />, description: 'Funciona perfeitamente em qualquer tela.' },
    { title: 'Alta performance', icon: <Rocket size={24} />, description: 'Carregamento ultra-rápido para seus usuários.' },
    { title: 'SEO Otimizado', icon: <Search size={24} />, description: 'Pronto para ser encontrado no Google.' },
    { title: 'Atendimento rápido', icon: <MessageSquare size={24} />, description: 'Suporte humanizado e sem burocracia.' },
    { title: 'Segurança', icon: <ShieldCheck size={24} />, description: 'Boas práticas de segurança em cada linha de código.' },
    { title: 'Foco em Conversão', icon: <TrendingUp size={24} />, description: 'Estrutura pensada para transformar cliques em vendas.' },
  ];

  return (
    <section className="py-24 bg-zinc-950 dark:bg-black text-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-4 tracking-tight"
          >
            Por que contratar <span className="text-zinc-600 dark:text-zinc-800">nosso serviço?</span>
          </motion.h2>
          <p className="text-zinc-400 dark:text-zinc-500 text-lg max-w-xl">
            Combinamos velocidade, estética e técnica para entregar o melhor resultado para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 border border-zinc-800 dark:border-zinc-900 rounded-3xl hover:border-zinc-500 dark:hover:border-zinc-700 transition-colors group bg-zinc-900/50 dark:bg-zinc-950/50"
            >
              <div className="mb-4 text-zinc-400 dark:text-zinc-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
