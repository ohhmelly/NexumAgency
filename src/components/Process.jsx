import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Discovery',
    desc: 'We learn about your business, goals, and target audience through a free consultation call.',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Design',
    desc: 'Custom mockups and wireframes tailored to your brand. You approve every detail before we build.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Develop',
    desc: 'We hand-code your site with modern React & Tailwind CSS. Fast, clean, and optimized.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Launch',
    desc: 'Go live with hosting, SEO setup, and analytics. We train you and provide ongoing support.',
  },
];

const Process = () => (
  <section id="process" className="py-20 md:py-28 bg-[#0F0F1A]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        tag="How It Works"
        title="Our Simple 4-Step Process"
        subtitle="From first call to launch day, we keep it simple and transparent."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="relative text-center group">
              {/* Large watermark number */}
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl font-extrabold text-white/[0.03] select-none pointer-events-none">
                {step.num}
              </span>

              {/* Icon circle */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                <step.icon size={28} className="text-white" />
              </div>

              {/* Connecting line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
              )}

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
