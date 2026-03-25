import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Build responsive srcset for Unsplash images
function getSrcSet(url) {
  if (!url?.includes("images.unsplash.com")) return undefined;
  const base = url.split("?")[0];
  const params = new URLSearchParams(url.split("?")[1] || "");
  return [400, 800]
    .map((w) => {
      params.set("w", String(w));
      params.set("q", w <= 400 ? "75" : "80");
      return `${base}?${params} ${w}w`;
    })
    .join(", ");
}

export default function DestinationCard({ destination }) {
  const { title, description, image, duration, difficulty, slug } = destination;
  const srcSet = getSrcSet(image);
  const detailUrl = slug ? `/destinations/${slug}` : "/destinations";

  return (
    <div className="group">
      <Link to={detailUrl} className="block">
        <motion.div
          whileHover={{ scale: 1.03, y: -6 }}
          transition={{
            type: "tween",
            duration: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_40px_rgba(16,185,129,0.1)]"
        >
          <motion.img
            src={image}
            srcSet={srcSet}
            sizes="(max-width: 640px) 400px, 800px"
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-80 group-hover:from-black/85 group-hover:via-black/35 transition-all duration-500" />

          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex gap-2 mb-4">
              {duration && (
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                  {duration}
                </span>
              )}
              {difficulty && (
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary-500/80 text-white">
                  {difficulty}
                </span>
              )}
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300 mb-4">
              {description}
            </p>
            <motion.span className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Explore
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
