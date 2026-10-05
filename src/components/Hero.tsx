import { ArrowRight, Zap, TrendingUp, ShieldCheck, Star, Clock } from 'lucide-react';
import heroMockup from '../assets/images/hero_mockup_modern_web_design_1786988074777.jpg';

interface HeroProps {
  onOpenBriefing?: () => void;
}

export default function Hero({ onOpenBriefing }: HeroProps) {
  const trustIndicators = [
    { label: '72-Hour Delivery', highlight: 'Guaranteed' },
    { label: 'Bespoke Elite Design', highlight: 'Zero Templates' },
    { label: 'Google Score 99+', highlight: '0.28s Load Speed' },
    { label: 'Dedicated VIP Support', highlight: '1-on-1 Direct' }
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden transition-colors duration-300 bg-zinc-950 text-white">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-zinc-900/50 rounded-full blur-[140px] -z-10 pointer-events-none opacity-70" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-black uppercase tracking-wider text-zinc-300 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Immediate Availability • 02/05 Project Slots Remaining This Week</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[0.95] break-words">
                Command authority. <br />
                Sell more in{' '}
                <span className="italic font-serif font-light text-zinc-500">
                  72 hours
                </span>.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal pt-2">
                Slow, outdated websites cost your business valuable clients every day. We build high-impact digital experiences with conversion psychology, dominant Google SEO, and instant 0.28s loading speed.
              </p>
            </div>

            {/* CTAs Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onOpenBriefing) {
                    onOpenBriefing();
                  } else {
                    window.location.hash = '#/briefing';
                  }
                }}
                className="group px-9 py-5 rounded-2xl bg-white text-black font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Launch My Website in 72h</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#portfolio"
                className="px-8 py-5 rounded-2xl border border-zinc-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-zinc-900 transition-colors"
              >
                <span>View Case Studies</span>
                <span className="text-xs text-zinc-500 font-normal">(250+ Delivered)</span>
              </a>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-4">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6">
                {/* Review Rating Snippet */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-900 object-cover" src="https://i.pravatar.cc/100?u=doc1" alt="Client" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-900 object-cover" src="https://i.pravatar.cc/100?u=exec2" alt="Client" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-900 object-cover" src="https://i.pravatar.cc/100?u=law3" alt="Client" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-black text-white ml-1">4.98/5</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-semibold">+250 businesses transformed</span>
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block" />

                {/* Guarantee Pill */}
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <ShieldCheck size={16} />
                  <span>72-Hour Delivery or 100% Full Refund Guarantee</span>
                </div>
              </div>

              {/* 4 Feature Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {trustIndicators.map((item) => (
                  <div 
                    key={item.label}
                    className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center"
                  >
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{item.highlight}</div>
                    <div className="text-xs font-extrabold text-white truncate">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Mockup Device Frame */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 p-2.5">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 pb-2 pt-1 text-zinc-500 text-[10px] font-mono border-b border-zinc-800/80 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-zinc-900 text-zinc-400 text-[10px] flex items-center gap-1">
                  <span>🔒 sitepro72h.com/preview</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-bold text-[9px]">
                  <Zap size={11} />
                  <span>0.28s</span>
                </div>
              </div>

              {/* Image Preview */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={heroMockup} 
                  alt="High converting professional website mockup SitePro 72h"
                  className="w-full h-auto object-cover rounded-xl grayscale-0 contrast-110 hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Floating Top Metric Card */}
            <div className="absolute -top-5 -left-5 z-20 bg-zinc-900 p-4 rounded-2xl shadow-2xl border border-zinc-800 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-950/60 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Lead Conversion</div>
                <div className="text-lg font-black text-white">+240% Direct Inquiries</div>
              </div>
            </div>

            {/* Floating Bottom Metric Card */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-white text-black p-4 rounded-2xl shadow-2xl border border-zinc-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 bg-black/10 text-black rounded-xl flex items-center justify-center font-bold">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Google PageSpeed</div>
                <div className="text-lg font-black text-emerald-600">Score 100 / 100</div>
              </div>
            </div>

            {/* Floating Right SLA Badge */}
            <div className="absolute top-1/2 -right-6 z-20 bg-zinc-900 px-3.5 py-2 rounded-xl shadow-xl border border-zinc-800 hidden lg:flex items-center gap-2">
              <Clock size={16} className="text-amber-500" />
              <span className="text-[11px] font-black uppercase tracking-wider text-white">72h SLA Delivery</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
