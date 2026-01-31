import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield, Star, Users, DollarSign, ArrowRight, Check, ChevronRight, Fence, Hammer, CalendarCheck, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { name: 'Wood Privacy', image: 'https://images.unsplash.com/photo-1622993366223-af4c0367a0ca?w=500&h=400&fit=crop&q=80', desc: 'Classic cedar & pine privacy fences built to last.' },
  { name: 'Vinyl Fencing', image: 'https://images.unsplash.com/photo-1635048424329-a4907cee6666?w=500&h=400&fit=crop&q=80', desc: 'Low-maintenance vinyl in white, tan, and grey.' },
  { name: 'Chain Link', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=400&fit=crop&q=80', desc: 'Durable and affordable for any property size.' },
  { name: 'Aluminum', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=400&fit=crop&q=80', desc: 'Elegant ornamental fencing with zero rust.' },
  { name: 'Farm & Ranch', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=400&fit=crop&q=80', desc: 'Split rail, wire, and post fencing for acreage.' },
  { name: 'Gates & Entries', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=400&fit=crop&q=80', desc: 'Custom gates — manual, automatic, and smart access.' },
];

const whyUs = [
  { icon: DollarSign, title: 'Competitive Pricing', desc: 'Transparent quotes with no hidden fees. We beat competitor pricing.' },
  { icon: Users, title: 'Free Consultation', desc: 'Personalized site assessment and expert recommendations at no cost.' },
  { icon: Hammer, title: 'Expert Craftsmanship', desc: '15+ years of experience. Licensed, bonded, and fully insured.' },
  { icon: Shield, title: '100% Satisfaction', desc: 'We stand behind every install with our lifetime workmanship warranty.' },
];

const steps = [
  { num: '01', title: 'Schedule', desc: 'Book your free on-site consultation. We assess your property and discuss your vision.', icon: CalendarCheck },
  { num: '02', title: 'Design', desc: 'Choose your materials, style, and layout. We provide a detailed quote with 3D preview.', icon: Fence },
  { num: '03', title: 'Install', desc: 'Our expert crew handles everything. Most projects completed in 1-3 days.', icon: Hammer },
];

const testimonials = [
  { name: 'Marcus Johnson', location: 'Nashville, TN', text: 'Best fencing company in Middle Tennessee. They installed our 6ft cedar privacy fence in just two days. Looks incredible and the price was very fair.', rating: 5 },
  { name: 'Lisa & Tom Rivera', location: 'Franklin, TN', text: 'From consultation to installation, everything was professional and on time. Our new vinyl fence has completely transformed our backyard. Highly recommend!', rating: 5 },
  { name: 'David Chen', location: 'Murfreesboro, TN', text: 'We needed a farm fence for our 10-acre property. They were the only company that could handle the job quickly and within budget. Outstanding work.', rating: 5 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const FencingCo = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Announcement Bar */}
      <div className="bg-amber-800 text-white text-center py-2 text-sm font-medium tracking-wide">
        FREE ESTIMATES — Call Today! <a href="tel:+16154106120" className="underline font-bold ml-1">(615) 410-6120</a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Fence className="text-amber-700" size={28} />
              <span className="font-black text-xl tracking-tight">
                IRON<span className="text-amber-700">OAK</span>
                <span className="text-xs font-medium text-gray-400 ml-1 tracking-wider">FENCE CO.</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-amber-700 transition-colors text-sm font-medium">Services</a>
              <a href="#why" className="text-gray-600 hover:text-amber-700 transition-colors text-sm font-medium">Why Us</a>
              <a href="#process" className="text-gray-600 hover:text-amber-700 transition-colors text-sm font-medium">Process</a>
              <a href="#reviews" className="text-gray-600 hover:text-amber-700 transition-colors text-sm font-medium">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-700 transition-colors text-sm font-medium">Contact</a>
              <a href="tel:+16154106120" className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all">
                <Phone size={14} /> Call Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3"
          >
            {['Services', 'Why Us', 'Process', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setMobileOpen(false)} className="block text-gray-700 font-medium py-2">
                {item}
              </a>
            ))}
            <a href="tel:+16154106120" className="block bg-amber-700 text-white text-center py-3 rounded-lg font-bold">
              Call (615) 410-6120
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622993366223-af4c0367a0ca?w=1600&h=900&fit=crop&q=80"
            alt="Beautiful fence installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-amber-700/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star size={14} className="fill-white" /> Rated 4.9/5 by 500+ Homeowners
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl">
            Nashville&apos;s Most Trusted{' '}
            <span className="text-amber-400">Fence Company</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200 max-w-xl mb-8 leading-relaxed">
            Protect your property, enhance its beauty, and gain lasting peace of mind. Expert installation with premium materials — serving Middle Tennessee since 2009.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-600/30">
              Get Free Estimate <ArrowRight size={18} />
            </a>
            <a href="tel:+16154106120" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              <Phone size={18} /> (615) 410-6120
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Scrolling Services Banner */}
      <div className="bg-amber-800 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {['Wood Privacy', 'Vinyl', 'Aluminum', 'Chain Link', 'Farm & Ranch', 'Gates', 'Decks', 'Retaining Walls', 'Commercial', 'Residential'].map((item, i) => (
            <span key={i} className="text-white/80 font-bold text-sm tracking-widest uppercase mx-8 inline-block">
              {item} <span className="text-amber-400 mx-4">|</span>
            </span>
          ))}
          {['Wood Privacy', 'Vinyl', 'Aluminum', 'Chain Link', 'Farm & Ranch', 'Gates', 'Decks', 'Retaining Walls', 'Commercial', 'Residential'].map((item, i) => (
            <span key={`dup-${i}`} className="text-white/80 font-bold text-sm tracking-widest uppercase mx-8 inline-block">
              {item} <span className="text-amber-400 mx-4">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-amber-700 font-semibold text-sm tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">Our Fencing Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From classic wood privacy to modern aluminum — we install it all with precision and care.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{service.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-1 text-amber-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    Get Quote <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-amber-700 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">The IronOak Difference</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-amber-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">Getting Started</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">3 Simple Steps</h2>
            <p className="text-amber-100/70 max-w-xl mx-auto">From first call to finished fence — we make it easy.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="text-7xl font-black text-white/10 absolute -top-4 left-1/2 -translate-x-1/2">{step.num}</div>
                <div className="relative pt-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 border border-white/10">
                    <step.icon size={28} className="text-amber-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-amber-100/70 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-amber-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all hover:scale-105 shadow-lg">
              Book Your Free Consultation <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-amber-700 font-semibold text-sm tracking-wider uppercase">Reviews</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">What Customers Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Get Your Free Estimate</h2>
                <p className="text-amber-100/70 mb-8 leading-relaxed">
                  Ready to upgrade your property? Fill out the form and we&apos;ll get back to you within 2 hours during business hours.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Phone, text: '(615) 410-6120' },
                    { icon: Mail, text: 'info@ironoakfence.com' },
                    { icon: MapPin, text: 'Nashville, Tennessee' },
                    { icon: Clock, text: 'Mon-Fri 8am-6pm, Sat 8am-12pm' },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-3 text-amber-100/80">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-amber-300" />
                      </div>
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="p-8 md:p-12 bg-black/10">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-amber-100/40 focus:outline-none focus:border-amber-400 transition-all" />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-amber-100/40 focus:outline-none focus:border-amber-400 transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-amber-100/40 focus:outline-none focus:border-amber-400 transition-all" />
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all">
                    <option value="" className="bg-amber-900 text-white">Fence Type</option>
                    <option value="wood" className="bg-amber-900 text-white">Wood Privacy</option>
                    <option value="vinyl" className="bg-amber-900 text-white">Vinyl</option>
                    <option value="chain" className="bg-amber-900 text-white">Chain Link</option>
                    <option value="aluminum" className="bg-amber-900 text-white">Aluminum</option>
                    <option value="farm" className="bg-amber-900 text-white">Farm & Ranch</option>
                    <option value="other" className="bg-amber-900 text-white">Other</option>
                  </select>
                  <textarea rows={3} placeholder="Tell us about your project..." className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-amber-100/40 focus:outline-none focus:border-amber-400 transition-all resize-none" />
                  <button type="submit" className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-amber-500/30">
                    Request Free Estimate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Fence size={22} className="text-amber-400" />
                <span className="font-black text-lg">IRON<span className="text-amber-400">OAK</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Nashville&apos;s premier fence installation company. Serving Middle Tennessee with quality craftsmanship since 2009.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-gray-300">Services</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                {['Wood Privacy', 'Vinyl Fencing', 'Chain Link', 'Aluminum', 'Farm & Ranch', 'Gates'].map(s => (
                  <li key={s}><a href="#services" className="hover:text-amber-400 transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-gray-300">Company</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                {['About Us', 'Reviews', 'Careers', 'Service Areas', 'Contact'].map(s => (
                  <li key={s}><a href="#" className="hover:text-amber-400 transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-gray-300">Contact</h4>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="flex items-center gap-2"><Phone size={14} className="text-amber-400" /> (615) 410-6120</li>
                <li className="flex items-center gap-2"><Mail size={14} className="text-amber-400" /> info@ironoakfence.com</li>
                <li className="flex items-center gap-2"><MapPin size={14} className="text-amber-400" /> Nashville, TN 37209</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} IronOak Fence Co. All rights reserved.</p>
            <Link to="/" className="text-gray-600 hover:text-amber-400 text-xs transition-colors">
              Built by Nexum Digital
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FencingCo;
