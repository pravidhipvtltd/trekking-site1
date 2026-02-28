import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import FloatingInput from './FloatingInput';

/**
 * Popup booking form. When trek is provided, it's auto-filled and shown (read-only).
 */
export default function BookingModal({ isOpen, onClose, trek = null }) {
  const lenis = useLenis();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    trek: trek?.title ?? '',
    preferredStartDate: '',
    preferredDuration: trek?.duration ?? '',
    pickupPoint: '',
    message: '',
  });

  useEffect(() => {
    if (trek) {
      setFormData((prev) => ({
        ...prev,
        trek: trek.title,
        preferredDuration: prev.preferredDuration || trek.duration,
      }));
    }
  }, [trek]);

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
    alert('Thank you for your booking request! We\'ll get back to you soon. (This is a demo - no data is sent)');
    setFormData({ name: '', email: '', trek: trek?.title ?? '', preferredStartDate: '', preferredDuration: trek?.duration ?? '', pickupPoint: '', message: '' });
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
                Book {trek?.title ?? 'Your Trek'}
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

            <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto min-h-0 flex-1 overscroll-contain" data-lenis-prevent>
              {/* Auto-filled trek (read-only when from description page) */}
              {trek && (
                <div className="rounded-xl glass border border-primary-500/30 px-4 py-4">
                  <p className="text-xs text-primary-400 uppercase tracking-wider mb-1">Selected Trek</p>
                  <p className="text-white font-medium">{trek.title}</p>
                  <p className="text-sm text-gray-400 mt-1">{trek.duration} · {trek.difficulty}</p>
                  <input type="hidden" name="trek" value={trek.title} readOnly />
                </div>
              )}

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
                label="Preferred Duration"
              />
              <FloatingInput
                name="pickupPoint"
                value={formData.pickupPoint}
                onChange={handleChange}
                label="Pick-up Point (if any) - e.g. Hotel, airport"
              />
              <FloatingInput
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="Additional notes or special requests..."
                rows={4}
              />
              <div className="flex gap-3 pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold tracking-wider uppercase text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  Submit Booking Request
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
