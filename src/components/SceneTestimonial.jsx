import { motion } from "framer-motion";

const quote =
  "I came for the mountains. I left with something I didn't know I was looking for.";
const author = "Sarah M.";
const detail = "Everest Base Camp, March 2024";

/**
 * Scene 6: Testimonial with attribution.
 */
export default function SceneTestimonial() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/80 to-charcoal-900 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />

      <motion.blockquote
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%", amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <span className="block text-6xl md:text-8xl text-primary-500/30 font-serif leading-none mb-4">
          "
        </span>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.4]">
          {quote}
        </p>
        <footer className="mt-10">
          <p className="text-primary-400 font-medium">{author}</p>
          <p className="text-sm text-gray-500 mt-1">{detail}</p>
        </footer>
      </motion.blockquote>
    </section>
  );
}
