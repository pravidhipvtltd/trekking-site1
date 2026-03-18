import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

const filters = [
  { id: "all", label: "All" },
  { id: "nepal", label: "Nepal" },
  { id: "india", label: "India" },
  { id: "bhutan", label: "Bhutan" },
  { id: "tibbet", label: "Tibbet" },
];

export default function Trekking() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredDestinations =
    activeFilter === "all"
      ? destinations
      : destinations.filter((destination) => {
          const region = (destination.region || "nepal").toLowerCase();
          return region === activeFilter;
        });

  return (
    <>
      <Hero
        title="Trekking Destinations"
        subtitle="From iconic trails to hidden gems. Find your perfect Himalayan adventure."
        showVideo={false}
      />

      {/* Filter Section */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {filters.map((filter) => (
              <Motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full font-medium text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    : "glass text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {filter.label}
              </Motion.button>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <Motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        className="py-20 pb-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeFilter}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            >
              {filteredDestinations.map((dest) => (
                <Motion.div
                  key={dest.slug}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    },
                  }}
                >
                  <DestinationCard
                    destination={{ ...dest, title: dest.title }}
                  />
                </Motion.div>
              ))}
            </Motion.div>
          </AnimatePresence>

          {filteredDestinations.length === 0 && (
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 py-20"
            >
              No destinations match this filter.
            </Motion.p>
          )}
        </div>
      </Motion.section>
    </>
  );
}
