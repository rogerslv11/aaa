import { 
  Clock, ShieldCheck, Zap, Sparkles, CheckCircle2, 
  Smartphone, Eye, Layers, Award, BarChart3, Lock,
  Cpu, HeartHandshake, FileCheck, Headphones
} from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      title: 'Guaranteed 72h SLA Delivery',
      badge: 'Zero Delays',
      highlight: 'Contractually Bound',
      description: 'Your project goes live within 72 hours of receiving your briefing, or you receive a 100% full refund.',
      icon: <Clock size={24} className="text-amber-400" />
    },
    {
      title: 'Bespoke Luxury Craftsmanship',
      badge: 'Elite Design',
      highlight: 'Zero Generic Templates',
      description: 'Every layout is custom designed with sales psychology and tailored visual hierarchy for your brand.',
      icon: <Eye size={24} className="text-blue-400" />
    },
    {
      title: 'Sub-0.28s Instant Load Speed',
      badge: '100% Fluid',
      highlight: 'React 19 & Vite Stack',
      description: 'Sub-millisecond responsiveness on both 4G/5G mobile and desktop, drastically reducing bounce rates.',
      icon: <Zap size={24} className="text-emerald-400" />
    },
    {
      title: 'Google Score 99-100 Ready',
      badge: 'Core Vitals Passed',
      highlight: 'Top Google Ranking',
      description: 'Fully optimized for search engine algorithms with clean code, meta tags, and rich schema snippets.',
      icon: <BarChart3 size={24} className="text-purple-400" />
    },
    {
      title: 'Conversion Psychology Copywriting',
      badge: 'Direct Sales',
      highlight: 'Tested Purchase Triggers',
      description: 'Persuasive headlines and copy engineered to guide the visitor smoothly toward closing the sale.',
      icon: <Sparkles size={24} className="text-pink-400" />
    },
    {
      title: 'Dedicated 1-on-1 VIP WhatsApp Support',
      badge: '100% Human',
      highlight: 'Zero Chatbots',
      description: 'Direct communication with the lead engineers on your project without waiting in generic ticketing queues.',
      icon: <Headphones size={24} className="text-cyan-400" />
    },
    {
      title: '100% Full Ownership & Zero Lock-In',
      badge: 'Full Asset Control',
      highlight: 'Zero Mandatory Fees',
      description: 'You own all code and domain assets 100% outright, with no recurring hostage maintenance charges.',
      icon: <Lock size={24} className="text-teal-400" />
    },
    {
      title: 'Contract with Money-Back Guarantee',
      badge: 'Zero Financial Risk',
      highlight: 'Legal Security',
      description: 'Digital signed contract with explicit service level agreements and a 100% satisfaction commitment.',
      icon: <FileCheck size={24} className="text-indigo-400" />
    }
  ];

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/40 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-10 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">
              <Award size={12} className="text-amber-400" />
              Exclusive Advantages • The SitePro 72h Standard
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Why choose <br className="hidden sm:inline" />
              <span className="text-zinc-500">our studio?</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-3">
              We combine record turnaround speed, luxury aesthetic polish, and conversion engineering to transform your digital presence into a continuous sales engine.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 size={15} />
              <span>Contract with formal 72-hour delivery guarantee</span>
            </div>
          </div>
        </div>

        {/* 8 Differentials Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-600 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/90 border border-zinc-700/80 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 mb-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item.highlight}
                </div>

                <h3 className="text-lg font-black text-white mb-2.5 tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-semibold">
                <span>SitePro 72h Standard</span>
                <span className="text-zinc-300">100% Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Panel */}
        <div className="mt-14 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">250+</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Delivered on Time</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">72 Hours</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Strict Turnaround</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">99.8%</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">0%</div>
            <div className="text-xs text-zinc-400 font-medium mt-1">Recurring Lock-In</div>
          </div>
        </div>

      </div>
    </section>
  );
}
