import ScrollReveal from './ScrollReveal';

const SectionHeader = ({ tag, title, subtitle }) => (
  <ScrollReveal>
    <div className="text-center mb-16 max-w-3xl mx-auto">
      {tag && (
        <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  </ScrollReveal>
);

export default SectionHeader;
