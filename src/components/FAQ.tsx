import { useState } from 'react';
import { Plus, Minus, ArrowUpRight, Search, MessageSquare, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  category: string;
  key?: string | number;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs = [
    {
      category: 'process',
      categoryLabel: 'Processo & Prazo de 72h',
      question: 'Meu site realmente ficará pronto e no ar em até 72 horas?',
      answer: 'Sim, garantido 100% em contrato formal! Nosso fluxo ágil e arquitetura modular foram desenhados especificamente para entrega em velocidade recorde. O prazo de 72 horas começa a contar assim que você nos envia as informações básicas do seu negócio.'
    },
    {
      category: 'process',
      categoryLabel: 'Processo & Prazo de 72h',
      question: 'Quais informações eu preciso fornecer para começar?',
      answer: 'Apenas o essencial: seu logotipo (caso possua), um resumo dos seus serviços ou produtos principais, fotos que queira exibir e seus dados de contato (WhatsApp, redes sociais e endereço). Nossa equipe cuida da redação persuasiva (copywriting), design de luxo e código de alta velocidade.'
    },
    {
      category: 'tech',
      categoryLabel: 'Tecnologia & Hospedagem',
      question: 'O domínio próprio e a hospedagem já estão inclusos?',
      answer: 'O Plano Profissional (R$ 1.200) inclui 1 ano inteiro de hospedagem cloud CDN de altíssima velocidade. Para o seu domínio próprio (.com.br ou .com), nossos engenheiros realizam toda a configuração de DNS, certificado de segurança SSL e conexão de e-mails corporativos sem nenhum custo adicional.'
    },
    {
      category: 'tech',
      categoryLabel: 'Tecnologia & Hospedagem',
      question: 'O site é otimizado para aparecer nas buscas do Google (SEO)?',
      answer: 'Sim! Desenvolvemos com SEO estrutural completo: meta tags OpenGraph, dados estruturados Schema.org, semântica pura e nota 99+ no Google PageSpeed para que sua marca tenha máxima prioridade no ranking orgânico.'
    },
    {
      category: 'support',
      categoryLabel: 'Suporte & Garantias',
      question: 'Posso solicitar alterações e ajustes após a entrega inicial?',
      answer: 'Com certeza! Você tem rodadas de revisão ilimitadas após a apresentação da versão inicial para ajustar fotos, textos e componentes visuais até que o site atenda 100% ao seu padrão de qualidade.'
    },
    {
      category: 'support',
      categoryLabel: 'Suporte & Garantias',
      question: 'Como funciona o suporte técnico após o site ser lançado?',
      answer: 'Você conta com suporte humano VIP individual diretamente pelo WhatsApp para tirar dúvidas, receber orientações e manter seu site com total estabilidade e performance.'
    },
    {
      category: 'pricing',
      categoryLabel: 'Planos & Pagamentos',
      question: 'Existem mensalidades ocultas ou taxas recorrentes obrigatórias?',
      answer: 'Não! O investimento é único e transparente (Plano Essencial por R$ 600 ou Plano Profissional por R$ 1.200). Você se torna o único proprietário do código e de todos os arquivos, sem custos recorrentes obrigatórios.'
    },
    {
      category: 'pricing',
      categoryLabel: 'Planos & Pagamentos',
      question: 'Quais são as formas de pagamento disponíveis?',
      answer: 'Aceitamos Cartão de Crédito em até 12x, Pix à vista com desconto e Transferência Bancária, com processamento seguro criptografado e emissão imediata de Nota Fiscal e contrato formal.'
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    return searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="faq" className="py-20 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Live WhatsApp Support Card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
                  <HelpCircle size={13} className="text-amber-400" />
                  Perguntas Frequentes
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                  Respostas diretas & <br />
                  <span className="text-zinc-500">totalmente transparentes.</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  Tudo o que você precisa saber sobre o nosso processo de design, desenvolvimento e entrega em até 72 horas.
                </p>
              </div>

              {/* Direct Support Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Tem alguma dúvida específica?</h4>
                    <p className="text-xs text-zinc-400">Atendimento humano online agora</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fale diretamente com os desenvolvedores responsáveis pelo projeto para tirar dúvidas ou solicitar uma proposta sob medida.
                </p>

                <a 
                  href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20desenvolvimento%20do%20site%20em%2072h."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors text-center shadow-xs"
                >
                  <span>Conversar no WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Search & Accordion List */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Search Bar Input */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Pesquisar dúvidas (ex: prazo, hospedagem, formas de pagamento...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-xs placeholder:text-zinc-500"
              />
            </div>

            {/* Questions Accordion List */}
            <div className="space-y-3 pt-2">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <FAQItem
                    key={`faq-${index}-${faq.question}`}
                    question={faq.question}
                    answer={faq.answer}
                    category={faq.categoryLabel}
                  />
                ))
              ) : (
                <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center text-sm text-zinc-400">
                  Nenhuma pergunta encontrada para "<strong>{searchQuery}</strong>". Fale conosco no WhatsApp para esclarecimento imediato.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function FAQItem({ question, answer, category }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-2xl border transition-all duration-200 ${
      isOpen 
      ? 'bg-zinc-900 border-zinc-700 shadow-xs' 
      : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
    }`}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
            {category}
          </span>
          <span className="text-base sm:text-lg font-bold text-white leading-tight">
            {question}
          </span>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-400'
        }`}>
          {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-4 space-y-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
