import { Code2, Smartphone, Search, Zap, Headphones } from 'lucide-react';
import ScrollReveal from './shared/ScrollReveal';

const badges = [
  { icon: Code2, label: 'Custom Built' },
  { icon: Smartphone, label: 'Mobile First' },
  { icon: Search, label: 'SEO Optimized' },
  { icon: Zap, label: 'Fast Delivery' },
  { icon: Headphones, label: '24/7 Support' },
];

const TrustBar = () => (
  <ScrollReveal>
    <div className="bg-[#0A0A14] border-y border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400">
              <Icon size={18} className="text-purple-400" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

export default TrustBar;
