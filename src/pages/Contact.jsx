import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Hero from "../components/Hero";
import FloatingInput from "../components/FloatingInput";
import { destinations } from "../data/destinations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    preferredStartDate: "",
    preferredDuration: "",
    pickupPoint: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sectionViewport = { once: true, margin: "-80px", amount: 0.2 };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your message! We'll get back to you soon. (This is a demo - no data is sent)",
    );
    setFormData({
      name: "",
      email: "",
      destination: "",
      preferredStartDate: "",
      preferredDuration: "",
      pickupPoint: "",
      message: "",
    });
  };

  return (
    <>
      <Hero
        title="Let's Plan your Trip"
        subtitle="Get in touch with our team. We'd love to help you create your dream Himalayan adventure."
        showVideo={false}
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={sectionViewport}
        className="py-28 md:py-40 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strong CTA Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Your Journey <span className="text-gradient">Starts Here</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Share your vision. Our experts will craft a bespoke trekking
              experience just for you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form with Floating Labels */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <FloatingInput
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  label="Your Name"
                  required
                />
                <FloatingInput
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email Address"
                  required
                />
                <div className="relative">
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 pt-6 pb-3 rounded-xl glass border border-white/10 transition-all duration-300 bg-white/5 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 outline-none appearance-none cursor-pointer"
                    style={{ color: formData.destination ? "#fff" : undefined }}
                  >
                    <option value="" className="bg-[#0a0a0a] text-gray-500">
                      Choose your trek
                    </option>
                    {destinations.map((d) => (
                      <option
                        key={d.slug}
                        value={d.title}
                        className="bg-[#0a0a0a] text-white"
                      >
                        {d.title} ({d.duration})
                      </option>
                    ))}
                  </select>
                  <label className="absolute left-4 top-2 text-xs text-primary-400 pointer-events-none transition-all duration-300">
                    Interested Trek / Destination
                  </label>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <FloatingInput
                  name="preferredStartDate"
                  type="date"
                  value={formData.preferredStartDate}
                  onChange={handleChange}
                  label="Preferred Starting Date"
                />
                <FloatingInput
                  name="preferredDuration"
                  value={formData.preferredDuration}
                  onChange={handleChange}
                  label="Preferred Duration (e.g. 14 days, 2 weeks)"
                />
                <FloatingInput
                  name="pickupPoint"
                  value={formData.pickupPoint}
                  onChange={handleChange}
                  label="Pick-up Point (if any) - e.g. Hotel name, airport"
                />
                <FloatingInput
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  label="Tell us about your dream trek..."
                  required
                  rows={5}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full px-8 py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold tracking-wider uppercase text-sm rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={sectionViewport}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1,
              }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 rounded-xl glass hover:border-primary-500/20 transition-all duration-300 group">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-500/15 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <MapPin className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-gray-500 text-sm">
                        Thamel, Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl glass hover:border-primary-500/20 transition-all duration-300 group">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-500/15 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <Phone className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-500 text-sm">+977 1-4XXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-xl glass hover:border-primary-500/20 transition-all duration-300 group">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-500/15 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <Mail className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-500 text-sm">
                        hello@down2earthadventures.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://wa.me/977XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </motion.a>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4561918648964!2d85.3109!3d27.7044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a3e79550f%3A0x61e0a76d3d8b15ad!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1709123456789"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Down2Earth Adventures - Kathmandu, Nepal"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
