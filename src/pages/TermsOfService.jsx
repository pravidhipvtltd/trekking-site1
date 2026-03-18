import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Down2Earth Adventures website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
    ],
  },
  {
    title: "Booking and Payments",
    content: [
      "A deposit is typically required to confirm your booking. Full payment terms will be communicated at the time of booking.",
      "Prices are subject to change until a booking is confirmed. We reserve the right to adjust prices due to permit changes, exchange rates, or other factors beyond our control.",
      "Payment methods and deadlines will be specified in your booking confirmation.",
    ],
  },
  {
    title: "Cancellations and Refunds",
    content: [
      "Cancellation policies vary by trek and timing. Generally, cancellations made well in advance may qualify for a partial refund or credit toward a future trek.",
      "We recommend travel insurance to cover unforeseen cancellations, medical emergencies, or evacuations.",
      "Down2Earth Adventures reserves the right to cancel trips due to insufficient enrollment, weather, safety concerns, or circumstances beyond our control. In such cases, we will offer alternative dates or a full refund.",
    ],
  },
  {
    title: "Health and Safety",
    content: [
      "Trekking in the Himalayas involves inherent risks including altitude, weather, and remote locations. By booking with us, you acknowledge these risks.",
      "You are responsible for ensuring you are physically fit for your chosen trek. We may require a medical declaration for certain expeditions.",
      "You must comply with our guides&apos; instructions regarding safety, pacing, and route decisions. Failure to do so may result in removal from the trek without refund.",
    ],
  },
  {
    title: "Travel Documents and Permits",
    content: [
      "You are responsible for obtaining a valid passport, necessary visas, and any required vaccinations. Some treks require restricted area permits which we will arrange.",
      "Failure to provide required documents may result in inability to join the trek with no refund.",
    ],
  },
  {
    title: "Liability",
    content: [
      "To the fullest extent permitted by law, Down2Earth Adventures shall not be liable for indirect, incidental, special, or consequential damages arising from your participation in our services.",
      "Our liability is limited to the amount you paid for the specific service in question. We strongly recommend comprehensive travel and evacuation insurance.",
    ],
  },
  {
    title: "Conduct",
    content: [
      "We expect all participants to respect local cultures, fellow trekkers, and the environment. Disruptive or harmful behavior may result in removal from the trek without refund.",
    ],
  },
  {
    title: "Modifications",
    content: [
      "We reserve the right to modify itineraries, accommodations, or routes due to weather, trail conditions, or safety. Such changes do not entitle you to a refund.",
      "We may update these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the updated terms.",
    ],
  },
];

export default function TermsOfService() {
  const viewport = { once: true, margin: "-80px", amount: 0.2 };

  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Please read these terms carefully before booking your trek."
        showVideo={false}
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="py-20 md:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-12">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="text-gray-400 leading-relaxed mb-12">
            Welcome to Down2Earth Adventures. These Terms of Service
            (&quot;Terms&quot;) govern your use of our website and trekking
            services. By booking or using our services, you agree to these
            Terms.
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="font-display text-xl md:text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-gray-400 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 mb-4">
              Questions about these Terms? Get in touch with our team:
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
