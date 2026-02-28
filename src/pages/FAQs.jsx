import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useContactModal } from '../context/ContactModalContext';

const faqs = [
  {
    question: 'When is the best time to trek in Nepal?',
    answer: 'The ideal trekking seasons are spring (March–May) and autumn (September–November). These months offer clear skies, stable weather, and comfortable temperatures. Winter (December–February) is possible for lower-altitude treks, while monsoon (June–August) brings rain and leeches to most regions.',
  },
  {
    question: 'Do I need to be very fit to trek?',
    answer: 'Fitness requirements depend on the trek. Everest Base Camp and Annapurna Circuit are moderate—regular walking and light cardio in the months before your trip help. We recommend building stamina with uphill walks or stair climbing. Expeditions and high passes demand a higher fitness level. Our team can advise based on your chosen route.',
  },
  {
    question: 'What is included in the trek price?',
    answer: 'Typically included: domestic flights (where applicable), permits, experienced guide, porter, all meals on trek, and tea house or camping accommodation. Excluded: international flights, travel insurance, personal expenses, tips, and visas. Specific inclusions vary by trek—check your itinerary for details.',
  },
  {
    question: 'Do I need travel insurance?',
    answer: 'Yes. Travel insurance with helicopter evacuation coverage is strongly recommended for all treks in Nepal. Mountain rescues can be costly. Ensure your policy covers high-altitude trekking (often up to 6,000m) and includes medical evacuation.',
  },
  {
    question: 'What should I pack?',
    answer: 'Essential items: sturdy hiking boots, warm layers, down jacket, rain gear, hat and gloves, headlamp, water bottle, sunscreen, and basic toiletries. We send a detailed packing list after you book. You can rent or buy gear in Kathmandu if needed.',
  },
  {
    question: 'How do I book a trek?',
    answer: 'Use our "Plan Your Trek" form or contact us directly. We\'ll discuss your preferences, dates, and fitness level. A deposit secures your spot; we\'ll send detailed itinerary and payment instructions. You can also browse our Destinations page and book directly from each trek page.',
  },
  {
    question: 'Can I trek solo or do I need a group?',
    answer: 'Most treks can be done as private (solo or with your own group) or by joining a fixed-departure group. Private treks offer flexibility; group treks are cost-effective and social. Some restricted areas require a minimum group size—we\'ll clarify when you inquire.',
  },
  {
    question: 'What about altitude sickness?',
    answer: 'We build acclimatization days into our itineraries. Our guides are trained to recognize symptoms and advise. Key rules: ascend slowly, stay hydrated, and communicate any discomfort. In serious cases, descent is the treatment—helicopter evacuation is available.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openContactModal } = useContactModal();
  const viewport = { once: true, margin: '-80px', amount: 0.2 };

  return (
    <>
      <Hero
        title="FAQs"
        subtitle="Common questions about trekking in Nepal with Down2Earth Adventures."
        showVideo={false}
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="py-20 md:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-primary-500/20 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary-400" strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-6 pt-4 text-gray-400 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            className="mt-16 text-center p-8 rounded-2xl bg-primary-500/10 border border-primary-500/20"
          >
            <p className="text-gray-400 mb-6">
              Still have questions? Our team is here to help.
            </p>
            <motion.button
              type="button"
              onClick={openContactModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold tracking-wider uppercase text-sm rounded-full transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
