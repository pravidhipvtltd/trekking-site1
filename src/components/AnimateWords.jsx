import { motion } from 'framer-motion';

/**
 * Word-by-word or letter-by-letter text animation for cinematic typography.
 */
export default function AnimateWords({
  text,
  mode = 'words',
  className = '',
  highlightLast = false,
  delay = 0,
  stagger = 0.08,
}) {
  const items = mode === 'words' ? text.split(' ') : text.split('');

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`inline-block mr-[0.25em] ${
            highlightLast && i === items.length - 1 ? 'text-gradient' : ''
          }`}
        >
          {mode === 'words' ? `${item} ` : item}
        </motion.span>
      ))}
    </span>
  );
}
