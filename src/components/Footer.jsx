const Footer = () => (
  <footer className="bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      {/* Large brand text */}
      <div className="mb-16">
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
