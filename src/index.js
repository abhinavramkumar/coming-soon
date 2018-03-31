import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import AppRouter from "./router/AppRouter";
import "./styles/main.css";

const appRoot = document.getElementById("root");
if (appRoot) {
  render(<AppRouter />, appRoot);
}

registerServiceWorker();
