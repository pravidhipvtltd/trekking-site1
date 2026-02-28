import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Section with clip-path or fade reveal on scroll.
 */
export default function SectionReveal({
  children,
  className = '',
  variant = 'fade',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.5'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)']
  );

  const style = variant === 'clip' ? { clipPath } : { opacity };

  return (
    <motion.section ref={ref} style={style} className={className}>
      {children}
    </motion.section>
  );
}
