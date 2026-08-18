import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 pt-24 pb-12 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center rounded-sm">
                <span className="text-white dark:text-black font-bold text-xl leading-none">S</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase dark:text-white">SitePro<span className="text-zinc-400 dark:text-zinc-600">48h</span></span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-xs">
              Criamos sites profissionais, rápidos e focados em resultados para impulsionar seu negócio digital em tempo recorde.
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
            <h4 className="text-black dark:text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Criação de Sites</a></li>
              <li><a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">SEO & Performance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#benefits" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Por que nós?</a></li>
              <li><a href="#process" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Como funciona</a></li>
              <li><a href="#pricing" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Planos</a></li>
              <li><a href="#portfolio" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black dark:text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="text-zinc-500 dark:text-zinc-400">contato@sitepro48h.com.br</li>
              <li className="text-zinc-500 dark:text-zinc-400">(11) 99999-9999</li>
              <li className="text-zinc-500 dark:text-zinc-400">São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 dark:text-zinc-500 text-sm">
            © {currentYear} SitePro48h. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white text-sm">Privacidade</a>
            <a href="#" className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white text-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
