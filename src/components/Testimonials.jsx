import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const testimonials = [
  {
    name: 'James Carter',
    role: "Owner, Carter's Auto Shop",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80',
    quote: "Nexum completely transformed our online presence. We went from zero leads to 15+ calls a week within the first month. Best investment we've made.",
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, Green Ridge Landscaping',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80',
    quote: "They built us a site that actually brings in customers. The design is beautiful, it loads instantly, and we rank #1 for landscaping in our area now.",
  },
  {
    name: 'David Park',
    role: 'Manager, Nashville Coffee Co.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80',
    quote: "Professional, fast, and they actually understand small business. Our online orders tripled after the new site launched. Can't recommend them enough.",
  },
];

const Testimonials = () => (
  <section className="py-24 md:py-40 bg-black">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      <SectionHeader
        tag="Testimonials"
        title="Kind Words"
      />
      <div className="space-y-16 md:space-y-24">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="max-w-4xl">
              <span className="text-6xl text-[#ECD06F] font-[Syne] leading-none block mb-4">&ldquo;</span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm text-white font-semibold">{t.name}</p>
                  <p className="text-sm text-[#666666]">{t.role}</p>
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
