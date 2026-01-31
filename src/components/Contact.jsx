import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './shared/SectionHeader';
import ScrollReveal from './shared/ScrollReveal';

const contactInfo = [
  { icon: Mail, label: 'nexumdigitalteam@gmail.com', href: 'mailto:nexumdigitalteam@gmail.com' },
  { icon: Phone, label: '(615) 555-0123', href: 'tel:+16155550123' },
  { icon: MapPin, label: 'Nashville, Tennessee', href: null },
  { icon: Clock, label: 'Mon - Fri, 9am - 6pm CST', href: null },
];

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

  const inputClass = 'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all';

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0F0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Get In Touch"
          title="Ready to Upgrade Your Business?"
          subtitle="We're currently accepting new clients. Secure your build slot today."
        />

        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#3B0764] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left - Contact Info */}
              <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s Talk</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Ready to get started? Reach out and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, href }, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-purple-300" />
                      </div>
                      {href ? (
                        <a href={href} className="text-gray-300 hover:text-white transition-colors text-sm">
                          {label}
                        </a>
                      ) : (
                        <span className="text-gray-300 text-sm">{label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="lg:col-span-3 p-8 md:p-10 bg-black/20">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                        <Send size={28} className="text-green-400" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
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
                      <div className="grid sm:grid-cols-2 gap-5">
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
                          className={inputClass}
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
                        className={inputClass}
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
                        className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                      >
                        Send Message
                        <Send size={18} />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
