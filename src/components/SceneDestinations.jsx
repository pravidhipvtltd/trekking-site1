import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';

const homeDestinations = destinations.slice(0, 5);

/**
 * Scene 4: Full-bleed vertical destination slides.
 * Each destination = full viewport, full background image, name + tagline.
 * Links to destination detail pages.
 */
export default function SceneDestinations() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        className="pt-20 pb-8 px-6 text-center"
      >
        <span className="text-primary-500 text-xs tracking-[0.3em] uppercase font-medium">Choose Your Trail</span>
        <h2 className="font-display text-3xl md:text-4xl font-normal text-white mt-3">
          Iconic treks. Day-by-day itineraries.
        </h2>
      </motion.div>
      {homeDestinations.map((dest, i) => (
        <Link
          key={dest.slug}
          to={`/destinations/${dest.slug}`}
          className="block relative min-h-screen flex items-end justify-center overflow-hidden group"
        >
          <div className="absolute inset-0">
            <img
              src={dest.image}
              alt={dest.title}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/30 transition-all duration-700" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%', amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-5xl px-6 pb-24 md:pb-32"
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-500/80 text-white text-xs font-medium">
                {dest.duration}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                {dest.difficulty}
              </span>
            </div>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white group-hover:text-primary-300 transition-colors duration-300">
              {dest.title}
            </h3>
            <p className="mt-3 text-lg md:text-xl text-gray-300 font-light">
              {dest.tagline}
            </p>
            <p className="mt-2 text-gray-400 text-sm max-w-xl line-clamp-2">
              {dest.description}
            </p>
            <span className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wider text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
              View full itinerary & route
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.div>
        </Link>
      ))}
      <div className="py-16 text-center">
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm uppercase tracking-wider hover:text-primary-300 transition-colors"
        >
          View all destinations
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
