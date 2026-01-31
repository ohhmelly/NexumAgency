import { Check, Sparkles } from 'lucide-react';
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
  <section id="pricing" className="py-20 md:py-28 bg-[#05050A]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        tag="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No surprises. Pick a plan and let's build something great."
      />
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {plans.map((plan, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className={`relative rounded-2xl p-8 border h-full flex flex-col ${
              plan.popular
                ? 'bg-gradient-to-b from-purple-900/30 to-white/5 border-purple-500/50 md:scale-105 shadow-xl shadow-purple-500/10'
                : 'bg-white/5 border-white/10'
            }`}>
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold flex items-center gap-1">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{plan.tagline}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-extrabold gradient-text">{plan.price}</span>
                <span className="text-gray-500 ml-2 text-sm">one-time</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-purple-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-bold transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:shadow-purple-500/30'
                    : 'border border-white/20 text-white hover:bg-white/10'
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
