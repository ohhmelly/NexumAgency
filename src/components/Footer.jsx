import { Mail, Phone, MapPin, Clock, ArrowUpRight, Heart } from 'lucide-react';

const serviceLinks = [
  'Web Design',
  'SEO Optimization',
  'Site Redesign',
  'E-Commerce',
  'Maintenance Plans',
];

const companyLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const contactDetails = [
  { icon: Mail, text: 'nexumdigitalteam@gmail.com' },
  { icon: Phone, text: '(615) 555-0123' },
  { icon: MapPin, text: 'Nashville, TN' },
  { icon: Clock, text: 'Mon - Fri, 9am - 6pm' },
];

const Footer = () => (
  <footer className="bg-[#020205] border-t border-white/5">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Nexum Digital" className="h-8 w-8 rounded-lg" />
            <span className="font-bold text-lg tracking-wider text-white">NEXUM<span className="text-purple-400">.</span></span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            We build high-converting modern websites for Nashville businesses. Custom-coded, blazing fast, designed to grow your revenue.
          </p>
          <div className="flex gap-3">
            {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all text-xs font-bold"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="text-gray-500 hover:text-purple-400 transition-colors text-sm flex items-center gap-1 group">
                  {link}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Company</h4>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-500 hover:text-purple-400 transition-colors text-sm flex items-center gap-1 group">
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
          <ul className="space-y-3">
            {contactDetails.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                <Icon size={14} className="text-purple-400 flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Nexum Digital. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Built with <Heart size={12} className="text-purple-500" /> in Nashville, TN
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
