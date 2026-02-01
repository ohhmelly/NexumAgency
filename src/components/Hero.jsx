import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-32 pb-20"
      >
        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black text-white tracking-tighter leading-[0.85] font-[Syne]"
        >
          WE BUILD
          <br />
          <span className="text-[#ECD06F]">WEBSITES</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg md:text-xl text-[#666666] max-w-lg leading-relaxed"
        >
          High-converting, modern websites for Nashville businesses.
          Stop losing customers to competitors with better sites.
        </motion.p>

        {/* CTA link */}
        <motion.a
          variants={itemVariants}
          href="#work"
          className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-[0.3em] text-[#ECD06F] hover:text-white transition-colors group"
        >
          View Our Work
          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
        </motion.a>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-12 mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 font-[Syne]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#666666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
