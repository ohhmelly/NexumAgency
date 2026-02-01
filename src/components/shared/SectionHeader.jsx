import ScrollReveal from './ScrollReveal';

const SectionHeader = ({ tag, title, subtitle, center = false }) => (
  <ScrollReveal>
    <div className={`${center ? 'text-center' : 'text-left'} mb-20 md:mb-28 max-w-4xl ${center ? 'mx-auto' : ''}`}>
      {tag && (
        <span className="block text-xs uppercase tracking-[0.3em] text-[#ECD06F] mb-6 font-medium">
          {tag}
        </span>
      )}
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] font-[Syne] mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#666666] max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  </ScrollReveal>
);

export default SectionHeader;
