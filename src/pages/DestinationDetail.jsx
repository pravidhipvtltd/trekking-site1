import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { getDestinationBySlug } from "../data/destinations";
import BookingModal from "../components/BookingModal";

export default function DestinationDetail() {
  const { slug } = useParams();
  const dest = getDestinationBySlug(slug);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!dest) return <Navigate to="/destinations" replace />;

  const viewport = { once: true, margin: "-80px", amount: 0.2 };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={dest.image}
            alt={dest.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-primary-400 text-sm uppercase tracking-wider hover:text-primary-300 mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Destinations
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-primary-500/80 text-white text-xs font-medium">
                {dest.duration}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium">
                {dest.difficulty}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium">
                Max {dest.maxElevation}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight">
              {dest.title}
            </h1>
            <p className="mt-4 text-xl text-gray-300 font-light max-w-2xl">
              {dest.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="mb-24"
        >
          <h2 className="font-display text-2xl md:text-3xl font-normal text-white mb-6">
            Overview
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-8">
            {dest.description}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {dest.longDescription}
          </p>
        </motion.section>

        {/* Quick Info */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="mb-24"
        >
          <h2 className="font-display text-2xl md:text-3xl font-normal text-white mb-8">
            Trip Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 border border-white/10">
              <p className="text-primary-400 text-sm uppercase tracking-wider mb-1">
                Start Point
              </p>
              <p className="text-white font-medium">{dest.startPoint}</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 border border-white/10">
              <p className="text-primary-400 text-sm uppercase tracking-wider mb-1">
                End Point
              </p>
              <p className="text-white font-medium">{dest.endPoint}</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 border border-white/10">
              <p className="text-primary-400 text-sm uppercase tracking-wider mb-1">
                Best Season
              </p>
              <p className="text-white font-medium">{dest.bestSeason}</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 border border-white/10">
              <p className="text-primary-400 text-sm uppercase tracking-wider mb-1">
                Max Elevation
              </p>
              <p className="text-white font-medium">{dest.maxElevation}</p>
            </div>
          </div>
        </motion.section>

        {/* Day-by-Day Itinerary */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="mb-24"
        >
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/15 border border-primary-500/30 text-primary-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              {dest.itinerary.length} Days · Your Complete Route
            </span>
            <span className="block text-primary-500 text-sm font-medium tracking-[0.25em] uppercase mt-2">
              Your Journey, Step by Step
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-3 mb-4">
              Day-by-Day Itinerary
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Where to start, where to stay each night, and what to expect. Your
              complete trekking roadmap.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical journey line - runs through center of day badges */}
            <div
              className="absolute left-6 md:left-7 top-8 bottom-8 w-0.5 rounded-full bg-gradient-to-b from-primary-500/80 via-primary-500/40 to-transparent"
              aria-hidden
            />

            <div className="space-y-6">
              {dest.itinerary.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px", amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex gap-6"
                >
                  {/* Timeline node */}
                  <div className="relative shrink-0 flex flex-col items-center pt-1">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary-500/40 to-primary-600/20 border-2 border-primary-500/50 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.2)] z-10"
                    >
                      <span className="font-display text-lg md:text-xl font-bold text-primary-300">
                        {day.day}
                      </span>
                    </motion.div>
                    <span className="mt-2 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] md:text-xs font-medium text-primary-400/90 uppercase tracking-wider">
                      {day.activity}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 min-w-0 pt-0 pb-2">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl p-6 md:p-8 hover:border-primary-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] transition-all duration-300 group">
                      <h3 className="font-display text-xl md:text-2xl font-normal text-white group-hover:text-primary-50 transition-colors">
                        {day.title}
                      </h3>
                      <p className="text-gray-400 mt-4 leading-relaxed text-[15px] md:text-base">
                        {day.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="mb-24"
        >
          <h2 className="font-display text-2xl md:text-3xl font-normal text-white mb-8">
            Highlights
          </h2>
          <ul className="flex flex-wrap gap-3">
            {dest.highlights.map((h) => (
              <li
                key={h}
                className="px-5 py-2.5 rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30"
              >
                {h}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Included / Not Included */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="mb-24 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="font-display text-xl font-normal text-primary-400 mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" strokeWidth={2} />
              Included
            </h3>
            <ul className="space-y-2 text-gray-400">
              {dest.included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check
                    className="w-4 h-4 text-primary-400 shrink-0"
                    strokeWidth={2.5}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-normal text-gray-500 mb-4 flex items-center gap-2">
              <Minus className="w-5 h-5" strokeWidth={2} />
              Not Included
            </h3>
            <ul className="space-y-2 text-gray-500">
              {dest.notIncluded.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Minus className="w-4 h-4 shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CTA - Book opens popup form with trek pre-filled */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="rounded-3xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 p-10 md:p-16 border border-primary-500/20 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-normal text-white mb-4">
            Ready to trek {dest.title}?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Click below to book directly. {dest.title} is already selected—just
            add your details, dates, and pick-up point.
          </p>
          <motion.button
            type="button"
            onClick={() => setBookingOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-12 py-5 bg-primary-500 hover:bg-primary-400 text-white font-semibold tracking-wider uppercase text-sm rounded-full transition-all shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]"
          >
            Book {dest.title}
          </motion.button>
        </motion.section>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        trek={dest}
      />
    </>
  );
}
