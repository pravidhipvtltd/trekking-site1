import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { easeSmooth } from '../utils/motion';

export default function ParallaxSection({
  image,
  overlay = true,
  children,
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Deeper, smoother parallax with scale
  const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['-22%', '-6%', '0%', '6%', '22%']);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1.05, 1.02, 1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.8, 1], [0.4, 0.9, 1, 1, 0.35]);

  return (
    <section
      ref={ref}
      className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -top-[20%] -bottom-[20%]"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75" />
        )}
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px', amount: 0.25 }}
          transition={{ duration: 1.1, ease: easeSmooth }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
