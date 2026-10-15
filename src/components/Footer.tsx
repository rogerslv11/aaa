import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-12 border-t border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg">
                <span className="text-black font-black text-lg leading-none">S</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black tracking-tight text-white uppercase">SitePro</span>
                <span className="text-xs font-black px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">72h</span>
              </div>
            </div>
            <p className="text-zinc-400 mb-8 max-w-xs leading-relaxed text-sm">
              Criamos e programamos sites ultrarrápidos e de alta conversão sob medida para acelerar seu faturamento e autoridade de marca em tempo recorde.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Especialidades</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#especialidades" className="text-zinc-400 hover:text-white transition-colors">Sites Sob Medida & Redesign</a></li>
              <li><a href="#especialidades" className="text-zinc-400 hover:text-white transition-colors">Landing Pages de Alta Conversão</a></li>
              <li><a href="#especialidades" className="text-zinc-400 hover:text-white transition-colors">Catálogos & E-commerce Ágil</a></li>
              <li><a href="#especialidades" className="text-zinc-400 hover:text-white transition-colors">SEO Estrutural & Google Score 99+</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#benefits" className="text-zinc-400 hover:text-white transition-colors">Por que nós?</a></li>
              <li><a href="#process" className="text-zinc-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Planos & Preços</a></li>
              <li><a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors">Casos de Sucesso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Atendimento</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-zinc-400">contato@sitepro72h.com.br</li>
              <li className="text-zinc-400">Atendimento VIP via WhatsApp</li>
              <li className="text-zinc-400">Suporte Técnico Dedicado</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-zinc-400">
            © {currentYear} SitePro 72h. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-white">Política de Privacidade</a>
            <a href="#" className="text-zinc-400 hover:text-white">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
