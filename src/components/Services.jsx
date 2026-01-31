import { Smartphone, Search, Zap, Code2, TrendingUp, Headphones } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Over 60% of your customers search on their phones. Our sites look perfect on every device, guaranteed.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'We build with clean code that Google loves, helping you rank higher in local Nashville search results.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast Speed',
    desc: 'No bloated plugins. We use modern tech (React/Vite) ensuring your site loads in under 1 second.',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    desc: 'No cookie-cutter templates. Every site is built from scratch to match your brand and business goals.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    desc: 'Strategic layouts designed to turn visitors into paying customers with clear calls-to-action.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    desc: "We don't disappear after launch. Monthly maintenance plans to keep your site updated and secure.",
  },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-[#05050A]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        tag="What We Do"
        title="Why Businesses Choose Nexum"
        subtitle="We don't just write code. We build digital assets that bring you actual paying customers."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
