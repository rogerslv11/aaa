import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Richard Santos',
      role: 'Owner',
      company: 'Consultoria RS',
      content: 'I needed a fast website to launch my new consultancy and the result exceeded all expectations. On-time delivery and impeccable design.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=ricardo'
    },
    {
      id: 2,
      name: 'Mariana Costa',
      role: 'Dermatologist',
      company: 'Clínica BioPelle',
      content: 'The process was very simple. I sent the clinic photos and in 2 days my site was live and receiving appointments via WhatsApp.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=mariana'
    },
    {
      id: 3,
      name: 'Andrew Luiz',
      role: 'CEO',
      company: 'TechFlow Solutions',
      content: 'The Landing Page they created for our product had an incredible conversion rate from day one. I highly recommend their work.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=andre'
    },
    {
      id: 4,
      name: 'Carla Dias',
      role: 'Architect',
      company: 'Studio Arq',
      content: 'Visual presentation is everything in my field. The website I received translates exactly the minimalism I seek in my projects.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=carla'
    },
    {
      id: 5,
      name: 'Felipe Rocha',
      role: 'Founder',
      company: 'Rocha Imóveis',
      content: 'We were losing clients to the competition due to the lack of a modern website. In 72h we changed our digital reality.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=felipe'
    },
    {
      id: 6,
      name: 'Juliana Lima',
      role: 'Nutritionist',
      company: 'Saúde & Vida',
      content: 'Total ease. The WhatsApp button integrated into the site increased my appointments by more than 40% in the first month.',
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
            What our <span className="text-zinc-300 dark:text-zinc-700">clients say</span>
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
