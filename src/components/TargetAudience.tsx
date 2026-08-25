import { motion } from 'motion/react';
import { User, Briefcase, Stethoscope, Home, Utensils, GraduationCap, Gavel, Camera, ShoppingBag, Dumbbell, PenTool, Globe } from 'lucide-react';

export default function TargetAudience({ isDarkMode }: { isDarkMode: boolean }) {
  const niches = [
    { name: 'Service Providers', icon: <Briefcase size={24} /> },
    { name: 'Freelancers', icon: <User size={24} /> },
    { name: 'Small Businesses', icon: <Globe size={24} /> },
    { name: 'Restaurants', icon: <Utensils size={24} /> },
    { name: 'Clinics', icon: <Stethoscope size={24} /> },
    { name: 'Offices', icon: <Gavel size={24} /> },
    { name: 'Real Estate', icon: <Home size={24} /> },
    { name: 'Gyms', icon: <Dumbbell size={24} /> },
    { name: 'Consultants', icon: <PenTool size={24} /> },
    { name: 'Infoproduct Creators', icon: <GraduationCap size={24} /> },
    { name: 'Local Shops', icon: <ShoppingBag size={24} /> },
    { name: 'Photographers', icon: <Camera size={24} /> },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-6 tracking-tight"
          >
            If you have a business, <span className="text-zinc-300 dark:text-zinc-700">we can build your website.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            We serve various niches with personalized solutions for every type of need.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
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
