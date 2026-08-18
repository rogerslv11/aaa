import { motion } from 'motion/react';
import { User, Briefcase, Stethoscope, Home, Utensils, GraduationCap, Gavel, Camera, ShoppingBag, Dumbbell, PenTool, Globe } from 'lucide-react';

export default function TargetAudience({ isDarkMode }: { isDarkMode: boolean }) {
  const niches = [
    { name: 'Prestadores de serviços', icon: <Briefcase size={24} /> },
    { name: 'Profissionais autônomos', icon: <User size={24} /> },
    { name: 'Pequenas empresas', icon: <Globe size={24} /> },
    { name: 'Restaurantes', icon: <Utensils size={24} /> },
    { name: 'Clínicas', icon: <Stethoscope size={24} /> },
    { name: 'Escritórios', icon: <Gavel size={24} /> },
    { name: 'Imobiliárias', icon: <Home size={24} /> },
    { name: 'Academias', icon: <Dumbbell size={24} /> },
    { name: 'Consultores', icon: <PenTool size={24} /> },
    { name: 'Infoprodutores', icon: <GraduationCap size={24} /> },
    { name: 'Lojas Locais', icon: <ShoppingBag size={24} /> },
    { name: 'Fotógrafos', icon: <Camera size={24} /> },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
          >
            Se você tem um negócio, <span className="text-zinc-300 dark:text-zinc-700">podemos criar seu site.</span>
          </motion.h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Atendemos diversos nichos com soluções personalizadas para cada tipo de necessidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? '#fff' : '#000', color: isDarkMode ? '#000' : '#fff' }}
              className="p-6 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 group bg-zinc-50 dark:bg-zinc-900"
            >
              <div className="text-black dark:text-white group-hover:text-current transition-colors">
                {niche.icon}
              </div>
              <span className="font-bold text-sm uppercase tracking-wider dark:text-zinc-300 group-hover:text-current">{niche.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
