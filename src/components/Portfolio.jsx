import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const projects = [
  {
    title: 'Green Ridge Landscaping',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'SEO'],
    link: 'https://cheery-sunshine-9b260a.netlify.app/',
  },
  {
    title: 'Auto 2.0',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'Dark Mode'],
    link: 'https://chipper-beijinho-a30d87.netlify.app/',
  },
  {
    title: 'Nashville Coffee Co.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop&q=80',
    tags: ['E-Commerce', 'Mobile'],
    link: 'https://zesty-starlight-485b41.netlify.app/',
  },
  {
    title: 'Volant Sneakers',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'Landing Page'],
    internalLink: '/sneakers',
  },
  {
    title: 'IronOak Fence Co.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop&q=80',
    tags: ['Lead Gen', 'Local Business'],
    internalLink: '/fencing',
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="work" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeader
          tag="Portfolio"
          title="Selected Work"
        />
        <div className="space-y-0">
          {projects.map((project, i) => {
            const isInternal = !!project.internalLink;
            const isExternal = !!project.link;

            const content = (
              <>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-sm text-[#666666] font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tight font-[Syne] group-hover:text-[#ECD06F] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 pl-12 md:pl-0">
                    <div className="flex gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs uppercase tracking-[0.15em] text-[#666666]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight size={20} className="text-[#666666] group-hover:text-[#ECD06F] group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>

                {/* Hover image reveal */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={hoveredIndex === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 md:pt-8 max-w-3xl ml-12 md:ml-20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </>
            );

            const className = "group block py-8 md:py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300";

            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                {isInternal ? (
                  <Link
                    to={project.internalLink}
                    className={className}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {content}
                  </Link>
                ) : isExternal ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    className={className}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {content}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
