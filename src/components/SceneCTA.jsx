import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContactModal } from '../context/ContactModalContext';

const stats = [
  { value: '5,000+', label: 'Trekkers guided' },
  { value: '20+', label: 'Years in Nepal' },
  { value: '98%', label: 'Satisfaction' },
];

/**
 * Scene 7: Final CTA with trust elements.
 */
export default function SceneCTA() {
  const { openContactModal } = useContactModal();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060a06] to-black pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15%', amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight">
          Your journey starts here.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto">
          Tell us your dream. We'll craft the trek, handle the logistics, and guide you every step.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <button
              type="button"
              onClick={openContactModal}
              className="inline-block px-12 py-5 text-lg font-medium tracking-widest uppercase text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 rounded-full transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]"
            >
              Plan Your Trek
            </button>
          </motion.div>
          <Link
            to="/destinations"
            className="text-gray-400 hover:text-white text-sm uppercase tracking-wider font-medium transition-colors"
          >
            Browse destinations →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl md:text-3xl font-normal text-primary-400">{s.value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
