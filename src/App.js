import { AnimatePresence } from "framer-motion";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AnimatedPage from "./components/AnimatedPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NewsAWS from "./pages/News/NewsAWS";
import NewsDataScience from "./pages/News/NewsDataScience";
import NewsEnergyUtopia from "./pages/News/NewsEnergyUtopia";
import NewsIESCongress from "./pages/News/NewsIESCongress";

import NewsGraduation from "./pages/News/NewsGraduation";
import NewsIEEESYP from "./pages/News/NewsIEEESYP";
import NewsIEEEXtreme from "./pages/News/NewsIEEEXtreme";
import NewsInternship from "./pages/News/NewsInternship";
import NewsInternshipStart from "./pages/News/NewsInternshipStart";
import NewsList from "./pages/News/NewsList";
import NewsOnboardify from "./pages/News/NewsOnboardify";
import NewsRecognition from "./pages/News/NewsRecognition";
import NewsTSYP from "./pages/News/NewsTSYP";
import OnboardifyDetails from "./pages/Portfolio/OnboardifyDetails";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProLinkDetails from "./pages/Portfolio/ProLinkDetails";
import SmartClaimDetails from "./pages/Portfolio/SmartClaimDetails";
import SolarFlowDetails from "./pages/Portfolio/SolarFlowDetails";
import Resume from "./pages/Resume";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
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
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
