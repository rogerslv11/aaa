import { Shield, TrendingUp, Zap, Globe, ArrowRight, Sparkles, CheckCircle2, BarChart3 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'Market Dominance',
      badge: 'AAA Positioning',
      description: "Don't settle for being just another Google result. Build a commanding digital presence that sets you apart from competitors and attracts high-ticket clients.",
      icon: <Shield size={24} className="text-amber-400" />,
      stat: '94%',
      statDesc: 'Of customers judge business credibility by web design'
    },
    {
      title: '24/7 Sales Engine',
      badge: 'Automated Funnel',
      description: 'Your website works tirelessly around the clock. Engineered to qualify incoming visitors and convert them directly into scheduled calls and closed deals.',
      icon: <Globe size={24} className="text-emerald-400" />,
      stat: '100%',
      statDesc: 'Uninterrupted commercial digital availability'
    },
    {
      title: 'Instant Authority',
      badge: 'Psychological Impact',
      description: 'Go from overlooked to the undisputed benchmark. Elite aesthetic design communicates prestige, reliability, and substance before a single word is read.',
      icon: <Zap size={24} className="text-blue-400" />,
      stat: '0.05s',
      statDesc: 'For a visitor to decide whether they trust your brand'
    },
    {
      title: 'Accelerated ROI',
      badge: 'Lead Multiplier',
      description: 'Lightning-fast 0.28s loading speed and surgically crafted conversion architecture lower your ad acquisition costs and dramatically boost closing rates.',
      icon: <TrendingUp size={24} className="text-purple-400" />,
      stat: '3x',
      statDesc: 'Higher probability of closing high-value contracts'
    }
  ];

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-black text-white transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-zinc-900/50 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-16 lg:mb-20 pb-10 border-b border-zinc-800">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 border border-zinc-800 shadow-xs">
              <Sparkles size={12} className="text-amber-400" />
              High-Impact Competitive Advantage
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Why your business <br className="hidden sm:inline" />
              <span className="text-zinc-500">needs the SitePro 72h standard.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              In today's digital market, slow and generic websites are practically invisible. We ensure your brand becomes the obvious, preferred choice in your industry.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Engineered for proven financial return & higher conversion</span>
            </div>
          </div>
        </div>

        {/* 4 Core Value Proposition Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-zinc-900/40 p-7 sm:p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/70 transition-all flex flex-col justify-between shadow-xs hover:shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {benefit.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3 tracking-tight leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 border-t border-zinc-800 space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                  <span>{benefit.stat}</span>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Impact</span>
                </div>
                <div className="text-[11px] font-medium text-zinc-400 leading-snug">
                  {benefit.statDesc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Quote Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold flex-shrink-0">
              <BarChart3 size={22} />
            </div>
            <div>
              <h4 className="text-base font-black text-white">
                Businesses with ultra-fast web architecture generate up to 240% more revenue from the same traffic.
              </h4>
              <p className="text-xs text-zinc-400">
                End-to-end design & optimization delivered within our strict 72-hour turnaround.
              </p>
            </div>
          </div>
          <a
            href="#/briefing"
            className="px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs whitespace-nowrap hover:bg-zinc-200 transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Start Free Website Diagnostic</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
