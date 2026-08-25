import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      number: '01',
      title: 'Conversion Engineering',
      description: "We map your audience's behavior to chart the fastest path to 'Yes'."
    },
    {
      number: '02',
      title: 'Authority Design',
      description: 'We create an elite interface that communicates luxury and professionalism in every pixel.'
    },
    {
      number: '03',
      title: 'Extreme Performance',
      description: 'We develop with cutting-edge technology to ensure instant loading and Google dominance.'
    },
    {
      number: '04',
      title: 'Market Dominance',
      description: 'In 72h, you stop being invisible and take control of your digital authority.'
    }
  ];

  return (
    <section id="process" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Header Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">
                  Elite Workflow
                </div>
                <h2 className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-8 tracking-tighter leading-none">
                  How we <br />
                  <span className="text-zinc-200 dark:text-zinc-800">Scale.</span>
                </h2>
                <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                  A surgical process designed to eliminate noise and deliver digital authority in record time.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-zinc-100 dark:bg-zinc-900 -z-10">
              <motion.div 
                style={{ scaleY, transformOrigin: 'top' }}
                className="absolute inset-0 bg-black dark:bg-white w-full h-full"
              />
            </div>

            <div className="space-y-24">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-12 group"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-black border-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-xl font-black text-zinc-300 dark:text-zinc-700 group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white transition-all duration-500 z-10 relative">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-3xl font-black text-black dark:text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {step.title}
                    </h3>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
