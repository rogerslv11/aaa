import { motion } from 'motion/react';
import { Layout, Globe, ShoppingCart, Rocket, Zap, Search, Shield, Cpu } from 'lucide-react';

export default function ServicesBreakdown() {
  return (
    <section className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-6 tracking-tighter"
          >
            Nossas <span className="text-zinc-200 dark:text-zinc-800">Especialidades</span>
          </motion.h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Unimos design de vanguarda com engenharia de performance para criar experiências digitais que dominam o mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[240px]">
          {/* Main Bento Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between group overflow-hidden relative min-h-[400px] md:min-h-0"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center mb-8">
                <Rocket size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-4 tracking-tighter">Landing Pages de Elite</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md leading-relaxed">
                Máquinas de conversão otimizadas para tráfego pago. Entregamos design focado em resultados reais e carregamento instantâneo.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-zinc-200 dark:bg-zinc-800/50 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
          </motion.div>

          {/* Secondary Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-1 bg-zinc-950 dark:bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col justify-between group min-h-[200px] md:min-h-0"
          >
            <div className="text-white dark:text-black">
              <ShoppingCart size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white dark:text-black mb-2">E-commerce</h3>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm">Lojas robustas e escaláveis.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] p-8 border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between min-h-[200px] md:min-h-0"
          >
            <div className="text-black dark:text-white">
              <Globe size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Institucional</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">A autoridade da sua marca online.</p>
            </div>
          </motion.div>

          {/* Feature Grid inside Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] p-8 border border-zinc-100 dark:border-zinc-800 grid grid-cols-3 gap-4 min-h-[160px] md:min-h-0"
          >
            {[
              { icon: <Zap size={20} />, label: 'SEO' },
              { icon: <Shield size={20} />, label: 'Seguro' },
              { icon: <Cpu size={20} />, label: 'IA' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 group hover:bg-black dark:hover:bg-white transition-colors duration-300">
                <div className="text-zinc-400 group-hover:text-white dark:group-hover:text-black">{item.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white dark:group-hover:text-black">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] p-8 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between group min-h-[160px] md:min-h-0"
          >
            <div className="max-w-[180px]">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Portfólio</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Sua vitrine digital de alto nível.</p>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-black dark:text-white group-hover:rotate-12 transition-transform duration-500">
              <Layout size={28} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
