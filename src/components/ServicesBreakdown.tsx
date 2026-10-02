import { motion } from 'motion/react';
import { Layout, Globe, ShoppingCart, Rocket, Zap, Search, Shield, Cpu, ArrowUpRight } from 'lucide-react';

export default function ServicesBreakdown() {
  return (
    <section id="especialidades" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6"
            >
              Nuestras Especialidades
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black text-black dark:text-white leading-[0.9] tracking-tighter"
            >
              Especialidades que <br /> <span className="text-zinc-200 dark:text-zinc-800 italic font-serif font-light text-3xl sm:text-5xl lg:text-[100px]">generan ventas.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:mb-3"
          >
            <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-sm leading-relaxed">
              Desarrollamos ecosistemas digitales de alto rendimiento donde cada píxel está diseñado para convertir y cada línea de código optimizada para velocidad extrema.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
          {/* Landing Pages - Primary Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 md:row-span-2 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-10 lg:p-16 border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-20 h-20 bg-black dark:bg-white text-white dark:text-black rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform duration-500">
                <Rocket size={40} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-6 tracking-tighter">Landing Pages de Alta Conversión</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xl max-w-lg leading-relaxed mb-8">
                Páginas creadas con psicología de ventas y diseño de élite. No solo entregamos belleza estética; entregamos el retorno que tu inversión publicitaria merece.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Psicología de Ventas', 'Enfoque en ROI', '100% Móvil'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-white dark:bg-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 border border-zinc-100 dark:border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-200/20 dark:from-zinc-800/20 to-transparent pointer-events-none"></div>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="absolute top-10 right-10 w-14 h-14 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all cursor-pointer"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.div>

          {/* E-commerce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="md:col-span-4 md:row-span-1 bg-zinc-950 dark:bg-white rounded-[3rem] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10 text-white dark:text-black">
              <ShoppingCart size={32} />
              <h3 className="text-2xl font-black mt-8 mb-3 tracking-tight">E-commerce</h3>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm leading-relaxed">Sistemas de venta online rápidos, seguros y escalables para facturar sin interrupciones.</p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 dark:bg-black/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          </motion.div>

          {/* Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:col-span-4 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-10 border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between group"
          >
            <div className="text-black dark:text-white group-hover:scale-110 transition-transform origin-left">
              <Globe size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-black dark:text-white mb-3 tracking-tight">Webs Institucionales</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">Posicionamiento de marca y máxima autoridad para empresas y profesionales líderes.</p>
            </div>
          </motion.div>

          {/* Micro-Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-6 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-10 border border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Zap size={24} />, label: 'SEO Estructural', desc: 'Indexación inmediata en Google.' },
              { icon: <Cpu size={24} />, label: 'Optimización Core', desc: 'Rendimiento ultra-rápido.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col justify-center">
                <div className="text-zinc-400 mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-1">{item.label}</h4>
                <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact / Portoflio Quick Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-6 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-10 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between group cursor-pointer hover:bg-white dark:hover:bg-zinc-950 transition-colors"
          >
            <div className="max-w-[240px]">
              <h3 className="text-2xl font-black text-black dark:text-white mb-2 tracking-tight">Proyectos a Medida</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">Tu visión, nuestra tecnología. Desarrollamos soluciones hechas a tu medida.</p>
            </div>
            <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-3xl flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
              <ArrowUpRight size={32} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
