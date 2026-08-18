import { motion, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function Statistics() {
  const stats = [
    { value: 250, suffix: '+', label: 'Sites Entregues' },
    { value: 48, suffix: 'h', label: 'Prazo Máximo' },
    { value: 99, suffix: '%', label: 'Satisfação' },
    { value: 24, suffix: '/7', label: 'Sites Online' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
  };
  index: number;
  key?: string | number;
}

function StatItem({ stat, index }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-2 tracking-tighter tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest text-xs">
        {stat.label}
      </div>
    </motion.div>
  );
}
