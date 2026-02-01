import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const services = [
  {
    title: 'Mobile-First Design',
    desc: 'Over 60% of your customers search on their phones. Our sites look perfect on every device, guaranteed.',
  },
  {
    title: 'SEO Optimization',
    desc: 'We build with clean code that Google loves, helping you rank higher in local Nashville search results.',
  },
  {
    title: 'Blazing Fast Speed',
    desc: 'No bloated plugins. We use modern tech (React/Vite) ensuring your site loads in under 1 second.',
  },
  {
    title: 'Custom Development',
    desc: 'No cookie-cutter templates. Every site is built from scratch to match your brand and business goals.',
  },
  {
    title: 'Conversion Focused',
    desc: 'Strategic layouts designed to turn visitors into paying customers with clear calls-to-action.',
  },
  {
    title: 'Ongoing Support',
    desc: "We don't disappear after launch. Monthly maintenance plans to keep your site updated and secure.",
  },
];

const Services = () => (
  <section id="services" className="py-24 md:py-40 bg-black">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      <SectionHeader
        tag="What We Do"
        title="Services"
      />
      <div className="space-y-0">
        {services.map((service, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 cursor-default gap-4">
              <div className="flex items-center gap-6 md:gap-10">
                <span className="text-sm text-[#666666] font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-[Syne] group-hover:text-[#ECD06F] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-base text-[#666666] max-w-sm md:text-right pl-12 md:pl-0">
                {service.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
