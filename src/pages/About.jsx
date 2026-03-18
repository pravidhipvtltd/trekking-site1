import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';

const values = [
  { title: 'Authenticity', description: 'The real Nepal—genuine connections, not tourist shows.' },
  { title: 'Sustainability', description: 'Responsible tourism that supports mountain communities.' },
  { title: 'Excellence', description: 'Every detail matters. We never compromise.' },
];

const team = [
  { name: 'Tenzin Sherpa', role: 'Founder & Lead Guide', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { name: 'Maya Gurung', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
  { name: 'Ram Tamang', role: 'Senior Trekking Guide', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
  { name: 'Sita Lama', role: 'Customer Experience', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
];

export default function About() {
  return (
    <>
      <Hero
        title="About DowntoEarth Adventures"
        subtitle="Born in the shadow of the peaks. We share the Himalayas with the world."
        showVideo={false}
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        className="py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                DowntoEarth Adventures began when our founder returned to his ancestral village. He saw an opportunity: to create trekking experiences that honored both the majesty of these mountains and the communities who call them home.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Today we're a team of local Sherpas, Tamangs, and Gurungs. We share our culture, our stories, and our home with adventurers from around the world.
              </p>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors"
              >
                Explore our treks
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=85"
                alt=""
                loading="lazy"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <ParallaxSection image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85">
        <span className="text-primary-400/90 text-sm tracking-[0.4em] uppercase font-medium">The Mission</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
          Connect adventurers with the soul of the mountains
        </h2>
      </ParallaxSection>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        className="py-24 md:py-32 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Our Values</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">What we stand for</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white/5 backdrop-blur-xl p-8 border border-white/10"
              >
                <h3 className="font-display text-xl font-semibold text-white mb-4">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        className="py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="rounded-2xl overflow-hidden mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
