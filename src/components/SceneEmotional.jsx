import { motion } from 'framer-motion';

/**
 * Scene 2: Full-screen emotional text block.
 */
export default function SceneEmotional() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0a] to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%', amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl mx-auto text-center"
      >
        <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.25] tracking-tight">
          This is not trekking.
        </p>
        <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-primary-400 leading-[1.25] tracking-tight mt-6">
          This is transformation.
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Leave behind the noise. Discover peaks that have been sacred for millennia. Return not just with memories—but renewed.
        </motion.p>
      </motion.div>
    </section>
  );
}
