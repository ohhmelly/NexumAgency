import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const projects = [
  {
    title: 'Green Ridge Landscaping',
    desc: 'A high-conversion website for a Goodlettsville landscaping firm featuring quote forms, gallery, and local SEO optimization.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'Tailwind CSS', 'SEO'],
    link: 'https://cheery-sunshine-9b260a.netlify.app/',
    status: 'Live',
  },
  {
    title: 'Auto 2.0',
    desc: 'Next-gen automotive service center website with online booking, real-time tracking, and transparent pricing.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'Booking System', 'Dark Mode'],
    link: 'https://chipper-beijinho-a30d87.netlify.app/',
    status: 'Live',
  },
  {
    title: 'Nashville Coffee Co.',
    desc: 'Online ordering platform for a local Nashville coffee shop with mobile-first checkout and loyalty rewards.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop&q=80',
    tags: ['E-Commerce', 'Online Ordering', 'Mobile'],
    link: 'https://zesty-starlight-485b41.netlify.app/',
    status: 'Live',
  },
  {
    title: 'Volant Sneakers',
    desc: 'Premium sneaker store landing page with product showcase, size selector, and bold visual design inspired by streetwear culture.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'E-Commerce', 'Landing Page'],
    internalLink: '/sneakers',
    status: 'Live',
  },
  {
    title: 'IronOak Fence Co.',
    desc: 'Professional fencing company website with service showcase, 3-step process, testimonials, and lead capture form.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'Lead Generation', 'Local Business'],
    internalLink: '/fencing',
    status: 'Live',
  },
];

const Portfolio = () => (
  <section id="work" className="py-20 md:py-28 bg-[#05050A]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        tag="Portfolio"
        title="Recent Projects"
        subtitle="Real sites we've built for real Nashville businesses."
      />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-300 bg-white/[0.02] h-full flex flex-col">
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Live'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                  {project.status}
                </span>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-gray-400 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{project.desc}</p>
                {project.internalLink ? (
                  <Link
                    to={project.internalLink}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-white font-semibold text-sm transition-colors group/link"
                  >
                    View Live Site
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                ) : project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-white font-semibold text-sm transition-colors group/link"
                  >
                    View Live Site
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-gray-500 font-semibold text-sm">
                    Coming Soon
                    <ArrowRight size={14} />
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
