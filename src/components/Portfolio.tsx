import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import corporateImg from '../assets/images/portfolio_site_corporate_1786988085665.jpg';
import creativeImg from '../assets/images/portfolio_site_creative_1786988096673.jpg';
import medicalImg from '../assets/images/portfolio_site_medical_1786988107523.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card: any) => {
        gsap.fromTo(card.querySelector('.project-mask'), 
          { scaleY: 1 }, 
          { 
            scaleY: 0, 
            duration: 1.5, 
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeCategory]);

  const categories = ['Todos', 'Empresas', 'Serviços', 'Profissionais', 'Negócios locais', 'Landing Pages'];

  const projects = [
    {
      id: 1,
      title: 'Soluções Corporativas',
      category: 'Empresas',
      imageUrl: corporateImg
    },
    {
      id: 2,
      title: 'Agência Criativa',
      category: 'Serviços',
      imageUrl: creativeImg
    },
    {
      id: 3,
      title: 'Clínica HealthCare',
      category: 'Profissionais',
      imageUrl: medicalImg
    },
    {
      id: 4,
      title: 'Consultoria Financeira',
      category: 'Empresas',
      imageUrl: corporateImg
    },
    {
      id: 5,
      title: 'E-commerce Local',
      category: 'Negócios locais',
      imageUrl: creativeImg
    },
    {
      id: 6,
      title: 'Lançamento Imobiliário',
      category: 'Landing Pages',
      imageUrl: medicalImg
    }
  ];

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-6 tracking-tighter"
            >
              Projetos que <br /> <span className="text-zinc-200 dark:text-zinc-800 italic font-serif font-light text-3xl sm:text-5xl lg:text-[100px]">definem padrões.</span>
            </motion.h2>
          </div>
          <div className="flex flex-nowrap overflow-x-auto pb-4 lg:pb-0 lg:flex-wrap gap-2 lg:mb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-2xl' 
                  : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 project-card"
            >
              {/* GSAP Reveal Mask */}
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 z-20 project-mask origin-top"></div>
              
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale dark:grayscale-0 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
                <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold tracking-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
