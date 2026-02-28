import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
      filter: 'blur(8px)',
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="py-28 md:py-36 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px', amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 text-sm tracking-[0.35em] uppercase font-medium">
            Testimonials
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
            Stories From Our <span className="text-gradient">Explorers</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-base">
            Join thousands who have discovered the transformative power of the Himalayas.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 350, damping: 32 },
                opacity: { duration: 0.5 },
                filter: { duration: 0.4 },
              }}
              className="rounded-3xl bg-white/10 backdrop-blur-xl p-12 md:p-16 border border-white/10 shadow-2xl"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: j * 0.08 }}
                  >
                    <Star className="w-8 h-8 text-amber-400 fill-amber-400" strokeWidth={1.5} />
                  </motion.span>
                ))}
              </div>
              <blockquote className="font-display text-2xl md:text-4xl font-semibold text-white leading-relaxed mb-10">
                "{testimonials[activeIndex].text}"
              </blockquote>
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-5">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary-500/40"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-500">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-6 h-6" strokeWidth={2} />
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-6 h-6" strokeWidth={2} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                whileHover={{ scale: 1.2 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-primary-500 w-10' : 'bg-white/20 w-2 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
