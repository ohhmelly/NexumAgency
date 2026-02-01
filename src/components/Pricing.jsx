import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    tagline: 'Perfect for getting started',
    popular: false,
    features: [
      'Up to 3 pages',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      '30 days of support',
      '1 round of revisions',
    ],
  },
  {
    name: 'Professional',
    price: '$3,500',
    tagline: 'Most popular choice',
    popular: true,
    features: [
      'Up to 7 pages',
      'Fully custom design',
      'Advanced SEO optimization',
      'Content management (CMS)',
      '90 days of support',
      'Unlimited revisions',
      'Analytics dashboard',
      'Speed optimization',
    ],
  },
  {
    name: 'Enterprise',
    price: '$7,000+',
    tagline: 'For serious growth',
    popular: false,
    features: [
      'Unlimited pages',
      'Custom design + branding',
      'Advanced SEO + analytics',
      'CMS + admin dashboard',
      '12 months of support',
      'Unlimited revisions',
      'E-commerce integration',
      'Priority development',
      'Monthly maintenance',
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 md:py-40 bg-black">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      <SectionHeader
        tag="Pricing"
        title="Investment"
      />
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {plans.map((plan, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className={`relative p-8 md:p-10 border h-full flex flex-col transition-colors duration-300 ${
              plan.popular
                ? 'border-[#ECD06F]/40 hover:border-[#ECD06F]'
                : 'border-white/10 hover:border-white/20'
            }`}>
              {plan.popular && (
                <span className="text-xs uppercase tracking-[0.3em] text-[#ECD06F] mb-4 block font-medium">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-white uppercase tracking-[0.1em] mb-2">{plan.name}</h3>
              <p className="text-sm text-[#666666] mb-8">{plan.tagline}</p>

              <div className="mb-10">
                <span className="text-5xl md:text-6xl font-black text-[#ECD06F] font-[Syne]">{plan.price}</span>
                <span className="text-[#666666] ml-3 text-sm">one-time</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#888888] text-sm">
                    <span className="text-[#ECD06F] text-xs">&#8212;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 font-bold text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#ECD06F] text-black hover:bg-[#d4b85e]'
                    : 'border border-white/20 text-white hover:border-[#ECD06F] hover:text-[#ECD06F]'
                }`}
              >
                Get Started
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
