import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IMAGE = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85';

/**
 * Scene 3: Full-width image with parallax and overlay text.
 * "Walk where the world disappears."
 */
export default function SceneVisual() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ['-10%', '5%', '-5%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.9], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <img
          src={IMAGE}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%', amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight"
        >
          Walk where the world disappears.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-300/90 font-light"
        >
          Ancient trails · Sherpa wisdom · A world above the clouds
        </motion.p>
      </motion.div>
    </section>
  );
}
