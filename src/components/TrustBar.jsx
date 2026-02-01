import ScrollReveal from './shared/ScrollReveal';

const badges = ['Custom Built', 'Mobile First', 'SEO Optimized', 'Fast Delivery', '24/7 Support'];

const TrustBar = () => (
  <ScrollReveal>
    <div className="border-y border-white/5 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...badges, ...badges, ...badges, ...badges].map((badge, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-sm uppercase tracking-[0.3em] text-[#888888]">{badge}</span>
            <span className="text-[#ECD06F] text-xs">&#9679;</span>
          </span>
        ))}
      </div>
    </div>
  </ScrollReveal>
);

export default TrustBar;
