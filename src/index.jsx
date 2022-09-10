import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/global-styles.css";
import { AuthProvider } from "./contexts/Auth";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
