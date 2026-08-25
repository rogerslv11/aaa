import { motion } from 'motion/react';
import { ShieldCheck, Headphones, ThumbsUp, HeartHandshake } from 'lucide-react';

export default function Guarantee() {
  const points = [
    {
      title: 'Satisfaction Guaranteed',
      description: 'We work until you are 100% satisfied with the final result of your project.',
      icon: <ThumbsUp size={32} />
    },
    {
      title: 'Humanized Support',
      description: "We don't talk with robots. You'll have a direct channel with our team for any questions.",
      icon: <Headphones size={32} />
    },
    {
      title: 'Total Security',
      description: 'Your site is developed following the highest standards of security and privacy.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: '72h Commitment',
      description: "If we don't deliver within the agreed time, you get your investment back.",
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
            Peace of Mind
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tight"
          >
            Our commitment is to <span className="text-zinc-600 dark:text-zinc-700">your success.</span>
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
