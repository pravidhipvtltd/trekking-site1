import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";

const activities = [
  {
    title: "Biking",
    description:
      "Ride through rugged mountain paths, forest tracks, and remote villages with thrilling descents and unforgettable views.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85",
  },
  {
    title: "Mountain Bike Riding",
    description:
      "Ride through rugged mountain paths, forest tracks, and remote villages with thrilling descents and unforgettable views.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85",
  },
  {
    title: "Jungle Safari",
    description:
      "Experience rich wildlife, lush landscapes, and peaceful nature escapes with guided safari adventures in pristine terrain.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85",
  },
  {
    title: "Charity Trek",
    description:
      "Experience rich wildlife, lush landscapes, and peaceful nature escapes with guided safari adventures in pristine terrain.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85",
  },
  {
    title: "Expeditions",
    description:
      "Experience rich wildlife, lush landscapes, and peaceful nature escapes with guided safari adventures in pristine terrain.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85",
  },
  {
    title: "Tour",
    description:
      "Experience rich wildlife, lush landscapes, and peaceful nature escapes with guided safari adventures in pristine terrain.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85",
  },
  {
    title: "Treks",
    description:
      "Experience rich wildlife, lush landscapes, and peaceful nature escapes with guided safari adventures in pristine terrain.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85",
  },
];

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const Activities = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = hash.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <Hero
        title="Our Activities"
        subtitle="From high-altitude adventures to immersive nature experiences, discover premium outdoor activities crafted for every explorer."
        showVideo={false}
      />

      <section className="bg-charcoal-950 px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold-500">
              Adventure Experiences
            </p>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Choose Your Next Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Handpicked outdoor experiences designed with comfort, safety, and
              unforgettable moments in mind.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {activities.map((activity) => (
              <div
                id={toSlug(activity.title)}
                key={activity.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-400 hover:-translate-y-2 hover:border-primary-500/40 scroll-mt-32"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%)]" />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold-500 backdrop-blur-md">
                      Adventure
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-white md:text-3xl">
                      {activity.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="mb-6 leading-7 text-white/70">
                    {activity.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-500">
                    <span>Explore Activity</span>
                    <span className="transition duration-400 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
