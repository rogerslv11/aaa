import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-black dark:bg-zinc-950 transition-colors duration-500 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 dark:bg-zinc-900 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-800 dark:bg-zinc-900 rounded-full blur-[120px] opacity-20 -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white dark:text-zinc-100 mb-8 tracking-tight leading-tight">
            Seu próximo cliente pode estar procurando por você agora.
          </h2>
          <p className="text-xl text-zinc-400 dark:text-zinc-500 mb-12 max-w-2xl mx-auto">
            Não deixe seu negócio perder oportunidades por não ter uma presença profissional na internet. Comece hoje mesmo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white dark:bg-white text-black dark:text-black px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3"
            >
              Quero meu site em 48 horas
              <ArrowRight size={24} />
            </motion.a>
            
            <motion.a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-300 border border-zinc-700 dark:border-zinc-700 px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Falar pelo WhatsApp
            </motion.a>
          </div>

          <div className="mt-12 inline-block px-6 py-2 bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-800 rounded-full">
            <span className="text-zinc-500 dark:text-zinc-600 font-medium">Planos a partir de</span>
            <span className="text-white dark:text-zinc-200 font-bold ml-2">R$ 600</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
