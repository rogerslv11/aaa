import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ricardo Santos',
      role: 'Fundador',
      company: 'Consultoría RS',
      content: 'Necesitaba una web urgente para lanzar mi consultoría y el resultado superó todas mis expectativas. Entrega exacta en 72 horas y un diseño que transmite confianza al instante.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=ricardo'
    },
    {
      id: 2,
      name: 'Dra. Mariana Costa',
      role: 'Dermatóloga',
      company: 'Clínica BioPelle',
      content: 'El proceso fue súper ágil. Envié la información y en 2 días mi web ya estaba online y captando solicitudes de citas por WhatsApp de forma continua.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=mariana'
    },
    {
      id: 3,
      name: 'Andrés Ruiz',
      role: 'Director General',
      company: 'TechFlow Solutions',
      content: 'La Landing Page que crearon para nuestro servicio tuvo una tasa de conversión impresionante desde el primer día. La inversión se pagó sola en la primera semana.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=andre'
    },
    {
      id: 4,
      name: 'Carla Díaz',
      role: 'Arquitecta Principal',
      company: 'Studio Arq',
      content: 'La imagen visual lo es todo en mi profesión. La página web refleja a la perfección el nivel de sofisticación y minimalismo que exigen mis clientes.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=carla'
    },
    {
      id: 5,
      name: 'Felipe Rocha',
      role: 'Director Comercial',
      company: 'Rocha Inmobiliaria',
      content: 'Estábamos perdiendo prospectos frente a la competencia por tener una web obsoleta. En 72 horas transformamos nuestra presencia y las consultas aumentaron.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=felipe'
    },
    {
      id: 6,
      name: 'Juliana Morales',
      role: 'Nutricionista Clínica',
      company: 'Salud & Vida',
      content: 'Facilidad total y atención personalizada. El botón inteligente de WhatsApp y la rapidez del sitio aumentaron mis reservas en más de un 40% el primer mes.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=juliana'
    }
  ];

  // Double the testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
          >
            Lo que dicen <span className="text-zinc-300 dark:text-zinc-700">nuestros clientes</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10"></div>

        <motion.div 
          animate={{
            x: [0, -1920], // Adjust based on total width of elements
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 whitespace-nowrap py-4"
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[400px] flex-shrink-0 bg-zinc-50 dark:bg-zinc-900 p-10 rounded-3xl relative whitespace-normal border border-zinc-100 dark:border-zinc-800"
            >
              <Quote className="absolute top-8 right-8 text-zinc-200 dark:text-zinc-800" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-black dark:fill-white text-black dark:text-white" />
                ))}
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full grayscale border border-zinc-200 dark:border-zinc-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-black dark:text-white">{t.name}</h4>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{t.role} • {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
