import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, motion, animate } from 'framer-motion';

const AnimatedCounter = ({ target, suffix = '', duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    target % 1 !== 0 ? v.toFixed(1) : Math.floor(v)
  );

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration });
    }
  }, [isInView, target, count, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};

export default AnimatedCounter;
