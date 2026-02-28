import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footprints, Map, Mountain, Plane } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Guided Trekking',
    description: 'Expert local guides lead you through Nepal\'s most spectacular trails. Small groups, personalized pace, and unforgettable experiences.',
    Icon: Footprints,
    features: [
      'Certified Sherpa & local guides',
      'Small group sizes (max 10)',
      'All permits and logistics handled',
      'Tea house or camping options',
    ],
  },
  {
    title: 'Custom Tours',
    description: 'Design your perfect adventure. Mix trekking with culture, wildlife, or wellness. We tailor every detail to your vision.',
    Icon: Map,
    features: [
      'Fully customizable itineraries',
      'Flexible dates and duration',
      'Combine multiple experiences',
      'Private group options',
    ],
  },
  {
    title: 'Expeditions',
    description: 'Planning a summit attempt or high-altitude trek? Our expedition team handles permits, equipment, and logistics for serious adventures.',
    Icon: Mountain,
    features: [
      '8000m peak expeditions',
      'Climbing permit assistance',
      'Expedition-grade equipment',
      'Medical support coordination',
    ],
  },
  {
    title: 'Helicopter Tours',
    description: 'Experience the Himalayas from above. Scenic flights to Everest, mountain helicopter tours, and aerial adventures.',
    Icon: Plane,
    features: [
      'Everest scenic flight',
      'Helicopter tours',
      'Emergency evacuation support',
      'Photography-focused flights',
    ],
  },
];

const sectionViewport = { once: true, margin: '-80px', amount: 0.2 };

const benefits = [
  { stat: '5000+', label: 'Trekkers Guided' },
  { stat: '98%', label: 'Satisfaction Rate' },
  { stat: '20+', label: 'Years Experience' },
  { stat: '50+', label: 'Mountain Routes' },
];

export default function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="From classic treks to custom expeditions. A full range of premium Himalayan adventures."
        showVideo={false}
      />

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={sectionViewport}
        className="py-32 md:py-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase font-medium">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Premium <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive services for every type of Himalayan adventurer.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.15 },
              },
            }}
            className="grid md:grid-cols-2 gap-8 lg:gap-10"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                  },
                }}
              >
                <ServiceCard service={service} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Parallax */}
      <ParallaxSection image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80">
        <span className="text-primary-400/90 text-sm tracking-[0.4em] uppercase font-medium">
          The Promise
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
          Every journey begins with<br />
          <span className="text-gradient">a single step</span>
        </h2>
      </ParallaxSection>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={sectionViewport}
        className="py-32 md:py-40 bg-[#0a0a0a]/95"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.label}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-6xl font-bold text-gradient mb-3">
                  {benefit.stat}
                </p>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{benefit.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={sectionViewport}
        className="py-32 md:py-40"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.7 }}
            className="rounded-3xl glass p-14 md:p-20 border border-primary-500/10"
          >
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase font-medium">
              Let's Talk
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Ready to Plan Your <span className="text-gradient">Adventure</span>?
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
              Our team will create a customized itinerary tailored to your dreams and fitness level.
            </p>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold tracking-wider uppercase text-sm rounded-full hover:from-primary-500 hover:to-primary-400 transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.25)]"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
