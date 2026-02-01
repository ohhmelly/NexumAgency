import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn about your business, goals, and target audience through a free consultation call.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Custom mockups and wireframes tailored to your brand. You approve every detail before we build.',
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'We hand-code your site with modern React & Tailwind CSS. Fast, clean, and optimized.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Go live with hosting, SEO setup, and analytics. We train you and provide ongoing support.',
  },
];

const Process = () => (
  <section id="process" className="py-24 md:py-40 bg-black">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      <SectionHeader
        tag="How It Works"
        title="Process"
      />
      <div className="space-y-0">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b border-white/10 items-start">
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-7xl md:text-8xl font-black text-white/[0.08] font-[Syne] leading-none">
                  {step.num}
                </span>
              </div>
              {/* Content */}
              <div className="md:col-span-10">
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight font-[Syne] mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-[#666666] max-w-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
