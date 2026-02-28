import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useContactModal } from '../context/ContactModalContext';

const steps = [
  {
    step: 1,
    title: 'Choose Your Trek',
    description: 'Browse our Destinations and pick the trek that inspires you. Each page has full itinerary, highlights, and booking details.',
  },
  {
    step: 2,
    title: 'Get in Touch',
    description: 'Use our Plan Your Trek form or Contact page to share your preferred dates, group size, and any special requests.',
  },
  {
    step: 3,
    title: 'Confirm & Pay',
    description: 'We’ll send a detailed quote and itinerary. A deposit secures your spot; payment instructions and timeline will be provided.',
  },
  {
    step: 4,
    title: 'Prepare & Trek',
    description: 'We’ll send a packing list, pre-trip briefing, and all details. Meet your guide in Kathmandu and begin your adventure.',
  },
];

export default function Booking() {
  const { openContactModal } = useContactModal();
  const viewport = { once: true, margin: '-80px', amount: 0.2 };

  return (
    <>
      <Hero
        title="Book Your Trek"
        subtitle="Simple steps to secure your Himalayan adventure with Down2Earth Adventures."
        showVideo={false}
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase font-medium">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Your Booking <span className="text-primary-400">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From choosing your trek to stepping on the trail—we make it straightforward.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary-400">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            className="mt-16 grid md:grid-cols-2 gap-6"
          >
            <Link
              to="/destinations"
              className="group flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary-500/30 hover:bg-white/[0.04] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                <ArrowRight className="w-6 h-6 text-primary-400" strokeWidth={2} />
              </div>
              <div>
                <p className="font-semibold text-white">Browse Destinations</p>
                <p className="text-gray-500 text-sm">Explore our trekking routes</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={openContactModal}
              className="group flex items-center gap-4 p-6 rounded-2xl border border-primary-500/30 bg-primary-500/10 hover:bg-primary-500/20 hover:border-primary-500/50 transition-all text-left w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/30 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary-400" strokeWidth={2} />
              </div>
              <div>
                <p className="font-semibold text-white">Plan Your Trek</p>
                <p className="text-gray-400 text-sm">Open booking form</p>
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="font-display text-xl font-semibold text-white mb-4">
              Need Help?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team can help you choose the right trek, answer questions about permits and logistics, or tailor an itinerary. Reach out anytime.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@down2earthadventures.com"
                className="text-primary-400 font-medium hover:text-primary-300 transition-colors"
              >
                hello@down2earthadventures.com
              </a>
              <span className="text-gray-600">|</span>
              <Link
                to="/contact"
                className="text-primary-400 font-medium hover:text-primary-300 transition-colors"
              >
                Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
