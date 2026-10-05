import { ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck, Clock, Award, Star, Gift, Check, Flame } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (plan: 'essential' | 'professional' | 'elite') => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      id: 'essential',
      name: 'Essential Plan',
      badge: 'Fast Launch',
      price: '425',
      originalPrice: '590',
      period: 'One-Time Payment • No Monthly Fees',
      description: 'High-impact professional digital presence delivered in 72 hours for independent consultants and new businesses.',
      bestFor: 'Best for: Consultants, advisors, and independent specialists',
      features: [
        { text: 'High-Performance React 19 & Vite Architecture', highlight: false },
        { text: '100% Mobile-First Responsive Fluid Layout', highlight: false },
        { text: 'Smart Direct WhatsApp Floating Button', highlight: false },
        { text: 'Social Media & Google Maps Integration', highlight: false },
        { text: 'Core Structural Google SEO Meta Setup', highlight: false },
        { text: 'Enterprise SSL Security Certificate Included', highlight: false },
        { text: 'Guaranteed 72-Hour Contractual Delivery', highlight: true }
      ],
      cta: 'Choose Essential Plan',
      highlight: false
    },
    {
      id: 'professional',
      name: 'Professional Plan',
      badge: '🔥 88% of Clients Choose This • Best Seller',
      price: '785',
      originalPrice: '1,250',
      economy: 'Save $465 + 3 Exclusive Bonuses Included',
      period: 'One-Time Payment • No Monthly Fees',
      description: 'The definitive high-converting sales machine. Bespoke design, persuasive sales copywriting, 0.28s speed, and inclusive perks.',
      bestFor: 'Best for: Medical clinics, real estate, B2B services & revenue-driven brands',
      features: [
        { text: 'Everything in the Essential Plan', highlight: false },
        { text: '1 Year of Premium Cloud Hosting Included (Save $180)', highlight: true, isBonus: true },
        { text: 'Persuasive Sales Psychology Copywriting & Triggers', highlight: true },
        { text: 'Bespoke Elite Design (100% Tailored, Zero Generic Templates)', highlight: true },
        { text: 'Google PageSpeed Score 99+ Guaranteed (0.28s Load Speed)', highlight: true },
        { text: 'VIP Lead Qualification Form (WhatsApp & Direct Inbox)', highlight: false },
        { text: 'Corporate Custom Email Setup (@yourcompany.com)', highlight: false },
        { text: 'Advanced SEO with OpenGraph & Schema.org Structured Data', highlight: true },
        { text: 'Unlimited Revisions Until 100% Formal Approval', highlight: true },
        { text: '72-Hour Delivery SLA or 100% Money-Back Guarantee', highlight: true }
      ],
      bonuses: [
        '🎁 1 Year Premium Cloud CDN Hosting Included',
        '🎁 Complete Sales Copywriting & Headline Creation',
        '🎁 Advanced SEO Setup & Google PageSpeed 99+'
      ],
      cta: 'Get Professional Plan with Bonuses',
      highlight: true
    },
    {
      id: 'elite',
      name: 'Corporate & Elite Plan',
      badge: 'Enterprise Scale & Custom APIs',
      price: 'Custom',
      originalPrice: null,
      period: 'Tailored Proposal',
      description: 'Bespoke enterprise engineering for multi-location brands, complex CRM/API workflows, and custom portal platforms.',
      bestFor: 'Best for: Large organizations, enterprise brands & multi-service firms',
      features: [
        { text: 'Everything in the Professional Plan', highlight: false },
        { text: 'Dedicated 1-on-1 Strategic Consulting', highlight: true },
        { text: 'Custom API, Webhook, CRM & Automation Integrations', highlight: true },
        { text: 'Multi-Location / Multi-Language Architecture', highlight: false },
        { text: 'Custom Dedicated CMS Administrative Dashboard', highlight: false },
        { text: 'Enterprise Organic SEO & Content Architecture', highlight: false },
        { text: 'Priority Dedicated 24/7 Support with Custom SLA', highlight: true }
      ],
      cta: 'Request Custom Proposal',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 overflow-hidden">
      {/* Subtle Luxury Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-zinc-900/60 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 border border-zinc-800 shadow-xs">
            <Sparkles size={12} className="text-amber-400" />
            Transparent Pricing • Zero Hidden Costs
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-4">
            Transparent plans with <br className="hidden sm:inline" />
            <span className="text-zinc-500">guaranteed return on investment.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            No surprise monthly subscriptions or contractual lock-in. You make a single investment and own your website 100% outright.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-bold text-zinc-300 shadow-sm">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 size={14} /> One-Time Investment
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-white">
              <Clock size={14} className="text-amber-400" /> 72-Hour Delivery
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck size={14} className="text-blue-400" /> Money-Back Guarantee
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`group relative p-6 sm:p-8 lg:p-10 rounded-3xl border transition-all flex flex-col justify-between ${
                plan.highlight 
                ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-black border-zinc-600 shadow-2xl lg:scale-[1.03] z-20 ring-1 ring-white/20' 
                : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 shadow-sm'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                    plan.highlight
                      ? 'bg-white text-black shadow-md font-extrabold'
                      : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                  }`}>
                    {plan.badge}
                  </span>

                  {plan.highlight && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800">
                      <Star size={11} className="fill-current" />
                      Recommended
                    </span>
                  )}
                </div>
                
                {/* Plan Info */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm mb-4 leading-relaxed text-zinc-400">
                    {plan.description}
                  </p>

                  <div className="text-[11px] font-semibold text-zinc-500 bg-zinc-800/40 px-3 py-1.5 rounded-xl border border-zinc-800/80 mb-6">
                    {plan.bestFor}
                  </div>

                  {/* Pricing Box */}
                  <div className="pt-4 border-t border-zinc-800">
                    {plan.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-zinc-500 line-through font-medium">Was ${plan.originalPrice}</span>
                        {plan.economy && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                            {plan.economy}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-baseline gap-1">
                      {plan.price !== 'Custom' && (
                        <span className="text-2xl font-bold text-white">$</span>
                      )}
                      <span className={`text-4xl sm:text-5xl font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-zinc-100'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider block mt-1 text-zinc-500">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Bonus Callout for 785 Plan */}
                {plan.bonuses && (
                  <div className="mb-6 p-4 rounded-2xl bg-zinc-800/60 border border-zinc-700/80 space-y-1.5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5 mb-1">
                      <Gift size={13} />
                      <span>Inclusive Free Bonuses:</span>
                    </div>
                    {plan.bonuses.map((b) => (
                      <div key={b} className="text-xs font-semibold text-zinc-300 flex items-center gap-2">
                        <Check size={12} className="text-emerald-400 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm"
                    >
                      <CheckCircle2 
                        size={16} 
                        className={`flex-shrink-0 mt-0.5 ${
                          feature.highlight 
                            ? 'text-emerald-400' 
                            : 'text-zinc-500'
                        }`} 
                      />
                      <span className={`leading-snug ${
                        feature.highlight 
                          ? 'text-white font-bold' 
                          : 'text-zinc-400 font-normal'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  if (onSelectPlan) {
                    onSelectPlan(plan.id as any);
                  } else {
                    window.location.hash = '#/briefing';
                  }
                }}
                className={`w-full py-4 px-6 rounded-2xl font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] cursor-pointer shadow-lg ${
                  plan.highlight 
                  ? 'bg-white text-black hover:bg-zinc-200' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Why the 785 Plan is the Best Choice Box */}
        <div className="mt-14 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400">
              <Flame size={15} />
              <span>Why is the Professional Plan ($785) the top choice?</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-white">
              The investment pays for itself with just 1 or 2 new acquired clients.
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Unlike generic templates, the Professional Plan includes 1 year of ultra-fast cloud hosting ($180 value), persuasive sales copywriting, and advanced SEO optimization to rank your business at the top of Google searches.
            </p>
          </div>
          <div className="flex md:justify-end">
            <button
              type="button"
              onClick={() => {
                if (onSelectPlan) {
                  onSelectPlan('professional');
                } else {
                  window.location.hash = '#/briefing';
                }
              }}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-white text-black font-black text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Lock In My 72h Slot</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Payment Methods and Security Footer */}
        <div className="mt-10 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>256-Bit Encrypted Checkout • Instant Commercial Invoice & Contract with Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-4 font-bold text-zinc-300">
            <span>Credit Cards (Up to 12x)</span>
            <span>•</span>
            <span>Bank Transfer / Wire</span>
            <span>•</span>
            <span>Secure PayPal</span>
          </div>
        </div>

      </div>
    </section>
  );
}
