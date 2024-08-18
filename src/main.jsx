import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";

const value = {
  unstyled: false,
  pt: {},
  ripple: true,
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider value={value}>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
