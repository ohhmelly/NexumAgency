import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './shared/ScrollReveal';

const contactInfo = [
  { icon: Mail, label: 'nexumdigitalteam@gmail.com', href: 'mailto:nexumdigitalteam@gmail.com' },
  { icon: Phone, label: '(615) 555-0123', href: 'tel:+16155550123' },
  { icon: MapPin, label: 'Nashville, Tennessee', href: null },
  { icon: Clock, label: 'Mon - Fri, 9am - 6pm CST', href: null },
];

const inputClass = 'w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ECD06F] transition-colors text-base';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Big heading */}
        <ScrollReveal>
          <div className="mb-20 md:mb-28">
            <span className="block text-xs uppercase tracking-[0.3em] text-[#ECD06F] mb-6 font-medium">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] font-[Syne]">
              Let&apos;s Work
              <br />
              Together
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Form */}
          <ScrollReveal>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ECD06F]/20 flex items-center justify-center mb-4">
                    <Send size={28} className="text-[#ECD06F]" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 font-[Syne]">Message Sent!</h4>
                  <p className="text-[#666666]">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid sm:grid-cols-2 gap-8">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Service Interest</option>
                      <option value="web-design">Web Design</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="redesign">Site Redesign</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">Budget Range</option>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2k-5k">$2,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-plus">$10,000+</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="bg-[#ECD06F] text-black font-bold py-4 px-12 text-sm uppercase tracking-[0.15em] hover:bg-[#d4b85e] transition-colors flex items-center gap-3"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <p className="text-lg text-[#666666] leading-relaxed mb-10">
                Ready to get started? Reach out and we&apos;ll get back to you within 24 hours.
              </p>
              {contactInfo.map(({ icon: Icon, label, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Icon size={16} className="text-[#ECD06F]" />
                  {href ? (
                    <a href={href} className="text-[#888888] hover:text-white transition-colors text-base">
                      {label}
                    </a>
                  ) : (
                    <span className="text-[#888888] text-base">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
