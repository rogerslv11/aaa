import { useState } from 'react';
import { 
  ArrowUpRight, Zap, TrendingUp, CheckCircle2, 
  X, Sparkles, Clock, ArrowRight, Eye
} from 'lucide-react';

import corporateImg from '../assets/images/portfolio_site_corporate_1786988085665.jpg';
import creativeImg from '../assets/images/portfolio_site_creative_1786988096673.jpg';
import medicalImg from '../assets/images/portfolio_site_medical_1786988107523.jpg';
import realEstateImg from '../assets/images/portfolio_real_estate_1791204403300.jpg';
import ecommerceImg from '../assets/images/portfolio_ecommerce_1791204416889.jpg';
import heroImg from '../assets/images/hero_mockup_modern_web_design_1786988074777.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  categorySlug: 'redesign' | 'health' | 'b2b' | 'real_estate' | 'ecommerce' | 'landing_page';
  badge: string;
  imageUrl: string;
  description: string;
  results: {
    conversion: string;
    speed: string;
    googleScore: string;
  };
  tags: string[];
  caseStudy: {
    client: string;
    industry: string;
    before: string;
    after: string;
    deliverables: string[];
    testimonialQuote: string;
    testimonialAuthor: string;
  };
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    '360° Redesign',
    'Clinics & Healthcare',
    'B2B & Enterprise',
    'Real Estate & Luxury',
    'E-commerce & Stores',
    'Landing Pages'
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Aura Prime Luxury Real Estate',
      category: 'Real Estate & Luxury',
      categorySlug: 'real_estate',
      badge: '360° Redesign • 72h',
      imageUrl: realEstateImg,
      description: 'Complete digital restructuring of a luxury property catalog for high-net-worth buyers with instant filtering and 4K media.',
      results: {
        conversion: '+240% Direct Inquiries',
        speed: '0.28s Load Speed',
        googleScore: '99 / 100'
      },
      tags: ['Fast Filters', 'Minimalist Design', '4K Gallery', 'Local SEO'],
      caseStudy: {
        client: 'Aura Prime Real Estate',
        industry: 'Luxury Properties & Penthouses',
        before: 'Outdated WordPress site took 4.5s to load on mobile, with unoptimized media and high abandonment from high-end clients.',
        after: 'Tailored React architecture featuring instant-loading high-resolution photography and direct WhatsApp inquiry buttons on every listing.',
        deliverables: ['Interactive Property Catalog', 'CRM WhatsApp Funnel', '301 SEO Redirections', 'Mobile-First Optimization'],
        testimonialQuote: 'The new website completely transformed how prospective buyers perceive our development portfolio.',
        testimonialAuthor: 'Henrique Valente • Commercial Director'
      }
    },
    {
      id: 2,
      title: 'BioPelle Dermatology Institute',
      category: 'Clinics & Healthcare',
      categorySlug: 'health',
      badge: 'Appointment Funnel Restructure',
      imageUrl: medicalImg,
      description: 'Prestigious digital presence engineered to convert prospective clinic patients into immediate booked private consultations.',
      results: {
        conversion: '+185% Private Bookings',
        speed: '0.32s Load Speed',
        googleScore: '100 / 100'
      },
      tags: ['Direct Booking Funnel', 'Specialties Wall', 'Social Proof', 'Hardened SSL'],
      caseStudy: {
        client: 'BioPelle Medical Dermatology Clinic',
        industry: 'Healthcare, Medical Aesthetics & Dermatology',
        before: 'Dense legacy webpage with confusing copy and a long form that few mobile users bothered to fill out.',
        after: 'Sleek single-page conversion funnel showcasing medical treatments, trust certifications, and direct receptionist scheduling.',
        deliverables: ['Treatment Showcase', 'Google Verified Reviews Wall', 'Local Search SEO', 'Editorial Brand Design'],
        testimonialQuote: 'Within 48 hours of launch, we were receiving a consistent stream of qualified patient inquiries.',
        testimonialAuthor: 'Dr. Mariana Costa • Chief Dermatologist'
      }
    },
    {
      id: 3,
      title: 'Vanguard Capital & M&A Advisory',
      category: 'B2B & Enterprise',
      categorySlug: 'b2b',
      badge: 'Institutional Authority',
      imageUrl: corporateImg,
      description: 'High-tier corporate portal designed to attract institutional investment funds and enterprise executive clients.',
      results: {
        conversion: '+310% Qualified Meetings',
        speed: '0.25s Load Speed',
        googleScore: '98 / 100'
      },
      tags: ['Dark Luxury Layout', 'Calendly Integration', 'Enterprise Security', 'Multi-Language'],
      caseStudy: {
        client: 'Vanguard M&A Advisory',
        industry: 'Corporate Finance, Mergers & Acquisitions',
        before: 'Generic corporate template that failed to convey the gravitas and security demanded by CFOs and enterprise decision-makers.',
        after: 'Distinguished typography, showcase of closed transactions, institutional security badges, and 1-click meeting scheduling.',
        deliverables: ['Deals Portfolio Showcase', 'Cal.com Calendar Integration', 'Executive Copywriting', 'Core Web Vitals Perfection'],
        testimonialQuote: 'The new site positioned us alongside top-tier global investment banking boutiques.',
        testimonialAuthor: 'Ricardo Silveira • Managing Partner'
      }
    },
    {
      id: 4,
      title: 'Maison Noir • Luxury Cosmetics',
      category: 'E-commerce & Stores',
      categorySlug: 'ecommerce',
      badge: 'Ultra-Fast Storefront',
      imageUrl: ecommerceImg,
      description: 'Minimalist boutique storefront showcasing exclusive fragrances with frictionless checkout and zero cart drop-off.',
      results: {
        conversion: '+165% Checkout Rate',
        speed: '0.35s Load Speed',
        googleScore: '99 / 100'
      },
      tags: ['Fast Catalog', 'Stripe Checkout', 'Dynamic Filters', 'Mobile First'],
      caseStudy: {
        client: 'Maison Noir Parfums',
        industry: 'Niche Fragrances & Luxury Cosmetics',
        before: 'Legacy store suffered severe cart abandonment due to sluggish load times and a cumbersome 4-step mobile checkout.',
        after: 'Clean visual hierarchy, instant image zoom, streamlined 2-step checkout, and automated payment gateway integration.',
        deliverables: ['Product Showcase Catalog', 'Frictionless Checkout', 'WebP Image Compression', 'Simplified Admin Panel'],
        testimonialQuote: 'Our mobile revenue doubled in the very first week after deploying the new storefront.',
        testimonialAuthor: 'Camila Peixoto • Head of E-commerce'
      }
    },
    {
      id: 5,
      title: 'Nexus Growth • Tech & Creative Agency',
      category: '360° Redesign',
      categorySlug: 'redesign',
      badge: 'WordPress → React Migration',
      imageUrl: creativeImg,
      description: 'Complete digital transformation from legacy CMS to cutting-edge web architecture with fluid micro-interactions.',
      results: {
        conversion: '+195% Quote Inquiries',
        speed: '0.22s Load Speed',
        googleScore: '100 / 100'
      },
      tags: ['React 19 & Vite', 'Micro-Interactions', 'Interactive ROI Tool', 'Google Dominance'],
      caseStudy: {
        client: 'Nexus Digital Studio',
        industry: 'Technology & Digital Growth',
        before: 'Plagued by plugin conflicts, security alerts, and a 5-second mobile load time.',
        after: 'Zero bloat, pure modern React architecture, futuristic minimalist aesthetic, and VIP quote estimator form.',
        deliverables: ['Pure Custom Code', 'Interactive ROI Estimator', 'Full SEO URL Preservation', 'Delivered in 72h'],
        testimonialQuote: 'The speed of execution was incredible. The website is blazing fast and clients compliment it daily.',
        testimonialAuthor: 'Andre Ruiz • CEO'
      }
    },
    {
      id: 6,
      title: 'Summit Horizon • Flagship Real Estate Launch',
      category: 'Landing Pages',
      categorySlug: 'landing_page',
      badge: 'High-Converting Landing Page',
      imageUrl: heroImg,
      description: 'Strategic paid media landing page engineered for maximum lead capture during a multi-million-dollar property launch.',
      results: {
        conversion: '+275% Campaign Leads',
        speed: '0.26s Load Speed',
        googleScore: '99 / 100'
      },
      tags: ['Conversion Copy', 'Meta/Google Pixel', 'Direct WhatsApp', 'Fast Video'],
      caseStudy: {
        client: 'Horizon Developments',
        industry: 'Real Estate Development & Construction',
        before: 'High cost per lead on Google and Meta ads due to high bounce rates on an unoptimized landing page.',
        after: 'High-impact conversion page with interactive floor plans, smooth video playback, and 1-click visit booking.',
        deliverables: ['Sales Psychology Copy', 'Tracking Pixel Setup', 'Instant Load Speed', '72h Delivery Guarantee'],
        testimonialQuote: 'We cut our customer acquisition cost in half over the very first weekend of the ad campaign.',
        testimonialAuthor: 'Felipe Rocha • Head of Performance Marketing'
      }
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => {
        if (activeCategory === '360° Redesign') return p.category === '360° Redesign' || p.categorySlug === 'redesign';
        if (activeCategory === 'Clinics & Healthcare') return p.category === 'Clinics & Healthcare' || p.categorySlug === 'health';
        if (activeCategory === 'B2B & Enterprise') return p.category === 'B2B & Enterprise' || p.categorySlug === 'b2b';
        if (activeCategory === 'Real Estate & Luxury') return p.category === 'Real Estate & Luxury' || p.categorySlug === 'real_estate';
        if (activeCategory === 'E-commerce & Stores') return p.category === 'E-commerce & Stores' || p.categorySlug === 'ecommerce';
        if (activeCategory === 'Landing Pages') return p.category === 'Landing Pages' || p.categorySlug === 'landing_page';
        return p.category === activeCategory;
      });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8 pb-8 border-b border-zinc-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">
              <Sparkles size={12} className="text-amber-400" />
              Case Studies & Proven Results
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95]">
              Projects that <br />
              <span className="text-zinc-500 italic font-serif font-light text-3xl sm:text-5xl lg:text-6xl">
                set the industry standard.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-3">
              We don't build generic websites. We engineer high-speed digital assets designed to command instant authority and generate quantifiable commercial ROI.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All projects delivered within our 72-hour turnaround</span>
            </div>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-nowrap overflow-x-auto pb-3 mb-10 lg:flex-wrap gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl"
            >
              <div>
                {/* Image Container with Browser Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 p-2">
                  <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] truncate max-w-[140px] opacity-60">
                      {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                    </span>
                    <span className="text-[8px] font-bold text-emerald-400">0.3s</span>
                  </div>

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/10 shadow-md">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="font-bold uppercase tracking-wider">{project.category}</span>
                    <span className="flex items-center gap-1 font-semibold text-emerald-400">
                      <Clock size={12} />
                      72h
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Result</div>
                      <div className="text-xs sm:text-sm font-black text-emerald-400 truncate">
                        {project.results.conversion}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Google Score</div>
                      <div className="text-xs sm:text-sm font-black text-white">
                        {project.results.googleScore}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 px-4 rounded-xl bg-white text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.99] transition-all cursor-pointer shadow-xs"
                >
                  <Eye size={15} />
                  <span>View Full Case Study</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Portfolio */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Inspired by these results? Your business can be our next success story.
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Start your free website diagnostic today and launch your high-converting digital presence in 72 hours.
            </p>
          </div>
          <a
            href="#/briefing"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm whitespace-nowrap hover:bg-zinc-200 transition-colors shadow-md flex-shrink-0"
          >
            Start My Redesign Project
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Case Study • 72-Hour Delivery
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Image Preview with Device Frame */}
              <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 shadow-inner">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-xl object-cover max-h-[380px]"
                />
              </div>

              {/* Metrics Highlight */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Conversion</div>
                  <div className="text-sm sm:text-base font-black text-emerald-400">
                    {selectedProject.results.conversion}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Speed</div>
                  <div className="text-sm sm:text-base font-black text-white">
                    {selectedProject.results.speed}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Google Score</div>
                  <div className="text-sm sm:text-base font-black text-white">
                    {selectedProject.results.googleScore}
                  </div>
                </div>
              </div>

              {/* Before vs After Comparison */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/20 border border-rose-900/60 space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Previous Legacy Website (Before):
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.caseStudy.before}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/60 space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    SitePro 72h Transformation (After):
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.caseStudy.after}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-3">
                  Scope Delivered in 72 Hours:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.caseStudy.deliverables.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white flex items-center gap-2"
                    >
                      <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <p className="text-xs sm:text-sm italic text-zinc-300 leading-relaxed">
                  "{selectedProject.caseStudy.testimonialQuote}"
                </p>
                <div className="text-xs font-bold text-white">
                  {selectedProject.caseStudy.testimonialAuthor}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="#/briefing"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-4 rounded-xl bg-white text-black font-black text-sm text-center flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-md"
                >
                  <Sparkles size={16} />
                  <span>Get a Website Built to This Standard in 72h</span>
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-xl border border-zinc-800 text-zinc-300 font-bold text-sm text-center hover:bg-zinc-800 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
