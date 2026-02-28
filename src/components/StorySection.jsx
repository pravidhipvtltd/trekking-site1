import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { easeSmooth } from '../utils/motion';

/**
 * Scroll-driven storytelling section with parallax depth and cinematic reveals.
 */
export default function StorySection({
  label,
  title,
  titleHighlight,
  body,
  image,
  imagePosition = 'left',
  to,
  linkLabel,
  stats,
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Deeper parallax with smoother curves
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ['8%', '-3%', '2%', '6%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.96, 1.02, 1]);
  const contentX = useTransform(scrollYProgress, [0, 0.2, 0.4], imagePosition === 'left' ? [-40, -8, 0] : [40, 8, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.12, 0.35, 0.88, 1], [0, 0.6, 1, 1, 0.4]);

  return (
    <section ref={ref} className={`py-32 md:py-44 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${imagePosition === 'right' ? 'lg:grid-flow-dense' : ''}`}>
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className={`relative ${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-120px', amount: 0.2 }}
              transition={{ duration: 1.2, ease: easeSmooth }}
              className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: easeSmooth, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 lg:-right-12 w-52 rounded-2xl glass p-8 border-l-4 border-primary-500 shadow-2xl"
              >
                <p className="text-4xl font-display font-bold text-primary-400">{stats.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{stats.label}</p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            style={{ x: contentX, opacity: contentOpacity }}
            className={imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: easeSmooth }}
              className="text-primary-500 text-sm tracking-[0.35em] uppercase font-medium"
            >
              {label}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-8 leading-tight"
            >
              {title}
              {titleHighlight && <span className="text-gradient block mt-2">{titleHighlight}</span>}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: easeSmooth, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              {body}
            </motion.p>
            {to && linkLabel && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeSmooth, delay: 0.35 }}
              >
                <Link
                  to={to}
                  className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors group"
                >
                  {linkLabel}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
