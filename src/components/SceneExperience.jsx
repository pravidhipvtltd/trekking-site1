import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, Map, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: 'Safety First',
    description: 'Every step backed by expertise and care. Certified guides, proven routes, and 24/7 support—because the mountains demand nothing less.',
    Icon: Shield,
  },
  {
    title: 'Local Guides',
    description: 'Sherpa wisdom. Himalayan soul. Our guides were born in these mountains—they share their home, culture, and stories with every trekker.',
    Icon: Users,
  },
  {
    title: 'Custom Journeys',
    description: 'Your pace. Your path. Your transformation. Mix trekking with culture, wildlife, or wellness—we tailor every itinerary to you.',
    Icon: Map,
  },
];

/**
 * Scene 5: Experience pillars - Safety, Local guides, Custom journeys.
 */
export default function SceneExperience() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080c08] to-black pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 text-xs tracking-[0.3em] uppercase font-medium">Why Down2Earth Adventures</span>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-white mt-4">
            Built for adventurers who expect more
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%', amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16 md:space-y-20"
        >
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%', amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex gap-8 items-start border-t border-white/10 pt-10"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
                <item.Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-normal text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-400 font-light max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary-400 text-sm tracking-[0.2em] uppercase font-medium hover:text-primary-300 transition-colors"
          >
            Our story
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
