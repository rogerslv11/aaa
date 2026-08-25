import { motion } from 'motion/react';
import { Zap, Palette, Smartphone, Rocket, Search, MessageSquare, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Differentials() {
  const items = [
    { title: 'Record Speed', icon: <Zap size={24} />, description: 'Your brand live in 72h. Don\'t waste any more time waiting.' },
    { title: 'Elite Aesthetics', icon: <Palette size={24} />, description: 'Premium design that positions your brand at the top of the market.' },
    { title: 'Impeccable Mobile', icon: <Smartphone size={24} />, description: 'Perfect experience on smartphones, where your customers are.' },
    { title: 'Extreme Performance', icon: <Rocket size={24} />, description: 'Instant loading so you don\'t miss a click.' },
    { title: 'Google Dominance', icon: <Search size={24} />, description: 'Optimized structure so you are the first choice.' },
    { title: 'Armored Support', icon: <MessageSquare size={24} />, description: 'Humanized service focused on your peace of mind.' },
    { title: 'Secure Code', icon: <ShieldCheck size={24} />, description: 'Cutting-edge technology to protect your data and customers.' },
    { title: 'Profit Focused', icon: <TrendingUp size={24} />, description: 'The entire structure designed to maximize your conversion.' },
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
            Why hire <span className="text-zinc-600 dark:text-zinc-800">our service?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 dark:text-zinc-500 text-lg max-w-xl"
          >
            We combine speed, aesthetics, and technique to deliver the best result for your business.
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
