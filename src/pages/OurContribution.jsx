import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    alt: "Everest Base Camp trek",
    caption: "Everest Region",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85",
    alt: "Annapurna mountains",
    caption: "Annapurna Circuit",
  },
  {
    src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=85",
    alt: "Langtang Valley",
    caption: "Langtang",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=85",
    alt: "Himalayan peaks",
    caption: "High Altitude",
  },
  {
    src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=85",
    alt: "Trekking trail",
    caption: "On the Trail",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=85",
    alt: "Mountain hiking",
    caption: "Trekking",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=85",
    alt: "Sherpa village",
    caption: "Mountain Villages",
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=85",
    alt: "Camping in mountains",
    caption: "Base Camp",
  },
  {
    src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=85",
    alt: "Sunrise over Himalayas",
    caption: "Sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=85",
    alt: "Stunning mountain view",
    caption: "Summit Views",
  },
  {
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=85",
    alt: "Mountain landscape",
    caption: "Alpine Terrain",
  },
  {
    src: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=85",
    alt: "Kathmandu valley",
    caption: "Kathmandu",
  },
];

export default function OurContribution() {
  const viewport = { once: true, amount: 0, margin: "0px" };

  return (
    <>
      <Hero
        title="Our Contribution"
        subtitle="A glimpse into the contributions of  DowntoEarth adventure."
        showVideo={false}
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="text-center mb-16"
          >
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase font-medium">
              Our Contributions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Moments from the <span className="text-primary-400">Trail</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trekkers, peaks, villages, and the magic of the Himalayas—captured
              along our journeys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.03 }}
                className="group relative aspect-[4/3] min-h-[180px] rounded-2xl overflow-hidden bg-white/5"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-4 lg:p-5">
                  <p className="text-white font-medium text-sm lg:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
