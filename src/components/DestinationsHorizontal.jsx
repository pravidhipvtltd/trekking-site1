import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { easeSmooth } from '../utils/motion';

const destinations = [
  {
    title: 'Everest Base Camp',
    description: 'The ultimate Himalayan trek',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    duration: '14 days',
    difficulty: 'Moderate',
  },
  {
    title: 'Annapurna Circuit',
    description: 'World-famous diverse landscapes',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    duration: '12-21 days',
    difficulty: 'Moderate',
  },
  {
    title: 'Langtang Valley',
    description: 'The Valley of Glaciers',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
    duration: '10 days',
    difficulty: 'Easy-Moderate',
  },
  {
    title: 'Manaslu Circuit',
    description: 'Remote 8th highest peak',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    duration: '14-18 days',
    difficulty: 'Challenging',
  },
  {
    title: 'Upper Mustang',
    description: 'Ancient kingdom of Lo',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
    duration: '14 days',
    difficulty: 'Moderate',
  },
  {
    title: 'Poon Hill',
    description: 'Spectacular sunrise trek',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    duration: '5 days',
    difficulty: 'Easy',
  },
];

export default function DestinationsHorizontal() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-32 md:py-44 overflow-hidden">
      <div className="mb-16 md:mb-20 px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: easeSmooth }}
          className="text-primary-500 text-sm tracking-[0.35em] uppercase font-medium"
        >
          Destinations
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.08 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-tight"
        >
          Discover Our <span className="text-gradient">Trails</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: easeSmooth, delay: 0.18 }}
          className="text-gray-500 text-lg mt-4 max-w-xl"
        >
          From iconic routes to hidden gems. Each destination is a chapter in your journey.
        </motion.p>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-6 md:gap-10 overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
          {destinations.map((dest, i) => (
            <DestinationSlide key={dest.title} destination={dest} index={i} />
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-12 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-12 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easeSmooth }}
          className="mt-12 text-center"
        >
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors group"
          >
            View All Destinations
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function DestinationSlide({ destination, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 72 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px', amount: 0.2 }}
      transition={{ duration: 1, ease: easeSmooth, delay: index * 0.08 }}
      className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[420px] snap-center"
    >
      <Link to="/contact" className="block group">
        <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl">
          <motion.img
            src={destination.image}
            alt={destination.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.4, ease: easeSmooth }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-95 group-hover:from-black/95 transition-all duration-700" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex gap-2 mb-4">
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 text-white">
                {destination.duration}
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary-500/80 text-white">
                {destination.difficulty}
              </span>
            </div>
            <motion.h3
              className="font-display text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            >
              {destination.title}
            </motion.h3>
            <p className="text-gray-400 text-base group-hover:text-gray-300 transition-colors">
              {destination.description}
            </p>
            <motion.span
              className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Explore
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
