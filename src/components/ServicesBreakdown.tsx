import { Rocket, ShoppingCart, Globe, Zap, Cpu, ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ServicesBreakdown() {
  return (
    <section id="especialidades" className="py-20 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
              <Sparkles size={12} className="text-amber-400" />
              Specialties & Sales Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight">
              Digital specialties that <br className="hidden sm:inline" />
              <span className="text-zinc-500">turn website clicks into signed contracts.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm space-y-3">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We design digital ecosystems where every visual asset communicates supreme authority and every line of code is optimized for instant speed.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 size={15} />
              <span>Guaranteed 72-hour delivery backed by contract</span>
            </div>
          </div>
        </div>

        {/* Master Bento Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Landing Pages - Primary Bento Hero (8 cols on desktop) */}
          <div className="md:col-span-12 lg:col-span-8 bg-zinc-900/50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-zinc-800 flex flex-col justify-between group overflow-hidden relative shadow-xs hover:border-zinc-600 transition-all">
            
            {/* Top Row inside Card */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white text-black rounded-2xl flex items-center justify-center shadow-md">
                  <Rocket size={26} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800">
                  +240% Average Conversion
                </span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">
                Engineered for Paid Ads & Product Launches
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
                High-Converting Landing Pages
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mb-6 sm:mb-8">
                Pages built with behavioral purchase psychology, high-urgency triggers, and luxury aesthetic polish. We deliver real financial ROI on your advertising spend, not just visual appeal.
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Conversion Psychology',
                  'Direct WhatsApp Funnel',
                  'Google PageSpeed 100',
                  'Fluid Mobile-First UX',
                  '72h Delivery Guarantee'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-zinc-800 text-[10px] sm:text-[11px] font-bold text-zinc-300 border border-zinc-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-6 sm:pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
              <span className="text-xs font-bold text-zinc-400">
                Ideal for: Paid media traffic, high-ticket services & flagship product launches
              </span>
              <a 
                href="#pricing"
                className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors self-end sm:self-auto"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column Grid for Cards 2 and 3 */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Card 2: Corporate Sites */}
            <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col justify-between group shadow-xs hover:border-zinc-600 transition-all flex-1 min-h-[220px]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  Maximum Authority
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 tracking-tight">Corporate Websites</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Imposing brand positioning for enterprise businesses, medical clinics, and elite law practices.
                </p>
              </div>
            </div>

            {/* Card 3: E-commerce & Catalogs */}
            <div className="bg-zinc-900/50 rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col justify-between shadow-xs hover:border-zinc-600 transition-all group flex-1 min-h-[220px]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ShoppingCart size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  Frictionless Checkout
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 tracking-tight">E-commerce & Catalogs</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Fast, modern product displays with 4K imagery and frictionless checkout for high conversions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Micro-Features Tech (6 cols) */}
          <div className="md:col-span-12 lg:col-span-6 bg-zinc-900/50 rounded-3xl p-6 sm:p-8 border border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-xs">
            <div className="flex flex-col justify-center sm:pr-4 sm:border-r border-zinc-800">
              <div className="w-9 h-9 rounded-lg bg-amber-950/60 text-amber-400 flex items-center justify-center mb-3">
                <Zap size={18} />
              </div>
              <h4 className="text-base font-black text-white mb-1">Structural SEO</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Schema.org metadata and semantic markup to dominate Google search results.</p>
            </div>

            <div className="flex flex-col justify-center sm:pl-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
              <div className="w-9 h-9 rounded-lg bg-blue-950/60 text-blue-400 flex items-center justify-center mb-3">
                <Cpu size={18} />
              </div>
              <h4 className="text-base font-black text-white mb-1">Extreme Performance</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Sub-0.28s loading speed without the weight of slow third-party plugins.</p>
            </div>
          </div>

          {/* Card 5: Custom Projects / Briefing CTA (6 cols) */}
          <a
            href="#/briefing"
            className="md:col-span-12 lg:col-span-6 bg-zinc-900/70 rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-zinc-600 transition-all shadow-xs cursor-pointer"
          >
            <div className="max-w-sm space-y-1">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} />
                <span>Custom Engineering</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">Tailored Architecture</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Have specific integrations or custom requirements? We architect custom solutions in 72 hours.
              </p>
            </div>
            
            <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md flex-shrink-0 self-end sm:self-auto">
              <ArrowRight size={20} />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
