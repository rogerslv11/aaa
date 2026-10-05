import { useState } from 'react';
import { Star, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const testimonials = [
    {
      id: 1,
      name: 'Richard Santos',
      role: 'Founder & Managing Partner',
      company: 'RS Capital Advisory',
      niche: 'b2b',
      nicheLabel: 'B2B Consultancy',
      badge: '360° Redesign • 72h',
      metric: 'ROI in Week 1',
      content: 'We needed a top-tier website on tight notice for our fund advisory launch, and the result blew our expectations out of the water. Exact 72-hour delivery and design that radiates immediate investor confidence.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=ricardo'
    },
    {
      id: 2,
      name: 'Dr. Marianne Costa',
      role: 'Dermatologist & Clinical Lead',
      company: 'BioPelle Medical Clinic',
      niche: 'health',
      nicheLabel: 'Healthcare & Clinic',
      badge: 'WhatsApp Funnel • 48h',
      metric: '+185% Private Bookings',
      content: 'The entire process was surgical and fast. I submitted our raw content and within 48 hours our clinic had a live high-converting site generating direct appointment bookings on WhatsApp daily.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=mariana'
    },
    {
      id: 3,
      name: 'Andrew Ruiz',
      role: 'CEO & Head of Operations',
      company: 'TechFlow Solutions',
      niche: 'b2b',
      nicheLabel: 'Technology & SaaS',
      badge: 'WordPress → React Migration',
      metric: '0.22s Load Speed',
      content: 'The custom landing page built for our software service posted record conversion rates from day one. The instantaneous loading speed cut our customer acquisition ad costs nearly in half.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=andre'
    },
    {
      id: 4,
      name: 'Carla Diaz',
      role: 'Principal Architect',
      company: 'Studio Arq Contemporary',
      niche: 'real_estate',
      nicheLabel: 'Architecture & Luxury',
      badge: 'High-End Portfolio',
      metric: '3x Proposal Closing Rate',
      content: 'Visual aesthetics are everything in luxury architecture. The website perfectly captures the sophistication and refined minimalism our high-net-worth clients demand.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=carla'
    },
    {
      id: 5,
      name: 'Philip Rocha',
      role: 'Commercial Director',
      company: 'Rocha Prime Properties',
      niche: 'real_estate',
      nicheLabel: 'Real Estate Agency',
      badge: 'Fast Catalog • 72h',
      metric: '+240% Property Inquiries',
      content: 'We were losing prime real estate leads to competitors because our old site lagged on smartphones. In 72 hours, SitePro transformed our presence and qualified property inquiries surged.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=felipe'
    },
    {
      id: 6,
      name: 'Julianne Morales',
      role: 'Clinical Nutritionist & Founder',
      company: 'Health & Life Institute',
      niche: 'health',
      nicheLabel: 'Health & Wellness',
      badge: 'Authority Page',
      metric: '+40% Consultations in Month 1',
      content: 'Seamless collaboration and dedicated human support. The smart WhatsApp button and lightning-fast speed increased my new patient bookings by over 40% in the first month.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=juliana'
    }
  ];

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t => t.niche === activeFilter);

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8 pb-8 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">
              <Sparkles size={12} className="text-amber-400" />
              Verified Reviews & Real Testimonials
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              What leaders say <br className="hidden sm:inline" />
              <span className="text-zinc-500">about partnering with us.</span>
            </h2>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 lg:max-w-sm flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-black text-lg flex-shrink-0">
              4.98
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-white">
                4.98/5 Average Rating • 250+ Projects Delivered in 72h
              </p>
              <p className="text-[10px] text-zinc-400">Verified reviews from real business owners</p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-nowrap overflow-x-auto pb-3 mb-10 gap-2 no-scrollbar">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'health', label: 'Clinics & Health' },
            { id: 'b2b', label: 'B2B & Technology' },
            { id: 'real_estate', label: 'Real Estate & Architecture' }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-zinc-900/50 p-7 sm:p-8 rounded-3xl relative border border-zinc-800 hover:border-zinc-600 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-300 text-[10px] font-bold border border-emerald-800">
                    <CheckCircle2 size={11} className="text-emerald-400" />
                    <span>{t.badge}</span>
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    {t.metric}
                  </span>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-800">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full grayscale group-hover:grayscale-0 transition-all border border-zinc-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-white leading-tight">{t.name}</h4>
                  <p className="text-[11px] text-zinc-400 font-medium">{t.role}</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verification Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>All testimonials were collected following official live project deployment</span>
          </div>
          <div className="flex items-center gap-4">
            <span>• 100% Contractual Satisfaction</span>
            <span>• Ongoing Technical Support Active</span>
          </div>
        </div>

      </div>
    </section>
  );
}
