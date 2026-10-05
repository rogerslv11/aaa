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
      categoryLabel: 'Process & 72h SLA',
      question: 'Will my website really be ready and live in up to 72 hours?',
      answer: 'Yes, 100% guaranteed in our signed contract! Our production workflow and modular technology stack are engineered specifically for extreme speed. The 72-hour turnaround begins as soon as you submit the simple onboarding diagnostic form.'
    },
    {
      category: 'process',
      categoryLabel: 'Process & 72h SLA',
      question: 'What information or materials do I need to provide to start?',
      answer: 'We only need your logo (if you have one), a brief summary of your core services or offerings, photos you want to display, and your preferred contact details (WhatsApp, social media, address). Our team handles copywriting, technical architecture, and aesthetic layout.'
    },
    {
      category: 'tech',
      categoryLabel: 'Technical Details',
      question: 'Are custom domains and cloud hosting included in the package?',
      answer: 'The Professional Plan includes 1 full year of ultra-fast cloud CDN hosting. For your custom domain (e.g., yourcompany.com), our engineers handle all DNS records, SSL security certificates, and corporate email connections at zero extra cost.'
    },
    {
      category: 'tech',
      categoryLabel: 'Technical Details',
      question: 'Is the website optimized for top Google search rankings (SEO)?',
      answer: 'Yes! We implement full structural SEO: OpenGraph metadata, Schema.org rich snippets, pure semantic tags, and a 99+ Google PageSpeed rating so your brand ranks favorably in search results.'
    },
    {
      category: 'support',
      categoryLabel: 'Support & Guarantees',
      question: 'Can I request edits or revisions after the initial delivery?',
      answer: 'Absolutely! You receive inclusive revision rounds after reviewing the initial version to refine text, imagery, or visual components until you are 100% formally satisfied.'
    },
    {
      category: 'support',
      categoryLabel: 'Support & Guarantees',
      question: 'How does ongoing technical support work post-launch?',
      answer: 'You have direct 1-on-1 human support on WhatsApp to answer questions, guide updates, and ensure your site operates with maximum stability 24/7.'
    },
    {
      category: 'pricing',
      categoryLabel: 'Pricing & Billing',
      question: 'Are there any hidden monthly fees or recurring lock-in costs?',
      answer: 'No! The project investment is transparent and one-time. You own the code and digital assets outright, with no recurring hostage maintenance charges.'
    },
    {
      category: 'pricing',
      categoryLabel: 'Pricing & Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major Credit Cards (up to 12 installments), Bank Wire/Transfer, and PayPal with encrypted processing, automated receipting, and formal business invoices.'
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    return searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Live WhatsApp Support Card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">
                  <HelpCircle size={13} className="text-amber-400" />
                  Frequently Asked Questions
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                  Direct & <br />
                  <span className="text-zinc-500">Transparent Answers.</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  Everything you need to know about our 72-hour design, development, and launch process.
                </p>
              </div>

              {/* Direct Support Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Have a specific question?</h4>
                    <p className="text-xs text-zinc-400">Human support online now</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Connect with our senior engineering team to discuss custom requirements or receive a tailored quotation.
                </p>

                <a 
                  href="https://wa.me/5500000000000?text=Hi!%20I%20have%20a%20question%20about%20the%2072h%20website%20redesign%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors text-center shadow-xs"
                >
                  <span>Chat on WhatsApp</span>
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
                placeholder="Search questions (e.g., turnaround, hosting, payment options...)"
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
                  No questions found matching "<strong>{searchQuery}</strong>". Chat with us on WhatsApp for instant assistance.
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
