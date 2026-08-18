import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import heroMockup from '../assets/images/hero_mockup_modern_web_design_1786988074777.jpg';

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Typewriter words
  const words = ['Autoridade', 'Resultados', 'Impacto', 'Conversão'];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      words.forEach((word) => {
        tl.to(typewriterRef.current, {
          duration: 1.5,
          text: word,
          ease: "none",
        })
        .to({}, { duration: 1.5 }) // wait
        .to(typewriterRef.current, {
          duration: 1,
          text: "",
          ease: "none",
        });
      });
    });
    return () => ctx.revert();
  }, []);

  // Smooth spring for mouse parallax
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [-500, 500], [-20, 20]);
  const moveY = useTransform(springY, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const trustIndicators = [
    'Entrega em 48h',
    'Design de Elite',
    'SEO Avançado',
    'Suporte VIP'
  ];

  const magneticRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = magneticRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.3;
      const y = (clientY - (top + height / 2)) * 0.3;
      gsap.to(btn, { x, y, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden transition-colors duration-500 dark:bg-zinc-950">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-100 dark:bg-zinc-900/30 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
              Disponibilidade Imediata • Slot 03/05
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-[100px] font-black tracking-tighter text-black dark:text-white mb-8 leading-[0.9] text-reveal">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="inline-block"
              >
                Crie sua <br />
                <span ref={typewriterRef} className="text-zinc-200 dark:text-zinc-800"></span> <br />
                Digital em <span className="italic font-serif font-light text-3xl sm:text-5xl lg:text-[100px]">48h</span>.
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg lg:text-xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed max-w-xl"
            >
              Não apenas um site. Uma vantagem competitiva. Desenvolvemos interfaces de alta conversão para marcas que buscam o topo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-5 mb-16"
            >
              <motion.a
                ref={magneticRef}
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
              >
                Começar agora
                <ArrowRight size={24} strokeWidth={3} />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ x: 5 }}
                className="group w-full sm:w-auto text-black dark:text-white px-8 py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                Ver Portfólio
                <div className="w-10 h-[1px] bg-zinc-200 dark:bg-zinc-800 group-hover:w-16 transition-all"></div>
              </motion.a>
            </motion.div>

            <div className="flex flex-wrap gap-8">
              {trustIndicators.map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + (i * 0.1) }}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600"
                >
                  <div className="w-1 h-1 bg-black dark:bg-white rounded-full" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ x: moveX, y: moveY }}
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
          >
            {/* Main Mockup */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-2">
              <img 
                src={heroMockup} 
                alt="Mockup do site profissional"
                className="w-full h-auto rounded-[2rem] grayscale dark:grayscale-0 contrast-125 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Metrics Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 z-20 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Conversão</div>
                  <div className="text-xl font-black text-black dark:text-white">+142%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -right-10 z-20 bg-zinc-950 dark:bg-white p-6 rounded-3xl shadow-2xl border border-zinc-800 dark:border-zinc-200 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 dark:bg-black/5 text-white dark:text-black rounded-xl flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Performance</div>
                  <div className="text-xl font-black text-white dark:text-black">99/100</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-16 z-20 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 hidden lg:flex items-center gap-3"
            >
              <ShieldCheck size={20} className="text-black dark:text-white" />
              <span className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">Garantia 48h</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
