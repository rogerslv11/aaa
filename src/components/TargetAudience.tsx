import { useState } from 'react';
import { 
  Briefcase, Stethoscope, Home, Utensils, GraduationCap, 
  Gavel, Camera, ShoppingBag, 
  Sparkles, ArrowRight, CheckCircle2
} from 'lucide-react';

export default function TargetAudience() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const niches = [
    {
      id: 'health',
      name: 'Clinics, Doctors & Healthcare',
      category: 'health',
      icon: <Stethoscope size={24} className="text-emerald-400" />,
      tag: 'High Private Demand',
      metric: '+185% Private Bookings',
      focus: 'Direct WhatsApp booking funnels, elegant treatment showcases, and indisputable medical authority.',
      features: ['Procedure Catalog', 'Google Verified Reviews Wall', 'Direct WhatsApp Scheduling']
    },
    {
      id: 'real_estate',
      name: 'Real Estate & Brokers',
      category: 'real_estate',
      icon: <Home size={24} className="text-amber-400" />,
      tag: 'Luxury Portfolio',
      metric: '+240% Property Inquiries',
      focus: 'Immersive property showcases with 4K photography, instant filters, and investor lead capture.',
      features: ['Price & Region Filters', '4K Media Galleries', 'Direct Listing WhatsApp CTA']
    },
    {
      id: 'legal',
      name: 'Law Firms & Legal Advisors',
      category: 'b2b',
      icon: <Gavel size={24} className="text-blue-400" />,
      tag: 'Prestige & Trust',
      metric: '+190% VIP Consultations',
      focus: 'Distinguished institutional positioning that conveys immediate discretion and legal expertise.',
      features: ['Practice Areas Breakdown', 'GDPR & Bank-Grade SSL', 'Confidential Inquiry Form']
    },
    {
      id: 'b2b',
      name: 'B2B Services & Consultancies',
      category: 'b2b',
      icon: <Briefcase size={24} className="text-purple-400" />,
      tag: 'Enterprise Contracts',
      metric: '3x Executive Meetings',
      focus: 'Case study showcases, calendar appointment booking, and executive corporate proposals.',
      features: ['Calendly / Cal.com Integration', 'Data-Driven Case Studies', 'Institutional Portfolio']
    },
    {
      id: 'restaurants',
      name: 'Hospitality & Dining',
      category: 'commerce',
      icon: <Utensils size={24} className="text-rose-400" />,
      tag: 'Digital Menus & Bookings',
      metric: '+210% Direct Reservations',
      focus: 'Ultra-fast interactive digital menus, integrated Google Maps directions, and table reservations.',
      features: ['Instant Mobile Menu', 'Interactive Google Maps', '1-Click Reservation Funnel']
    },
    {
      id: 'education',
      name: 'Courses & Infoproducts',
      category: 'education',
      icon: <GraduationCap size={24} className="text-indigo-400" />,
      tag: 'Product Launches',
      metric: '+320% Checkout Conversions',
      focus: 'High-ticket sales landing pages, conversion video players, countdown timers, and payment gateways.',
      features: ['Instant Video Loading', 'Stripe / PayPal Checkout', 'High-Urgency Timers']
    },
    {
      id: 'photography',
      name: 'Architects & Creatives',
      category: 'commerce',
      icon: <Camera size={24} className="text-cyan-400" />,
      tag: 'Visual Portfolio',
      metric: '+175% Project Quotes',
      focus: 'Refined editorial galleries that highlight project craftsmanship and artistic distinction.',
      features: ['Full-Screen Lightbox', 'High-Res Image Compression', 'Direct Proposal Requests']
    },
    {
      id: 'stores',
      name: 'Boutiques & Specialty Retail',
      category: 'commerce',
      icon: <ShoppingBag size={24} className="text-teal-400" />,
      tag: 'Fast E-commerce',
      metric: '+150% Repeat Purchases',
      focus: 'Modern storefront catalogs with instant cart loading and frictionless payment processing.',
      features: ['Fast Product Grid', '1-Click Direct Ordering', 'Automated Stock Status']
    }
  ];

  const filteredNiches = activeCategory === 'all'
    ? niches
    : niches.filter(n => n.category === activeCategory);

  return (
    <section id="segmentos" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8 pb-8 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 shadow-xs">
              <Sparkles size={12} className="text-amber-400" />
              Specialized Industry Solutions
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Tailored architecture for <br className="hidden sm:inline" />
              <span className="text-zinc-500">your specific industry.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We deeply understand the unique customer buying journeys of each sector to craft websites that captivate and convert.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-nowrap overflow-x-auto pb-3 mb-10 gap-2 no-scrollbar">
          {[
            { id: 'all', label: 'All Industries' },
            { id: 'health', label: 'Healthcare & Clinics' },
            { id: 'real_estate', label: 'Real Estate & Luxury' },
            { id: 'b2b', label: 'B2B & Enterprise' },
            { id: 'commerce', label: 'Retail & Hospitality' },
            { id: 'education', label: 'Education & Courses' }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Niches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNiches.map((niche) => (
            <div
              key={niche.id}
              className="p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {niche.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {niche.tag}
                  </span>
                </div>

                <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {niche.metric}
                </div>

                <h3 className="text-lg font-black text-white mb-2.5 tracking-tight leading-snug">
                  {niche.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {niche.focus}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                  {niche.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <a
                  href="#/briefing"
                  className="w-full py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-white hover:text-black text-zinc-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Build For My Niche</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Niche Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Don't see your specific industry listed? We create tailored architectures for any specialized sector.</span>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-emerald-400 font-bold whitespace-nowrap flex items-center gap-1 transition-colors"
          >
            <span>Consult Our Specialists</span>
            <ArrowRight size={12} />
          </a>
        </div>

      </div>
    </section>
  );
}
