import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Button with magnetic effect - follows cursor subtly on hover.
 */
export default function MagneticButton({
  children,
  to,
  variant = 'primary',
  className = '',
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseClasses =
    variant === 'primary'
      ? 'hero-cta-primary'
      : 'border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10';

  const content = (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`inline-flex items-center gap-2 px-10 py-4 sm:px-12 sm:py-5 rounded-full font-semibold tracking-wide transition-all duration-300 ${baseClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  return content;
}
