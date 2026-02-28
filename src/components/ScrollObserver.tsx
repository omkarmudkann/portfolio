import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Watches every [data-reveal] element and adds "in-view" when it enters
 * the viewport. Re-runs on route change. Uses rAF so the DOM is fully
 * painted before we query elements.
 */
const ScrollObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver;

    const init = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        // Trigger when 6% of the element is visible, with a small bottom margin
        // so elements reveal a touch before they're fully in frame
        { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
      );

      document.querySelectorAll("[data-reveal]").forEach((el) => {
        // If element is already in view on page load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        } else {
          observer.observe(el);
        }
      });
    };

    // Two rAF calls ensures the browser has committed the layout
    requestAnimationFrame(() => requestAnimationFrame(init));

    return () => observer?.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollObserver;
