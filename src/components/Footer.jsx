const Footer = () => (
  <footer className="bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      {/* Large brand */}
      <div className="mb-16 flex items-center gap-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-16 md:h-24 w-16 md:w-24" aria-label="Nexum logo">
          <rect x="92" y="92" width="328" height="328" rx="40" fill="none" stroke="white" strokeWidth="20"/>
          <g fill="none" stroke="white" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" transform="translate(-24,-9)">
            <line x1="170" y1="360" x2="170" y2="170"/>
            <line x1="170" y1="170" x2="262" y2="360"/>
            <line x1="262" y1="360" x2="262" y2="170"/>
            <line x1="310" y1="180" x2="390" y2="350"/>
            <line x1="390" y1="180" x2="310" y2="350"/>
          </g>
          <circle cx="410" cy="410" r="18" fill="#ECD06F"/>
        </svg>
        <span className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter font-[Syne]">
          NEXUM<span className="text-[#ECD06F]">.</span>
        </span>
      </div>

      {/* Minimal info row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/5 pt-10">
        <div className="flex flex-wrap gap-8">
          <a href="#work" className="text-sm text-[#888888] hover:text-white transition-colors">Work</a>
          <a href="#services" className="text-sm text-[#888888] hover:text-white transition-colors">Services</a>
          <a href="#contact" className="text-sm text-[#888888] hover:text-white transition-colors">Contact</a>
        </div>
        <a href="mailto:nexumdigitalteam@gmail.com" className="text-sm text-[#888888] hover:text-[#ECD06F] transition-colors">
          nexumdigitalteam@gmail.com
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666666]">
            &copy; {new Date().getFullYear()} Nexum Digital. All rights reserved.
          </p>
          <p className="text-xs text-[#666666]">
            Nashville, Tennessee
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
