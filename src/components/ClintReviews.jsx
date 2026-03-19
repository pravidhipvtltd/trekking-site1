import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { easeSmooth } from "../utils/motion";

const defaultReviews = [
  {
    name: "Aarav Shrestha",
    location: "Kathmandu, Nepal",
    trek: "Annapurna Circuit",
    rating: 5,
    review:
      "Everything felt intentional, from acclimatization planning to daily briefings. Our guide made the journey safe, personal, and unforgettable.",
  },
  {
    name: "Emily Carter",
    location: "Melbourne, Australia",
    trek: "Everest Base Camp",
    rating: 5,
    review:
      "The team blended adventure with genuine care. The route pacing, food stops, and support during altitude changes were all handled beautifully.",
  },
  {
    name: "Rohan Malhotra",
    location: "Delhi, India",
    trek: "Langtang Valley",
    rating: 4,
    review:
      "Professional coordination from booking to return. It felt premium yet grounded, and the mountain experience exceeded every expectation.",
  },
];

function TripadvisorLogo({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="22" cy="28" r="9" stroke="currentColor" strokeWidth="4" />
      <circle cx="42" cy="28" r="9" stroke="currentColor" strokeWidth="4" />
      <circle cx="22" cy="28" r="3.5" fill="currentColor" />
      <circle cx="42" cy="28" r="3.5" fill="currentColor" />
      <path
        d="M14 40C18.5 47 25 51 32 51C39 51 45.5 47 50 40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M29 18H35"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ClintReviews({ reviews = defaultReviews }) {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-b from-charcoal-950 via-black to-charcoal-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_45%)] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-72 h-72 rounded-full bg-primary-400/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px", amount: 0.2 }}
          transition={{ duration: 0.85, ease: easeSmooth }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <span className="text-primary-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-medium">
            Client Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-5 leading-tight">
            Trusted by Trekkers{" "}
            <span className="text-primary-400">Worldwide</span>
          </h2>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Real stories from travelers who explored the Himalayas with our
            guides.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
              <div className="flex items-center gap-1.5 text-gold-400">
                <Star className="w-4 h-4 fill-gold-400" strokeWidth={1.8} />
                <span className="text-sm font-medium">{averageRating}/5</span>
              </div>
              <span className="text-white/30">•</span>
              <span className="text-sm text-gray-300">
                Based on guest feedback
              </span>
            </div>

            <a
              href="https://www.tripadvisor.com/Attraction_Review-g293890-d13121103-Reviews-Down_To_Earth_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 text-primary-300 px-5 py-2.5 hover:bg-primary-500/20 hover:border-primary-400/50 transition-all duration-300"
              aria-label="Open Tripadvisor reviews"
            >
              <TripadvisorLogo className="w-[18px] h-[18px]" />
              <span className="text-sm font-medium tracking-wide">
                Tripadvisor Reviews
              </span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((item, index) => (
            <motion.article
              key={`${item.name}-${item.trek}`}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px", amount: 0.2 }}
              transition={{
                duration: 0.75,
                ease: easeSmooth,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 sm:p-8 shadow-[0_20px_45px_-22px_rgba(0,0,0,0.55)] hover:border-primary-400/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-primary-500/10 blur-2xl translate-x-1/3 -translate-y-1/3 group-hover:bg-primary-500/20 transition-colors duration-500" />

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-[18px] h-[18px] ${
                        star <= item.rating
                          ? "text-gold-400 fill-gold-400"
                          : "text-white/25"
                      }`}
                      strokeWidth={1.8}
                    />
                  ))}
                </div>
                <Quote
                  className="w-5 h-5 text-primary-400/70"
                  strokeWidth={1.9}
                />
              </div>

              <p className="text-gray-200 leading-relaxed text-[15px] sm:text-base min-h-[130px]">
                “{item.review}”
              </p>

              <div className="mt-7 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-primary-500/20 border border-primary-400/40 flex items-center justify-center text-primary-300 font-semibold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold leading-tight">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-primary-400/90 text-right">
                  {item.trek}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
