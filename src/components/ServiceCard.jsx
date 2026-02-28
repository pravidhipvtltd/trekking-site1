import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  const { title, description, Icon, features } = service;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl bg-white/10 backdrop-blur-xl p-10 border border-white/10 hover:border-primary-500/30 transition-shadow duration-500 overflow-hidden hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_0_30px_rgba(16,185,129,0.12)]"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 group-hover:bg-primary-500/20 transition-all duration-700" />

      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 flex items-center justify-center mb-8 group-hover:from-primary-500/40 group-hover:to-primary-600/30 transition-all duration-500">
          {Icon && <Icon className="w-10 h-10 text-primary-400" strokeWidth={1.5} />}
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-5 group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          {description}
        </p>
        {features && (
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.06 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <span className="w-6 h-6 rounded-full bg-primary-500/30 flex items-center justify-center text-primary-400 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
