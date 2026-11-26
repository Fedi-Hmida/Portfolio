import React from "react";
import App from "./App";
import "./i18n";
import "./assets/css/fonts.css";
import "./index.css";
import { mountApp } from "./mountApp";
import reportWebVitals from "./web-vitals";

mountApp(
  document.getElementById("root"),
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
