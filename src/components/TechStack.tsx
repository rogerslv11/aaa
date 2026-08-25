import { motion } from 'motion/react';
import { Cpu, Wind, Code2, Cloud, Zap } from 'lucide-react';

export default function TechStack() {
  const techs = [
    { name: 'React 19', icon: <Code2 size={24} />, detail: 'Ultra-fast interfaces' },
    { name: 'Vite', icon: <Zap size={24} />, detail: 'Instant build' },
    { name: 'Tailwind CSS', icon: <Wind size={24} />, detail: 'Optimized styling' },
    { name: 'Cloud Native', icon: <Cloud size={24} />, detail: 'Elite hosting' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-black dark:text-white mb-8 tracking-tight">
              Cutting-edge technology for <span className="text-zinc-300 dark:text-zinc-700">maximum performance.</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
              We don't use ready-made templates or slow tools. We use the same technologies as the world's largest companies (Meta, Netflix, Airbnb) to ensure your site is the fastest on the market.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-black dark:text-white font-bold">
                <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
                Clean and optimized code
              </li>
              <li className="flex items-center gap-3 text-black dark:text-white font-bold">
                <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
                Zero unnecessary dependencies
              </li>
              <li className="flex items-center gap-3 text-black dark:text-white font-bold">
                <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
                Scalable infrastructure
              </li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center group hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h4 className="font-black text-xl mb-1">{tech.name}</h4>
                <p className="text-zinc-400 dark:text-zinc-500 text-sm">{tech.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
