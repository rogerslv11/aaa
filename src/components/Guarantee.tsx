import { 
  ShieldCheck, Headphones, ThumbsUp,
  Clock, Lock, CheckCircle2, Award, ArrowRight
} from 'lucide-react';

export default function Guarantee() {
  const points = [
    {
      title: '72h Turnaround or 100% Free',
      badge: 'Contractual SLA',
      description: 'Our 72-hour turnaround is non-negotiable. If we fail to deliver on time after receiving your initial information, you receive a full 100% refund immediately.',
      icon: <Clock size={26} className="text-amber-400" />
    },
    {
      title: 'Unlimited Revisions Guarantee',
      badge: 'Zero Risk',
      description: 'We present the initial version and refine layouts, color grading, and copy until the final build meets your exact standard of excellence.',
      icon: <ThumbsUp size={26} className="text-emerald-400" />
    },
    {
      title: 'Dedicated 1-on-1 VIP WhatsApp Support',
      badge: 'Direct Engineers',
      description: 'Zero automated chatbots or long ticketing queues. You communicate directly on WhatsApp with the dedicated engineers building your digital presence.',
      icon: <Headphones size={26} className="text-blue-400" />
    },
    {
      title: '100% Outright Ownership',
      badge: 'Zero Monthly Lock-In',
      description: 'The code, assets, and design belong entirely to you. We do not charge mandatory ongoing hosting fees or hold your domain hostage.',
      icon: <Lock size={26} className="text-purple-400" />
    }
  ];

  return (
    <section id="garantia" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/40 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <ShieldCheck size={14} className="text-emerald-400" />
            Complete Peace of Mind & Delivery SLA
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            Our formal commitment to <br className="hidden sm:inline" />
            <span className="text-zinc-500">your commercial success.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto">
            We eliminate all financial risk from your investment. You hire with legal security and an explicit contractual satisfaction guarantee.
          </p>
        </div>

        {/* 4 Core Guarantee Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {point.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {point.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white mb-2.5 tracking-tight leading-snug">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                <CheckCircle2 size={13} />
                <span>Active Contractual Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Trust SLA Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-xl flex-shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-white">Ready to launch your high-converting website in 72 hours?</h4>
              <p className="text-xs sm:text-sm text-zinc-400">Get started today with zero risk, full legal backing, and priority support.</p>
            </div>
          </div>
          <a
            href="#/briefing"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg flex-shrink-0"
          >
            <span>Claim My 72h Project Slot</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
