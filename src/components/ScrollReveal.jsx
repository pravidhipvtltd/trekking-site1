import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Section that reveals with scroll-linked clip-path and opacity for cinematic transitions.
 */
export default function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.35'],
  });

  const clipPath = useTransform(scrollYProgress, [0, 0.55], ['inset(0 0 100% 0)', 'inset(0 0 0% 0)']);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [48, 0]);

  return (
    <motion.section ref={ref} style={{ clipPath, opacity, y }} className={className}>
      {children}
    </motion.section>
  );
}
