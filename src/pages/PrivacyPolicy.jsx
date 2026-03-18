import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly when booking a trek, contacting us, or signing up for our newsletter. This may include your name, email address, phone number, passport details, medical information relevant to trekking, dietary preferences, and payment information.",
      "We automatically collect certain information when you visit our website, including IP address, browser type, device information, and pages visited. This helps us improve our services and user experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To process bookings and manage your trekking experience",
      "To communicate with you about your trip, itinerary updates, and travel information",
      "To send newsletters and updates about our services (with your consent)",
      "To improve our website, services, and customer experience",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell your personal information. We may share information with trusted partners necessary for your trek (e.g., permits, accommodations, guides) or with authorities as required by law in Nepal.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and protect your account details.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You may request access to, correction of, or deletion of your personal data. You may unsubscribe from marketing communications at any time. For requests, contact us at hello@down2earthadventures.com.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses cookies and similar technologies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, though some features may not function properly.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the effective date below.",
    ],
  },
];

export default function PrivacyPolicy() {
  const viewport = { once: true, margin: "-80px", amount: 0.2 };

  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
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
            Down2Earth Adventures (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our website or services.
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
              If you have questions about this Privacy Policy, please contact
              us:
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
