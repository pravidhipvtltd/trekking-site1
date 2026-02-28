import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Twitter, Instagram, Facebook, ArrowRight } from 'lucide-react';

const footerLinks = {
  explore: [
    { to: '/destinations', label: 'Destinations' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
  ],
  support: [
    { to: '/contact', label: 'Contact' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/booking', label: 'Booking' },
  ],
};

const socialLinks = [
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
];

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Thamel, Kathmandu, Nepal' },
  { icon: Phone, label: 'Phone', value: '+977 1-XXXXXXX' },
  { icon: Mail, label: 'Email', value: 'hello@down2earthadventures.com' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-12">
          {/* Brand - enhanced */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="/Logo.png"
                alt="Down2Earth Adventures"
                className="h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Premium trekking experiences in the Himalayas. Discover Nepal&apos;s majestic mountains with expert local guides.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-primary-500" />
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-primary-500" />
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - enhanced with icons */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-primary-500" />
              Get in Touch
            </h4>
            <ul className="space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-500/15 border border-primary-500/20 flex items-center justify-center text-primary-400">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Down2Earth Adventures. All rights reserved.
              <br />
              Powered by{' '}
              <a
                href="https://pravidhipvtltd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-400 hover:text-blue-300 transition-colors inline-block hover:scale-105"
                style={{
                  textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.2)',
                }}
              >
                PRAVIDHI
              </a>
            </p>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
