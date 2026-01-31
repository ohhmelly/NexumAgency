import { motion } from 'framer-motion';
import AnimatedCounter from './shared/AnimatedCounter';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  { value: 4.9, suffix: '', label: 'Client Rating' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#05050A]">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-32 left-10 w-64 h-64 md:w-80 md:h-80 bg-pink-600/15 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-32 pb-20"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Nashville&apos;s Premier Web Agency
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Websites that Grow{' '}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Your Business
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          We build high-converting, modern websites for Nashville businesses.
          Stop losing customers to competitors with better sites.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
          >
            Get Your Free Quote
          </a>
          <a
            href="#work"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 text-white font-medium transition-all hover:bg-white/5"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 max-w-4xl mx-auto w-full px-4 pb-10"
      >
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
