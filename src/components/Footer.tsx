import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white dark:bg-zinc-950 pt-24 pb-12 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center rounded-sm">
                <span className="text-white dark:text-black font-bold text-xl leading-none">V</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase dark:text-white">Vanguard<span className="text-zinc-400 dark:text-zinc-600">Studio</span></span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-xs leading-relaxed">
              Creamos páginas web profesionales, ultra rápidas y con enfoque quirúrgico en ventas para impulsar tu negocio en tiempo récord.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-50 dark:bg-zinc-900 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-50 dark:bg-zinc-900 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-50 dark:bg-zinc-900 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#especialidades" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Creación de Páginas Web</a></li>
              <li><a href="#especialidades" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Landing Pages de Conversión</a></li>
              <li><a href="#especialidades" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">E-commerce & Tiendas Online</a></li>
              <li><a href="#especialidades" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">SEO y Rendimiento Extremo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#benefits" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">¿Por qué nosotros?</a></li>
              <li><a href="#process" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#pricing" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Planes y Precios</a></li>
              <li><a href="#portfolio" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Portafolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="text-zinc-500 dark:text-zinc-400">contacto@vanguardstudio.com</li>
              <li className="text-zinc-500 dark:text-zinc-400">+34 900 720 800</li>
              <li className="text-zinc-500 dark:text-zinc-400">Atención Internacional 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 dark:text-zinc-500 text-sm">
            © {currentYear} Vanguard Studio. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white text-sm">Privacidad</a>
            <a href="#" className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white text-sm">Términos de Uso</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
