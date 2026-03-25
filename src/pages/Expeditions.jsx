import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  viewport,
} from "../utils/motion";
import Hero from "../components/Hero";

const FILTERS = [
  { key: "6000", label: "6000m+" },
  { key: "8000", label: "8000m+" },
];

const EXPEDITIONS = [
  {
    id: 1,
    name: "Island Peak Expedition",
    region: "Khumbu, Nepal",
    height: 6189,
    duration: "16 Days",
    grade: "Challenging",
    bestSeason: "Spring / Autumn",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85&auto=format&fit=crop",
    description:
      "A high-altitude alpine objective ideal for climbers stepping into technical Himalayan expeditions.",
  },
  {
    id: 2,
    name: "Lobuche East Expedition",
    region: "Khumbu, Nepal",
    height: 6119,
    duration: "17 Days",
    grade: "Challenging",
    bestSeason: "Spring / Autumn",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&q=85&auto=format&fit=crop",
    description:
      "A classic trekking peak with glacier travel, rope sections, and panoramic Everest-region views.",
  },
  {
    id: 3,
    name: "Ama Dablam Expedition",
    region: "Khumbu, Nepal",
    height: 6812,
    duration: "30 Days",
    grade: "Technical",
    bestSeason: "Autumn",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=85&auto=format&fit=crop",
    description:
      "One of the world's most iconic climbs, combining technical sections and premium Himalayan exposure.",
  },
  {
    id: 4,
    name: "Manaslu Expedition",
    region: "Gorkha, Nepal",
    height: 8163,
    duration: "40 Days",
    grade: "Extreme",
    bestSeason: "Spring / Autumn",
    image:
      "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=1600&q=85&auto=format&fit=crop",
    description:
      "An 8000er objective known for altitude, endurance, and a rewarding summit panorama.",
  },
  {
    id: 5,
    name: "Cho Oyu Expedition",
    region: "Khumbu / Tibet Border",
    height: 8188,
    duration: "42 Days",
    grade: "Extreme",
    bestSeason: "Autumn",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=85&auto=format&fit=crop",
    description:
      "A major 8000m expedition route focused on strong acclimatization and glacier expedition systems.",
  },
];

export default function Expeditions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBand = searchParams.get("band") === "8000" ? "8000" : "6000";
  const [activeFilter, setActiveFilter] = useState(initialBand);

  useEffect(() => {
    const band = searchParams.get("band") === "8000" ? "8000" : "6000";
    setActiveFilter(band);
  }, [searchParams]);

  const handleFilterChange = (band) => {
    setActiveFilter(band);
    setSearchParams({ band });
  };

  const filteredExpeditions = useMemo(() => {
    const in6000Band = (h) => h >= 6000 && h < 8000;
    const in8000Band = (h) => h >= 8000;

    const result =
      activeFilter === "8000"
        ? EXPEDITIONS.filter((item) => in8000Band(item.height))
        : EXPEDITIONS.filter((item) => in6000Band(item.height));

    return result.sort((a, b) => b.height - a.height);
  }, [activeFilter]);

  return (
    <>
      <Hero
        title="Our Expeditions"
        subtitle="Premium high-altitude climbs designed for serious mountaineers. Filter by elevation and choose your next summit objective."
        showVideo={false}
      />

      <section
        id="expeditions-section"
        className="relative overflow-hidden bg-charcoal-950 px-6 py-16 md:px-10 lg:px-20"
      >
        <motion.div
          className="relative mx-auto max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn} className="mb-10 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-gold-500">
              Himalayan Objectives
            </p>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Expeditions by Altitude Band
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Choose your category to quickly browse 6000m-class and 8000m-class
              climbs.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mb-10 flex flex-wrap items-center justify-center gap-3"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => handleFilterChange(filter.key)}
                  className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 md:text-base ${
                    isActive
                      ? "border-primary-400 bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-[0_0_28px_rgba(16,185,129,0.35)]"
                      : "border-white/15 bg-white/5 text-gray-300 hover:border-primary-400/40 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}

            <span className="ml-1 text-sm text-gray-400">
              {filteredExpeditions.length} expedition
              {filteredExpeditions.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          <motion.div
            key={activeFilter}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {filteredExpeditions.map((expedition) => (
              <motion.article
                key={expedition.id}
                variants={staggerItem}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-400 hover:-translate-y-2 hover:border-primary-500/40"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={expedition.image}
                    alt={expedition.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%)]" />

                  <div className="absolute right-4 top-4">
                    <span className="rounded-full border border-gold-400/40 bg-black/35 px-3 py-1 text-xs font-semibold text-gold-400 backdrop-blur-md">
                      {expedition.height}m
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-primary-300/90">
                      {expedition.region}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">
                      {expedition.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-sm leading-7 text-white/70">
                    {expedition.description}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                      <p className="text-[10px] uppercase tracking-wide text-gray-400">
                        Duration
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {expedition.duration}
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                      <p className="text-[10px] uppercase tracking-wide text-gray-400">
                        Grade
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {expedition.grade}
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                      <p className="text-[10px] uppercase tracking-wide text-gray-400">
                        Season
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {expedition.bestSeason}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="hero-cta-primary mt-6 w-full rounded-xl py-2.5 text-sm font-semibold"
                  >
                    View Itinerary
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
