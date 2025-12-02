import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Fonts/Pixeboy.ttf";
import "./Fonts/Poly-Regular.ttf";
import "./Fonts/Prompt.ttf";
import "./Fonts/Puritan.ttf";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga4";

process.env.IMAGES_URL = process.env.PUBLIC_URL + "/Images";
const root = ReactDOM.createRoot(document.getElementById("root"));
ReactGA.initialize("G-R3J0LTW6WF");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
