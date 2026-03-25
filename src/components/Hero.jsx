import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "../assets/heroImage.jpg";

const HERO_IMAGE = HeroImage;

/**
 * Hero: cinematic for Home (no props), or generic centered hero (title, subtitle).
 */
export default function Hero({ title, subtitle }) {
  const isHome = title == null && subtitle == null;
  const displayTitle = title ?? "Not all journeys are destinations.";
  const displaySubtitle = subtitle ?? "Some change who you are.";

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Layer */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={isHome ? { y: contentY, opacity: contentOpacity } : {}}
        className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.2] tracking-tight"
        >
          {displayTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="mt-8 text-xl md:text-2xl text-gray-300 font-light tracking-wide"
        >
          {displaySubtitle}
        </motion.p>

        {isHome && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-10 text-base md:text-lg text-gray-400 font-light tracking-widest uppercase"
          >
            Himalayan treks guide by local experts · Est. Nepal
          </motion.p>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      {isHome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            }}
            className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
