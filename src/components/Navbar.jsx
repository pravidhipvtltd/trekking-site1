import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import { destinations } from "../data/destinations";

const baseNavLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/our_contribution", label: "Our Contribution" },
  { path: "/contact", label: "Contact" },
];

const activityLinks = [
  { path: "/activities", label: "All Activities" },
  { path: "/activities#biking", label: "Biking" },
  { path: "/activities#mountain-bike-riding", label: "Mountain Bike Riding" },
  { path: "/activities#jungle-safari", label: "Jungle Safari" },
  { path: "/activities#charity-trek", label: "Charity Trek" },
];

const expeditionLinks = [
  { path: "/expeditions", label: "All Expeditions" },
  { path: "/expeditions?band=6000", label: "6000m+ Expeditions" },
  { path: "/expeditions?band=8000", label: "8000m+ Expeditions" },
];

function isItemActive(item, pathname) {
  if (item.path === pathname) {
    return true;
  }

  if (item.children?.length) {
    return item.children.some((child) => {
      const childPath = child.path.split(/[?#]/)[0];
      return childPath === pathname;
    });
  }

  return false;
}

export default function Navbar() {
  const { openContactModal } = useContactModal();
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);
  const dropdownCloseTimer = useRef(null);
  const location = useLocation();

  const trekkingLinks = [
    { path: "/trekking", label: "All Treks" },
    ...destinations.slice(0, 5).map((dest) => ({
      path: `/destinations/${dest.slug}`,
      label: dest.title,
    })),
  ];

  const navLinks = [
    ...baseNavLinks.slice(0, 2),
    { path: "/trekking", label: "Trekking", children: trekkingLinks },
    { path: "/activities", label: "Activities", children: activityLinks },
    { path: "/expeditions", label: "Expeditions", children: expeditionLinks },
    ...baseNavLinks.slice(2),
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (y > 100) {
        setVisible(y <= lastScroll.current);
        lastScroll.current = y;
      } else {
        setVisible(true);
        lastScroll.current = y;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownCloseTimer.current) {
        clearTimeout(dropdownCloseTimer.current);
      }
    };
  }, []);

  const handleDesktopDropdownOpen = (path) => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
    }
    setOpenDesktopDropdown(path);
  };

  const handleDesktopDropdownClose = () => {
    dropdownCloseTimer.current = setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 120);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setOpenDesktopDropdown(null);
    setOpenMobileDropdown(null);
  };

  return (
    <Motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/5 py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto min-h-16 sm:min-h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 sm:gap-2 group flex-shrink-0"
          >
            <Motion.span
              whileHover={{ scale: 1.02 }}
              className="font-display text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white group-hover:text-primary-400 transition-colors duration-300 whitespace-nowrap"
            >
              DowntoEarth
            </Motion.span>
            <span className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-primary-500 whitespace-nowrap">
              Adventure
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile, flex on md and up */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-1 justify-center mx-8">
            {navLinks.map((link) => {
              const isActive = isItemActive(link, location.pathname);

              if (!link.children) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenus}
                    className={`relative font-medium text-xs xl:text-sm tracking-wider uppercase transition-colors duration-300 group ${
                      isActive
                        ? "text-primary-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <Motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary-500 to-primary-400"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    ) : (
                      <span className="absolute -bottom-1 left-0 h-px bg-white/0 group-hover:bg-white transition-all duration-300 group-hover:w-full w-0" />
                    )}
                  </Link>
                );
              }

              const isDropdownOpen = openDesktopDropdown === link.path;

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => handleDesktopDropdownOpen(link.path)}
                  onMouseLeave={handleDesktopDropdownClose}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDesktopDropdown((prev) =>
                        prev === link.path ? null : link.path,
                      )
                    }
                    className={`relative inline-flex items-center gap-1 font-medium text-xs xl:text-sm tracking-wider uppercase transition-colors duration-300 group ${
                      isActive
                        ? "text-primary-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isActive ? (
                      <Motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary-500 to-primary-400"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    ) : (
                      <span className="absolute -bottom-1 left-0 h-px bg-white/0 group-hover:bg-white transition-all duration-300 group-hover:w-full w-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <Motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-primary-500/20 bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-2xl p-2 shadow-2xl shadow-primary-500/5"
                      >
                        {link.children.map((child) => {
                          const childPath = child.path.split(/[?#]/)[0];
                          const isChildActive = location.pathname === childPath;
                          return (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={closeMenus}
                              className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                                isChildActive
                                  ? "bg-primary-500/20 text-primary-300 border border-primary-500/30"
                                  : "text-gray-300 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Button - Visible on md and up */}
            <div className="hidden md:block">
              <Motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="button"
                  onClick={openContactModal}
                  className="btn-premium text-xs sm:text-sm tracking-wider uppercase px-3 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap"
                >
                  Plan Your Trip
                </button>
              </Motion.div>
            </div>

            {/* Mobile Hamburger - Visible on md and below */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 sm:p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible on md and below */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-black/98 via-black/95 to-black/90 backdrop-blur-xl border-t border-primary-500/10 overflow-hidden max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 py-4 sm:px-6 sm:py-6 space-y-3 sm:space-y-4 overflow-y-auto max-h-[calc(100vh-160px)]">
              {navLinks.map((link) => {
                const isActive = isItemActive(link, location.pathname);

                if (!link.children) {
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMenus}
                      className={`block px-3 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "text-primary-400 bg-primary-500/10 border border-primary-500/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                }

                const isDropdownOpen = openMobileDropdown === link.path;

                return (
                  <div
                    key={link.path}
                    className="rounded-xl border border-primary-500/15 bg-gradient-to-br from-primary-500/5 to-white/5 overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown((prev) =>
                          prev === link.path ? null : link.path,
                        )
                      }
                      className={`w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "text-primary-400 bg-primary-500/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isDropdownOpen && (
                        <Motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden border-t border-white/5"
                        >
                          <div className="px-2 py-2 space-y-1 bg-white/[0.02]">
                            {link.children.map((child) => {
                              const childPath = child.path.split(/[?#]/)[0];
                              const isChildActive =
                                location.pathname === childPath;
                              return (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={closeMenus}
                                  className={`block rounded-lg px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                                    isChildActive
                                      ? "bg-primary-500/20 text-primary-300 border border-primary-500/30"
                                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile Plan Trip Button */}
              <div className="pt-3 sm:pt-4 border-t border-white/10 mt-2 sm:mt-3">
                <button
                  type="button"
                  onClick={() => {
                    openContactModal();
                    closeMenus();
                  }}
                  className="w-full btn-premium text-sm tracking-wider uppercase"
                >
                  Plan Your Trip
                </button>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}
