import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AnimatedPage from "./components/AnimatedPage";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NewsAWS = lazy(() => import("./pages/News/NewsAWS"));
const NewsDataScience = lazy(() => import("./pages/News/NewsDataScience"));
const NewsEnergyUtopia = lazy(() => import("./pages/News/NewsEnergyUtopia"));
const NewsIESCongress = lazy(() => import("./pages/News/NewsIESCongress"));
const NewsGraduation = lazy(() => import("./pages/News/NewsGraduation"));
const NewsIEEESYP = lazy(() => import("./pages/News/NewsIEEESYP"));
const NewsIEEEXtreme = lazy(() => import("./pages/News/NewsIEEEXtreme"));
const NewsInternship = lazy(() => import("./pages/News/NewsInternship"));
const NewsInternshipStart = lazy(
  () => import("./pages/News/NewsInternshipStart"),
);
const NewsList = lazy(() => import("./pages/News/NewsList"));
const NewsSmartClaim = lazy(() => import("./pages/News/NewsSmartClaim"));
const NewsOnboardify = lazy(() => import("./pages/News/NewsOnboardify"));
const NewsRecognition = lazy(() => import("./pages/News/NewsRecognition"));
const NewsTSYP = lazy(() => import("./pages/News/NewsTSYP"));
const OnboardifyDetails = lazy(
  () => import("./pages/Portfolio/OnboardifyDetails"),
);
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const ProLinkDetails = lazy(() => import("./pages/Portfolio/ProLinkDetails"));
const SmartClaimDetails = lazy(
  () => import("./pages/Portfolio/SmartClaimDetails"),
);
const SolarFlowDetails = lazy(
  () => import("./pages/Portfolio/SolarFlowDetails"),
);
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-deep-indigo" />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            }
          />
          <Route
            path="/portfolio"
            element={
              <AnimatedPage>
                <Portfolio />
              </AnimatedPage>
            }
          />
          <Route
            path="/portfolio/smart-claim"
            element={
              <AnimatedPage>
                <SmartClaimDetails />
              </AnimatedPage>
            }
          />
          <Route
            path="/portfolio/solar-flow"
            element={
              <AnimatedPage>
                <SolarFlowDetails />
              </AnimatedPage>
            }
          />
          <Route
            path="/portfolio/onboardify"
            element={
              <AnimatedPage>
                <OnboardifyDetails />
              </AnimatedPage>
            }
          />
          <Route
            path="/portfolio/pro-link"
            element={
              <AnimatedPage>
                <ProLinkDetails />
              </AnimatedPage>
            }
          />
          <Route
            path="/resume"
            element={
              <AnimatedPage>
                <Resume />
              </AnimatedPage>
            }
          />
          <Route
            path="/news"
            element={
              <AnimatedPage>
                <NewsList />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/13"
            element={
              <AnimatedPage>
                <NewsIESCongress />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/12"
            element={
              <AnimatedPage>
                <NewsEnergyUtopia />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/11"
            element={
              <AnimatedPage>
                <NewsAWS />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/1"
            element={
              <AnimatedPage>
                <NewsSmartClaim />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/7"
            element={
              <AnimatedPage>
                <NewsOnboardify />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/2"
            element={
              <AnimatedPage>
                <NewsDataScience />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/3"
            element={
              <AnimatedPage>
                <NewsRecognition />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/4"
            element={
              <AnimatedPage>
                <NewsInternship />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/5"
            element={
              <AnimatedPage>
                <NewsIEEESYP />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/6"
            element={
              <AnimatedPage>
                <NewsInternshipStart />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/8"
            element={
              <AnimatedPage>
                <NewsIEEEXtreme />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/9"
            element={
              <AnimatedPage>
                <NewsTSYP />
              </AnimatedPage>
            }
          />
          <Route
            path="/news/10"
            element={
              <AnimatedPage>
                <NewsGraduation />
              </AnimatedPage>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />
          <Route
            path="*"
            element={
              <AnimatedPage>
                <NotFound />
              </AnimatedPage>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
