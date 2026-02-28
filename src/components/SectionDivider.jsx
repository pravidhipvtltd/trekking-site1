import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Animated divider line that draws on scroll - adds chapter-break storytelling.
 */
export default function SectionDivider({ className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'start 0.6'],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div ref={ref} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        style={{ scaleX }}
        className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary-500/60 to-transparent origin-center"
      />
    </div>
  );
}
