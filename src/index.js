import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/fonts.css";
import "./index.css";
import reportWebVitals from "./web-vitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
