import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import FloatingInput from './FloatingInput';
import { destinations } from '../data/destinations';

/**
 * Contact form modal. Opens when "Plan Your Trek" is clicked from anywhere.
 */
export default function ContactFormModal({ isOpen, onClose }) {
  const lenis = useLenis();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    preferredStartDate: '',
    preferredDuration: '',
    pickupPoint: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon. (This is a demo - no data is sent)");
    setFormData({
      name: '',
      email: '',
      destination: '',
      preferredStartDate: '',
      preferredDuration: '',
      pickupPoint: '',
      message: '',
    });
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          data-lenis-prevent
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="relative w-full max-w-lg max-h-[90vh] flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-2xl my-auto overflow-hidden"
          >
            <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f0f0f] rounded-t-2xl">
              <h3 className="font-display text-xl font-normal text-white">
                Plan Your Trek
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5 overflow-y-auto min-h-0 flex-1 overscroll-contain"
              data-lenis-prevent
            >
              <p className="text-sm text-gray-400 -mt-1 mb-2">
                Get in touch with our team. We&apos;d love to help you create your dream Himalayan adventure.
              </p>

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
                  style={{ color: formData.destination ? '#fff' : undefined }}
                >
                  <option value="" className="bg-[#0a0a0a] text-gray-500">
                    Choose your trek
                  </option>
                  {destinations.map((d) => (
                    <option key={d.slug} value={d.title} className="bg-[#0a0a0a] text-white">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                rows={4}
              />
              <div className="flex gap-3 pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold tracking-wider uppercase text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  Send Message
                </motion.button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-4 border border-white/20 text-gray-400 hover:text-white rounded-xl font-medium text-sm uppercase tracking-wider transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
