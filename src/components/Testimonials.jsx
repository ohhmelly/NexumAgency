import { Star, Quote } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const testimonials = [
  {
    name: 'James Carter',
    role: "Owner, Carter's Auto Shop",
    location: 'Nashville, TN',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80',
    quote: "Nexum completely transformed our online presence. We went from zero leads to 15+ calls a week within the first month. Best investment we've made.",
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, Green Ridge Landscaping',
    location: 'Goodlettsville, TN',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80',
    quote: "They built us a site that actually brings in customers. The design is beautiful, it loads instantly, and we rank #1 for landscaping in our area now.",
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Manager, Nashville Coffee Co.',
    location: 'Nashville, TN',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80',
    quote: "Professional, fast, and they actually understand small business. Our online orders tripled after the new site launched. Can't recommend them enough.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-[#0F0F1A]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        tag="Testimonials"
        title="What Our Clients Say"
        subtitle="Don't take our word for it. Here's what Nashville businesses think about working with us."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className={`relative p-8 rounded-2xl border h-full flex flex-col ${
              i === 1
                ? 'bg-gradient-to-b from-purple-900/20 to-white/5 border-purple-500/30 md:scale-105'
                : 'bg-white/5 border-white/10'
            } hover:border-purple-500/40 transition-all duration-300`}>
              {/* Quote icon */}
              <Quote size={32} className="text-purple-500/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
