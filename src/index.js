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

process.env.IMAGES_URL = process.env.PUBLIC_URL + "/Images";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
