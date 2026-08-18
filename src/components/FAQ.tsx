import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      category: 'Processo',
      items: [
        {
          question: 'O site realmente fica pronto em 48 horas?',
          answer: 'Sim! Nosso processo é otimizado para entrega rápida. O prazo de 48 horas começa a contar a partir do envio de todas as informações necessárias pelo cliente.'
        },
        {
          question: 'O que preciso enviar para começar?',
          answer: 'Para começar, precisaremos do seu logotipo (se tiver), textos institucionais, imagens dos seus produtos/serviços e informações de contato (WhatsApp, Redes Sociais, Endereço).'
        }
      ]
    },
    {
      category: 'Técnico',
      items: [
        {
          question: 'O domínio e hospedagem estão inclusos?',
          answer: 'O registro do domínio e a hospedagem são serviços à parte pagos anualmente. Nós orientamos e realizamos todo o processo de configuração para você sem custos adicionais.'
        },
        {
          question: 'O site aparece no Google?',
          answer: 'Sim. Implementamos as melhores práticas de SEO (Search Engine Optimization) estrutural em todos os planos para garantir que seu negócio seja encontrado.'
        }
      ]
    },
    {
      category: 'Suporte',
      items: [
        {
          question: 'Posso solicitar alterações após a entrega?',
          answer: 'Sim! Após a entrega, você tem um período de revisão para solicitar ajustes e garantir que tudo esteja exatamente como você imaginou.'
        },
        {
          question: 'Existe suporte técnico contínuo?',
          answer: 'Oferecemos suporte técnico após a entrega para garantir que seu site continue funcionando perfeitamente e para tirar qualquer dúvida que surja.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Header Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">
                Centro de Ajuda
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-8 tracking-tighter leading-none">
                Respostas <br />
                <span className="text-zinc-200 dark:text-zinc-800">Essenciais.</span>
              </h2>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-sm mb-12 leading-relaxed">
                Tudo o que você precisa saber sobre como levamos seu negócio ao próximo nível em tempo recorde.
              </p>
              
              <motion.a 
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 text-black dark:text-white font-black uppercase tracking-widest text-xs"
              >
                Ainda tem dúvidas? Fale conosco
                <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-16">
            {faqs.map((group, groupIndex) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 dark:text-zinc-700 mb-8 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-zinc-100 dark:bg-zinc-900"></span>
                  {group.category}
                </div>
                <div className="space-y-4">
                  {group.items.map((faq, i) => (
                    <FAQItem key={`faq-${groupIndex}-${i}`} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  key?: string | number;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group rounded-[2rem] border transition-all duration-500 ${
      isOpen 
      ? 'bg-zinc-50 dark:bg-zinc-900/50 border-black/10 dark:border-white/10' 
      : 'bg-white dark:bg-zinc-950 border-zinc-100 dark:border-zinc-900 hover:border-black/5 dark:hover:border-white/5 shadow-sm'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-8 flex items-center justify-between text-left"
      >
        <span className="text-lg lg:text-xl font-bold text-black dark:text-white leading-tight pr-8">{question}</span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-black text-white dark:bg-white dark:text-black rotate-180' : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-400 group-hover:text-black dark:group-hover:text-white'
        }`}>
          {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 pb-8 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
