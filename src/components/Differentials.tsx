import { motion } from 'motion/react';
import { Zap, Palette, Smartphone, Rocket, Search, MessageSquare, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Differentials() {
  const items = [
    { title: 'Velocidad Récord', icon: <Zap size={24} />, description: 'Tu marca online y facturando en 72h. No pierdas semanas esperando agencias tradicionales.' },
    { title: 'Estética de Élite', icon: <Palette size={24} />, description: 'Diseño premium exclusivo que posiciona tu marca en la cima de tu sector.' },
    { title: 'Experiencia Móvil', icon: <Smartphone size={24} />, description: 'Navegación perfecta y rápida en smartphones, donde compran el 80% de tus clientes.' },
    { title: 'Rendimiento Extremo', icon: <Rocket size={24} />, description: 'Carga instantánea en milisegundos para no perder ninguna oportunidad de venta.' },
    { title: 'Dominio en Google', icon: <Search size={24} />, description: 'Estructura SEO optimizada para que seas la primera elección cuando busquen tu servicio.' },
    { title: 'Soporte VIP Humano', icon: <MessageSquare size={24} />, description: 'Atención directa y personalizada enfocada en tu tranquilidad y éxito.' },
    { title: 'Código Blindado', icon: <ShieldCheck size={24} />, description: 'Tecnología moderna y segura para proteger tus datos y a tus clientes.' },
    { title: 'Enfoque en Conversión', icon: <TrendingUp size={24} />, description: 'Toda la arquitectura y textos diseñados con el único objetivo de vender más.' },
  ];

  return (
    <section className="py-24 bg-zinc-950 dark:bg-black text-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-black mb-4 tracking-tight"
          >
            ¿Por qué elegir <span className="text-zinc-600 dark:text-zinc-800">nuestro servicio?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 dark:text-zinc-500 text-lg max-w-xl"
          >
            Combinamos velocidad récord, diseño de lujo e ingeniería de conversión para entregar el mejor resultado para tu negocio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
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
