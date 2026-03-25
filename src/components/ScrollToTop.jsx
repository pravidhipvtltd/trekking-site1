import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

/**
 * Scrolls to top of page when route changes.
 * Uses Lenis when available for smooth-scroll sites.
 */
export default function ScrollToTop() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // If on expeditions page with query params, scroll to expeditions section instead of top
    if (location.pathname === "/expeditions" && location.search) {
      const element = document.getElementById("expeditions-section");
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { immediate: true });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
    }

    // Otherwise scroll to top
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, lenis]);

  return null;
}
