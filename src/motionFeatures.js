// framer-motion animation features, loaded on demand by <LazyMotion> in App.js so they
// stay out of the first-paint bundle. domMax keeps every feature the site uses
// (gestures, in-view, exit and layout animations).
import { domMax } from "framer-motion";

export default domMax;
