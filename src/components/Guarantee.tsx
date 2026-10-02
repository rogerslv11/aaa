import { motion } from 'motion/react';
import { ShieldCheck, Headphones, ThumbsUp, HeartHandshake } from 'lucide-react';

export default function Guarantee() {
  const points = [
    {
      title: 'Satisfacción Garantizada',
      description: 'Trabajamos y pulimos los detalles hasta que estés 100% satisfecho con el resultado final de tu proyecto.',
      icon: <ThumbsUp size={32} />
    },
    {
      title: 'Soporte 100% Humano',
      description: "Nada de robots ni respuestas frías. Tendrás contacto directo por WhatsApp con nuestro equipo para lo que necesites.",
      icon: <Headphones size={32} />
    },
    {
      title: 'Seguridad Blindada',
      description: 'Tu web es construida bajo los más altos estándares de rendimiento, protección de datos y certificado SSL.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Compromiso 72h',
      description: "Si no entregamos en el plazo de 72 horas acordado tras recibir tu información, te devolvemos el 100% de tu dinero.",
      icon: <HeartHandshake size={32} />
    }
  ];

  return (
    <section className="py-24 bg-black dark:bg-zinc-950 text-white transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full bg-zinc-800 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Tranquilidad Absoluta
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tight"
          >
            Nuestro compromiso es con <span className="text-zinc-600 dark:text-zinc-700">tu éxito comercial.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white dark:group-hover:bg-zinc-100 group-hover:text-black dark:group-hover:text-black transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
