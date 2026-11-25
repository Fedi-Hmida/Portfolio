// Loaded by react-scripts before every test file.
import "@testing-library/jest-dom";
import { TextDecoder, TextEncoder } from "util";

// React Router 7 expects these web globals; the jsdom bundled with Jest 27 lacks them.
Object.assign(global, { TextDecoder, TextEncoder });

// jsdom has no matchMedia; report "no preference" for every query.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  });
}

// ScrollToTop calls window.scrollTo, which jsdom does not implement.
window.scrollTo = () => {};

// framer-motion's whileInView needs IntersectionObserver, which jsdom lacks.
// A no-op stub is enough: tests assert on content, not on scroll animations.
if (!global.IntersectionObserver) {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}
