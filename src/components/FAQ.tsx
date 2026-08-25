import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      category: 'Process',
      items: [
        {
          question: 'Is the site really ready in 72 hours?',
          answer: 'Yes! Our process is optimized for fast delivery. The 72-hour period starts after the client provides all necessary information.'
        },
        {
          question: 'What do I need to send to get started?',
          answer: "To get started, we'll need your logo (if you have one), institutional texts, images of your products/services, and contact information (WhatsApp, Social Media, Address)."
        }
      ]
    },
    {
      category: 'Technical',
      items: [
        {
          question: 'Are the domain and hosting included?',
          answer: 'Domain registration and hosting are separate services paid annually. We guide and perform the entire configuration process for you at no additional cost.'
        },
        {
          question: 'Does the site appear on Google?',
          answer: 'Yes. We implement the best structural SEO (Search Engine Optimization) practices in all plans to ensure your business is found.'
        }
      ]
    },
    {
      category: 'Support',
      items: [
        {
          question: 'Can I request changes after delivery?',
          answer: 'Yes! After delivery, you have a review period to request adjustments and ensure everything is exactly as you imagined.'
        },
        {
          question: 'Is there continuous technical support?',
          answer: 'We offer technical support after delivery to ensure your site continues to work perfectly and to answer any questions that arise.'
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">
                Help Center
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-8 tracking-tighter leading-none">
                Essential <br />
                <span className="text-zinc-200 dark:text-zinc-800">Answers.</span>
              </h2>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-sm mb-12 leading-relaxed">
                Everything you need to know about how we take your business to the next level in record time.
              </p>
              
              <motion.a 
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 text-black dark:text-white font-black uppercase tracking-widest text-xs"
              >
                Still have questions? Contact us
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
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: groupIndex * 0.1, duration: 0.8 }}
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
