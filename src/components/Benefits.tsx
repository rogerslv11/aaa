import { motion } from 'motion/react';
import { Shield, TrendingUp, Zap, Globe, ArrowRight } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'Dominio del Mercado',
      description: "No seas una opción más en Google. Construye una presencia digital que intimide a tu competencia y atraiga a los clientes con mayor presupuesto.",
      icon: <Shield size={24} />,
      stat: '94%',
      statDesc: 'De los usuarios juzgan una empresa por su diseño'
    },
    {
      title: 'Máquina de Ventas 24/7',
      description: 'Tu web vende mientras duermes. Un embudo optimizado para captar prospectos calificados y cerrar ventas de forma predecible.',
      icon: <Globe size={24} />,
      stat: '100%',
      statDesc: 'De presencia comercial ininterrumpida'
    },
    {
      title: 'Autoridad Instantánea',
      description: 'Pasa de desconocido a referente indiscutible. El diseño de élite comunica prestigio y solidez antes de que lean la primera palabra.',
      icon: <Zap size={24} />,
      stat: '0.05s',
      statDesc: 'Para que un cliente decida si confiar en ti'
    },
    {
      title: 'Retorno Acelerado (ROI)',
      description: 'Velocidad extrema y arquitectura optimizada que reducen el coste de tu publicidad y multiplican tu tasa de conversión final.',
      icon: <TrendingUp size={24} />,
      stat: '3x',
      statDesc: 'Más probabilidad de cerrar ventas de alto valor'
    }
  ];

  return (
    <section id="benefits" className="py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white dark:bg-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-8 border border-zinc-100 dark:border-zinc-700">
              Ventaja Competitiva
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-8 tracking-tighter leading-[0.9]">
              ¿Por qué tu marca <br />
              <span className="text-zinc-200 dark:text-zinc-800">nos necesita?</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-20"
          >
            <p className="text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              En el mercado digital, la mediocridad es invisible. Nos aseguramos de que tu marca no solo sea vista, sino recordada y elegida.
            </p>
            <div className="flex items-center gap-4 text-black dark:text-white font-black uppercase tracking-widest text-xs">
              Tu crecimiento empieza aquí
              <ArrowRight size={16} />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-black dark:text-white mb-6 tracking-tight leading-tight">{benefit.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-50 dark:border-zinc-900">
                <div className="text-4xl font-black text-black dark:text-white mb-1 tracking-tighter">{benefit.stat}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{benefit.statDesc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
