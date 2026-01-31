import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Truck, RotateCcw, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sizes = ['38-40', '41-42', '43-44'];

const products = [
  {
    name: 'Air Force Classic',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80',
    tag: 'New',
  },
  {
    name: 'Street Runner X',
    price: '$159',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&q=80',
    tag: 'Popular',
  },
  {
    name: 'Urban Edge Pro',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80',
    tag: 'Limited',
  },
  {
    name: 'Retro High OG',
    price: '$219',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&q=80',
    tag: 'Exclusive',
  },
];

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
  { icon: RotateCcw, title: '30-Day Returns', desc: 'No questions asked' },
  { icon: ShieldCheck, title: '100% Authentic', desc: 'Verified genuine products' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SneakerStore = () => {
  const [selectedSize, setSelectedSize] = useState('41-42');

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-extrabold text-2xl tracking-widest">
              <span className="text-white">V</span>
              <span className="text-red-500">O</span>
              <span className="text-white">LANT</span>
            </span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Home</a>
              <a href="#products" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Products</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
              <a
                href="#products"
                className="flex items-center gap-2 bg-white text-[#0a0e27] px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all"
              >
                Place Order <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Giant watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem] font-black text-white/[0.03] tracking-wider leading-none whitespace-nowrap">
            VOLANT
          </span>
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 gap-8 items-center"
          >
            {/* Left - Product Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-red-500" />
                <span className="text-red-400 text-sm font-medium tracking-wider uppercase">Featured</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-none">
                Jordan<br />
                <span className="text-red-500">1</span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                A bold black-and-grey upper covered in rebellious script, finished with striking red accents for that defiant edge. Classic Jordan DNA with a statement attitude — made to stand out on the streets.
              </p>
              <div className="flex gap-3">
                <a href="#products" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all">
                  Products
                </a>
                <a href="#features" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all">
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Center - Shoe Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 flex justify-center relative"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                alt="Featured Sneaker"
                className="w-full max-w-md drop-shadow-2xl relative z-10"
                style={{ transform: 'rotate(-15deg)' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Glow under shoe */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-red-500/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Right - Size Selector */}
            <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col items-center lg:items-end">
              <div className="text-center lg:text-right mb-6">
                <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-4">Choose Your Size</p>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                          : 'bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-gray-400 text-sm">(2.4k reviews)</span>
              </div>

              <p className="text-4xl font-black mb-6">
                $189<span className="text-lg text-gray-500 line-through ml-2">$249</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Order CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-12 lg:mt-4"
          >
            <button className="inline-flex items-center gap-3 px-10 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-full shadow-lg shadow-red-500/30 transition-all hover:scale-105">
              <ShoppingBag size={20} />
              Order Now!
            </button>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-white/5" />
      </div>

      {/* Products Grid */}
      <section id="products" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Picks</h2>
              <p className="text-gray-500">Handpicked styles for the streets</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
              View All <ChevronRight size={16} />
            </button>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-white/5 rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all"
              >
                {/* Tag */}
                <span className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold ${
                  product.tag === 'New' ? 'bg-green-500/20 text-green-400' :
                  product.tag === 'Popular' ? 'bg-red-500/20 text-red-400' :
                  product.tag === 'Limited' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {product.tag}
                </span>

                {/* Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-transparent p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm md:text-base mb-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-bold">{product.price}</span>
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-all">
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon size={22} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-extrabold text-xl tracking-widest">
                <span className="text-white">V</span>
                <span className="text-red-500">O</span>
                <span className="text-white">LANT</span>
              </span>
              <p className="text-gray-600 text-sm mt-1">Premium streetwear & sneakers</p>
            </div>
            <div className="flex gap-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Shipping</a>
              <a href="#" className="hover:text-white transition-colors">Returns</a>
            </div>
            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Volant. All rights reserved.</p>
          </div>
          <div className="mt-6 text-center">
            <Link to="/" className="text-gray-600 hover:text-purple-400 text-xs transition-colors">
              Built by Nexum Digital
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SneakerStore;
